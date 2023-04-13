import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./submitImage.css";
import { useUploadImageMutation } from "../../app/services";
import { useAuth } from "../../hooks";

const SubmitImage = () => {
  const [image, setImage] = useState<FormData>(new FormData()); //store image in state
  const [filename, setFileName] = useState<File>(); // enables sharing of file property details including name
  const [previewUrl, setPreviewUrl] = useState(""); // enable image preview

  const auth = useAuth();
  const id = auth.user?.id;

  const [uploadImage] = useUploadImageMutation();
  const handleChangeImage = (e: any) => {
    e.preventDefault();
    const imagefile = e.target.files[0];
    const formData = new FormData();
    formData.append("file", imagefile, imagefile.name);

    setImage(formData);
    if (e.target.files) {
      setFileName(e.target.files[0]);
      setPreviewUrl(URL.createObjectURL(imagefile));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const uploadedImage = await uploadImage({ id, image }).unwrap();
      console.log("Image upload response", uploadedImage);
    } catch (error) {
      console.log("Error", error);
    }
  };

  // const navigateToGames = () => {
  //   navigate("/Games");
  // };
  return (
    <>
      <Navbar />
      <div className="upload-container">
        <form onSubmit={handleSubmit}>
          <label>
            Upload Image:
            <input type="file" accept="image/*" onChange={handleChangeImage} />
          </label>
          <button className="upload-btn" type="submit">
            Submit
          </button>
          {previewUrl && (
            <div className="image-preview">
              <img src={previewUrl} alt="preview" />
              <h4>{filename && `${filename.name} - ${filename.type}`} </h4>
            </div>
          )}
        </form>
      </div>

      <Footer />
    </>
  );
};

export default SubmitImage;
