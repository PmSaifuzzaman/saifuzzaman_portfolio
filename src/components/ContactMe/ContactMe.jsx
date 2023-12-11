import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactMe = () => {

    const contact_info = [
        { logo: <FaEnvelope />, text: "pmsaifuzzaman@gmail.com" },
        { logo: <FaWhatsapp />, text: "+880 1725889075" },
        {
            logo: <FaLocationDot />,
            text: "Kushtia, Dhaka, Bangladesh",
        },
    ];

    return (
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    Contact <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

                <div
                    className="mt-10 flex md:flex-row flex-col
                    gap-6 max-w-5xl bg-gray-700 md:p-6 p-2 rounded-lg mx-auto"
                >
                    <form className="flex flex-col flex-1 gap-5">
                        
                        <input type="text" placeholder="your Name" className="input input-bordered w-full bg-gray-600" />
                        <input type="email" placeholder="Your Email Address" className="input input-bordered w-full bg-gray-600" />
                        <textarea className="textarea bg-gray-600" placeholder="Your Message" rows={7}></textarea>
                        {/* <textarea placeholder="Your Message" rows={10}></textarea> */}
                        <button className="btn px-5 rounded-full mt-8 bg-cyan-400 text-white">Send Message</button>
                    </form>
                    <div className="flex flex-col  gap-7 ">
                        {contact_info.map((contact, i) => (
                            <div
                                key={i}
                                className="flex flex-row  
                                text-left gap-4 flex-wrap items-center"
                            >
                                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                    {
                                        contact.logo
                                    }
                                </div>
                                <p className="md:text-base text-sm  break-words">
                                    {contact.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;