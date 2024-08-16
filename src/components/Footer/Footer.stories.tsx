import React from 'react'
import {  Footer } from '.'

export default {
  title: 'components/Footer',
}

export const Default = () => (
  <div className="space-y-4 max-w-2xl">
    <Footer />
  </div>
)

Default.story = {
  name: 'default',
}
