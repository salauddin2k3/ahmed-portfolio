import { Typewriter } from "react-simple-typewriter";
// import animationGif from "../../../../public/ahmedImg1.png"
import { FaFacebook, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Lottie from "lottie-react";
import LottieGif from "../../../../public/typing-lottie.json"
import { Link } from "react-router-dom";
import myResume from "../../../../public/resume.pdf"


const Banner = () => {
    return (
        <div className="lg:ml-20 lg:mr-28 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
                <h2 className="text-white text-5xl text-center lg:text-left lg:text-7xl font-bold">Salauddin Ahmed</h2>
                <div>
                    <h2 className="text-white font-semibold mt-2 text-center lg:text-left text-xl lg:text-3xl">{`I'm`} <span className="text-[#f73378]"><Typewriter
                        words={['Web Developer', 'MERN Stark Developer', 'React-JS Developer']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={120}
                        deleteSpeed={80}
                        delaySpeed={1000}
                    ></Typewriter></span></h2>
                </div>
                <h2 className="text-[#8d8d8d] mt-5 text-center lg:text-left lg:text-2xl">My goal is to excel in web development through innovative <br /> programming and  delivering top-notch solutions.</h2>
                <div className="flex justify-center lg:justify-start gap-3 mt-8">
                    <Link to="https://www.facebook.com/salauddin2k3" target="__blank">
                        <div className=" w-fit p-2 rounded-full bg-[#0e76a8]"><FaFacebook className="text-2xl lg:text-3xl text-white" /></div>
                    </Link>
                    <Link to="https://github.com/salauddin2k3" target="__blank">
                        <div className=" w-fit p-2 rounded-full bg-[#333333]"><FaGithub className="text-2xl lg:text-3xl text-white" /></div>
                    </Link>
                    <Link to="https://www.linkedin.com/in/salauddin2k3/" target="__blank">
                        <div className=" w-fit p-2 rounded-full bg-[#0e76a8]"><FaLinkedinIn className="text-2xl lg:text-3xl text-white" /></div>
                    </Link>
                    <Link to="https://x.com/salauddin2k3" target="__blank">
                        <div className=" w-fit p-2 rounded-full bg-[#333333]"><FaSquareXTwitter className="text-2xl lg:text-3xl text-white" /></div>
                    </Link>
                    <Link to="mailto:salauddin2k3@gmail.com" target="__blank">
                        <div className=" w-fit p-2 rounded-full bg-[#e94435]"><FaGoogle className="text-2xl lg:text-3xl text-white" /></div>
                    </Link>
                </div>
                <a href={myResume} download="Ahmed_Resume.pdf">
                    <div className="flex items-center justify-center lg:justify-start">
                        <button className="btn bg-[#f73378] border-none text-white lg:text-lg hover:bg-[#f73378] hover:shadow-lg hover:shadow-[#f73378] mt-8">Download My Resume</button>
                    </div>
                </a>
            </div>
            <div className="lg:w-1/2 px-2 flex justify-end bg-[#1d2026]">
                <div className="">
                    {/* <img className="w-96 " src={animationGif} alt="" /> */}
                    <Lottie
                        animationData={LottieGif}
                        loop={true}
                    ></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Banner;