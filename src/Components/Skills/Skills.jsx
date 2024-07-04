import Lottie from "lottie-react";
import skillLottie from "../../../public/skills-lottie.json"
import { MdOutlineMonitor } from "react-icons/md";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { HiLightningBolt } from "react-icons/hi";


const Skills = () => {
    return (
        <div className="text-white">
            <h2 className="text-5xl text-center mt-28 font-bold">Technologies that I know</h2>
            <div className="mt-20 flex gap-20">
                <div className="w-1/2 flex items-center justify-center">
                    <Lottie
                        animationData={skillLottie}
                        loop={true}
                        className="w-96"
                    ></Lottie>
                </div>
                <div className="w-1/2">
                    <div className="flex items-center justify-center gap-3">
                        <MdOutlineMonitor className="text-4xl text-[#f73378]" />
                        <h2 className="text-4xl font-bold">Frontend Project Development</h2>
                    </div>
                    {/* Logos */}
                    <div className="mt-8 flex justify-center gap-6">
                        <div className="tooltip" data-tip="HTML5"><FaHtml5 className="text-6xl text-[#e34f26]" /></div>
                        <div className="tooltip" data-tip="CSS3"><IoLogoCss3 className="text-6xl text-[#1472b7]" /></div>
                        <div className="tooltip" data-tip="Tailwind"><RiTailwindCssFill className="text-6xl text-[#1cc0cd]" /></div>
                        <div className="tooltip" data-tip="React Js"><FaReact className="text-6xl text-[#6cd6f3]" /></div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 ml-6 mt-6">
                            <HiLightningBolt className="text-xl text-[#f73378]" />
                            <h2 className="text-[#8d8d8d] text-2xl">Building responsive web front-end using React.</h2>
                        </div>
                        <div className="flex items-center gap-2 ml-6 mt-6">
                            <HiLightningBolt className="text-xl text-[#f73378]" />
                            <h2 className="text-[#8d8d8d] text-2xl">Focus on creating dynamic and interactive user interfaces.</h2>
                        </div>
                        <div className="flex items-center gap-2 ml-6 mt-6">
                            <HiLightningBolt className="text-xl text-[#f73378]" />
                            <h2 className="text-[#8d8d8d] text-2xl">Using Tailwind, I build sleek web interfaces quickly.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;