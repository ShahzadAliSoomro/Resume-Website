import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import SpecializingGovt from './components/SpecializingGovt'
import Webflow from './components/Webflow'
import ProvidingSection from './components/ProvidingSection'
import FaqSection from './components/FaqSection'
import TeamSection from './components/TeamSection'
import GovtContract from './components/GovtContract'

interface IProps {
  id: string
}

// const GovtContract = ({ id }: IProps) => {
//   return (
//     <div id={id} className="w-full">
//       {/* <GovtContract id="govtcontract"/> */}
//     </div>
//   )
// }


export default function Home() {
  return (
   <div className='w-full'>
    <Hero />
    <div className='mt-24'>
      <FeatureSection />
      <SpecializingGovt />
      <Webflow />
      <ProvidingSection />
      
      <div id="govt">
        <GovtContract />
      </div>
      <FaqSection />
      <TeamSection />
     
    </div>
    
   </div>
  )
}
