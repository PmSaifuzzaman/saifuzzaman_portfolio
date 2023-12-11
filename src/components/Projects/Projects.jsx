import project1 from "../../assets/projects/blissful.png"
import project2 from "../../assets/projects/autozone.png"
import project3 from "../../assets/projects/food.png"
import project_person from "../../assets/images/project_person1.png"



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination,autoplay } from "swiper";



const Projects = () => {

    const projects = [
        {
            img: project1,
            name: "MERN Stack BlissfullMatch Matrimony Website",
            github_link: "https://github.com/PmSaifuzzaman/blissfulMatch-clientside",
            live_link: "https://blissfulmatch-31a41.web.app/",
        },
        {
            img: project2,
            name: "Full Stack Automotive Brand Shop Website",
            github_link: "https://github.com/PmSaifuzzaman/autozone-clientside",
            live_link: "https://autozone-d27bc.web.app/",
        },
        {
            img: project3,
            name: "Full Stack Food Sharing Charity Website",
            github_link: "https://github.com/PmSaifuzzaman/food-sharing-community-clientside",
            live_link: "https://food-sharing-community.web.app/",
        },
        // {
        //   img: project4,
        //   name: "React Nav",
        //   github_link:
        //     "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
        //   live_link: "https://reacttailwindnavbar.netlify.app",
        // },
        // {
        //   img: project5,
        //   name: "Vue Country",
        //   github_link: "https://github.com/Sridhar-C-25",
        //   live_link: "https://vuecountry05.netlify.app",
        // },
    ];

    return (
        <section id="projects" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Projects</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
            </div>
            <br />
            <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
                <div className="lg:w-2/3 w-full">
                    <Swiper
                        slidesPerview={1.2}
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                    // modules={[Pagination, Autoplay]}
                    >
                        {projects.map((project_info, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                                    <img src={project_info.img} alt="" className="rounded-lg" />
                                    <h3 className="text-xl my-4">{project_info.name}</h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project_info.github_link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-md"
                                        >
                                            Github
                                        </a>
                                        <a
                                            href={project_info.live_link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-md"
                                        >
                                            Live Site
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="lg:block hidden">
                    <img src={project_person} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Projects;