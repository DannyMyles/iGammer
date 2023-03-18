import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./home.css"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div>
          <button>Submit Image</button>
        </div>
        <div className="first-cont">
          <h1>LET THE GAME BEGIN</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
