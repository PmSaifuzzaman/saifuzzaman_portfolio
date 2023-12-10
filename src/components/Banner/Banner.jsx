import banner from "../../assets/images/hero.png"

const Banner = () => {

    const social_media = [
        "logo-instagram",
        "logo-facebook",
        "logo-linkedin",
        "logo-twitter",
    ];

    return (
        <section
            id="home"
            className="min-h-screen flex py-10 md:flex-row flex-col items-center"
        >
            <div className="flex-1 flex items-center justify-center h-full">
                <img src={banner} alt="" className="md:w-11/12 h-full object-cover" />
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
                    <button className="btn px-5 rounded-full mt-8 bg-cyan-400 text-white">Contact Me</button>
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                        {social_media?.map((icon) => (
                            <div
                                key={icon}
                                className="text-gray-600 hover:text-white cursor-pointer "
                            >
                                <ion-icon name={icon}></ion-icon>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;