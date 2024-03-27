import React from 'react'
import contactModel from '@/models/ContactModel'

const page = async () => {
    const contactData = await contactModel.find();
  return (
    <>
    <h1 className='pt-20 text-5xl'>User messages </h1>
    <div>
        {
            contactData.map((contact, index) => {
                return (
                    <div className='py-3' key={index}>
                        <h1 className='text-xl'> Name : {contact.name}</h1>
                        <h2> Email :  {contact.email} </h2>
                        <p> Message : {contact.message} </p>
                    </div>
                )
            })
        }


        
    </div>
    </>
  )
}

export default page
