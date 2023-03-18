import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./submitImage.css"
interface SubmProps {
  onSubmit: (image: File) => void;
}

const SubmitImage = ({ onSubmit }: Props) => {
  return (
    <>
    <Navbar />
        <h1>Hello</h1>
    <Footer />
    </>
  )
}

export default SubmitImage
