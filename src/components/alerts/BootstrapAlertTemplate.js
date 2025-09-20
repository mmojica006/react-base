
const BootstrapAlertTemplate = ({ style, options, message, close }) => {
    const type = {
        info: "primary",
        success: "success",
        error: "danger",
    }[options.type || "info"];

    return (
        <div className={`alert alert-${type} alert-dismissible fade show`} role="alert" style={{ ...style, marginBottom: "1rem", zIndex: 9999 }} >
            {message}
            <button
                type="button"
                className="btn-close"
                onClick={close}
                aria-label="Close"
            ></button>
        </div>
    );
};

export default BootstrapAlertTemplate;
