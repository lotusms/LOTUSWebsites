'use client';

import Button from "./Button";
import useContactLinks from "@/hooks/useContactLinks";
import PropTypes from "prop-types";

const Cta = ({label = true, link=""}) => {
  const { phoneLink, emailLink } = useContactLinks();

  return (
    <div className="flex flex-col lg:flex-row mt-4 gap-8 w-full items-center justify-between px-12 py-8 text-white">

      <h3 className="text-2xl font-sfHeavy leading-relaxed">{label ? "Ready to Start Your Project?" : ""}</h3>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex gap-4">
          <Button as="a" href={phoneLink} variant="primary">
            BOOK A CALL
          </Button>
          <Button as="a" href={emailLink} variant="primary">
            EMAIL US
          </Button> 
        </div>
        <div className="flex justify-center items-center p-4">
          <p className="flex w-full mx-auto">or</p>
        </div>
        <Button as="link" href={link} variant="secondary">
          READ MORE
        </Button>
      </div>        
    </div>
  )
}

Cta.propTypes = {
  label: PropTypes.bool,
  link: PropTypes.string,
};

export default Cta
