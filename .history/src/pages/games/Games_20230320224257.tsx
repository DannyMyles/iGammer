
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./games.css"
const Games  = () => {

  return (
    <>
      <Navbar />
       <div className="game-container">
         <div className="tiles-container">
            hello
         </div>
         <div className="final-img-container">
          <div className="open-close">
            <span>Image</span>
          </div>
         </div>
         <div className="pal-submit">
            <button>Paypal</button>
            <button>Submit</button>
          </div>
       </div>
      <Footer />
    </>
  )
}

export default Games
