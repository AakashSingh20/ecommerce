import React from 'react'
import styled from 'styled-components'
import { HeroSection } from './Components/HeroSection'
import { Services } from './Components/Services'
import { Trusted } from './Components/Trusted'
import FeatureProduct from './Components/FeaturedProducts'

export const Home = () => {

  const data = {
    name: "thapa store",
  }
  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    </>
  )
}

const Wrapper = styled.section`
  background-color: ${({theme}) => theme.colors.bg};
  
  height: 200vh;
  `;