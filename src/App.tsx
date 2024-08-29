import { useEffect, useState } from "react";
import { fetchImage } from "./services/api";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import { ImageAPI } from "./Types/types";

function App() {
  const [images, setImages] = useState<ImageAPI[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageAPI | null>(null);

  useEffect(() => {
    if (!query) return;
    const getImage = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetchImage(query, page, 9);
        setImages((prev) => [...prev, ...response.results]);
        setTotalPage(response.total_pages);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImage();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (query: string) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleImageClick = (image: ImageAPI) => {
    setModalIsOpen(true);
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div>
        <SearchBar onSubmit={handleSetQuery} />
        <Toaster />
        <ImageGallery items={images} onImageClick={handleImageClick} />
        {error && <ErrorMessage />}
        {page < totalPage && !isLoading && images.length > 0 && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
        {isLoading && <Loader />}
        {selectedImage && (
          <ImageModal
            modalIsOpen={modalIsOpen}
            closeModal={handleCloseModal}
            image={selectedImage}
          />
        )}
      </div>
    </>
  );
}

export default App;
