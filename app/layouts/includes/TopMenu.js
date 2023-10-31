import Link from "next/link";
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useUser } from "../../context/user";
import { useEffect, useState } from "react";
import { useCart } from "../../context/cart";
import { useRouter } from "next/navigation";
import ClientOnly from "../../components/ClientOnly";
import { IoPersonOutline, IoListCircleOutline, IoLogOutOutline } from 'react-icons/io5';
import { BiSolidOffer } from 'react-icons/bi';
import { MdContactSupport } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa';



export default function TopMenu() {
    const router = useRouter();
    const user = useUser();
    const cart = useCart();
    const [isMenu, setIsMenu] = useState(false);

    useEffect(() => { cart.cartCount() }, [cart]);

    const isLoggedIn = () => {
        if (user && user?.id) {
            return (
                <button 
                    onClick={() => !isMenu ? setIsMenu(true) : setIsMenu(false)} 
                    className="flex items-center gap-2 hover:underline cursor-pointer"
                >
                    <img width={18} src={user?.picture} className="rounded-full" alt={user?.name} />
                    <div>Hi, {user.name}</div>
                    <BsChevronDown/>
                </button>
            );
        } 

        return (
            <Link href="/auth" className="flex items-center gap-2 hover:underline cursor-pointer">
                <IoPersonOutline size={18} className="mr-2" />
                <div>Login</div>
            </Link>
        );
    }

    return (
        <>
            <div id="TopMenu" className="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul 
                        id="TopMenuLeft"
                        className="flex items-center text-[11px] text-[#333333] px-2 h-8"
                    >
                        <li className="relative px-3">
                            {isLoggedIn()}
                            <div 
                                id="AuthDropdown" 
                                className={`
                                    absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg
                                    ${isMenu ? 'visible' : 'hidden'}
                                `}
                            >   
                                <div className="border-b"/>
                                <ul className="bg-white">
                                    <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                                        <Link href="/orders">
                                            <div className="flex items-center">
                                                <IoListCircleOutline size={18} className="mr-2" />
                                                My Orders
                                            </div>
                                        </Link>
                                    </li>
                                    <li 
                                        onClick={() => { user.signOut(); setIsMenu(false) }} 
                                        className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer"
                                    >
                                        <div className="flex items-center">
                                            <IoLogOutOutline size={18} className="mr-2" />
                                            Log Out
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="px-3 hover:underline cursor-pointer">
    <div className="flex items-center">
        <BiSolidOffer size={18} className="mr-2" style={{ color: 'black' }} />
        Daily Deals
    </div>
</li>

<li className="px-3 hover:underline cursor-pointer">
    <div className="flex items-center">
        <MdContactSupport size={18} className="mr-2" style={{ color: 'black' }} />
        Help & Contact
    </div>
</li>                    
                    </ul>

                    <ul 
                        id="TopMenuRight"
                        className="flex items-center text-[11px] text-[#333333] px-2 h-8"
                    >
                        <li 
                            onClick={() => router.push('/address')} 
                            className="flex items-center gap-2 px-3 hover:underline cursor-pointer"
                        >
                            <div className="flex items-center">
        <FaLocationArrow size={18} className="mr-2" style={{ color: 'black' }} />
        Ship to
    </div>
                        </li>
                        <ClientOnly>
                            <li className="px-3 hover:underline cursor-pointer">
                                <div onClick={() => router.push('/cart')} className="relative">
                                    <AiOutlineShoppingCart size={22}/>
                                    {cart.cartCount() > 0 ?
                                        <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                                            <div className=" flex items-center justify-center -mt-[1px]">{cart.cartCount()}</div>
                                        </div>
                                    : <div></div>}
                                </div>
                            </li>
                        </ClientOnly>
                    </ul>
                </div>
            </div>
        </>
    )
}
