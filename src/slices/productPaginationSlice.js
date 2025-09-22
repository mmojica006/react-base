import { createSlice } from "@reduxjs/toolkit";
import { getProductPagination } from "../actions/productsAction";

export const initialState = {
    products: [], // Lista de productos actuales
    count: 0, //cantidad total de records respecto a la consulta // Total de productos encontrados
    pageIndex: 1, //página inicial  // Página actual
    pageSize: 2, // Cantidad de productos por página
    pageCount: 0, // cantidad de páginas que se estan generando por la poaginación-> suponer q tienes 200 records y quieres q cada página tenga  20 elementos, en total tenemos 10 páginas // Total de páginas disponibles
    loading: false, //valida si se esta procesando si o no // Indicador de carga
    resultByPage: 0, //si tengo 15 registros y quiero 10 por páginas en la 1ra tengo 10 y la 2da 5 // Cantidad de resultados en la página actual
    error: null, // Errores de la petición
    search: null, // Filtro de búsqueda
    precioMax: null, // Filtro de precio máximo
    precioMin: null, // Filtro de precio mínimo
    category: null, // Filtro por categoría
    rating: null, // Filtro por calificación
};

export const productPaginationSlice = createSlice({
    name: "getProductPagination",
    initialState,
    //a nivel local que actualiza la data local quiero un reducer que se encargue de actualizar la data de la búsqueda
    //cada vez que el usuario busque algún producto quiero q el valor de esa búsqueda se quede almacenado en esta variable para que posteriormente en la siguiente búsqueda se mantenga ese filtro
    //búsqueda con múltiple parámetro necesitamos q cada parámetro sea almacenado en la memoria temporal del redux
    //Reducers (acciones síncronas)
    reducers: {
        searchPagination: (state, action) => {
            //Action representa un objeto que te esta enviando
            state.search = action.payload.search; //el componente de REACT, esta capturando en la pantalla ese valor de búsqueda de search, desde el componente de producto se captura y se almancena en seach
            state.pageIndex = 1; //cada vez q se hace la búsqueda resetea el número de página, el pageIndex
        },

        setPageIndex: (state, action) => {
            state.pageIndex = action.payload.pageIndex; //que es lo que me envia el componente de react para que me actualice su componente de estado pageIndex
        },

        updatePrecio: (state, action) => {
            state.precioMax = action.payload.precio[1];
            state.precionMin = action.payload.precio[0];
        },

        resetPagination: (state, action) => {
            //Hay veces q hago búsquedas multiples y quiero reiniciar desde cero
            state.precioMax = null;
            state.precioMin = null;
            state.pageIndex = 1;
            state.search = null;
            state.category = null;
            state.rating = null;
        },

        updateCategory: (state, action) => {
            state.category = action.payload.category;
        },

        updateRating: (state, action) => {
            state.rating = action.payload.rating;
        },
    },
    //Se conecta a un elemento Axios remoto API
    //extraReducers (acciones asíncronas)
    extraReducers: {
        [getProductPagination.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },

        [getProductPagination.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.products = payload.data;
            state.count = payload.count;
            state.pageIndex = payload.pageIndex;
            state.pageSize = payload.pageSize;
            state.pageCount = payload.pageCount;
            state.resultByPage = payload.resultByPage;
            state.error = null;
        },

        [getProductPagination.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { searchPagination, setPageIndex, updatePrecio, resetPagination, updateCategory, updateRating, } = productPaginationSlice.actions;

export const productPaginationReducer = productPaginationSlice.reducer;
