import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div className="lg:mt-28 container mx-auto h-screen">
            <div className="">
                <div className="lg:hidden">
                    Logo
                </div>
                <div>
                     <Banner></Banner>
                </div>
            </div>
        </div>
    );
};

export default Home;