import React, { useEffect, useRef, useState } from 'react'
// import Header from '../components/Header/Header'
import Logo from '../assets/images/logo.jfif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { Link } from 'react-router-dom'

import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faBars, faCartShopping, faChevronDown, faChevronUp, faHeart } from '@fortawesome/free-solid-svg-icons'
import Slider from '../components/Slider/Slider'

const Home = () => {
    const [countryList, setCountryList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then((res) => res.json()).then((data) => {
            const names = data.map((element, i) => {
                return (
                    <li key={i} className='text-[13px] hover:bg-primary hover:text-white px-2 py-2 mr-2 rounded-md cursor-pointer'>{element.name.common}</li>
                )
            });
            setCountryList(names);

            const handClickOutside=(e)=>{
                if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
                    setIsOpen(false)
                }
            };

            document.addEventListener('mousedown', handClickOutside);

            return()=>{
                document.removeEventListener('mousedown', handClickOutside);
            }
            
        });
    }, []);

    const checkRef=()=>{
        setIsOpen(!isOpen);
        // console.log()
        console.log(dropdownRef.current);
        // if(dropdownRef.current){
        //     // setIsOpen(false);
        // }
        
    }

    return (
        <>
            <header>
                <div className='flex justify-between p-5 space-x-3'>
                    <div className='flex lg:hidden h-full self-center'>
                    <FontAwesomeIcon icon={faBars} className='cursor-pointer text-3xl' />
                    </div>
                    <div className="logo min-w-40 w-40 ">
                        <Link to={'/'}><img src={Logo} alt='' className='w-full' /></Link>
                    </div>
                    <div className=" basis-[600px] shrink search-box border hidden lg:flex border-gray-200 p-[10px_15px] w-full rounded-sm">
                        <input type="text" name="" id="" placeholder='Search for items...' className='outline-none text-[14px] pr-2 w-full' />
                        <FontAwesomeIcon icon={faSearch} className='cursor-pointer mt-1' />
                    </div>
                    <div className="flex">
                        <div className='drop relative hidden lg:block' ref={dropdownRef}>
                            <div className="dropdown flex justify-between w-[200px] items-center h-full cursor-pointer border border-gray-200 px-3" onClick={()=>setIsOpen(!isOpen)}>
                                <div className='text-gray-500'>
                                    <FontAwesomeIcon icon={faLocationDot} className='text-xl relative -mb-[3px]' />
                                    <span className='ml-1 text-[12px] text-green-700 font-semibold'>All</span>
                                </div>
                                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className='text-[12px]' />
                            </div>
                            {isOpen &&
                                <div className='dropdown-list absolute w-full p-[15px] mt-1 shadow-lg'>
                                    <input type="text" name="" id="" placeholder='Search here...' className='outline-none bg-slate-100 w-full px-3 py-2 text-sm rounded-md border border-gray-200' />
                                    <ul className='space-y-1 mt-3 overflow-hidden overflow-y-auto h-full max-h-[300px]'>

                                        {countryList}
                                    </ul>
                                </div>
                            }
                        </div>

                        <div className='ml-0 lg:ml-8'>
                            <ul className='flex space-x-3 items-center h-full'>
                                <li className='hidden lg:block'><Link to={'/'} className='p-[5px] flex items-center'> <span className='rounded-full w-5 h-5 absolute text-center flex items-center justify-center text-white text-[12px] -mt-7 ml-2 bg-primary'>0</span> <FontAwesomeIcon icon={faHeart} className='mr-2 text-xl' /> Wishlist</Link></li>
                                <li><Link to={'/'} className='p-[5px] flex items-center'>
                                    <span className='rounded-full w-5 h-5 absolute text-center flex items-center justify-center text-white text-[12px] -mt-7 ml-2 bg-primary'>0</span>
                                    <FontAwesomeIcon icon={faCartShopping} className='mr-2 text-xl' /> Cart</Link></li>
                                <li className='hidden lg:block  w-28'><Link to={'/'} className='p-[10px_25px] bg-primary text-white text-[12px] font-semibold rounded-[5px] ml-4 hover:bg-cyan-500 duration-200'>Sign in</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        
        <Slider/>
        </>
    )
}

export default Home