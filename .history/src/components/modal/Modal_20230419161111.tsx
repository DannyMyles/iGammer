import "./modal.css";
const Modal = ({ setIsEditModalOpen, children }:any) => {
  return (
    <div className="modalBackground">
      <div className="modal">
        <div className="cancelIcon">
          <button
            onClick={()=> setIsEditModalOpen(true)}
          >
            <img src="./assets/images/close.svg" alt="close"/>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;