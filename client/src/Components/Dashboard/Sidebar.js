import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link } from 'react-router-dom';
import { ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/solid';
import UserMenu from './UserMenu';
import AdminMenu from './AdminMenu';
import HostMenu from './HostMenu';
import PrimaryButton from '../Button/PrimaryButton';

const Sidebar = ({ role, loading }) => {
    const { user, logout } = useContext(AuthContext)
    const [isActive, setActive] = useState(true)
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small screen navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>Flight Hotel Booking</Link>
                    </div>
                </div>
                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700 focus:text-white'
                >
                    <Bars3Icon className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <aside className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out`}>
                <Link to="/" className="mx-auto">
                    <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                </Link>

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL && user?.photoURL} alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user?.displayName && user?.displayName}</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user?.email && user?.email}</p>
                </div>
                {/* Nav Items */}
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        {
                            role && role !== 'requested' ? (<>{role === 'admin' ? <AdminMenu /> : <HostMenu />}</>)
                                :
                                <UserMenu />
                        }
                    </nav>
                </div>
                <div>
                    <hr />
                    <PrimaryButton
                        handler={logout}
                        classes='flex block w-full rounded-full items-center px-4 py-2'
                    >
                        <ArrowRightOnRectangleIcon className='w-5 h-5'/>
                        <span className='mx-4 font-medium'>Logout</span>
                    </PrimaryButton>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;