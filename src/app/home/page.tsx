import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import Link from "next/link";

const HomePage: React.FC = () => {
    const userLevel = 2;
    const levels = [
        { id: 1, name: "Level 1" },
        { id: 2, name: "Level 2" },
        { id: 3, name: "Level 3" },
        { id: 4, name: "Level 4" },
    ];

    return (
        <div className=" flex flex-col min-h-screen bg-purple-primary py-32 ">
            <div className="flex px-2 items-center justify-center flex-col w-full">

                <div className="relative bg-white-100 pt-16 mt-4 mb-10 rounded-tl-[2.5rem] rounded-tr-[2.5rem] rounded-bl-[2.5rem] shadow-md w-full max-w-md">
                    <div>
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                            <Image
                                src="/profile.png"
                                alt="Profile Picture"
                                width={96}
                                height={96}
                                className="bg-purple-200 rounded-full object-cover border-4 border-white-100"
                            />
                        </div>
                        <div>

                            <div className="text-center ">
                                <h1 className="text-2xl font-semibold">
                                    John Doe <span className="text-purple-primary">(0 Poin)</span>
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="bg-danger-100 rounded-[2rem] mt-4 py-4 px-6 mx-2 flex flex-col items-left">
                                <h1 className="text-xl pl-1 font-extrabold text-[#bf7683]">Level 1</h1>
                                <div className="flex items-center mt-2">
                                    <MdAccessTime size={32} className="text-danger-200 mr-2" />
                                    <span className="font-bold text-xl text-danger-200">Berakhir dalam 23:20:00</span>
                                </div>
                            </div>


                            <div className="grid grid-cols-2 grid-rows-2 gap-8 mb-12 mx-4">
                                {levels.map((level, index) => (
                                    <div key={level.id}>
                                        {userLevel >= level.id ? (
                                            <>
                                                <Link href={`/level/${level.id}`}>
                                                    <div className="hexagon bg-emerald py-8 px-4 flex flex-col items-center justify-center">
                                                        <div className="circle-outer border-4 border-solid border-[#5fdec3] bg-[#84e6d1] rounded-full w-16 h-16 flex items-center justify-center">
                                                            <div className="circle-inner bg-white-100 rounded-full w-8 h-8 flex items-center justify-center">
                                                                <span className="text-[#93e9d6] text-2xl font-bold">1</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <span className="font-semibold text-purple-primary">{level.name}</span>
                                                    </div>
                                                </Link>
                                            </>
                                        ) : (
                                            <>
                                                <div className="hexagon cursor-disabled bg-grey-200 py-8 px-4 flex flex-col items-center justify-center">
                                                    <div className="relative">
                                                        <div className="circle-outer border-4 border-solid border-[#555464] bg-grey-100 rounded-full w-16 h-16 flex items-center justify-center">
                                                            <div className="circle-inner bg-[#dddddd] rounded-full w-8 h-8 flex items-center justify-center"></div>
                                                        </div>
                                                        <IoMdLock size={64} color='#ffffff' className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <span className="font-semibold text-grey-150">{level.name}</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>
            </div>
           
        </div>
    );
}

export default HomePage;
