'use client';

import Button from "./Button";
import useContactLinks from "@/hooks/useContactLinks";
import PropTypes from "prop-types";

const Cta = ({label = "Ready to Start Your Project?", link="", readmore = true}) => {
  const { phoneLink, emailLink } = useContactLinks();

  return (
    <div className={`flex flex-col ${readmore ? "lg:flex-row px-12 justify-between" :"lg:flex-col justify-center"} mt-4 gap-8 w-full items-center py-8 text-white`}>

      <h3 className="text-2xl font-sfHeavy leading-relaxed">{label ? label : ""}</h3>
      {readmore 
      ? (
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
      )
      : (
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex gap-4">
            <Button as="a" href={phoneLink} variant="primary">
              BOOK A CALL
            </Button>
            <div className="flex justify-center items-center p-4">
              <p className="flex w-full mx-auto">or</p>
            </div>
            <Button as="a" href={emailLink} variant="primary">
              EMAIL US
            </Button> 
          </div>
        </div>   
      )
    }     
    </div>
  )
}

Cta.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  readmore: PropTypes.bool,
};

export default Cta
