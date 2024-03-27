'use client'
import Faq from '@/Components/FAQ/Faq'
import Hero from '@/Components/Hero/Hero'
import Review from '@/Components/Reviews/Review'
import Technology from '@/Components/Technology/Technology'
import React from 'react'


const page = () => {
  return (
    <>
    <Hero/>
    <Technology/>
    <Faq/>
    <Review/>
    </>
  )
}

export default page
