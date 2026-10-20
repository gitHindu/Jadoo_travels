import { useEffect, useState } from 'react'
import {
  ArrowRight, Building2, ChevronDown, ChevronUp, CreditCard, Heart, Mail,
  Leaf, Map, Menu, Plane, Play, Send, X, MapPin,
} from 'lucide-react'
import { FaApple, FaFacebookF, FaGooglePlay, FaInstagram, FaTwitter } from 'react-icons/fa'
import heroDecoration from './Public/images/Decore.png'
import hero from './Public/images/hero.png'
import destinationsSideDecoration from './Public/images/side-right.png'
import weatherServiceImage from './Public/images/Group 48.png'
import customizationServiceImage from './Public/images/Group 49.png'
import trip from './Public/images/trip.jpg'
import eventsServiceImage from './Public/images/Group 50.png'
import flightsServiceImage from './Public/images/Group 51 (2).png'
const testimonials = [
  {
    quote: 'Our trip was wonderfully organized from start to finish. Every detail felt easy, and we came home with memories we will treasure.',
    name: 'Mike Taylor',
    location: 'Lahore, Pakistan',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=85',
  },
  {
    quote: 'A brilliant experience with thoughtful recommendations and smooth arrangements. We discovered places we would never have found on our own.',
    name: 'Chris Thomas',
    location: 'CEO of Red Button',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=85',
  },
  {
    quote: 'From the first booking to the journey home, everything was simple and welcoming. I cannot wait to plan our next adventure.',
    name: 'Sarah Kline',
    location: 'Berlin, Germany',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=85',
  },
]

const partnerCompanies = [
  { name: 'Axon Airlines', wordmark: 'axon', detail: 'AIRLINES', className: 'font-heading text-2xl font-bold tracking-[-0.08em] text-[#777777]' },
  { name: 'Jetstar', wordmark: 'jetstar', detail: '★', className: 'text-xl font-extrabold tracking-[-0.06em] text-[#111111]' },
  { name: 'Expedia', wordmark: 'Expedia', detail: '', className: 'text-xl font-semibold tracking-tight text-[#17406d]' },
  { name: 'Qantas', wordmark: 'QANTAS', detail: '', className: 'text-base font-extrabold tracking-tight text-[#333333]' },
  { name: 'Alitalia', wordmark: 'Alitalia', detail: '', className: 'font-heading text-lg font-bold italic tracking-tight text-[#555555]' },
]

const bookingSteps = [
  {
    title: 'Choose Destination',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    icon: MapPin,
    color: 'bg-gold',
  },
  {
    title: 'Make Payment',
    description: 'Choose a convenient payment method and confirm your next trip.',
    icon: CreditCard,
    color: 'bg-coral',
  },
  {
    title: 'Reach Airport on Selected Date',
    description: 'Your travel details are ready. Just arrive on time and enjoy the journey.',
    icon: Plane,
    color: 'bg-[#006380]',
  },
]

const featuredTrip = {
  title: 'Trip To Greece',
  date: '14–29 June',
  traveler: 'by Robin J',
  image: trip,
  alt: 'White buildings and blue sea in Santorini, Greece',
}

const destinations = [
  {
    city: 'Rome, Italy',
    price: '$5.42k',
    days: '10 Days Trip',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=85',
    alt: 'Colosseum in Rome, Italy',
  },
  {
    city: 'London, UK',
    price: '$4.2k',
    days: '12 Days Trip',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=85',
    alt: 'Big Ben and Westminster in London',
  },
  {
    city: 'Full Europe',
    price: '$15k',
    days: '28 Days Trip',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=85',
    alt: 'Paris rooftops and the Eiffel Tower',
  },
]

const services = [
  {
    title: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
    image: weatherServiceImage,
  },
  {
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
    image: flightsServiceImage,
  },
  {
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
    image: eventsServiceImage,
  },
  {
    title: 'Customization',
    description: 'We deliver outsourced aviation services for military customers.',
    image: customizationServiceImage,
  },
]

function SectionHeading({ eyebrow, children }) {
  return (
    <div className="mb-10 text-center reveal">
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.02em] text-muted">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">{children}</h2>
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [language, setLanguage] = useState('EN')
  const [signUpOpen, setSignUpOpen] = useState(false)

  const navItems = ['Destinations', 'Hotels', 'Flights', 'Bookings']

  return (
    <>
      <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-7">
        <a href="#home" aria-label="Jadoo home" className="font-heading text-[26px] font-bold tracking-tight text-[#181e4b]">
          Jadoo<span className="text-gold">.</span>
        </a>
        <button
          className="rounded-lg p-2 text-ink lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={`${menuOpen ? 'absolute left-4 right-4 top-[75px] flex rounded-2xl border border-black/5 bg-white p-5 shadow-soft' : 'hidden'} flex-col gap-5 lg:static lg:flex lg:flex-row lg:items-center lg:gap-5 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none xl:gap-8`}>
          {navItems.map((item) => (
            <a key={item} href={item === 'Destinations' ? '#destinations' : '#services'} onClick={() => setMenuOpen(false)} className="text-xs font-medium text-[#212832] transition-colors hover:text-coral xl:text-sm">
              {item}
            </a>
          ))}
          <a href="#footer" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#212832] transition-colors hover:text-coral">Login</a>
          <button onClick={() => setSignUpOpen(true)} className="rounded-md border border-[#212832] px-4 py-2 text-sm font-medium text-[#212832] transition hover:border-gold hover:bg-gold hover:text-white">Sign up</button>
          <div className="relative">
            <button onClick={() => setLanguageOpen(!languageOpen)} aria-expanded={languageOpen} className="flex items-center gap-1 text-sm text-[#212832]">
              {language} <ChevronDown size={13} />
            </button>
            {languageOpen && (
              <div className="absolute right-0 top-8 min-w-20 rounded-lg border border-black/5 bg-white p-1 shadow-soft">
                {['EN', 'TE', 'HI'].map((lang) => (
                  <button key={lang} onClick={() => { setLanguage(lang); setLanguageOpen(false) }} className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-[#fff1da]">{lang}</button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>
      {signUpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4" role="dialog" aria-modal="true" aria-labelledby="signup-title" onClick={() => setSignUpOpen(false)}>
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h3 id="signup-title" className="font-heading text-2xl font-bold text-ink">Join Jadoo</h3>
              <button onClick={() => setSignUpOpen(false)} aria-label="Close sign up" className="rounded-full p-2 hover:bg-gray-100"><X size={18} /></button>
            </div>
            <p className="mb-5 text-sm leading-6 text-muted">Create an account to save your favourite destinations and trips.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSignUpOpen(false); window.alert('Thanks for your interest! Connect this form to your signup service.') }}>
              <label className="mb-1 block text-sm font-medium text-ink" htmlFor="signup-email">Email address</label>
              <input id="signup-email" type="email" required placeholder="you@example.com" className="mb-4 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold" />
              <button type="submit" className="w-full rounded-lg bg-gold px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#df9700]">Get started</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

function Hero() {
  const [demoOpen, setDemoOpen] = useState(false)
  return (
    <section id="home" className="relative">
      <div className="relative mx-auto grid min-h-[570px] max-w-7xl items-center gap-8 px-5 pb-[50px] pt-5 sm:px-8 md:grid-cols-2 lg:min-h-[610px] lg:px-12 lg:pt-0">
        <div className="relative z-10 max-w-xl reveal md:-translate-x-1 lg:-translate-x-2">
          <p className="mb-4 text-xs font-bold uppercase tracking-wide text-coral sm:text-sm">Best destinations around the world</p>
          <h1 className="max-w-[610px] font-heading text-[42px] font-bold leading-[1.08] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[62px]">
            Travel, <span className="relative inline-block after:absolute after:-bottom-1 after:left-[15%] after:h-[3px] after:w-[115%] after:-rotate-2 after:rounded-full after:bg-coral after:content-['']">enjoy</span><br className="hidden sm:block" /> and live a new<br className="hidden sm:block" /> and full life
          </h1>
          <p className="mt-5 max-w-[390px] text-[12px] leading-[1.9] text-muted sm:text-[13px]">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a href="#destinations" className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-xs font-medium text-white shadow-[0_12px_22px_rgba(241,165,1,.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#df9700]">
              Find out more <ArrowRight size={14} />
            </a>
            <button onClick={() => setDemoOpen(true)} className="group inline-flex items-center gap-3 text-xs font-medium text-muted">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-white shadow-[0_8px_16px_rgba(223,105,81,.25)] transition group-hover:scale-110"><Play size={13} fill="currentColor" /></span>
              Play Demo
            </button>
          </div>
        </div>
        <div className="relative flex min-h-[300px] items-center justify-center md:min-h-[500px] reveal">
          <div className="absolute right-4 top-4 h-44 w-44 rounded-full bg-[#ffe5b4]/60 blur-3xl md:hidden" />
          <img
            src={hero}
            alt="Traveller enjoying a scenic destination"
            className="hero-traveller relative z-10 max-h-[300px] w-full max-w-[500px] rounded-none object-cover object-center  md:max-h-[400px] md:rounded-[48%_48%_28%_28%] md:shadow-none lg:max-h-[480px]"
          />
        
       
        </div>
      </div>
      {demoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4" role="dialog" aria-modal="true" aria-label="Travel demo" onClick={() => setDemoOpen(false)}>
          <div className="relative w-full max-w-xl rounded-2xl bg-white p-8 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setDemoOpen(false)} aria-label="Close demo" className="absolute right-3 top-3 rounded-full p-2 hover:bg-gray-100"><X size={18} /></button>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-coral text-white"><Play size={20} fill="currentColor" /></div>
            <h3 className="font-heading text-2xl font-bold text-ink">Let the journey begin</h3>
            <p className="mt-3 text-sm leading-6 text-muted">This demo area is ready for your travel video. Add your YouTube or MP4 embed here.</p>
          </div>
        </div>
      )}
    </section>
  )
}

function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 pb-[70px] pt-2 sm:px-8 lg:px-12 lg:pt-4">
      <div className="dot-pattern absolute right-4 top-2 hidden h-24 w-24 opacity-70 md:block" />
      <SectionHeading eyebrow="Category">We Offer Best Services</SectionHeading>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {services.map(({ title, description, image }, index) => {
          const isSelected = selectedService === title
          return (
            <article key={title} className="group relative reveal" style={{ transitionDelay: `${index * 70}ms` }}>
              <div
                aria-hidden="true"
                className={`absolute -bottom-2 -left-4 z-0 h-16 w-16 rounded-br-[30px] rounded-tl-[30px] bg-coral transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'}`}
              />
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedService(title)}
                className={`relative z-10 flex min-h-[190px] w-full flex-col items-center rounded-[24px] bg-white px-5 py-7 text-center transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral ${isSelected ? 'shadow-[0_20px_40px_rgba(0,0,0,.10)]' : ''}`}
              >
                <img src={image} alt="" aria-hidden="true" className="mb-5 h-12 w-14 object-contain" />
                <h3 className="mb-3 text-sm font-semibold text-[#1e1d4c]">{title}</h3>
                <p className="max-w-[190px] text-[11px] leading-[1.8] text-muted">{description}</p>
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Destinations() {
  const [saved, setSaved] = useState([])
  return (
    <section id="destinations" className="relative mx-auto max-w-7xl px-5 pb-[70px] pt-3 sm:px-8 lg:px-12">
      <SectionHeading eyebrow="Top Selling">Top Destinations</SectionHeading>
      <div className="relative">
        <img
          src={destinationsSideDecoration}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 top-1/2 z-0 hidden h-60 w-12 -translate-y-1/2 object-contain lg:block"
        />
        <div className="relative z-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {destinations.map((destination, index) => {
          const isSaved = saved.includes(destination.city)
          return (
            <article key={destination.city} className="destination-card reveal group relative mx-auto w-full max-w-[370px] overflow-hidden rounded-2xl bg-white shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_55px_rgba(0,0,0,.13)]" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative h-[250px] overflow-hidden sm:h-[270px]">
                <img src={destination.image} alt={destination.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <button onClick={() => setSaved((current) => isSaved ? current.filter((city) => city !== destination.city) : [...current, destination.city])} aria-label={isSaved ? `Remove ${destination.city} from saved trips` : `Save ${destination.city}`} className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur transition ${isSaved ? 'bg-coral text-white' : 'bg-white/90 text-ink hover:bg-white'}`}>
                  <span aria-hidden="true">{isSaved ? '♥' : '♡'}</span>
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3 text-sm font-medium text-muted">
                  <h3>{destination.city}</h3>
                  <span>{destination.price}</span>
                </div>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                  <Plane size={14} className="rotate-[-35deg] text-[#080809]" />
                  <span>{destination.days}</span>
                  {isSaved && <span className="ml-auto text-[10px] text-coral">Saved to wishlist</span>}
                </div>
              </div>
            </article>
          )
        })}
        </div>
      </div>
    </section>
  )
}

function BookingSteps() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-[70px] pt-4 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
      <div className="reveal">
        <p className="mb-3 text-xs font-semibold text-muted">Easy and Fast</p>
        <h2 className="max-w-lg font-heading text-[40px] font-bold leading-tight text-ink sm:text-4xl lg:text-[38px]">
          Book Your Next Trip<br className="hidden sm:block" /> In 3 Easy Steps
        </h2>
        <div className="mt-8 space-y-6">
          {bookingSteps.map(({ title, description, icon: Icon, color }) => (
            <div key={title} className="flex items-center gap-4">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color} text-white`}>
                <Icon size={21} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-muted">{title}</h3>
                <p className="mt-1 max-w-sm text-[11px] leading-[1.7] text-muted">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[410px] pb-4 reveal lg:pb-12">
        <div aria-hidden="true" className="absolute -right-8 -top-10 h-64 w-64 rounded-full bg-[#59b1e6]/15 blur-3xl" />
        <article className="relative z-10 rounded-[28px] bg-white p-4 shadow-[0_25px_60px_rgba(24,30,75,.12)] sm:p-6">
          <img
            src={featuredTrip.image}
            alt={featuredTrip.alt}
            loading="lazy"
            className="h-[160px] w-full rounded-[20px] object-cover sm:h-[175px]"
          />
          <div className="mt-5 flex items-center justify-between gap-3">
            <h3 className="text-sm font-medium text-[#080809] sm:text-base">{featuredTrip.title}</h3>
           
          </div>
          <p className="mt-2 text-xs font-medium text-[#84829a] sm:text-sm">
            {featuredTrip.date}<span className="mx-2">|</span>{featuredTrip.traveler}
          </p>
          <div className="mt-5 flex items-center gap-3 text-[#84829a]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f5]"><Leaf size={16} /></span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f5]"><Map size={16} /></span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f5]"><Send size={15} /></span>
          </div>
          <div className="mt-6 flex items-center gap-3 text-xs font-medium text-[#84829a]">
            <Building2 size={16} strokeWidth={1.6} />
            <span>24 people going</span>
            <Heart aria-hidden="true" className="ml-auto text-[#5265f5]" size={19} strokeWidth={1.8} />
          </div>
        </article>

        <aside className="relative right-0 z-20 mt-4 w-full rounded-2xl bg-white p-3 shadow-[0_18px_40px_rgba(24,30,75,.14)] lg:absolute lg:top-[63%] lg:mt-0 lg:w-[210px] lg:-translate-y-1/2 lg:-right-10">
          <div className="flex items-center gap-3">
            <img src={destinations[0].image} alt="" className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12" />
            <div>
              <p className="text-[10px] text-[#84829a] sm:text-[10px]">Ongoing</p>
              <h3 className="mt-0.5 text-[9px] font-medium text-[#080809] sm:text-[9px]">Trip to Rome</h3>
            </div>
          </div>
          <p className="mt-2 pl-[52px] text-[10px] text-[#080809] sm:pl-[60px] sm:text-xs"><span className="font-semibold text-[#8a79df]">40%</span> completed</p>
          <div className="ml-[52px] mt-2 h-1.5 overflow-hidden rounded-full bg-[#f1f1f1] sm:ml-[60px]">
            <div className="h-full w-[40%] rounded-full bg-[#8a79df]" />
          </div>
         
        </aside>
      </div>
    </section>
  )
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]
  const nextTestimonial = testimonials[(activeIndex + 1) % testimonials.length]
  const showPrevious = () => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  const showNext = () => setActiveIndex((current) => (current + 1) % testimonials.length)

  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-[50px] pt-3 sm:px-8 md:grid-cols-2 lg:gap-16 lg:px-12">
      <div className="reveal">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-muted">Testimonials</p>
        <h2 className="max-w-md font-heading text-3xl font-bold leading-tight text-ink sm:text-[40px] lg:text-[46px]">
          What People Say<br className="hidden sm:block" /> About Us.
        </h2>
        <div className="mt-10 flex items-center gap-3" aria-label="Choose a testimonial">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${activeIndex === index ? 'bg-[#39425d]' : 'bg-[#e5e5e5] hover:bg-[#aeb0b8]'}`}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto min-h-[290px] w-full max-w-[570px] reveal">
        <article aria-hidden="true" className="absolute right-10 top-10 z-0 min-h-[190px] w-[calc(100%-52px)] rounded-xl border border-[#f0f0f0] bg-white px-6 pb-5 pt-20 shadow-[0_12px_35px_rgba(24,30,75,.04)] sm:right-12 sm:w-[calc(100%-64px)]">
          <h3 className="text-xs font-semibold text-[#5e6282]">{nextTestimonial.name}</h3>
          <p className="mt-1 text-[10px] text-[#5e6282]">{nextTestimonial.location}</p>
        </article>

        <article key={activeTestimonial.name} className="relative z-10 min-h-[210px] w-[calc(100%-52px)] rounded-xl bg-white px-6 pb-5 pt-10 shadow-[0_22px_50px_rgba(24,30,75,.12)] sm:w-[calc(100%-64px)] sm:px-7">
          <img
            src={activeTestimonial.avatar}
            alt=""
            className="absolute -left-4 -top-4 h-11 w-11 rounded-full object-cover ring-4 ring-white sm:-left-5 sm:-top-5 sm:h-12 sm:w-12"
          />
          <blockquote className="text-[11px] leading-[1.9] text-[#5e6282] sm:text-xs">
            “{activeTestimonial.quote}”
          </blockquote>
          <h3 className="mt-5 text-xs font-semibold text-[#5e6282]">{activeTestimonial.name}</h3>
          <p className="mt-1 text-[10px] text-[#5e6282]">{activeTestimonial.location}</p>
        </article>

        <div className="absolute right-0 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-5">
          <button type="button" onClick={showPrevious} aria-label="Previous testimonial" className="rounded p-1 text-[#bcbcc8] transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral">
            <ChevronUp size={17} />
          </button>
          <button type="button" onClick={showNext} aria-label="Next testimonial" className="rounded p-1 text-[#5e6282] transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral">
            <ChevronDown size={17} />
          </button>
        </div>
      </div>
    </section>
  )
}

function Partners() {
  const [selectedPartner, setSelectedPartner] = useState(null)

  return (
    <section aria-label="Our partners" className="mx-auto max-w-7xl px-5 pb-[70px] sm:px-8 lg:px-12">
      <div className="grid grid-cols-2 items-center justify-items-center gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
        {partnerCompanies.map(({ name, wordmark, detail, className }) => (
          <button
            key={name}
            type="button"
            aria-label={name}
            aria-pressed={selectedPartner === name}
            onClick={() => setSelectedPartner(name)}
            className={`flex min-h-[58px] w-full items-center justify-center gap-1 rounded-xl p-0.5 transition duration-300 hover:shadow-[0_12px_30px_rgba(24,30,75,.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${selectedPartner === name ? 'shadow-[0_12px_30px_rgba(24,30,75,.12)]' : ''}`}
          >
            <span className={className}>{wordmark}</span>
            {detail && (
              <span className={name === 'Axon Airlines' ? 'mt-4 -ml-2 text-[7px] font-semibold tracking-[0.12em] text-[#777777]' : 'text-sm text-[#999999]'}>
                {detail}
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

function Subscribe() {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Connect this form to your mailing-list service to enable subscriptions.')
  }

  return (
    <section aria-label="Subscribe to Jadoo updates" className="relative mx-auto max-w-7xl px-5 pb-[70px] sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <div className="relative overflow-hidden rounded-[24px] rounded-tl-[40px] bg-[#f9f7fe] px-5 py-12 sm:rounded-[36px] sm:rounded-tl-[72px] sm:px-10 sm:py-14 lg:px-20">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-[300px] w-[300px] rounded-full border border-[#e9e4f8] sm:-left-16">
            <div className="absolute inset-3 rounded-full border border-[#ece8f9]" />
            <div className="absolute inset-6 rounded-full border border-[#ece8f9]" />
            <div className="absolute inset-9 rounded-full border border-[#ece8f9]" />
            <div className="absolute inset-12 rounded-full border border-[#ece8f9]" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-[250px] w-[250px] rounded-full border border-[#e9e4f8]">
            <div className="absolute inset-3 rounded-full border border-[#ece8f9]" />
            <div className="absolute inset-6 rounded-full border border-[#ece8f9]" />
            <div className="absolute inset-9 rounded-full border border-[#ece8f9]" />
            <div className="absolute inset-12 rounded-full border border-[#ece8f9]" />
          </div>

          <div className="relative z-10 mx-auto max-w-[720px] text-center">
            <h2 className="text-base font-semibold leading-7 text-[#5e6282] sm:text-xl sm:leading-8 lg:text-2xl">
              Subscribe to get information, latest news and other<br className="hidden sm:block" /> interesting offers about Jadoo
            </h2>
            <form className="mx-auto mt-8 flex max-w-[480px] flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
              <label className="flex min-h-[48px] flex-1 items-center gap-3 rounded-lg bg-white px-4 text-[#5e6282] shadow-sm">
                <Mail size={16} strokeWidth={1.7} />
                <span className="sr-only">Your email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="min-w-0 flex-1 border-0 bg-transparent text-xs text-ink outline-none placeholder:text-[#8a8a9a]"
                />
              </label>
              <button type="submit" className="min-h-[48px] rounded-lg bg-[#ff806d] px-8 text-xs font-medium text-white shadow-sm transition hover:bg-[#f16e5c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral">
                Subscribe
              </button>
            </form>
            {message && <p role="status" className="mt-3 text-xs text-muted">{message}</p>}
          </div>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-[-12px] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7471f5] to-[#554de8] text-white shadow-[0_8px_18px_rgba(100,91,234,.3)] sm:top-[-18px] sm:h-12 sm:w-12 lg:h-[58px] lg:w-[58px]">
          <Send size={22} fill="currentColor" strokeWidth={1.5} />
        </div>
      </div>

    </section>
  )
}

function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-[#f8f3ff] blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-7 gap-y-9 px-5 pb-8 pt-6 sm:grid-cols-3 sm:gap-x-8 sm:px-8 sm:pb-10 md:grid-cols-3 lg:grid-cols-[1.6fr_0.8fr_0.8fr_0.8fr_1.2fr] lg:gap-10 lg:px-12 lg:pt-10">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <a href="#home" className="font-heading text-3xl font-bold text-ink sm:text-[34px]">Jadoo<span className="text-gold">.</span></a>
          <p className="mt-3 max-w-[230px] text-[10px] leading-[1.7] text-muted sm:text-[11px]">
            Book your trip in minute, get full<br className="hidden lg:block" /> Control for much longer.
          </p>
        </div>

        <nav aria-label="Company" className="flex flex-col items-start gap-2 text-xs text-muted sm:gap-3">
          <h2 className="mb-1 text-sm font-bold text-[#080809] sm:text-base">Company</h2>
          <a className="transition hover:text-coral" href="#home">About</a>
          <a className="transition hover:text-coral" href="#footer">Careers</a>
          <a className="transition hover:text-coral" href="#footer">Mobile</a>
        </nav>

        <nav aria-label="Contact" className="flex flex-col items-start gap-2 text-xs text-muted sm:gap-3">
          <h2 className="mb-1 text-sm font-bold text-[#080809] sm:text-base">Contact</h2>
          <a className="transition hover:text-coral" href="mailto:hello@example.com">Help/FAQ</a>
          <a className="transition hover:text-coral" href="#footer">Press</a>
          <a className="transition hover:text-coral" href="#footer">Affiliates</a>
        </nav>

        <nav aria-label="More" className="flex flex-col items-start gap-2 text-xs text-muted sm:gap-3">
          <h2 className="mb-1 text-sm font-bold text-[#080809] sm:text-base">More</h2>
          <a className="transition hover:text-coral" href="#footer">Airlinefees</a>
          <a className="transition hover:text-coral" href="#footer">Airline</a>
          <a className="transition hover:text-coral" href="#footer">Low fare tips</a>
        </nav>

        <div className="col-span-2 flex flex-col items-start sm:col-span-1">
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#080809] shadow-[0_2px_10px_rgba(0,0,0,.1)] transition hover:-translate-y-0.5 hover:text-coral"><FaFacebookF size={13} /></a>
            <a href="https://www.instagram.com/" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#e4a2cb] via-[#bc55d6] to-[#ffd26b] text-white shadow-[0_2px_10px_rgba(0,0,0,.1)] transition hover:-translate-y-0.5"><FaInstagram size={16} /></a>
            <a href="https://x.com/" aria-label="X" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#080809] shadow-[0_2px_10px_rgba(0,0,0,.1)] transition hover:-translate-y-0.5 hover:text-coral"><FaTwitter size={14} /></a>
          </div>
          <p className="mb-3 mt-4 text-sm text-muted">Discover our app</p>
          <div className="flex flex-wrap gap-2">
            <a href="https://play.google.com/store" className="flex min-h-8 items-center gap-1.5 rounded-full bg-[#080809] px-2.5 py-1 text-white transition hover:bg-[#333]">
              <FaGooglePlay size={13} />
              <span className="text-[7px] leading-[1.1]">GET IT ON<br /><strong className="text-[9px]">Google Play</strong></span>
            </a>
            <a href="https://www.apple.com/app-store/" className="flex min-h-8 items-center gap-1.5 rounded-full bg-[#080809] px-2.5 py-1 text-white transition hover:bg-[#333]">
              <FaApple size={16} />
              <span className="text-[7px] leading-[1.1]">Download on the<br /><strong className="text-[9px]">App Store</strong></span>
            </a>
          </div>
        </div>

        <p className="col-span-2 pt-2 text-center text-[10px] text-muted sm:col-span-3 lg:col-span-5">
          All rights reserved@jadoo.co
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-white font-body text-[#212832]">
      <div className="relative overflow-hidden bg-white">
        <img
          src={heroDecoration}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 hidden h-[480px] w-[58%] md:block lg:h-[560px]"
        />
        <Header/>
        <Hero />
      </div>
      <main>
        <Services />
        <Destinations />
        <BookingSteps />
        <Testimonials />
        <Partners />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}