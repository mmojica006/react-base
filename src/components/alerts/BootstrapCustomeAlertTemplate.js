import React from "react";
import {
    FaCheckCircle,
    FaExclamationCircle,
    FaInfoCircle,
} from "react-icons/fa";

const BootstrapCustomeAlertTemplate = ({ style, options, message, close }) => {
    const typeMap = {
        info: {
            className: "alert-primary",
            icon: <FaInfoCircle className="me-2" />,
        },
        success: {
            className: "alert-success",
            icon: <FaCheckCircle className="me-2" />,
        },
        error: {
            className: "alert-danger",
            icon: <FaExclamationCircle className="me-2" />,
        },
    };

    const alertType = options.type || "info";
    const { className, icon } = typeMap[alertType];

    return (
        <div className={`alert ${className} alert-dismissible fade show d-flex align-items-center shadow-sm`} role="alert" style={{ ...style, padding: "0.75rem 1rem", fontSize: "1rem", zIndex: 9999, }} > {icon}
            <div className="flex-grow-1">{message}</div>
            <button
                type="button"
                className="btn-close"
                aria-label="Cerrar alerta"
                onClick={close}
            ></button>
        </div>
    );
};

export default BootstrapCustomeAlertTemplate;
