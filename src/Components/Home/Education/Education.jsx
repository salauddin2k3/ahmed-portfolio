import eduBanner from "../../../../public/edu-banner.png"

const Education = () => {
    return (
        <div className="text-white mx-3">
            <h2 className="text-3xl lg:text-5xl text-center mt-16 lg:mt-28 font-bold">Education</h2>
            <div className="mt-10 lg:mt-24 flex justify-center items-center">
                <div className="card bg-gray-700 shadow-xl lg:w-1/2">
                    <figure className="px-10 pt-10">
                        <img
                            src={eduBanner}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl lg:text-4xl">Bachelor in Economics</h2>
                        <p className="text-base lg:text-xl">National University, Bangladesh</p>
                        <p className="text-base lg:text-lg">{`(Govt. Tolaram Collage)`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;