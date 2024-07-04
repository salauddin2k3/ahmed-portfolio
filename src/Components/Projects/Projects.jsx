import { Link } from "react-router-dom";
import redAidBanner from "../../../public/red-aid-banner.png"
import infinityCareBanner from "../../../public/infinity-care-banner.png"
import paradiseBanner from "../../../public/paradise-of-earth-banner.png"

const Projects = () => {
    return (
        <div className="mx-3">
            <div className="text-white">
                <h2 className="text-3xl lg:text-5xl text-center mt-16 lg:mt-40 font-bold">Recent projects that I have built</h2>
                <div className="mt-28 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-evenly">

                    {/* Card 1 */}
                    <div className="card glass w-full lg:w-96 hover:shadow-lg hover:shadow-[#f73378]">
                        <figure>
                            <img
                                src={redAidBanner}
                                alt="red-aid" />
                        </figure>
                        <div className="card-body">
                            <h2 className="mt-0 card-title text-3xl"><span className="text-red-500">Red</span> Aid</h2>
                            <p>Connecting donors with those in need, Platform makes blood donation easy and impactful. Join us in saving lives with every donation.</p>
                            <div>
                                <h2 className="text-xl font-bold text-[#f73378]">Features:</h2>
                                <li>Discover Volunteer Opportunities.</li>
                                <li>Connect with Organizations.</li>
                                <li>Community Engagement.</li>
                            </div>
                            <div className="mt-1">
                                <h2 className="text-xl font-bold text-[#f73378]">Technology Stack:</h2>
                                <li>ReactJS.</li>
                                <li>NodeJS & Express</li>
                                <li>Mongodb</li>
                                <li>Lottie React for animations</li>
                            </div>
                            <div className="mt-1">
                                <h2 className="text-xl font-bold text-[#f73378]">Github Link:</h2>
                                <div className="w-full flex mt-2 gap-3">
                                    <div className="w-1/2"><Link to="https://github.com/salauddin2k3/Red-Aid-Client" target="__blank"><button className="btn btn-outline border-[#277a6f] w-full font-bold hover:bg-[#ba006e] text-white">Client</button></Link></div>
                                    <div className="w-1/2"><Link to="https://github.com/salauddin2k3/Red-Aid-Server" target="__blank"><button className="btn btn-outline w-full border-[#277a6f] font-bold hover:bg-[#ba006e]  text-white">Server</button></Link></div>
                                </div>
                            </div>
                            <Link to="https://red-aid-ad7dd.web.app/" target="__blank">
                                <div className="mt-5">
                                    <button className="btn bg-[#ba006e] font-bold hover:bg-[#277a6f] border-none w-full text-white">See Live Project</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card glass w-full lg:w-96 hover:shadow-lg hover:shadow-[#f73378]">
                        <figure>
                            <img
                                src={infinityCareBanner}
                                alt="red-aid" />
                        </figure>
                        <div className="card-body">
                            <h2 className="mt-0 card-title text-3xl text-[#ba006e]"><span className="text-[#048d9a]">Infinity</span> Care</h2>
                            <p>Infinity Care connects volunteers with impactful opportunities in healthcare, education, social service, and more. Make a difference in your community.</p>
                            <div>
                                <h2 className="text-xl font-bold text-[#f73378]">Features:</h2>
                                <li>Simplifies finding volunteer work.</li>
                                <li>Facilitates personal growth.</li>
                                <li>Encourages a culture of giving.</li>
                            </div>
                            <div className="mt-1">
                                <h2 className="text-xl font-bold text-[#f73378]">Technology Stack:</h2>
                                <li>ReactJS.</li>
                                <li>NodeJS & Express</li>
                                <li>Mongodb</li>
                                <li>Firebase for hosting services</li>
                            </div>
                            <div className="mt-1">
                                <h2 className="text-xl font-bold text-[#f73378]">Github Link:</h2>
                                <div className="w-full flex mt-2 gap-3">
                                    <div className="w-1/2"><Link to="https://github.com/salauddin2k3/Infinity-Care-Client" target="__blank"><button className="btn btn-outline border-[#277a6f] w-full font-bold hover:bg-[#ba006e] text-white">Client</button></Link></div>
                                    <div className="w-1/2"><Link to="https://github.com/salauddin2k3/Infinity-Care-Server" target="__blank"><button className="btn btn-outline w-full border-[#277a6f] font-bold hover:bg-[#ba006e]  text-white">Server</button></Link></div>
                                </div>
                            </div>
                            <Link to="https://infinity-care-a9b7b.web.app/" target="__blank">
                                <div className="mt-5">
                                    <button className="btn bg-[#ba006e] font-bold hover:bg-[#277a6f] border-none w-full text-white">See Live Project</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card glass w-full lg:w-96 hover:shadow-lg hover:shadow-[#f73378]">
                        <figure>
                            <img
                                src={paradiseBanner}
                                alt="red-aid" />
                        </figure>
                        <div className="card-body">
                            <h2 className="mt-0 card-title text-gray-900 text-3xl">Paradise of Earth</h2>
                            <p>Explore SoutheastAsia showcases the beauty of Southeast Asia, from vibrant cities to serene beaches, highlighting its diverse cultures and landscapes.</p>
                            <div>
                                <h2 className="text-xl font-bold text-[#f73378]">Features:</h2>
                                <li>Relax on serene beaches.</li>
                                <li>Discover diverse cultures.</li>
                                <li>CEnjoy stunning scenery.</li>
                            </div>
                            <div className="mt-1">
                                <h2 className="text-xl font-bold text-[#f73378]">Technology Stack:</h2>
                                <li>ReactJS.</li>
                                <li>NodeJS & Express</li>
                                <li>Mongodb</li>
                                <li>React-simple-typewriter</li>
                            </div>
                            <div className="mt-1">
                                <h2 className="text-xl font-bold text-[#f73378]">Github Link:</h2>
                                <div className="w-full flex mt-2 gap-3">
                                    <div className="w-1/2"><Link to="https://github.com/salauddin2k3/Paradise-of-Earth-Client" target="__blank"><button className="btn btn-outline border-[#277a6f] w-full font-bold hover:bg-[#ba006e] text-white">Client</button></Link></div>
                                    <div className="w-1/2"><Link to="https://github.com/salauddin2k3/Paradise-of-Earth-Server" target="__blank"><button className="btn btn-outline w-full border-[#277a6f] font-bold hover:bg-[#ba006e]  text-white">Server</button></Link></div>
                                </div>
                            </div>
                            <Link to="https://paradise-of-earth.web.app/" target="__blank">
                                <div className="mt-5">
                                    <button className="btn bg-[#ba006e] font-bold hover:bg-[#277a6f] border-none w-full text-white">See Live Project</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300

export default Projects;