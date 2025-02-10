import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import playerIcon from './../assets/images/playerIcon.png';
import playerCard2 from './../assets/images/playerCard2.jpg';
import friend from './../assets/images/friend.png';
import acheivement from './../assets/images/acheivement.png';

import curr from './../assets/images/curr.png';
import mythic from './../assets/images/mythic.png';
import gold from './../assets/images/gold.png';
import plus from './../assets/images/plus.png';

export default function Header() {
    const [isExpanded, setIsExpanded] = useState(false);

    const items = [
        { name: "BOTTOM 500", link: "/" },
        { name: "WELCOME", link: "/welcome" },
        { name: "HEROS", link: "/heros" },
        { name: "MAPS", link: "/maps" },
        { name: "COMPARE STATS", link: "/compare-stats" }
    ];

    const itemsSmall = [
        { name: "social", link: "/social" },
        { name: "more help", link: "https://www.cbr.com/isekai-anime-without-truck-kun/" },
        { name: "uninstall OW2", link: "https://us.battle.net/support/en/article/30333" }
    ];

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    const currentPage = items.find(item => item.link === location.pathname)?.name;

    return (
        <div className='flex flex-row justify-between '>
            <h1 className='py-10 px-9 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] text-white text-8xl font-owRegular hidden md:block'>
            {currentPage}
            </h1>
        <div className="flex flex-col top-0 right-0 items-end px-1 py-10 z-50">
            <div className="flex justify-end px-8">
                <img src={playerIcon} className="size-12 rounded-sm" alt="Player Icon" />
                <img src={playerCard2} className="h-[48px] w-[240px] rounded-sm" alt="Player Card" />
                <img src={friend} className="size-12 ml-1 rounded-sm" alt="Friend Icon" />
                <img src={acheivement} className="size-12 ml-1 rounded-sm" alt="Achievement Icon" />
            </div>
            <div className="flex justify-end py-1 px-8">
                <div
                    className={`bg-slate-400 font-owOblique rounded-sm flex flex-row transition-transform duration-500 ${
                        isExpanded ? "menu-slide-in" : "menu-slide-out"
                    }`}
                >
                    {isExpanded && (
                        <>
                            {items.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="text-white px-3 py-1 text-lg hover:underline"
                                >
                                    {item.name}
                                </a>
                            ))}
                            {/* USE SIDEBAR EXTERNAL METHOD FOR LINK TYPES*/}
                            {itemsSmall.map((item, index) => (
                                <a
                                    key={`small-${index}`}
                                    href={item.link}
                                    className="text-gray-200 px-2 py-1 text-base hover:underline"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </>
                    )}
                </div>
                <div
                    className={`flex flex-wrap mr-10 transition-transform duration-500 space-x-4 ${
                        isExpanded ? "menu-opposite-out" : "menu-opposite-in"
                    }`}
                >
                    <img src={mythic} className="size-5" alt="Mythic Icon" />
                    <img src={curr} className="size-5" alt="Currency Icon" />
                    <img src={gold} className="h-[17px] w-[20px]" alt="Gold Icon" />
                </div>
                <div
                    className={`absolute plus-button transition-transform duration-500 ${
                        isExpanded ? "rotate-90" : "rotate-0"
                    } cursor-pointer`}
                    onClick={toggleMenu}
                >
                    <img src={plus} className="size-5 cursor-pointer" alt="Plus Icon" />
                </div>
            </div>
        </div>
        </div>
    );
}
