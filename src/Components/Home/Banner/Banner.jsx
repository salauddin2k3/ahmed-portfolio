import { Typewriter } from "react-simple-typewriter";
// import animationGif from "../../../../public/ahmedImg1.png"
import { FaFacebook, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Lottie from "lottie-react";
import LottieGif from "../../../../public/typing-lottie.json"


const Banner = () => {
    return (
        <div className="ml-20 mr-28 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-1/2">
                <h2 className="text-white text-7xl font-bold">Salauddin Ahmed</h2>
                <div>
                    <h2 className="text-white font-semibold mt-2 text-3xl">{`I'm`} <span className="text-[#f73378]"><Typewriter
                        words={['Web Developer', 'MERN Stark Developer', 'React-JS Developer']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={120}
                        deleteSpeed={80}
                        delaySpeed={1000}
                    ></Typewriter></span></h2>
                </div>
                <h2 className="text-[#8d8d8d] mt-5 text-2xl">My goal is to excel in web development through innovative <br /> programming and  delivering top-notch solutions.</h2>
                <div className="flex gap-3 mt-8">
                    <div className=" w-fit p-2 rounded-full bg-[#0e76a8]"><FaFacebook className="text-3xl text-white" /></div>
                    <div className=" w-fit p-2 rounded-full bg-[#333333]"><FaGithub className="text-3xl text-white" /></div>
                    <div className=" w-fit p-2 rounded-full bg-[#0e76a8]"><FaLinkedinIn className="text-3xl text-white" /></div>
                    <div className=" w-fit p-2 rounded-full bg-[#333333]"><FaSquareXTwitter className="text-3xl text-white" /></div>
                    <div className=" w-fit p-2 rounded-full bg-[#e94435]"><FaGoogle className="text-3xl text-white" /></div>
                </div>
                <div>
                    <button className="btn bg-[#f73378] border-none text-white text-lg hover:bg-[#f73378] hover:shadow-lg hover:shadow-[#f73378] mt-8">Download My Resume</button>
                </div>
            </div>
            <div className="w-1/2 flex justify-end">
                <div>
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