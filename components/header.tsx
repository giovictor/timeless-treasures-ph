import Navbar from "./navbar";
import { useRouter } from "next/router";

export default function Header({ font }: { font: string }) {
    const router = useRouter();

    return (
        <header
            className={`h-full ${
                router.pathname === "/"
                    ? "2xl:h-screen headerWithBackgroundImage"
                    : "headerWithBackgroundColor"
            } w-full relative bg-cover bg-no-repeat bg-center ${font}`}
        >
            {router.pathname === "/" && (
                <div className="color-layer w-full h-full absolute top-0 left-0"></div>
            )}

            <Navbar />

            {router.pathname === "/" && (
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col justify-center items-center">
                        <p className="site-description secondary-font mt-4 sm:mt-16 2xl:mt-32 text-center">
                            Memories are Timeless Treasures of the Heart
                        </p>
                        <button className="primary-button text-white rounded-full px-8 py-2 my-12 sm:my-24 2xl:mb-0">
                            Shop Now
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
