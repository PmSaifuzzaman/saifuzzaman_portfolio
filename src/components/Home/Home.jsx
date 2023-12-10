import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;