'use client'

import Loading from '@/components/Loading'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useRouter()

  useEffect(() => { 
    try {
      const token = localStorage.getItem('token')
      if (token) {
        navigate.replace('/')
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      navigate.push('/auth/login')
    }
  }, [navigate])
  
  if(isLoading) return <Loading />

  return (
    <div className='flex h-screen flex-col items-center justify-center'>{ children}</div>
  )
}

export default Layout