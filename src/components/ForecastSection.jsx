import React from "react"
import { CiCloud } from "react-icons/ci"

const ForecastSection = () => {
  return (
    <div className=" text-white">
      <div className="flex items-center justify-start mt-6">
        <p>3 Hour step forecast</p>
      </div>
      <hr className="my-1" />
      <div className="flex flex-wrap justify-around gap-3">
        <div className="flex flex-col items-center">
          <p>Wed</p>
          <CiCloud />
        </div>
        <div className="flex flex-col items-center">
          <p>Wed</p>
          <CiCloud />
        </div>
        <div className="flex flex-col items-center">
          <p>Wed</p>
          <CiCloud />
        </div>
        <div className="flex flex-col items-center">
          <p>Wed</p>
          <CiCloud />
        </div>
        <div className="flex flex-col items-center">
          <p>Wed</p>
          <CiCloud />
        </div>
      </div>
    </div>
  )
}

export default ForecastSection
