import React, { useContext, useEffect, useState } from 'react';
import BecomeHostForm from '../../Components/Form/BecomeHostForm';
import { getImageUrl } from '../../api/imageUpload';
import { AuthContext } from '../../contexts/AuthProvider';
import { getRole, hostRequest } from '../../api/user';

const BecomeAHost = () => {
    const {user} = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getRole(user?.email)
        .then(data => {
            console.log(data)
            setRole(data)
            setLoading(false)
        })
    },[user])
    const handleSubmit = e => {
        e.preventDefault()
        const location = e.target.location.value
        const image = e.target.image.files[0]
        getImageUrl(image).then(data=>{
            const hostData = {
                location,
                documentImg:data,
                role:'requested',
                email:user?.email
            }            
            hostRequest(hostData)
            .then(data => console.log(data))
        })
        
    }
    return (
        <>
            {role? <div className='h-screen text-gray-600 flex flex-col justify-center items-center'>
                Request Sent, wait for admin approval
            </div>
            : !loading && <BecomeHostForm handleSubmit={handleSubmit}/>}
        </>
    )
};

export default BecomeAHost;