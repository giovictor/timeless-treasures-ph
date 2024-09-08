import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const router = useRouter();
    const [toggleMobileNavigation, setToggleMobileNavigation] = useState<boolean>(false);

    return (
        <div
            className={`container mx-auto z-10 ${
                router.pathname === "/"
                    ? "relative lg:absolute lg:top-0"
                    : "relative"
            }`}
        >
            <div className="grid grid-cols-12 gap-1 sm:items-center">
                <div className="col-span-11 sm:col-span-12 lg:col-span-4 sm:flex sm:justify-center mb-0 sm:mb-8 lg:mb-0">
                    <Link href="/" className="custom-logo-link" rel="home">
                        <img
                            width="208"
                            height="191"
                            src="http://timelesstreasuresph.test/wp-content/uploads/2024/05/timeless-treasures-ph-logo.png"
                            className="custom-logo"
                            alt="Timeless Treasures PH"
                            decoding="async"
                        />
                    </Link>
                </div>

                <a
                    href="#"
                    className="mobileNavToggle col-span-1 block sm:hidden text-white pt-8 text-xl relative"
                    onClick={() => setToggleMobileNavigation(!toggleMobileNavigation)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </a>

                <nav
                    className={`mainNav col-span-12 lg:col-span-8 ${!toggleMobileNavigation ? 'hidden' : '' } sm:flex sm:justify-center ${
                        router.pathname === "/" ? "pb-0" : "pb-0 sm:pb-8 lg:pb-0"
                    }`}
                    id="site-navigation"
                    aria-label="Main Navigation"
                >
                    <div className="menu-header-menu-container">
                        <ul
                            id="primary-menu"
                            className="menu"
                            aria-label="main-menu"
                        >
                            <li className="menu-item">
                                <Link href="/#testimonials">Testimonials</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="/#services">Services</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="/#about-us">About Us</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="/#gallery">Gallery</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
