"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navbarData = {
    logo: "/images/gz.png",
    links: [
        { text: "Home", url: "/" },
        { text: "About", url: "/about" },
        { text: "Services", url: "/services" },
        { text: "Contact", url: "/contact" }
    ]
};

const Navbar = () => {
    const { logo, links } = navbarData;
    const pathname = usePathname();
    return (
        <nav className="bg-primary">
            <div className="container mx-auto py-4">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">
                        <Image src={logo} alt="Logo" width={50} height={50} />
                    </div>
                    <div className="space-x-4">
                        {links.map((link, index) => (
                            <Link key={index} href={link.url} className={`btn ${pathname === link.url ? "btn-primary-active" : "btn-primary"}`}>
                                {link.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
