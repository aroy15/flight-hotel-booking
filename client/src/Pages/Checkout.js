import React, { Fragment, useContext, useState } from 'react';
import { Tab } from '@headlessui/react';
import ReviewHouse from '../Components/ReviewHouse';
import CheckoutCart from '../Components/CheckoutCart';
import WhosComing from '../Components/WhosComing';
import Payment from '../Components/Payment';
import { AuthContext } from '../contexts/AuthProvider';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Components/Button/PrimaryButton';
import { ArrowRightIcon, BeakerIcon, CheckBadgeIcon, ChevronDownIcon, HomeIcon, StarIcon, UserIcon } from '@heroicons/react/20/solid';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const homeData = {
    _id: '23oiuwefhosfiw332sf',
    location: 'Dhaka, Bangladesh',
    image: 'https://i.ibb.co/YPXktqs/Home1.jpg',
    from: '17/11/2022',
    to: '21/11/2022',
    host: {
      name: 'John Doe',
      image: 'https://i.ibb.co/6JM5VJF/photo-1633332755192-727a05c4013d.jpg',
      email: 'johndoe@gmail.com',
      price: 98,
      total_guest: 4,
      bedrooms: 2,
      bathrooms: 2,
      ratings: 4.8,
      reviews: 64,
    }
  }

  const [bookingData, setBookingData] = useState({
    homeId: homeData._id,
    hostEmail: homeData?.host?.email,
    message: 'hello message',
    totalPrice: parseFloat(homeData?.host?.price) + 31,
    guestEmail: user?.email
  })

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleBooking = () => {
    console.log(bookingData)
  }

  return (
    <>
      <Tab.Group
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        defaultIndex={1}
      >
        <Tab.List>
          <div className="mt-12">
            <div className="container flex items-center justify-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <span className={`${selected ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-200'} hover:underline cursor-pointer`}>
                    1. Reviews house rules
                  </span>
                )}
              </Tab>
              <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>

              <Tab as={Fragment}>
                {({ selected }) => (
                  <span className={`${selected ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-200'} hover:underline cursor-pointer`}>
                    2. Who's coming?
                  </span>
                )}
              </Tab>
              <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <span className={`${selected ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-200'} hover:underline cursor-pointer`}>
                    3. Confirm and pay
                  </span>
                )}
              </Tab>
            </div>
          </div>

        </Tab.List>
        <Tab.Panels>
          <div className='container mx-auto'>
            <div>
              {/* Main Content */}
              <div className='md:flex justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-12'>
                <Tab.Panel>

                  {/* Details */}
                  <div className='flex-1 max-w-lg'>
                    <div className='flex justify-between'>
                      <div>
                        <h2 className='text-gray-900 title-font text-lg font-medium'>
                          Huge Apartment with 4 bedrooms
                        </h2>
                        <br />
                        <h3 className='text-gray-400 text-xs tracking-widest title-font mb-1 mt-1'>
                          Dhaka, Bangladesh
                        </h3>
                        <h3 className='text-gray-400 text-xs tracking-widest title-font mb-1 mt-1'>
                          04 Guests 02 Bedrooms 1 bath
                        </h3>
                      </div>
                      <div>
                        <div className='flex flex-col items-center justify-center'>
                          <img
                            alt=''
                            referrerPolicy='no-referrer'
                            className='w-16 h-16 border rounded-full'
                            src='https://i.ibb.co/6JM5VJF/photo-1633332755192-727a05c4013d.jpg'
                          />
                          <p>John Doe</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <div className='flex flex-col items-start pb-4 my-2 mt-8 mx-auto max-w-7xl sm:flex-row'>
                        <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                          <HomeIcon />
                        </div>
                        <div className='flex-grow prose sm:text-left prose-md'>
                          <p className='text-gray-500 text-xl'>Entire Home</p>
                          <p className='text-gray-400'>
                            You will have the condominium to yourself.
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row'>
                        <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                          <CheckBadgeIcon />
                        </div>
                        <div className='flex-grow prose sm:text-left prose-md'>
                          <p className='text-gray-500 text-xl'>Self check-in</p>
                          <p className='text-gray-400'>
                            You can check in with the doorman.
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row'>
                        <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                          <BeakerIcon />
                        </div>
                        <div className='flex-grow prose sm:text-left prose-md'>
                          <p className='text-gray-500 text-xl'>Sparkling clean</p>
                          <p className='text-gray-400'>
                            10 recent guests said this place was sparkling clean.
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row'>
                        <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                          <UserIcon />
                        </div>
                        <div className='flex-grow prose sm:text-left prose-md'>
                          <p className='text-gray-500 text-xl'>Atik is a Super host</p>
                          <p className='text-gray-400'>
                            Super hosts are experienced, highly rated hosts who are
                            committed to providing great stays for guests.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className='mt-4 text-gray-500'>
                      <p>
                        It's newly constructed 7 storied building maintaining building
                        code by a locally famous architect. Enough lights and natural air
                        are playing here. The place (apartment) is calm and noise free.
                        You'll love my place for its lovely and bright looks comfortable
                        stay.
                      </p>
                      <p>
                        Bangladesh is a beauty with its six seasons and green. The people
                        are hospitable and worm.It's newly constructed 7 storied building
                        maintaining building code by a locally famous architect. Enough
                        lights and natural air are playing here. The place (apartment) is
                        calm and noise free. You'll love my place for its lovely and
                        bright looks comfortable Stay.
                      </p>
                      <p>
                        Bangladesh is a beauty with its six seasons and green. The people
                        are hospitable and worm.
                      </p>
                    </div>
                    <br />
                    <div className='flex gap-3 items-center text-xl text-blue-600'>
                      <p>Read more about the space</p>
                      <ChevronDownIcon className='h-5 w-5' />
                    </div>
                    <br />
                    <div>
                      <p className='text-xl text-gray-900'>Reviews</p>
                      <div className='flex gap-1 mb-2'>
                        <StarIcon className='h4 w-4 text-green-500' />{' '}
                        <span>4.8 (10 reviews)</span>
                      </div>
                    </div>
                  </div>

                 
                </Tab.Panel>
                <Tab.Panel>
                  <WhosComing
                    setSelectedIndex={setSelectedIndex}
                    host={homeData?.host}
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Payment handleBooking={handleBooking} />
                </Tab.Panel>
                 {/* Cart */}
                 <CheckoutCart CheckoutCart={CheckoutCart} />
              </div>
            </div>
          </div>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Checkout;