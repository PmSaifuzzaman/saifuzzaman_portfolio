import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
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
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;