import Navbar from "./navbar";
import { useRouter } from "next/router";
import { abhaya_libre } from "@/lib/fonts";

export default function Header({ font }: { font: string }) {
    const router = useRouter();

    return (
        <header
            className={`h-full header w-full relative flex justify-center items-center ${font}`}
        >
            <Navbar />
        </header>
    );
}
