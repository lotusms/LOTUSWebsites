import React from 'react'
import FullWidthSection from '../global/FullWidthSection'
import SvgDivider from '../global/SvgDivider'
import Card from '../global/Card'
import ResponsiveBackgroundNumber from '@/components/webdesign/ResponsiveBackgroundNumber';
import TextResizeObserver from '@/components/webdesign/TextResizeObserver';
import PropTypes from 'prop-types'
import WebsiteCostCalculator from './WebsiteCostCalculator';

const Cost = ({data}) => {
  return (
    <FullWidthSection variant="light" className=''>  
      <SvgDivider color="#65a30d" />
      <div className="mx-auto max-w-7xl py-12 px-8">
        <h2 className="uppercase text-4xl sm:text-7xl lg:text-8xl text-center font-sfBlack mb-8 text-slate-700">
          Web Design Costs <br/>Made Clear
        </h2>
        <p className="text-center">
          We believe in transparency and clarity when it comes to web design costs. Our pricing is straightforward, with no hidden fees or surprises. Your website is completely customized to your needs. We do not recycle designs or use templates. This means that the cost of your website will depend on the complexity and features you require. 
          <br/><br/> 
          Connect with our web designers today to get your custom quote! But in the meantime, here are some of the factors that influence web design pricing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
          <div className="grid grid-cols-1 gap-4">
            {data.map((item, index) => (
              <div key={index}>
                <Card variant="lime" className="relative flex flex-col h-full">
                  <ResponsiveBackgroundNumber>{index + 1}</ResponsiveBackgroundNumber>
                  <div className="p-4">
                    <TextResizeObserver max={28} min={12}>
                      <h4 className="font-sfHeavy text-slate-900/80 tracking-tight mb-4 text-right">
                        {item.title}
                      </h4>
                    </TextResizeObserver>
                    <TextResizeObserver max={16} min={12}>
                      <p className="text-justify">{item.description}</p>
                    </TextResizeObserver>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div>
            <Card variant="dark" className="p-4">
              <TextResizeObserver max={28} min={12}>
                <h4 className="font-sfHeavy text-slate-100 tracking-tight mb-4 text-left">
                  Cost Calculator
                </h4>
              </TextResizeObserver>

              <TextResizeObserver max={16} min={12}>
                <p className="text-justify">
                  We understand that every project is unique. That's why we offer a cost calculator to help you estimate your project's cost based on your specific needs and requirements. Keep in mind that this is just an estimate, and the final cost may vary based on the complexity of your project and any additional features or services you may require.
                </p>
                <p className="text-lime-500 font-sfHeavy text-center my-4 border border-lime-500 rounded-lg p-4">
                  And yes, it may actually be lower than the estimate!
                </p>
              </TextResizeObserver>    

              <WebsiteCostCalculator/>
            </Card>
          </div>
        </div>

      </div>
    </FullWidthSection>
  )
}

Cost.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.string,
    link: PropTypes.string,
    linktitle: PropTypes.string
  })).isRequired
}


export default Cost
