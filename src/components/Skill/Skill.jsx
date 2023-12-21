import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiBootstrap, SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";

{/* <ion-icon name="logo-nodejs"></ion-icon> */}


const Skill = () => {

    const skills = [
        {
            logo: <FaHtml5></FaHtml5>,
            level: "Advance",
            count: 95,
        },
        {
            logo: <FaCss3></FaCss3>,
            level: "Expert",
            count: 90,
        },
        {
            logo: <SiTailwindcss />,
            level: "Advance",
            count: 85,
        },
        {
            logo: <SiBootstrap />,
            level: "Intermediate",
            count: 80,
        },
        {
            logo: <SiFirebase />,
            level: "Intermediate",
            count: 85,
        },
        {
            logo: <IoLogoJavascript />,
            level: "Intermediate",
            count: 75,
        },
        {
            logo: <FaReact></FaReact>,
            level: "Intermediate",
            count: 80,
        },
        {
            logo: <FaNodeJs></FaNodeJs>,
            level: "Beginner",
            count: 40,
        },
        {
            logo: <SiExpress />,
            level: "Beginner",
            count: 40,
        },
        {
            logo: <SiMongodb />,
            level: "Beginner",
            count: 60,
        },
    ];

    return (
        <section id="skill-section" className="py-10 bg-gray-800 relative">
            <div className=" text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Skills</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">The technologies that I have experience with</p>
                <div className=" flex items-center justify-center mt-12 gap-10 flex-wrap">
                    {skills?.map((skill, i) => (
                        <div
                            key={i}
                            className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
                        >
                            <div
                                style={{
                                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                                }}
                                className="w-32 h-32 flex items-center justify-center rounded-full"
                            >
                                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                                    
                                    {
                                       skill.logo
                                    }
                                    
                                </div>
                            </div>
                            <p className="text-xl mt-3 font-semibold">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;