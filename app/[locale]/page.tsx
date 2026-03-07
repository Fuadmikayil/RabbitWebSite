import Hero from '../../components/Hero'
import Services from '../../components/Services'
import AdoptBunny from '../../components/AdoptBunny'
import RabbitProfiles from '../../components/RabbitProfiles'
import VisionMission from '../../components/VisionMission'
import Team from '../../components/Team'
import Reviews from '../../components/Reviews'
import rabbits from '../../data/baza.json'

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <Services />
      <AdoptBunny />
      <RabbitProfiles rabbits={Array.isArray(rabbits) ? rabbits : []} />
      <VisionMission />
      <Team />
      <Reviews />
    </div>
  )
}
