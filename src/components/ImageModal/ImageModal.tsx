import { ImageAPI } from "../../Types/types";
import s from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  image: ImageAPI;
}

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  image,
}) => {
  return (
    <div>
      <Modal
        className={s.modal}
        overlayClassName={s.overlay}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {image && (
          <div className={s.imageContainer}>
            <img
              className={s.image}
              src={image.urls.regular}
              alt={image.alt_description}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
