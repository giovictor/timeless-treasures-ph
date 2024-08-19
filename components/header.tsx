import Navbar from "./navbar";
import { useRouter } from "next/router";
import { abhaya_libre } from "@/lib/fonts";

export default function Header({ font }: { font: string }) {
    const router = useRouter();

    return (
        <header
            className={`h-full ${
                router.pathname === "/"
                    ? "lg:h-screen headerWithBackgroundImage"
                    : "headerWithBackgroundColor"
            } w-full relative bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ${font}`}
        >
            {router.pathname === "/" && (
                <div className="color-layer w-full h-full absolute top-0 left-0"></div>
            )}

            <Navbar />

            {router.pathname === "/" && (
                <div className="container mx-auto z-10">
                    <p
                        className={`site-description text-center ${abhaya_libre}`}
                    >
                        Memories are Timeless Treasures of the Heart
                    </p>
                </div>
            )}
        </header>
    );
}
