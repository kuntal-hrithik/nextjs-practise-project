import React from 'react';
import { getAllEvents } from '../../../dummy-data';
import EventList from '../../../components/events/event-list';
import EventSearch from '../../../components/events/events-search';
import { useRouter } from 'next/router';

function AllEventsPage() {
  const events = getAllEvents();
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

export default AllEventsPage;
