import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./games.css"
type Props = {
  numbers: number[];
}; 
const Games:React.FC<Props> = () => {
  return (
    <>
      <Navbar />
      <h2>Hello</h2>
      <Footer />
    </>
  )
}

export default Games