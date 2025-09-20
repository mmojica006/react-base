import React from "react";

const MinimalAlertTemplate = ({ style, options, message, close }) => {
    return (
        <div
            style={{
                ...style,
                backgroundColor: "#f8f9fa",
                color: "#212529",
                border: "1px solid #ced4da",
                borderRadius: "4px",
                padding: "10px 15px",
                fontSize: "14px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                zIndex: 9999
            }}
        >
            <span>{message}</span>
            <button
                onClick={close}
                style={{
                    float: "right",
                    background: "transparent",
                    border: "none",
                    fontWeight: "bold",
                    fontSize: "16px",
                    cursor: "pointer"
                }}
            >
                ×
            </button>
        </div>
    );
};

export default MinimalAlertTemplate;
