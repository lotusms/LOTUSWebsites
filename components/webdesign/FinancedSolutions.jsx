import React, { useState } from 'react'
import FullWidthSection from "../global/FullWidthSection"
import SvgDivider from "../global/SvgDivider"
import Dropdown from "../global/Dropdown"
import Alert from '../global/Alert'
import InputField from '../global/InputField'

const FinancedSolutions = () => {
  const downPaymentOptions = ["10%", "25%", "50%"];
  const [estimatedAmount, setEstimatedAmount] = useState(2500);

  const [downPaymentPercent, setDownPaymentPercent] = useState("25%");

  const parsedDownPayment = parseFloat(downPaymentPercent) || 0;
  const downPayment = (estimatedAmount * parsedDownPayment) / 100;
  const remainingBalance = estimatedAmount - downPayment;
  const monthlyPayment = remainingBalance / 12;

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })
  }

  return (
    <FullWidthSection variant="light">
      <SvgDivider color="#65a30d" />
      <div className="mx-auto max-w-7xl py-12 px-8">
        <div className="flex flex-col items-center">
          <h3 className="uppercase text-4xl sm:text-7xl lg:text-8xl font-sfBlack my-8 text-slate-800 text-center">
            What If I Can't <br /> Afford a Big Budget?
          </h3>

          <p className="text-slate-700 my-4 text-center">
            We understand that not every business has the budget to pay for a full website upfront. That’s why we offer a flexible, in-house financing option designed to make it easier for you to get the high-quality website your business needs — without the financial strain.
            <br /><br />
            We'll work with you to create a payment plan that fits your budget and keeps things stress-free. Here’s how our financing works:
          </p>

          <ul className="list-disc list-inside my-6 text-slate-700 text-left">
            <li>We determine your total cost.</li>
            <li>You pay a down payment to start your project (10%, 25%, or 50%). You can select the size of your down payment.</li>
            <li>Monthly payments spread across 12 months</li>
            <li>0% interest</li>
            <li>Any additional requests beyond the original scope are billed separately as needed</li>
            <li>You’ll have full access to your website during the payment period</li>
            <li>If your card fails and isn't updated within 10 days, your site will go into maintenance mode</li>
            <li>Two consecutive missed payments will mark the project as paused — but we’re always open to finding a solution together</li>
            <li>Three consecutive missed payments will mark the project as abandoned. No refunds allowed.</li>
          </ul>

          <p className="text-lg text-slate-700 my-4 text-center">
            Use the calculator below to see how our financing option can work for you. Feel free to adjust the estimated amount and down payment percentage to see how it affects your monthly payments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 my-12">
          {/* Estimated Amount */}
          <div className="flex flex-col">
            <InputField
              label="Estimated Amount"
              labelclassName="text-slate-700 !text-base"
              type="number"
              value={estimatedAmount}
              onChange={(e) => setEstimatedAmount(Number(e.target.value))}
            />
          </div>

          {/* Down Payment % */}
          <div className="flex flex-col">
            <Dropdown
              label="Down Payment %"
              labelclassName="text-slate-700 !text-base"
              options={downPaymentOptions}
              selected={downPaymentPercent}
              onChange={setDownPaymentPercent}
            />
          </div>

          {/* Down Payment Amount */}
          <div className="flex flex-col">
            <InputField
              label="Down Payment"
              labelclassName="text-slate-700 !text-base"
              value={formatCurrency(downPayment)}
              disabled={true}
            />
          </div>

          {/* Remaining Balance */}
          <div className="flex flex-col">
            <InputField
              label="Remaining Balance"
              labelclassName="text-slate-700 !text-base"
              value={formatCurrency(remainingBalance)}
              disabled={true}
            />
          </div>

          {/* Monthly Payment */}
          <div className="flex flex-col">
            <InputField
              label="Monthly Payment"
              labelclassName="text-slate-700 !text-base"
              value={formatCurrency(monthlyPayment)}
              disabled={true}
            />
          </div>
        </div>

        <div className="mt-8">
          <Alert content="* A convenience fee of 4% + $1.30 applies to all credit card processing payments" />
        </div>
      </div>
    </FullWidthSection>
  )
}

export default FinancedSolutions
