import { Link } from "react-router-dom";

export default function SideBar() {
    const items = [
        { name: "WELCOME", link: "/welcome" },
        { name: "HEROS", link: "/heros" },
        { name: "MAPS", link: "/maps" },
        { name: "COMPARE STATS", link: "/compare-stats" }
    ];

    const itemsSmall = [
        { name: "social", link: "/social" },
        { name: "more help", link: "https://www.cbr.com/isekai-anime-without-truck-kun/", external: true },
        { name: "how to uninstall overwatch 2", link: "https://us.battle.net/support/en/article/30333", external: true }
    ];

    return (
        <div className="flex flex-col px-8 py-10 font-owOblique text-white space-y-8">
            <ul className="divide-y-8 divide-transparent">
                {items.map((item, index) => (
                    <li key={index} className="drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] text-5xl font-semibold">
                        <Link
                            to={item.link}
                            className="cursor-pointer inline-block transform transition-transform duration-200 hover:scale-110"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul>
                {itemsSmall.map((item, index) => (
                    <li key={index} className="drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] text-2xl font-semibold">
                        {item.external ? (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer inline-block transform transition-transform duration-200 hover:scale-110"
                            >
                                {item.name}
                            </a>
                        ) : (
                            <Link
                                to={item.link}
                                className="cursor-pointer inline-block transform transition-transform duration-200 hover:scale-110"
                            >
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
