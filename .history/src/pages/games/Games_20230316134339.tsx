import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./games.css"
type Props = {
  imagePath: string;
  rows: number;
  columns: number;
};

type Tile = {
  id: number;
  x: number;
  y: number;
};
const Games = () => {
  return (
    <>
      <Navbar />
      <h2>Hello</h2>
      <Footer />
    </>
  )
}

export default Games
