import aboutImg from "../../assets/images/About_Saifuzzaman.png"


const AboutMe = () => {

    const info = [
        { text: "Years experience", count: "01" },
        { text: "Completed Projects", count: "15" },
        { text: "Completed Course", count: "01" },
      ];

    return (
        <section id="about-section" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My introduction</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                            Hi, I am Saifuzzaman. Right now, I am a front-end developer using the MERN stack, with an emphasis on React. I aspire to work as a full-stack developer. With the goal of advancing my career and having a positive influence on full-stack web development, I want to tackle difficult projects that will test my skills and expertise.
                            </p>
                            <div className="flex ml-5 mt-10 items-center gap-7">
                                {info.map((content) => (
                                    <div key={content.text}>
                                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                            {content.count}
                                            <span className="text-cyan-600">+</span>{" "}
                                        </h3>
                                        <span className="md:text-base text-xs">{content.text}</span>
                                    </div>
                                ))}
                            </div>
                            <br />
                            <br />
                            <a href="../../assets/images/Saifuzzaman_Resume.pdf" download>
                                <button className="btn px-5 rounded-full bg-cyan-400 text-white">Download CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 md:mt-0 flex justify-center items-center">
                        <div className="lg:w-[600px] h-full sm:w-10/12  max-w-md ">
                            <h2 className="mb-1">About_Saifuzzaman.json</h2>
                            <img
                                src={aboutImg}
                                alt=""
                                className="w-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;