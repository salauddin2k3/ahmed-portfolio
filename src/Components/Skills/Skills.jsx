import Lottie from "lottie-react";
import skillLottie from "../../../public/skills-lottie.json";
import teaCodeLottie from "../../../public/tea-code-lottie.json";
import toolLottie from "../../../public/web-tool-lottie.json";
import { MdOutlineMonitor } from "react-icons/md";
import { FaFigma, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { HiLightningBolt } from "react-icons/hi";
import { SiExpress, SiNpm } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";


const Skills = () => {
    return (
        <div className="text-white">
            <h2 className="text-3xl lg:text-5xl text-center mt-16 lg:mt-28 font-bold">Technologies that I know</h2>

            {/* ----------------First--------------------- */}

            <div className="mt-4 lg:mt-20 flex flex-col lg:flex-row gap-10 lg:gap-20">
                <div className="lg:w-1/2 flex items-center justify-center">
                    <Lottie
                        animationData={skillLottie}
                        loop={true}
                        className="w-56 lg:w-96"
                    ></Lottie>
                </div>
                <div className="lg:w-1/2">
                    <div className="flex items-center justify-center gap-3">
                        <MdOutlineMonitor className="text-xl lg:text-4xl text-[#f73378]" />
                        <h2 className="text-base lg:text-4xl font-bold">Frontend Project Development</h2>
                    </div>
                    {/* Logos */}
                    <div className="mt-8 flex justify-center gap-6">
                        <div className="tooltip" data-tip="HTML5"><FaHtml5 className="text-4xl lg:text-6xl text-[#e34f26]" /></div>
                        <div className="tooltip" data-tip="CSS3"><IoLogoCss3 className="text-4xl lg:text-6xl text-[#1472b7]" /></div>
                        <div className="tooltip" data-tip="Tailwind"><RiTailwindCssFill className="text-4xl lg:text-6xl text-[#1cc0cd]" /></div>
                        <div className="tooltip" data-tip="React Js"><FaReact className="text-4xl lg:text-6xl text-[#6cd6f3]" /></div>
                    </div>
                    <div>
                        <div className="flex lg:items-center gap-2 ml-6 mt-6">
                            <div><HiLightningBolt className="text-lg lg:text-xl text-[#f73378]" /></div>
                            <h2 className="text-[#8d8d8d] lg:text-2xl">Building responsive web front-end using React.</h2>
                        </div>
                        <div className="flex lg:items-center gap-2 ml-6 mt-6">
                            <div><HiLightningBolt className="text-lg lg:text-xl text-[#f73378]" /></div>
                            <h2 className="text-[#8d8d8d] lg:text-2xl">Focus on creating dynamic and interactive user interfaces.</h2>
                        </div>
                        <div className="flex lg:items-center gap-2 ml-6 mt-6">
                            <div><HiLightningBolt className="text-lg lg:text-xl text-[#f73378]" /></div>
                            <h2 className="text-[#8d8d8d] lg:text-2xl">Using Tailwind, I build sleek web interfaces quickly.</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------Second------------- */}

            <div className="mt-14 lg:mt-36 flex flex-col-reverse lg:flex-row gap-10 lg:gap-20">
                <div className="lg:w-1/2">
                    <div className="flex items-center justify-center gap-3">
                        <MdOutlineMonitor className="text-xl lg:text-4xl text-[#f73378]" />
                        <h2 className="text-base lg:text-4xl font-bold">MERN Stack Web Development</h2>
                    </div>
                    {/* Logos */}
                    <div className="mt-8 flex justify-center gap-6">
                        <div className="tooltip" data-tip="React Js"><FaReact className="text-4xl lg:text-6xl text-[#6cd6f3]" /></div>
                        <div className="tooltip" data-tip="Node Js"><FaNodeJs className="text-4xl lg:text-6xl text-[#59a149]" /></div>
                        <div className="tooltip" data-tip="Express Js"><SiExpress className="text-4xl lg:text-6xl text-[#f6e01f]" /></div>
                        <div className="tooltip" data-tip="Mongodb"><BiLogoMongodb className="text-4xl lg:text-6xl text-[#439744]" /></div>
                    </div>
                    <div>
                        <div className="flex  gap-2 ml-6 mt-6">
                            <div><HiLightningBolt className="text-lg lg:text-xl text-[#f73378]" /></div>
                            <h2 className="text-[#8d8d8d] lg:text-2xl">As a MERN stack developer, I specialize in building web applications using MongoDB, Express.js, React.js, and Node.js.</h2>
                        </div>
                        <div className="flex  gap-2 ml-6 mt-6">
                            <div><HiLightningBolt className="text-lg lg:text-xl text-[#f73378]" /></div>
                            <h2 className="text-[#8d8d8d] lg:text-2xl">Using Node.js and Express.js, I implement server-side logic and middleware to handle requests and responses efficiently.</h2>
                        </div>
                        <div className="flex  gap-2 ml-6 mt-6">
                            <div><HiLightningBolt className="text-lg lg:text-xl text-[#f73378]" /></div>
                            <h2 className="text-[#8d8d8d] lg:text-2xl">With a passion for continuous learning, I actively explore new tools and frameworks to enhance my MERN stack development skills.</h2>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center">
                    <Lottie
                        animationData={teaCodeLottie}
                        loop={true}
                        className="w-56 lg:w-96 bg-gray-200 rounded-md"
                    ></Lottie>
                </div>
            </div>

            {/* ----------------Third--------------------- */}

            <div className="mt-14 lg:mt-36 flex flex-col lg:flex-row gap-10 lg:gap-20">
                <div className="lg:w-1/2 flex items-center justify-center">
                    <Lottie
                        animationData={toolLottie}
                        loop={true}
                        className="w-56 lg:w-96"
                    ></Lottie>
                </div>
                <div className="lg:w-1/2">
                    <div className="flex items-center justify-center gap-3">
                        <MdOutlineMonitor className="text-xl lg:text-4xl text-[#f73378]" />
                        <h2 className="text-base lg:text-4xl font-bold">Another Technologies & Tools</h2>
                    </div>
                    {/* Logos */}
                    <div className="mt-8 flex justify-center gap-6">
                        <div className="tooltip" data-tip="Github"><FaGithub className="text-4xl lg:text-6xl text-white"/></div>
                        <div className="tooltip" data-tip="Firebase"><IoLogoFirebase className="text-4xl lg:text-6xl text-[#ee7e0d]"/></div>
                        <div className="tooltip" data-tip="NPM"><SiNpm className="text-4xl lg:text-6xl text-[#dd2c35]"/>                        </div>
                        <div className="tooltip" data-tip="Figma"><FaFigma className="text-4xl lg:text-6xl text-[#1472b7]"/></div>
                    </div>
                    <div>
                        <div className="flex lg:items-center gap-2 ml-6 mt-6">
                            <div><HiLightningBolt className="text-lg lg:text-xl text-[#f73378]" /></div>
                            <h2 className="text-[#8d8d8d] lg:text-2xl">Building responsive web front-end using React.</h2>
                        </div>
                        <div className="flex lg:items-center gap-2 ml-6 mt-6">
                            <div><HiLightningBolt className="text-lg lg:text-xl text-[#f73378]" /></div>
                            <h2 className="text-[#8d8d8d] lg:text-2xl">Focus on creating dynamic and interactive user interfaces.</h2>
                        </div>
                        <div className="flex lg:items-center gap-2 ml-6 mt-6">
                            <div><HiLightningBolt className="text-lg lg:text-xl text-[#f73378]" /></div>
                            <h2 className="text-[#8d8d8d] lg:text-2xl">Using Tailwind, I build sleek web interfaces quickly.</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;