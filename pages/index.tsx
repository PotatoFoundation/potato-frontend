import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home : NextPage= () => {
  const router = useRouter()

  useEffect(() => {
    // Always redirect to Swap page
    router.push('/swap', undefined, { shallow: true })
  }, [])

  return <></>;

}

export default Home
