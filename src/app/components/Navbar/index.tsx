"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { RiLoginBoxLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";

const Navbar = () => {
    const {logout} = useAuth();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isQuestionPage, setIsQuestionPage] = useState(false);
    const [isHomePage, setIsHomePage] = useState(false);
    const isAuthenticated = true;
    const pathname = usePathname();

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        const isQuestionPath = /^\/level\/\d+$/.test(pathname);
        const isHomePath = pathname === "/";
        setIsHomePage(isHomePath);
        setIsQuestionPage(isQuestionPath);
    }, [pathname]);

    if (!isLoaded || !isAuthenticated || isHomePage || isQuestionPage) {
        return null;
    }

    return (
        <nav className="fixed z-40 bg-purple-primary w-full py-2 text-white-100 px-2">
            <div className="flex justify-between py-4 font-bold">
                <div className="flex flex-row px-4 items-center">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="Marmut logo"
                            width={30}
                            height={30}
                            className="cursor-pointer pt-1"
                        />
                    </Link>
                    <h1 className="pl-2 text-center text-3xl font-semibold font-title">alametric</h1>
                </div>
                <div className="flex gap-14 pr-10 text-center items-center">
                    {isLoaded && (
                        <div className="flex items-center justify-center">
                                <RiLoginBoxLine size={30} onClick={logout} />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
