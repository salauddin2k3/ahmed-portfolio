// import Contact from "../Contact/Contact";
// import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div className="lg:mt-28 container mx-auto">
            <div className="">
                <div className="lg:hidden">
                    Logo
                </div>
                <div>
                    <Banner></Banner>
                    <section id="skills">
                        <Skills></Skills>
                    </section>
                    {/* <section id="projects">
                        <Projects></Projects>
                    </section>
                    <section id="contact">
                        <Contact></Contact>
                    </section> */}
                </div>
            </div>
        </div>
    );
};

export default Home;