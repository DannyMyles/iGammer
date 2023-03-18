import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./submitImage.css"
interface SubmitProps {
  onSubmit: (image: File) => void;
}

const SubmitImage = ({ onSubmit }: SubmitProps) => {
  return (
    <>
    <Navbar />
        <h1>Hello</h1>
    <Footer />
    </>
  )
}

export default SubmitImage
