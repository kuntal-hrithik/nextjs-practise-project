import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getFeaturedEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'


const inter = Inter({ subsets: ['latin'] })
const featuredEvents = getFeaturedEvents();
export default function Home() {
  return (
    <div>
     <EventList items={featuredEvents}></EventList>
    </div>
  )
}
