import React, { useEffect, useState } from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import { getAllUsers, makeHost } from '../../api/user';
import SmallSpinner from '../../Components/Spinner/SmallSpinner';

const AllUsers = () => {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(() => getUsers(), [])

    const handleRequest = user => {
        makeHost(user)
        .then(data => {
            console.log(data)
            getUsers()
        })
        // console.log(user)
    }

    const getUsers = () => {
        setLoading(true)
        getAllUsers()
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }
    return (
        <>
            {loading ? <Spinner /> :
                <div className='container mx-auto px-4 sm:px-8'>
                    <div className='py-8'>
                        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                                <table className='min-w-full leading-normal text-left'>
                                    <thead>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                            >
                                                Role
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users && users.map((user, i) => <tr key={i}>
                                            <td
                                                className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                            >
                                                {user.email}
                                            </td>
                                            <td
                                                className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                            >
                                                {user?.role ? user.role : 'User'}
                                            </td>
                                            <td
                                                className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                            >
                                                {user?.role && user.role === 'requested' &&
                                                    <button onClick={() => handleRequest(user)} className='bg-green-200 rounded-full px-3'>
                                                        {loading? <SmallSpinner/> : 'Approve Request'}
                                                    </button>
                                                }
                                            </td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>}
        </>
    );
};

export default AllUsers;