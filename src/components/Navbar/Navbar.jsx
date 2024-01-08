// import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {

    const [isSticky, setSticky] = useState(false);

    const handleHomeClick = () => {
        const bannerSection = document.getElementById("banner-section");

        if (bannerSection) {
            bannerSection.scrollIntoView({ behavior: "smooth" });
        }
    };
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

    // Sticky navbar code

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className={`navbar ${isSticky ? 'sticky fixed z-10 top-0 bg-gray-800' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="flex flex-col text-gray-800 sm:bg-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box space-y-2">
                        <li className="hover:text-cyan-400"><NavLink onClick={handleHomeClick}>Home</NavLink></li>
                        <li className="hover:text-cyan-400"><NavLink onClick={handleAboutClick}>About</NavLink></li>
                        <li className="hover:text-cyan-400"><NavLink onClick={handleResumeClick}>Resume</NavLink></li>
                        <li className="hover:text-cyan-400"><NavLink onClick={handleSkillsClick}>Skills</NavLink></li>
                        <li className="hover:text-cyan-400"><NavLink onClick={handleProjectsClick}>Projects</NavLink></li>
                        <li className="hover:text-cyan-400"><NavLink onClick={handleContactClick}>Contacts</NavLink></li>


                    </ul>
                </div>
                <Link className="ml-5 text-2xl font-bold">  SAIFU<span className="text-cyan-400">ZZ</span>AMAN </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="flex gap-7 items-center pr-10 px-1 ">

                    <li className="hover:text-cyan-400"><Link onClick={handleHomeClick}>Home</Link></li>
                    <li className="hover:text-cyan-400"><Link onClick={handleAboutClick}>About</Link></li>
                    <li className="hover:text-cyan-400"><Link onClick={handleResumeClick}>Resume</Link></li>
                    <li className="hover:text-cyan-400"><Link onClick={handleSkillsClick}>Skills</Link></li>
                    <li className="hover:text-cyan-400"><Link onClick={handleProjectsClick}>Projects</Link></li>
                    <li className="hover:text-cyan-400"><Link onClick={handleContactClick}>Contacts</Link></li>


                </ul>
            </div>
        </div>
    );
};

export default Navbar;