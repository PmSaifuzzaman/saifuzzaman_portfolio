import banner from "../../assets/images/pathik.png"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaStackOverflow } from "react-icons/fa";


const Banner = () => {
    const facebookUrl = "https://www.facebook.com/pathik7610ice";
    const instagramUrl = "https://www.instagram.com/pmsaifuzzaman/";
    const linkedinUrl = "https://www.linkedin.com/in/saifuzzaman-pathik-61441217b/";
    const gitHubUrl = "https://github.com/PmSaifuzzaman";
    const stackOverflowUrl = "https://stackoverflow.com/users/23028472/pmsaifuzzaman-pathik";

    const handleContactClick = () => {
        const contactSection = document.getElementById("contact-section");
    
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
      };


    return (
        <section
            // id="home"
            id="banner-section"
            className="min-h-screen flex md:flex-row flex-col items-center"
        >
            <div className="flex-1 flex items-center justify-center ">
                <img src={banner} alt="" className="w-80 rounded-full" />
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-400 md:text-6xl text-5xl">
                            Hello!
                            <br />
                        </span>
                         My Name is SAIFU<span className="text-cyan-400">ZZ</span>AMAN
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                        MERN Stack Developer
                    </h4>
                    <button className="btn px-5 rounded-full mt-8 bg-cyan-400 text-white" onClick={handleContactClick}>Contact Me</button>
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 ">
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 cursor-pointer">
                            <FaFacebook />
                        </a>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 cursor-pointer"><FaInstagram /></a>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 cursor-pointer"><FaLinkedin /></a>
                        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 cursor-pointer"><FaGithub /></a>
                        <a href={stackOverflowUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 cursor-pointer"><FaStackOverflow /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;