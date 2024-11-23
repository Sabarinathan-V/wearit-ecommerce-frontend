import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const {showSearch, setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

    const location = useLocation()

    function handleSidebarOpen() {
        setVisible(true);
    }

    function handleSidebarClose() {
        setVisible(false);
    }

    function handleSearch() {
        if(location.pathname.includes("collection")){
            setShowSearch(true)
        }
    }

    function logout() {
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
        navigate('/login');
    }

    return (
    <div className="flex items-center justify-between py-5 font-medium">
        <Link to={"/"}>
            <img src={assets.logo} alt="logo" className="w-36"  />
        </Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink to={"/"} className="flex flex-col items-center gap-1">
                <p>HOME</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to={"/collection"} className="flex flex-col items-center gap-1">
                <p>COLLECTION</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to={"/about"} className="flex flex-col items-center gap-1">
                <p>ABOUT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
                <p>CONTACT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
        </ul>

        <div className="flex items-center gap-6">
            <img onClick={handleSearch} src={assets.search} className="w-5 cursor-pointer" alt="search" />

            <div className="group relative">
                <img onClick={() => token ? null : navigate('/login')} src={assets.profile} alt="profile" className="w-5 cursor-pointer" />
                {token &&
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black" onClick={() => navigate('/orders')}>Orders</p>
                            <p className="cursor-pointer hover:text-red-500 text-red-400"  onClick={logout} >Logout</p>
                        </div>
                    </div>
                }
            </div>

            <Link to={"/cart"} className="relative" >
                <img src={assets.cart} alt="cart" className="w-5 cursor-pointer min-w-5" />
                {
                    getCartCount() > 0 &&
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
                }
            </Link>

            <img src={assets.menuIcon} alt="menu" className="w-5 cursor-pointer sm:hidden" onClick={handleSidebarOpen} />

        </div>
        {/* sidebar menu */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={handleSidebarClose} className="flex items-center gap-2 p-3 cursor-pointer">
                    <img src={assets.backIcon} alt="" className="h-4" />
                    <p>Back</p>
                </div>
                <NavLink onClick={handleSidebarClose} className="py-2 pl-6 border" to="/">HOME</NavLink>
                <NavLink onClick={handleSidebarClose} className="py-2 pl-6 border" to="/collection">COLLECTION</NavLink>
                <NavLink onClick={handleSidebarClose} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
                <NavLink onClick={handleSidebarClose} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
            </div>
        </div>
    </div>
    )
}

export default Navbar