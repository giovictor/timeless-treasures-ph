import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/header.module.css";
const { header, customLogoLink, mobileNavToggle, mainNav, menu, menuItem } = styles

export default function Header() {
    const router = useRouter();
    const [toggleMobileNavigation, setToggleMobileNavigation] =
        useState<boolean>(false);

    return (
        <header
            className={`h-full ${header} w-full relative flex justify-center items-center`}
        >
            <div className="container mx-auto z-10 relative">
                <div className="grid grid-cols-12 gap-1 sm:items-center">
                    <div className="col-span-11 sm:col-span-12 lg:col-span-4 sm:flex sm:justify-center sm:items-center mb-0 sm:mb-8 lg:mb-0">
                        <Link
                            href="/"
                            className="flex items-center w-full"
                            rel="home"
                        >
                            <img
                                width="160"
                                height="152"
                                src="/images/header-logo.jpg"
                                className={customLogoLink}
                                alt="Timeless Treasures PH"
                            />
                            <span className="text-2xl uppercase hidden lg:block">
                                Timeless Treasures
                            </span>
                        </Link>
                    </div>

                    <a
                        href="#"
                        className={`${mobileNavToggle} col-span-1 block sm:hidden pt-8 text-xl relative`}
                        onClick={() =>
                            setToggleMobileNavigation(!toggleMobileNavigation)
                        }
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </a>

                    <nav
                        className={`${mainNav} col-span-12 lg:col-span-8 ${
                            !toggleMobileNavigation ? "hidden" : ""
                        } sm:flex sm:justify-center ${
                            router.pathname === "/"
                                ? "pb-0"
                                : "pb-0 sm:pb-8 lg:pb-0"
                        }`}
                        aria-label="Main Navigation"
                    >
                        <div className="menuContainer">
                            <ul
                                className={menu}
                                aria-label="main-menu"
                            >
                                <li className={menuItem}>
                                    <Link href="/#about-us">About Us</Link>
                                </li>
                                <li className={menuItem}>
                                    <Link href="/#testimonials">
                                        Testimonials
                                    </Link>
                                </li>
                                <li className={menuItem}>
                                    <Link href="/#services">Services</Link>
                                </li>
                                <li className={menuItem}>
                                    <Link href="/#gallery">Gallery</Link>
                                </li>
                                <li className={menuItem}>
                                    <Link href="/#contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
