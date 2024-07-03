"use client"
import { loginUser } from "../actions/auth/loginUser";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
    kode: string;
    name: string;
    points: number;
    level: number;
}

interface AuthContextProps {
    user: User | null;
    isAuthenticated: boolean;
    login: (kode: string, nama: string) => Promise<void>;
    logout: () => void;
    updateUserPointsandLevel: (points: number) => void;
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    isAuthenticated: false,
    login: (kode: string, nama: string) => Promise.resolve(),
    logout: () => { },
    updateUserPointsandLevel: () => { }
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            setIsAuthenticated(true);
            setUser(JSON.parse(storedUser) as User); 
        }
    }, []);

    const login = async (kode: string, nama: string): Promise<void> => {
        try {
            const result = await loginUser(kode, nama);

            if (result) {
                router.replace('/home');
                setIsAuthenticated(true);
                setUser(result as User);
                localStorage.setItem('user', JSON.stringify(result));
            } else {
                throw new Error('Failed to login');
            }

        } catch (error) {
            console.error("Failed to login:", error);
            throw error;
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('user');
        router.replace('/');
    };

    const updateUserPointsandLevel = (points: number) => {
        setUser((prevUser) => {
            if (prevUser) {
                const updatedUser = { ...prevUser, points,level: prevUser.level + 1};
                localStorage.setItem('user', JSON.stringify(updatedUser));
                return updatedUser;
            }
            return prevUser;
        });
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user,updateUserPointsandLevel }}>
            {children}
        </AuthContext.Provider>
    );
};
