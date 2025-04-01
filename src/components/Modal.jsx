import PropTypes from "prop-types";

const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-textSecondary bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg relative">
                <button onClick={onClose} className="absolute top-2 right-2">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
