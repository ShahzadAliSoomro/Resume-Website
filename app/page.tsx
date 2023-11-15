import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'

export default function Home() {
  return (
   <div className='w-full'>
    <Hero />
    <div className='mt-24'>
      <FeatureSection />
      
    </div>
    
   </div>
  )
}
