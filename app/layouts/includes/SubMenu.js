import React from 'react';
import { FaHome, FaFire, FaStar, FaOm, FaStarAndCrescent, FaKhanda, FaCross, FaYinYang, FaLeaf, FaCircleNotch, FaDollarSign } from 'react-icons/fa';

export default function SubMenu() {
    const menuItems = [
        { id: 1, icon: <FaHome />, name: 'Home', link: '/' },
        { id: 2, icon: <FaFire />, name: 'Trending Now', link: '/#' },
        { id: 3, icon: <FaStar />, name: 'Best Seller', link: '/#' },
        { id: 4, icon: <FaOm />, name: 'Hinduism', link: '/#' },
        { id: 5, icon: <FaStarAndCrescent />, name: 'Islamic', link: '/#' },
        { id: 6, icon: <FaKhanda />, name: 'Sikhism', link: '/#' },
        { id: 7, icon: <FaCross />, name: 'Christian', link: '/#' },
        { id: 8, icon: <FaYinYang />, name: 'Buddhism', link: '/#' },
        { id: 9, icon: <FaLeaf />, name: 'Jainism', link: '/#' },
        { id: 10, icon: <FaCircleNotch />, name: 'Others', link: '/#' },
        { id: 11, icon: <FaDollarSign />, name: 'Sell', link: '/#' },
    ];

    return (
        <div id="SubMenu" className="border-b">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <ul
                    id="TopMenuLeft"
                    className="
                        flex
                        items-center
                        text-[13px]
                        text-[#333333]
                        px-2
                        h-8
                    "
                >
                    {menuItems.map((item) => (
                        <li key={item.id} className="px-3 hover:underline cursor-pointer">
                            <a href={item.link} className="flex items-center">
                                <div className="mr-1">{item.icon}</div>
                                <div>{item.name}</div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
