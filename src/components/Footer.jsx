const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-background text-primary p-10">
                <div className="flex flex-col items-center space-y-2">
                    <img
                        src="/path/to/logo.png"
                        alt="Logo"
                        className="w-16 h-16"
                    />
                    <h1 className="text-2xl font-bold">OnYourMark</h1>
                    <p className="text-center">
                        This is a brief description of the website. It provides
                        information about the purpose and content of the site.
                    </p>
                </div>
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Marathons</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <div className="">
                    <p>
                        &copy; {new Date().getFullYear()} OnYourMark. All
                        rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
