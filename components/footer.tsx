import Link from "next/link";

export default function Footer({ font }: { font: string }) {
    return (
        <footer
            className={`flex flex-col items-center px-0 pt-8 lg:pt-0 ${font}`}
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1 items-center">
                    <div className="col-span-12 lg:col-span-4 mb-0 lg:mb-8 flex justify-center">
                        <img
                            src="/images/footer-logo.jpg"
                            alt="Footer Logo"
                            className="footer-logo"
                        />
                    </div>

                    <div className="col-span-6 lg:col-span-4 mb-8 flex justify-center">
                        <nav aria-label="Footer Menu">
                            <div className="menu-footer-menu-container">
                                <ul
                                    id="menu-footer-menu"
                                    className="footer-menu"
                                >
                                    <li className="menu-item">
                                        <Link href="#home">Home</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="#about-us">About Us</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="#testimonials">
                                            Testimonials
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="#gallery">Gallery</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="#products">Products</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="#services">Services</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="#blog">Blog</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="#shop">Shop</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className="col-span-6 lg:col-span-4 mb-8 flex justify-center">
                        <div className="social-media-and-newsletter">
                            <span className="follow-us-on-label mb-3 block">
                                Follow us on:
                            </span>
                            <div className="flex items-center mb-6">
                                <a
                                    href="https://www.facebook.com/timelesstreasuresphilippines"
                                    target="_blank"
                                    className="mr-3"
                                >
                                    <img src="/images/facebook-logo.png" />
                                </a>

                                <a
                                    href="https://www.instagram.com/timelesstreasures_ph/"
                                    target="_blank"
                                    className="mr-3"
                                >
                                    <img src="/images/instagram-logo.png" />
                                </a>

                                <a
                                    href="https://www.tiktok.com/@timelesstreasuresph"
                                    target="_blank"
                                    className="mr-3"
                                >
                                    <img src="/images/tiktok-logo.png" />
                                </a>
                            </div>

                            <span className="newsletter-label invisible block mb-3">
                                Newsletter
                            </span>
                            <div className="relative invisible">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    className="newsletter-email py-2 pl-2 w-36 sm:w-40 md:w-72 text-xs sm:text-sm focus:outline-none"
                                />
                                <button
                                    type="button"
                                    className="newsletter-email-button absolute text-white h-full right-0"
                                >
                                    <img
                                        src="/images/newsletter-icon.png"
                                        className="mx-auto w-1/2"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="copyright flex justify-center items-center w-full">
                <p className="font-light text-xs sm:text-sm px-4 sm:px-0">Copyright &copy; {new Date().getFullYear()} Timeless Treasures PH | All Rights Reserved.</p>
            </div>
        </footer>
    );
}
