import { Poppins } from "next/font/google";

const poppins_font = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

export const poppins = poppins_font.className;
