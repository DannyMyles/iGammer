import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./submitImage.css"
interface Props {
  onSubmit: (image: File) => void;
}

const SubmitImage = ({ onSubmit }: ) => {
  return (
    <>
    <Navbar />
        <h1>Hello</h1>
    <Footer />
    </>
  )
}

export default SubmitImage
