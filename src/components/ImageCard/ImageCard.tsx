import { ImageAPI } from "../../Types/types";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  onClick: (image: ImageAPI) => void;
  image: ImageAPI;
}

const ImageCard: React.FC<ImageCardProps> = ({ onClick, image }) => {
  return (
    <div className={s.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
