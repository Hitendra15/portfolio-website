import PageIntro from '../components/PageIntro'
import ContactCTA from '../components/ContactCTA'
export default function ContactPage() {
  return <><PageIntro eyebrow="Contact" title="Let's talk about what you're building." description="Have a backend feature, API or business application in mind? Share a little about the problem and we can discuss a practical way forward." action={false} /><ContactCTA /></>
}
