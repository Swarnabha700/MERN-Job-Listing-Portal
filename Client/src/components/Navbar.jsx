import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [IsMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuToggle = () => {
        setIsMenuOpen(!IsMenuOpen)
    }

    const navItems = [
        {
            path: "/",
            title: "Start Searching"
        },
        {
            path: "/my-job",
            title: "My Jobs"
        },
        {
            path: "/salary",
            title: "Salary Estimate"
        },
        {
            path: "/post-job",
            title: "Post A Job"
        },
    ]
    return (
        <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <nav className='flex justify-between items-center py-6'>
                <a href="/" className='flex items-center gap-2 text-2xl '>
                    <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" width="30px" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 441 512.399"><path fill="#88BCF4" fillRule="nonzero" d="M102.78 354.886c-5.727 0-10.372-4.645-10.372-10.372s4.645-10.372 10.372-10.372h85.566a148.22 148.22 0 00-7.597 20.744H102.78zm0-145.37c-5.727 0-10.372-4.645-10.372-10.372s4.645-10.372 10.372-10.372h151.286c5.727 0 10.373 4.645 10.373 10.372s-4.646 10.372-10.373 10.372H102.78zm0 72.682c-5.727 0-10.372-4.646-10.372-10.372 0-5.728 4.645-10.373 10.372-10.373h143.271c2.829 0 5.394 1.134 7.264 2.971a149.511 149.511 0 00-25.876 17.774H102.78z" /><path fill="#3C4D7A" d="M324.263 278.925c32.232 0 61.419 13.067 82.545 34.192C427.933 334.241 441 363.43 441 395.66c0 32.236-13.067 61.419-34.192 82.544-21.126 21.126-50.311 34.195-82.545 34.195-32.232 0-61.418-13.069-82.542-34.195-21.126-21.125-34.195-50.312-34.195-82.544s13.069-61.417 34.195-82.543c21.125-21.125 50.308-34.192 82.542-34.192zM60.863 0h174.81c3.382 0 6.384 1.619 8.278 4.123l110.107 119.12a10.288 10.288 0 012.746 7.011h.052v119.819a149.42 149.42 0 00-20.752-3.112v-92.212h-43.666v-.042h-.161c-22.046-.349-39.33-6.222-51.694-16.784-12.849-10.979-20.063-26.615-21.503-46.039a10.48 10.48 0 01-.096-1.405V20.752H60.863c-11.02 0-21.049 4.516-28.321 11.79-7.274 7.272-11.79 17.301-11.79 28.321v338.276c0 11.015 4.521 21.038 11.796 28.312 7.278 7.28 17.31 11.801 28.315 11.801h120.749a148.33 148.33 0 008.116 20.752H60.863c-16.73 0-31.958-6.849-42.987-17.881C6.852 431.099 0 415.882 0 399.139V60.863C0 44.114 6.842 28.894 17.87 17.87 28.894 6.842 44.114 0 60.863 0zm178.873 29.983v60.432c1.021 13.738 5.819 24.536 14.302 31.784 8.668 7.404 21.488 11.544 38.4 11.835v-.038h43.443L239.736 29.983zm77.792 303.09c14.547 0 28.541 5.817 38.825 16.101 10.329 10.292 16.099 24.256 16.099 38.832 0 5.418-.8 10.703-2.289 15.687a54.796 54.796 0 01-5.039 11.711l19.764 22.29c1.479 1.611 1.376 4.144-.244 5.623l-15.215 13.895c-1.611 1.47-4.137 1.367-5.616-.244l-18.794-21.422a54.559 54.559 0 01-11.587 5.039l-.142.038a55.06 55.06 0 01-36.732-1.866 55.365 55.365 0 01-17.862-11.907 54.83 54.83 0 01-16.101-38.844c0-14.546 5.819-28.54 16.092-38.832 10.312-10.336 24.242-16.101 38.841-16.101zm24.26 30.665c-6.486-6.48-15.095-10.051-24.26-10.051-9.195 0-17.755 3.563-24.267 10.051-6.2 6.2-10.053 14.792-10.053 24.268 0 9.158 3.554 17.79 10.044 24.26 9.809 9.781 24.565 12.783 37.39 7.472a34.567 34.567 0 0011.146-7.472c3.147-3.147 5.738-6.953 7.471-11.146a34.258 34.258 0 002.589-13.114c0-9.166-3.58-17.789-10.06-24.268z" /></svg>
                    <span>JobPortal</span>
                </a>
                <ul className='hidden md:flex gap-12 text-blue'>
                    {
                        navItems.map(({ path, title }) => (
                            <li key={path} className='text-base text-primary'><NavLink to={path} className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>{title}
                            </NavLink>
                            </li>
                        ))
                    }
                </ul>

                {/* sign up and login btn */}
                <div className=" text-base text-primary font-medium space-x-5 hidden lg:block">
                    <Link to="/login" className='py-2 px-8 border rounded bg-blue text-white'>Login</Link>
                    
                </div>

                {/* mobile options */}
                <div className='block md:hidden'>
                    <button onClick={handleMenuToggle}>
                        {
                            IsMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBarsStaggered className='w-5 h-5 text-primary'/>
                        }
                    </button>
                </div>
            </nav>

            {/* options for mobile devices */}
            <div className={`px-4 bg-black py-5 rounded-sm text-center ${IsMenuOpen? "" : "hidden"}`}>
                <ul>
                {
                        navItems.map(({ path, title }) => (
                            <li key={path} className='text-base text-white py-1'><NavLink to={path} className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>{title}
                            </NavLink>
                            </li>
                        ))
                    }

                    <li className='text-base text-white py-1'><Link to="/login" >Login</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
