import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById,getAllEvents, getFeaturedEvents } from "../../../helpers/api-util";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";
import Comments from "../../../components/input/comments";
function EventDetailPage (props){
    const event = props.selectedEvent;
    if(!event){
        return <p>NO EVENT FOUND</p>
    }
    return (
        <Fragment>
            <EventSummary title={event.title}  ></EventSummary>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} ></EventLogistics>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
            <Comments eventId={event.id}/>
        </Fragment>
    )
}

export async function getStaticProps(context){

    const eventId = context.params.eventId;
    const event = await getEventById(eventId);
    return {
        props:{
            selectedEvent:event
        },
        revalidate:30 
    }
}

export async function getStaticPaths(){

    const events = await getFeaturedEvents();
    const path = events.map(event =>({params:{eventId:event.id}}))
    return {
        paths:path,
        fallback:true
    };
}

export default EventDetailPage;