import React from 'react'
import styled from 'styled-components'
import { HeroSection } from './Components/HeroSection'
import { Services } from './Components/Services'
import { Trusted } from './Components/Trusted'

export const Home = () => {

  const data = {
    name: "thapa store",
  }
  return (
    <>
    <HeroSection myData={data}/>
    <Services/>
    <Trusted/>
    </>
  )
}

const Wrapper = styled.section`
  background-color: ${({theme}) => theme.colors.bg};
  
  height: 200vh;
  `;