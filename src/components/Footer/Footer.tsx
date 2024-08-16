import React from 'react'
import { Container } from 'components/Container'
import ItemsContainer from './ItemsContainer'

export const Footer = () => {
  return (
    <footer className="bg-#FFF8F2 text-black">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#FFF8F2] mx-32 my-7 border border-orange-500 hover:border-2 rounded-lg">
        <Container>
          <h1
            className="py-5 lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
          >
            <span className="text-orange-400">Free</span> until you're ready to
            launch
          </h1>
        </Container>
      </div>

      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center py-5 text-black text-sm pb-8 bg-[#FFF8F2]"
      >
        <span>© {new Date().getFullYear()} Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  )
}
