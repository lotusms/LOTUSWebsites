import React from 'react'
import PropTypes from 'prop-types'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

const IPhoneFrame = ({ src }) => {
  return (
    <div className="flex justify-center">
      <div className="scale-75 sm:scale-90 md:scale-100 origin-top">
        <DeviceFrameset device="iPhone X" color="black" landscape={false}>
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </DeviceFrameset>
      </div>
    </div>
  )
}

IPhoneFrame.propTypes = {
  src: PropTypes.string.isRequired,
}

export default IPhoneFrame
