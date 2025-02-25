import React, { Suspense } from 'react'
import workshops from "./workshops.json"
import Navbar from "../Navbar"
import Footer from "../Footer"
import PageReveal from "../PageReveal"
import Carousel from "./Carousel"
import { Helmet } from "react-helmet-async"

function Loading() {
  return <div className="h-screen w-screen bg-background fixed z-[300]">
    <img src="/fetsu-presents-srijan25.svg" alt="Srijan 25 Logo" height="auto" width="auto" className="absolute top-[30%] left-[51%] -translate-[50%] h-36 w-auto" />
    <div className="absolute top-[75%] left-[50%] -translate-[50%] p-3 animate-spin bg-gradient-to-bl from-red via-purple to-lavender h-24 w-24 aspect-square rounded-full">
      <img src="/techno-management-fest.webp" alt="The Annual Techno-Management Fest of Jadavpur University" height="auto" width="auto" className="text-center absolute top-[52.5%] left-[50%] -translate-[50%] border border-white p-2 w-2/3 sm:w-1/3" />
      <div className="rounded-full h-full w-full bg-background"></div>
    </div>
  </div>
}

function WorkshopPage() {
  return (
    <Suspense fallback={<Loading />}>
      <div className='min-h-screen bg-background font-sometypeMono flex flex-col items-center'>
        <Helmet>
          <link rel="canonical" href="https://srijanju.in/workshop" />
          <title>Workshop | Srijan'25</title>
          <meta name="description" content="Workshops organised as a part of Srijan'25 - The Annual Techno-Management Fest of Jadavpur University" />
        </Helmet>
        <Navbar />
        <PageReveal />
        {workshops.map(workshop =>
          <div key={workshop.id} className='flex flex-col items-center'>
            <Carousel workshop={workshop} />
            <p className='w-full sm:w-3/5 text-[0.925rem] sm:text-base border-greyBorder border-t sm:border border-b-transparent p-4 sm:p-6 sm:text-justify'>{workshop.about}</p>
          </div>
        )}
        <h1 className="w-full border-greyBorder border-b-transparent border-t sm:border text-2xl sm:text-4xl text-center p-4">More Workshops Coming Soon!</h1>
        <Footer />
      </div>
    </Suspense>
  )
}

export { WorkshopPage }
