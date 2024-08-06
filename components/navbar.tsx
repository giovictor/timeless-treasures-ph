import Link from "next/link";

export default function Navbar() {
    return (
        <div className="container mx-auto relative z-10">
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

                {/* <a
                        href="javascript:void(0);"
                        className="mobileNavToggle col-span-1 block sm:hidden text-white pt-8 text-xl relative"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </a> */}

                <nav
                    className="mainNav col-span-12 lg:col-span-8 hidden sm:flex sm:justify-center"
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
                                <Link href="#testimonials">Testimonials</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="#services">Services</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="#about-us">About Us</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="#shop">Shop</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
