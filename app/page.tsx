import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import SpecializingGovt from './components/SpecializingGovt'
import Webflow from './components/Webflow'
import ProvidingSection from './components/ProvidingSection'
import GovtContract from './components/GovtContract'

export default function Home() {
  return (
   <div className='w-full'>
    <Hero />
    <div className='mt-24'>
      <FeatureSection />
      <SpecializingGovt />
      <Webflow />
      <ProvidingSection />
      <GovtContract />
      
    </div>
    
   </div>
  )
}
