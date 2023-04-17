import React from 'react';

const BecomeHostForm = ({handleSubmit}) => {
    return (
        <>
            <div className='flex justify-center mt-6'>
                <div className='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-lg shadow-lg'>
                    <form onSubmit={(e)=>handleSubmit(e)} className='space-y-6 ng-untouched ng-pristine ng-valid'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor="location" className='block text-gray-600'>
                                Location
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-green-200'
                                name='location'
                                id='location'
                                type='text'
                                placeholder='Location'
                                required
                            />
                        </div>
                        <div>
                            <label className='w-8 h-8 border border-green-400 hover:bg-green-400 rounded-lg block cursor-pointer'>
                                <input 
                                  type='file'
                                  name='image'
                                  id='image'
                                  accept='image/*'
                                  hidden
                                />
                            </label>
                        </div>
                        <div>
                            <label className='flex items-center'>
                                <input type='checkbox' className='form-checkbox w-5 h-5' required/>
                                <span className='block ml-2 text-xs font-medium text-gray-700'>
                                    Agree to Privacy Policy
                                </span>
                            </label>
                        </div>
                        <button type="submit" className='w-full px-5 py-3 rounded-lg text-xl hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white'>Submit Request</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BecomeHostForm;