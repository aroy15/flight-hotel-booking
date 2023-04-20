import React, { useContext, useState } from 'react'
import {format} from 'date-fns'
import AddServiceForm from '../../Components/Form/AddServiceForm'
import { AuthContext } from '../../contexts/AuthProvider'
import { getImageUrl } from '../../api/imageUpload'
import { addHome } from '../../api/services'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddHome = () => {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const [arrivalDate, setArrivalDate] = useState(new Date())
  const [departureDate, setDepartureDate] = useState(
    new Date(arrivalDate.getTime() + 24 * 60* 60 * 1000)
  )
  const [loading, setLoading] = useState(false)

  const handleSubmit = e =>{
    e.preventDefault()
    setLoading(true)

    const location = e.target.location.value
    const title = e.target.title.value
    const from = format(arrivalDate, 'P')
    const to = format(departureDate, 'P')
    const price = e.target.price.value
    const total_guest = e.target.total_guest.value
    const bedrooms = e.target.bedrooms.value
    const bathrooms = e.target.bathrooms.value
    const description = e.target.description.value
    const image = e.target.image.files[0]

    getImageUrl(image)
    .then(res => {
      const homeData = {
        location,
        title,
        from,
        to,
        price,
        total_guest,
        bedrooms,
        bathrooms,
        description,
        image: res,
        host:{
          name: user?.displayName,
          image:user?.photoURL,
          email: user?.email
        }
      }
      addHome(homeData)
      .then(data => {
        console.log(data)
        setLoading(false)
        toast.success('home successfully added')
        navigate('/dashboard/manage-homes')
      })
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
      toast.error(err.message)
    })
  }
  return (
    <>
      <h1 className='text-3xl font-bold text-gray-800 py-8 text-center'>
        Add Home
      </h1>
      <AddServiceForm 
        handleSubmit={handleSubmit}
        arrivalDate={arrivalDate}
        setArrivalDate={setArrivalDate}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        loading={loading}        
      />
    </>
  )
}

export default AddHome
