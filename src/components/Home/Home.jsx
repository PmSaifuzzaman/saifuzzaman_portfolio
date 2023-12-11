import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Resume from "../Resume/Resume";
import Skill from "../Skill/Skill";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Resume></Resume>
            <Skill></Skill>
        </div>
    );
};

export default Home;