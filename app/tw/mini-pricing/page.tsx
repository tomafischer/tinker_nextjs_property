import React from 'react'
import PricingCard from './PricingCard'
type Props = {}

const CardsPage = ({ }: Props) => {
  const features_basic = [
    '100GB Storage',
    '2 Users',
    '10 Projects',
    
]
const features_standard = [
    '200GB Storage',
    '5 Users',
    '50 Projects',]

const features_premium= [
    '2TB Storage',
    '10 Users',
    'unlimited Projects',
 ]
  return (
    // Global container
    <div className="flex items-center justify-center min-h-screen bg-slate-800" >
      {/* inner conatiner */}
      <div className="flex flex-col space-y-6 my-6 md:my-0 md:space-x-6 md:space-y-0 md:flex-row  ">
        <PricingCard plantype='Basic' size="100GB" price="1.99" isFocus={false} features={features_basic} />
        <PricingCard plantype='Standard' size="200GB" price="3.99" isFocus={true} features={features_standard}/>
        <PricingCard plantype='Premium' size="2TB" price="8.99"
        isFocus={false} features={features_premium}/>

      </div>
    </div>
  )
}

// CardsPage.getLayout = function getLayout(page : React.ReactNode) {
//   return (

//       {page}

//   )
// }

export default CardsPage