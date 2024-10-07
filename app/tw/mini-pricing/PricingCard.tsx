import React from 'react'

type Props = {
  plantype: string
  size?: string
  price?: string
  isFocus?: boolean
  features?: string[]
}

export default function PricingCard({ plantype = "Basic", size, price, isFocus, features }: Props) {

  const bg_color_outer_frame = isFocus ? 'bg-violet-600' : 'bg-slate-700'
  const bg_button = isFocus ? 'bg-violet-600' : 'bg-slate-800'

  return (
    // Outer container
    <div className={`${bg_color_outer_frame} p-4 rounded-xl text-white `}>
      {/* inner container */}
      <div className="p-8 rounded-t-xl bg-slate-800">
        <h3 className='uppercase text-center'>{plantype}</h3>
        <h2 className='mt-10 font-serif text-center text-5xl '>{size}</h2>
        <h3 className="text-center mt-4">${price}/Month</h3>
        {/* purchase button */}
        <div className="flex justify-center">
          <a href="#" className={`mt-4 p-10 py-2 border rounded-lg text-center ${bg_button} border-violet-600 hover:bg-violet-800 duration-200 inline-block`}>Purchase</a>
        </div>
      </div>
      {/* divider  */}
      <div className="border-t border-slate-700"></div>
      {/* bottom */}
      <div className="p-8 rounded-b-xl bg-slate-800">
        <div className="flex flex-col space-y-2 ">
          {features && features.map((feature, index) => (
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              <div key={index} className="text-sm ml-1">{feature}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}