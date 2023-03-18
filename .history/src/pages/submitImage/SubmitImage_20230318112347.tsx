import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./submitImage.css";
interface SubmitProps {
  onSubmit: (image: File) => void;
}

const SubmitImage = ({ onSubmit }: SubmitProps) => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (image) {
      onSubmit(image);
    }
  };
  return (
    <>
      <Navbar />
      <div className="upload-container">
        <form onSubmit={handleSubmit}>
          <label>
            Upload Image:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          <button className="upload-btn" type="submit">Submit</button>
          {image && (
            <div className="image-preview">
              <img src={URL.createObjectURL(image)} alt="preview" />
            </div>
          )}
        </form>
      </div>

      <Footer />
    </>
  );
};

export default SubmitImage;
