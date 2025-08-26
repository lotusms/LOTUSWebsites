import React from "react";
import PropTypes from "prop-types";
import IPhoneFrame from "./IPhoneFrame";

const AppShowcase = ({ title, children, videoSrc, reverse }) => {
  return (
    <div className="flex flex-col items-center space-y-4 border-2 border-lime-600 text-slate-800 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Text Section */}
        <div className={`md:col-span-2 ${reverse ? "md:order-2" : "md:order-1"}`}>
          <h3 className="text-3xl font-sfBlack mb-4 md:px-24">{title}</h3>
          <div className="md:px-24">{children}</div>
        </div>

        {/* iPhone Frame */}
        <div
          className={`flex justify-center ${
            reverse ? "md:justify-start md:order-1" : "md:justify-end md:order-2"
          }`}
        >
          <IPhoneFrame src={videoSrc} />
        </div>
      </div>
    </div>
  );
};

AppShowcase.propTypes = {
  title: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default AppShowcase;
