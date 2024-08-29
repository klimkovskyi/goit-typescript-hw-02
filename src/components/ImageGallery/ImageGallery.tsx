import { ImageAPI } from "../../Types/types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  items: ImageAPI[];
  onImageClick: (image: ImageAPI) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <div>
      <ul className={s.list}>
        {items.map((image) => (
          <li className={s.item} key={image.id}>
            <ImageCard onClick={onImageClick} image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
