import type { ReactElement } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface LayoutProps {
    children?: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
                <main>{children}</main>
            <Footer />
        </>
    );
}
