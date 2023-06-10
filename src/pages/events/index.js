import React from 'react';
import { getAllEvents } from '../../../helpers/api-util';
import EventList from '../../../components/events/event-list';
import EventSearch from '../../../components/events/events-search';
import { useRouter } from 'next/router';

function AllEventsPage(props) {
  const events = props.events;
  const router = useRouter();

  const findsEventsHandler = (year,month)=>{
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <div>
      <EventSearch onSearch={findsEventsHandler} />
      <EventList items={events} ></EventList>
    </div>
  );
}

export async function getStaticProps(){
const events = await getAllEvents();
return {
  props:{
    events:events
  },
  revalidate:60
}
}

export default AllEventsPage;
