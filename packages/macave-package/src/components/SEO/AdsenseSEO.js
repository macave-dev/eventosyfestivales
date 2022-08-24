import React from 'react'
import GoogleAdSense from 'react-simple-adsense';

const AdsenseSEO = ({props}) => {
  return (
    <GoogleAdSense
        html={
          `<ins class="staticpubads89354"\n`+
          `data-sizes-desktop="300x600, 240x600, 200x600, 160x600"\n`+
          `data-sizes-mobile="300x600, 240x600, 200x600, 160x600"\n`+
          `data-slot="2"></ins>`
        }/>
  )
}

export default AdsenseSEO