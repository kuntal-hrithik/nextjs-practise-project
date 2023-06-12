import { getFeaturedEvents } from '../../helpers/api-util'
import { Inter } from 'next/font/google'
import EventList from '../../components/events/event-list'
import NewsletterRegistration from '../../components/input/newsletter-registration'


const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <div>
      <NewsletterRegistration/>
     <EventList items={props.events}></EventList>
    </div>
  )
  }
  export const getStaticProps = async() =>{

    const featuredEvents = await getFeaturedEvents();

    return{
      props:{
        events: featuredEvents
      },
      revalidate: 1800
    }
  }


