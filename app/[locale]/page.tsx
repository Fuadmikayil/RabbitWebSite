import Hero from '../../components/Hero'
import RabbitProfiles from '../../components/RabbitProfiles'
import VisionMission from '../../components/VisionMission'
import Reviews from '../../components/Reviews'
import rabbits from '../../data/baza.json'

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <RabbitProfiles rabbits={Array.isArray(rabbits) ? rabbits : []} />
      <VisionMission />
      <Reviews />
    </div>
  )
}
