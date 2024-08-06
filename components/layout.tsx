import type { ReactElement } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { poppins } from "@/lib/fonts";

interface LayoutProps {
    children?: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header font={poppins} />
                <main className={poppins}>{children}</main>
            <Footer font={poppins} />
        </>
    );
}
