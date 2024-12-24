const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg relative">
                <button onClick={onClose} className="absolute top-2 right-2">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
