// components/three-js-background-client.js
'use client'

import dynamic from 'next/dynamic'

const ThreeJSBackground = dynamic(() => import('@/components/three-js-background'), {
  ssr: false
})

export default ThreeJSBackground