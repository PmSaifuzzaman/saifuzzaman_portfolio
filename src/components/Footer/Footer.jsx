import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaStackOverflow } from "react-icons/fa";


const Footer = () => {
    const facebookUrl = "https://www.facebook.com/pathik7610ice";
    const instagramUrl = "https://www.instagram.com/pmsaifuzzaman/";
    const linkedinUrl = "https://www.linkedin.com/in/saifuzzaman-pathik-61441217b/";
    const gitHubUrl = "https://github.com/PmSaifuzzaman";
    const stackOverflowUrl = "https://stackoverflow.com/users/23028472/pmsaifuzzaman-pathik";
    return (
        <footer className="footer footer-center p-10 bg-gray-700 rounded">
            <nav>
                <div className="grid grid-flow-col gap-4 text-3xl">
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 cursor-pointer">
                        <FaFacebook />
                    </a>
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 cursor-pointer"><FaInstagram /></a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 cursor-pointer"><FaLinkedin /></a>
                    <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 cursor-pointer"><FaGithub /></a>
                    <a href={stackOverflowUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 cursor-pointer"><FaStackOverflow /></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2024 - All right reserved by SAIFUZZAMAN</p>
            </aside>
        </footer>
    );
};

export default Footer;