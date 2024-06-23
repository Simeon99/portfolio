import Navbar from "@/components/navbar/Navbar";
import "../globals.css";
import Footer from "@/components/footer/Footer";
import NavbarProvider from "@/context/NavbarContext";

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {

    const items = [
        {
            text: "About me",
            href: "about"
        },
        {
            text: "Experience",
            href: "experience"
        },
        {
            text: "Tools and languages",
            href: "tools"
        },
        {
            text: "Contact",
            href: "contact"
        },
    ]


    return (
        <>
        <NavbarProvider>
            <Navbar items={items} />
            <div className="fixed w-1/2 right-0 h-full -z-50 bg-dark-blue">
            </div>
            {children}
            <Footer />
        </NavbarProvider>
        </>
    );
}
