"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { RiLoginBoxLine } from "react-icons/ri";

import React from "react";
import Link from "next/link";

const Navbar = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const isAuthenticated = true;

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <nav className="fixed z-40 bg-purple-primary w-full py-6 text-white-100 bg-primary px-2">
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
                <div className="flex gap-14 pr-10  text-center items-center">
                    {isLoaded && (
                        <>  
                        <div className="flex items-center justify-center">
                            <Link href="/login">
                                    <RiLoginBoxLine  size={30} />
                                
                            </Link>

                        </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
