import { Link, NavLink } from "react-router-dom";



const Navbar = () => {

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




    return (
        <div className="navbar bg-gray-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box space-y-2">
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink onClick={handleResumeClick}>Resume</NavLink></li>
                        <li><NavLink>Skills</NavLink></li>
                        <li><NavLink>Projects</NavLink></li>
                        <li><NavLink onClick={handleContactClick}>Contacts</NavLink></li>

                        
                    </ul>
                </div>
                <Link className="ml-5 text-2xl font-bold">SAIFU<span className="text-cyan-400">ZZ</span>AMAN</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link onClick={handleResumeClick}>Resume</Link></li>
                    <li><Link>Skills</Link></li>
                    <li><Link>Projects</Link></li>
                    <li><Link onClick={handleContactClick}>Contacts</Link></li>

                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;