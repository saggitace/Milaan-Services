// components/three-js-hero-client.js
'use client'

import dynamic from 'next/dynamic'

const ThreeJSHero = dynamic(() => import('@/components/three-js-hero'), {
  ssr: false
})

export default ThreeJSHero