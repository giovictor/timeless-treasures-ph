import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import styles from "@/styles/footer.module.css";
const { footer, logo, footerLogo, footerMenu, menuItem, followUsOnLabel, socialMediaLink, copyright, contactDetails } = styles

export default function Footer() {
    return (
        <footer
            className={`${footer} flex flex-col items-center px-0 pt-8 lg:pt-0`}
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1 items-center">
                    <div className="col-span-6 sm:col-span-12 lg:col-span-4 mb-8 flex justify-center lg:justify-start">
                        <Link href="/" className={`${logo}`}>
                            <img
                                src="/images/footer-logo.jpg"
                                alt="Footer Logo"
                                className={`${footerLogo}`}
                            />
                            <span className="uppercase hidden sm:block">Timeless Treasures</span>
                        </Link>
                    </div>

                    <div className="col-span-6 lg:col-span-4 mb-8 flex justify-center lg:justify-start">
                        <nav aria-label="Footer Menu">
                            <div className="footerMenuContainer">
                                <ul
                                    className={`${footerMenu}`}
                                >
                                    <li className={`${menuItem}`}>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className={`${menuItem}`}>
                                        <Link href="/#about-us">About Us</Link>
                                    </li>
                                    <li className={`${menuItem}`}>
                                        <Link href="/#services">Services</Link>
                                    </li>
                                    <li className={`${menuItem}`}>
                                        <Link href="/#gallery">Gallery</Link>
                                    </li>
                                    <li className={`${menuItem}`}>
                                        <Link href="/#testimonials">
                                            Testimonials
                                        </Link>
                                    </li>
                                    <li className={`${menuItem}`}>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className="col-span-12 sm:col-span-6 lg:col-span-4 mb-8 mx-8 sm:mx-0 flex justify-center lg:justify-start">
                        <div className="footerContactDetails">
                            <span className={`${followUsOnLabel} mb-3 mr-3 block`}>
                                Follow us on:
                            </span>
                            <div className="flex items-center mb-6">
                                <a
                                    href="https://www.facebook.com/timelesstreasuresphilippines"
                                    target="_blank"
                                    className={`${socialMediaLink} mr-3`}
                                >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>

                                <a
                                    href="https://www.instagram.com/timelesstreasures_ph/"
                                    target="_blank"
                                    className={`${socialMediaLink} mr-3`}
                                >
                                     <FontAwesomeIcon icon={faInstagram} />
                                </a>

                                <a
                                    href="https://www.tiktok.com/@timelesstreasuresph"
                                    target="_blank"
                                    className={`${socialMediaLink} mr-3`}
                                >
                                    <FontAwesomeIcon icon={faTiktok} />
                                </a>
                            </div>

                            <div className="mb-3">
                                <p className={`${contactDetails}`}>
                                    <FontAwesomeIcon icon={faLocationDot} /> LG9 Megaplaza Ortigas Center, Pasig City Philippines
                                </p>
                            </div>
                            <div className="mb-3">
                                <p className={`${contactDetails}`}>
                                    <FontAwesomeIcon icon={faPhone} /> +639151234584
                                </p>
                            </div>
                            <div className="mb-3">
                                <p className={`${contactDetails}`}>
                                    <FontAwesomeIcon icon={faEnvelope} /> timelesstreasuresph@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`${copyright} flex justify-center items-center w-full`}>
                <p className="font-light text-xs sm:text-sm px-4 sm:px-0">Copyright &copy; {new Date().getFullYear()} Timeless Treasures PH | All Rights Reserved.</p>
            </div>
        </footer>
    );
}
