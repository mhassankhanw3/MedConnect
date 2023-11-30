"use client"
import Modal from '@/src/components/Modal'
import imagelogo from "../public/assets/images/foodlogo.png"
import Image from 'next/image'
import Link from "next/link"
import React, { useState } from 'react'
import Navbar from '@/src/components/Navbar'
import Hero from '@/src/components/Hero'
import Card from '@/src/components/Card/Card'
import CardsList from '@/src/components/Card/CardsList'
import Crousel from '@/src/components/Crousel'
// import { Button } from "@/components/ui/button"

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Navbar />
      <Hero />
      <CardsList />
      <Crousel />
    </>
  )
}
