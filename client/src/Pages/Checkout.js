import React, { Fragment, useContext, useState } from 'react';
import { Tab } from '@headlessui/react';
import ReviewHouse from '../Components/ReviewHouse';
import CheckoutCart from '../Components/CheckoutCart';
import WhosComing from '../Components/WhosComing';
import Payment from '../Components/Payment';
import { AuthContext } from '../contexts/AuthProvider';
import { saveBookings } from '../api/bookings';
import toast from 'react-hot-toast'

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
    message: '',
    totalPrice: parseFloat(homeData?.host?.price) + 31,
    guestEmail: user?.email
  })

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleBooking = () => {
    console.log(bookingData)
    
    saveBookings(bookingData)
    .then(data=>{
      console.log(data)
      toast.success("booking successful!")
    })
    .catch(err=>{
      console.log(err)
      toast.error(err.message)
    })
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
                  <ReviewHouse/>
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