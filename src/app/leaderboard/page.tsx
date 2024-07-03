import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import { TbCrown } from "react-icons/tb";
const leaderboardPage: React.FC = () => {
    const currentUserName = 'John Doe';

    const users = [
        { id: 1, name: 'Jack Doe', points: 20, avatar: '/profile.png' },
        { id: 2, name: 'Jane Doe', points: 15, avatar: '/profile.png' },
        { id: 3, name: 'John Doe', points: 10, avatar: '/profile.png' },
        { id: 4, name: 'Jill Doe', points: 5, avatar: '/profile.png' },
        { id: 5, name: 'Jake Doe', points: 4, avatar: '/profile.png' },
        { id: 6, name: 'Jimmy Doe', points: 3, avatar: '/profile.png' },
        { id: 7, name: 'Judy Doe', points: 2, avatar: '/profile.png' },
        { id: 8, name: 'Josh Doe', points: 1, avatar: '/profile.png' },
        { id: 9, name: 'James Doe', points: 1, avatar: '/profile.png' },
        { id: 10, name: 'Jay Doe', points: 1, avatar: '/profile.png' },
    ];

    users.sort((a, b) => {
        if (a.points === b.points) {
            return a.name.localeCompare(b.name);
        } else {
            return b.points - a.points;
        }
    });


    return (
        <div className=" flex flex-col gap-6 min-h-screen bg-purple-primary py-32 ">
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

                            <div className="text-center">
                                <h1 className="text-2xl font-semibold">
                                    John Doe <span className="text-purple-primary">(0 Poin)</span>
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-12">
                            <div className="flex flex-col mt-10  items-center justify-center">

                                <Image
                                    src="/trophy.svg"
                                    alt="Trophy Picture"
                                    width={120}
                                    height={120}

                                />
                                <p className="text-black-100 text-2xl font-semibold" >Rangking 3</p>
                            </div>

                            <div className="flex flex-col mb-16 items-center justify-center">

                                <p className="text-black-100 text-xl font-semibold" >Selamat Anda</p>
                                <p className="text-purple-primary text-xl font-semibold" >Diterima Kerja</p>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
            <div className="flex bg-warning-200 w-full h-20 items-center justify-center  ">

                <p className="text-left text-lg mr-10 w-3/4 font-bold">Info: <span className="font-normal">Anda akan segera dihubungi untuk kontrak & bertemu client</span> </p>

            </div>


            <div className="flex w-full h-20 items-center">

                <div className="flex flex-row justify-center items-center px-4 max-w-full">
                    <p className="text-left text-white-100 text-2xl mr-2 font-normal">Leaderboard - Final </p>
                    <div className="flex flex-row gap-2 ">
                        <span className="h-4 w-4 rounded-full border border-white-100 block"></span>
                        <span className="h-4 w-4 rounded-full border border-white-100 block"></span>
                        <span className="h-4 w-4 rounded-full border border-white-100 block"></span>
                        <span className="h-4 w-4 rounded-full border border-white-100 block"></span>
                        <span className="h-4 w-4 rounded-full border border-white-100 block bg-white-100"></span>

                    </div>



                </div>

            </div>
            {users.map((user, index) => (
                <div key={index} className="flex w-full items-center">
                    <div className={`flex flex-row ${user.name === currentUserName ? 'bg-yellow-100' : 'bg-white-100'} h-32 px-6 py-10 rounded-tl-[1.75rem] rounded-tr-[1.75rem] 
                rounded-bl-[1.75rem] rounded-br-[1.75rem] w-full gap-4 items-center mx-4 max-w-full`}>
                        <div className="circle-inner bg-[#FFFFFF] border border-grey-50 rounded-full w-8 h-8 flex items-center justify-center">{index + 1}</div>
                        <Image
                            src="/profile.png"
                            alt="Profile Picture"
                            width={70}
                            height={70}
                            className="bg-purple-200 rounded-full object-cover border-4 border-white-100"
                        />
                        <div>
                            <p className="font-bold text-lg">{user.name}</p>
                            <p className="text-grey-200 text-md">{user.points} points</p>
                        </div>
                        <div className="flex flex-1 justify-end">
                            {index === 0 &&

                                <div className="hexagon-crown cursor-disabled bg-warning-200 py-2 px-4 items-center justify-center">
                                    <div className="relative">
                                        <TbCrown size={30} color='#ffffff' />
                                    </div>
                                </div>

                            }
                            {index === 1 &&

                                <div className="hexagon-crown cursor-disabled bg-[#e1e1e2] py-2 px-4 items-center justify-center">
                                    <div className="relative">
                                        <TbCrown size={30} color='#ffffff' />
                                    </div>
                                </div>

                            }
                            {index === 2 &&

                                <div className="hexagon-crown cursor-disabled bg-[#f6b191] py-2 px-4 items-center justify-center">
                                    <div className="relative">
                                        <TbCrown size={30} color='#ffffff' />
                                    </div>
                                </div>

                            }
                        </div>
                    </div>
                </div>
            ))}




        </div>

    )
}

export default leaderboardPage;