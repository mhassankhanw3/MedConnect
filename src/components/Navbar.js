import Link from 'next/link'
import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaUserAlt } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="navbar p-0 bg-base-100">
            <div className="flex-1">
                <div className="btn bg-gradient-to-t from-slate-100 to-stone-100 border-none ">
                    <Link href="/" className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600'>MedConnect</Link>
                </div>
            </div>
            <div className="flex-none space-x-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <details className="dropdown dropdown-end">
                    <summary className="m-1 btn">Profile</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><Link href="/">Item 1</Link></li>
                        <li><Link href="/">Item 2</Link></li>
                    </ul>
                </details>
                {/* </div> */}

                {/* <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 h-10 rounded-full flex border items-center justify-center">
                            <FaUserAlt />
                        </div>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link href="/">Settings</Link></li>
                        <li><Link href="/">Logout</Link></li>
                    </ul>
                </div> */}
            </div>
        </div >
    )
}
