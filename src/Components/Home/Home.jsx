import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Banner from "./Banner/Banner";
// import Education from "./Education/Education";


const Home = () => {
    return (
        <div className="lg:mt-28 container mx-auto">
            <div className="pt-10 lg:pt-0">
                <div>
                    <Banner></Banner>
                    <section id="skills">
                        <Skills></Skills>
                    </section>
                    <section id="projects">
                        <Projects></Projects>
                    </section>
                    {/* <section id="education">
                        <Education></Education>
                    </section> */}
                    <section id="contact">
                        <Contact></Contact>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;