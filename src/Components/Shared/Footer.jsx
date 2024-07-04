

const Footer = () => {
    return (
        <div className="bg-neutral mt-16 mb-16 lg:mb-0 lg:mt-28">
            <footer className="footer bg-neutral justify-center text-neutral-content items-center p-4">
                <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
            </footer>
        </div>
    );
};

export default Footer;