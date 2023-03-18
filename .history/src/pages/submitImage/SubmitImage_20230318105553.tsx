import { useState } from "react";
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./submitImage.css"

interface SubmitImageProps {
  className?: string;
  onSubmit: (file: File) => void;
}
const SubmitImage = ({ className, onSubmit }: SubmitImageProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      onSubmit(selectedFile);
    }
  };
  return (
    <>
    <Navbar />
        
    <div className={className} select>
      <label htmlFor="fileInput">Choose an image to upload:</label>
      <input id="fileInput" type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <img src={URL.createObjectURL(selectedFile)} alt="SelectedImage" />
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
    <Footer />
    </>
  )
}

export default SubmitImage
