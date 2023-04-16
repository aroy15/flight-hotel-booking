import React from 'react';

const MyBookings = () => {
    return (
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
                                        Title
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                    >
                                        Location
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                    >
                                        Form
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                    >
                                        To
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
                                <tr>
                                    <td
                                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                    >
                                        <div className='flex gap-4 items-center'>
                                            <span><img className='w-16 h-16 rounded-md' src="https://i.ibb.co/6DtxR25/profile.jpg" alt="profile" /></span>
                                            <span>Jean Marc</span>
                                        </div>
                                    </td>
                                    <td
                                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                    >
                                        Dhaka, Bangladesh
                                    </td>
                                    <td
                                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                    >
                                        $95
                                    </td>
                                    <td
                                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                    >
                                        12/09/2020
                                    </td>
                                    <td
                                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                    >
                                        15/09/2020
                                    </td>
                                    <td
                                        className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800'
                                    >
                                        <button className='bg-red-200 rounded-full px-3'>Cancel</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyBookings;