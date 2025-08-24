import React from 'react'
import FullWidthSection from "../global/FullWidthSection"
import SvgDivider from "../global/SvgDivider"
import Alert from '../global/Alert'

const FinancedSolutions = () => {
  return (
    <FullWidthSection variant="light">
      <SvgDivider color="#65a30d" />
      <div className="mx-auto max-w-7xl py-12">
        <div className="flex flex-col items-center">
          <h3 className="uppercase text-4xl sm:text-7xl lg:text-8xl font-sfBlack my-8 text-slate-800 text-center">What Do I Do If <br/>I Can't Afford A Lot</h3> 
          <p>
            We have crafted an in-house financing program to help you afford an amazing website build with all the functionality and design intricacies you could need. We will work with you to create a payment plan that fits your budget and allows you to get the website you need to grow your business. Here is how it works.
          </p>
          <ul className="list-disc list-inside my-4">
            <li>A minimum of a $2500 budget total project cost</li>
            <li>A 25% down payment</li>
            <li>Monthly payments for the to 11 months.</li>
            <li>0% interest</li>
            <li>Anything you add that wasn't agreed upon beforehand, you pay as you go</li>
            <li>You will have access to the site the entire time, not when it's paid off</li>
            <li>If the credit card on file fails or declines, and we do not receive a replacement within 10 days, your website will be put under maintenance and inaccessible to users, owners, or browsers.</li>
            <li>If no payment is captured on 2 consecutive months, the project is considered abandoned. Please reach out to us so that we may find a way to help.</li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <p className='text-amber-500 text-left mb-2'>Let's look at an example</p>
          <table className="min-w-full divide-y divide-slate-900">
            <tbody className="divide-y divide-slate-900 bg-blue-600">
              <tr>
                <td className="py-4 pl-4 pr-3 text-sm text-slate-50 sm:pl-6"><strong>Total Estimated Amount</strong></td>
                <td className="px-3 py-4 text-sm text-slate-50">This could be higher if an e-commerce system is requested</td>
                <td className="px-3 py-4 text-sm text-slate-50">$2500</td>
              </tr>
              <tr>
                <td className="py-4 pl-4 pr-3 text-sm text-slate-50 sm:pl-6"><strong>25% Down Payment</strong></td>
                <td className="px-3 py-4 text-sm text-slate-50">This hires us and initiates the work order</td>
                <td className="px-3 py-4 text-sm text-slate-50">$625*</td>
              </tr>
              <tr>
                <td className="py-4 pl-4 pr-3 text-sm text-slate-50 sm:pl-6"><strong>Remainder</strong></td>
                <td className="px-3 py-4 text-sm text-slate-50">The amount left to pay after the down payment has been paid</td>
                <td className="px-3 py-4 text-sm text-slate-50">$1875</td>
              </tr>
              <tr>
                <td className="py-4 pl-4 pr-3 text-sm text-slate-50 sm:pl-6"><strong>Monthly Obligation (11 months)</strong></td>
                <td className="px-3 py-4 text-sm text-slate-50">You may choose to pay off at any time. This does not include a maintenance package.</td>
                <td className="px-3 py-4 text-sm text-slate-50">$170.45*</td>
              </tr>
            </tbody>
          </table>            
        </div>
        <div className="mt-8">
          <Alert content="* Payment processing fees of 3% + $1.30 applies to all credit card processing payments"/>  
        </div> 
      </div>
    </FullWidthSection>
  )
}

export default FinancedSolutions
