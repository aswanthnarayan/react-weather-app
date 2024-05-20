import React from "react"
import { CiCloud } from "react-icons/ci"

const MainSection = () => {
  return (
    <div className="flex flex-col gap-3 text-white">
      <div className="flex flex-col justify-center items-center gap-3 my-3 text-center">
        <p className="text-lg md:text-xl font-extralight">Tuesday 14 May 2024 | Local time :07:21 AM</p>
        <p className="text-2xl md:text-3xl">Kannur, IN</p>
        <p className="text-lg md:text-xl font-light">Rain</p>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div><CiCloud size={60} /></div>
        <p className="text-4xl md:text-6xl">14</p>
        <div className="flex flex-col items-center">
          <p>Humidity</p>
          <p>Humidity</p>
          <p>Humidity</p>
        </div>
      </div>

      <div className="flex justify-center gap-3 md:gap-12 my-3 text-center">
        <p>Rise</p>
        <p>Rise</p>
        <p>Rise</p>
        <p>Rise</p>
      </div>
    </div>
  )
}

export default MainSection
