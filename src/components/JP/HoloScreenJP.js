import React from 'react'
import { VtuberList } from '../Vtuber/VtuberList'

export const HoloScreenJP = () => {
  return (
    <div className="container">
        <h1>HoloScreen JP</h1>
        
        <VtuberList
          publisher={"Hololive JP"}
        />

    </div>
  )
}
