import { Poppins, Abhaya_Libre } from "next/font/google";

const poppins_font = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

const abhaya_libre_font = Abhaya_Libre({
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});

export const poppins = poppins_font.className;
export const abhaya_libre = abhaya_libre_font.className;
