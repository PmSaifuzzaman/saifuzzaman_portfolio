import { FaGraduationCap } from "react-icons/fa";


const Resume = () => {
    return (
        <>
            <div className="text-center mt-8">
                <h2 className="text-4xl font-semibold">My <span className="text-cyan-400">Resume</span></h2>
                <p className="text-gray-400 mt-3 text-lg">A Summary of my Academic Journey</p>
            </div>
            <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                <div className="card  bg-gray-700 ">
                    <div className="card-body">
                        <h2 className="card-title"> <FaGraduationCap className="text-4xl mr-2"></FaGraduationCap> M.Sc in Information & Communication Technology</h2>
                        <p>Passing year : 2022</p>
                        <p>Session : <span className="font-semibold">2020-2021</span></p>
                        <p>Islamic University, Bangladesh</p>
                    </div>
                </div>
                <div className="card  bg-gray-700 ">
                    <div className="card-body">
                        <h2 className="card-title"> <FaGraduationCap className="text-4xl mr-2"></FaGraduationCap> B.Sc in Information & Communication Technology</h2>
                        <p>Passing year : 2020</p>
                        <p>Session : <span className="font-semibold">2016-2017</span></p>
                        <p>Islamic University, Bangladesh</p>
                    </div>
                </div>
                <div className="card  bg-gray-700 ">
                    <div className="card-body">
                        <h2 className="card-title"> <FaGraduationCap className="text-4xl mr-2"></FaGraduationCap>  Higher Secondary Certificate in Science Group</h2>
                        <p>Passing year : 2016</p>
                        <p>Session : <span className="font-semibold">2014-2015</span></p>
                        <p>Sheikhpara Dukhi Mahmud College, Jhenidah, Bangladesh</p>
                    </div>
                </div>
                <div className="card  bg-gray-700 ">
                    <div className="card-body">
                        <h2 className="card-title"> <FaGraduationCap className="text-4xl mr-2"></FaGraduationCap>  Secondary School Certificate in Science Group</h2>
                        <p>Passing year : 2014</p>
                        <p>Session : <span className="font-semibold">2012-2013</span></p>
                        <p>Basantapur Secondary School, Jhenidah, Bangladesh</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;