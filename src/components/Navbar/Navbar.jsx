// import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {

    const handleAboutClick = () => {
        const aboutSection = document.getElementById("about-section");

        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleResumeClick = () => {
        const resumeSection = document.getElementById("resume-section");

        if (resumeSection) {
            resumeSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleContactClick = () => {
        const contactSection = document.getElementById("contact-section");

        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleSkillsClick = () => {
        const skillSection = document.getElementById("skill-section");

        if (skillSection) {
            skillSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleProjectsClick = () => {
        const projectsSection = document.getElementById("projects-section");

        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };




    return (
        <div className="navbar bg-gray-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box space-y-2">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink onClick={handleAboutClick}>About</NavLink></li>
                        <li><NavLink onClick={handleResumeClick}>Resume</NavLink></li>
                        <li><NavLink onClick={handleSkillsClick}>Skills</NavLink></li>
                        <li><NavLink onClick={handleProjectsClick}>Projects</NavLink></li>
                        <li><NavLink onClick={handleContactClick}>Contacts</NavLink></li>


                    </ul>
                </div>
                <Link className="ml-5 text-2xl font-bold">  SAIFU<span className="text-cyan-400">ZZ</span>AMAN </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link onClick={handleAboutClick}>About</Link></li>
                    <li><Link onClick={handleResumeClick}>Resume</Link></li>
                    <li><Link onClick={handleSkillsClick}>Skills</Link></li>
                    <li><Link onClick={handleProjectsClick}>Projects</Link></li>
                    <li><Link onClick={handleContactClick}>Contacts</Link></li>


                </ul>
            </div>
        </div>
    );
};

export default Navbar;