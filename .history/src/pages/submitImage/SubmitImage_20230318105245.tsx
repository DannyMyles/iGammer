import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./submitImage.css"

const SubmitImage = () => {
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
        <h1>Hello</h1>
    <Footer />
    </>
  )
}

export default SubmitImage
