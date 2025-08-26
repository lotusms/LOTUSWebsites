import React from 'react'
import PropTypes from 'prop-types'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

const IPhoneFrame = ({ src, className = "" }) => {
  return (
    <div className={className}>
      <div className="scale-90 md:scale-[50%] lg:scale-75 origin-center">
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
  className: PropTypes.string,
}

export default IPhoneFrame
