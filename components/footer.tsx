import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer({ font }: { font: string }) {
    return (
        <footer
            className={`flex flex-col items-center px-0 pt-8 lg:pt-0 ${font}`}
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1 items-center">
                    <div className="col-span-12 lg:col-span-4 mb-0 lg:mb-8 flex justify-center">
                        <Link href="/">
                            <img
                                src="/images/footer-logo.jpg"
                                alt="Footer Logo"
                                className="footer-logo"
                            />
                            <span className="uppercase">Timeless Treasures</span>
                        </Link>
                    </div>

                    <div className="col-span-6 lg:col-span-4 mb-8 flex justify-center">
                        <nav aria-label="Footer Menu">
                            <div className="menu-footer-menu-container">
                                <ul
                                    id="menu-footer-menu"
                                    className="footer-menu"
                                >
                                    <li className="menu-item">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="/#about-us">About Us</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="/#services">Services</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="/#gallery">Gallery</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="/#testimonials">
                                            Testimonials
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="/contact">Contact</Link>
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
                                    className="socialMediaLink mr-3"
                                >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>

                                <a
                                    href="https://www.instagram.com/timelesstreasures_ph/"
                                    target="_blank"
                                    className="socialMediaLink mr-3"
                                >
                                     <FontAwesomeIcon icon={faInstagram} />
                                </a>

                                <a
                                    href="https://www.tiktok.com/@timelesstreasuresph"
                                    target="_blank"
                                    className="socialMediaLink mr-3"
                                >
                                    <FontAwesomeIcon icon={faTiktok} />
                                </a>
                            </div>

                            <div className="footer-contact-details mb-8">
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} /> Address
                            </p>
                            <p>
                                LG9 Megaplaza Ortigas Center, Pasig City Philippines
                            </p>
                        </div>
                        <div className="footer-contact-details mb-8">
                            <p>
                                <FontAwesomeIcon icon={faPhone} /> Let's Talk
                            </p>
                            <p>+639151234584</p>
                        </div>
                        <div className="footer-contact-details mb-8">
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} /> Email Us
                            </p>
                            <p>timelesstreasuresph@gmail.com</p>
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
