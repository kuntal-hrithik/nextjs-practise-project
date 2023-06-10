import useSWR from 'swr';
import { useState ,useEffect } from 'react'
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../helpers/api-util";
import EventList from "../../../components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from "../../../components/events/results-title";
import Button from "../../../components/ui/button";



function FilteredEventsPage(props){
    const router = useRouter();
    const filteredData = router.query.slug;
    const [loadedEvents,setLoadedEvents] = useState([]);

   const {data, error} =  useSWR('https://nextjs-course-89f29-default-rtdb.firebaseio.com/events.json')
    
   useEffect(()=>{
    const events = [];

    for(const key in data){
        events.push({
            id:key,
            ...data[key]
        });
    }
    setLoadedEvents(data);
   },[data])
    

    if(!loadedEvents){ 
         return <p className="center"> Loading...</p>
     }

     const filteredUYear = filteredData[0];
     const filteredMonth = filteredData[1];
     const numYear = +filteredUYear;
     const numMonth = +filteredMonth;

     const filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth-1;
      });

   
    if(!filteredEvents || filteredEvents.length === 0){
        return <Fragment><p>No events found</p>
        <div className="center" >
        <Button link="/events" >All Events</Button>
        </div>
       
        </Fragment>
    }

    const date = new Date(numYear, numMonth -1);

    return(
        <Fragment>
            <ResultsTitle date={date}/>
           <EventList items={filteredEvents} ></EventList>
        </Fragment>
    )

    
}

// export async function getServerSideProps(context){
//     const {params} = context;
//     const filteredData = params.slug;

//     const filteredYear = filteredData[0];
  
//     const filteredMonth = filteredData[1];
//     console.log(filteredMonth);
//     const numYear = +filteredYear;
//     const numMonth = +filteredMonth;

//     if(isNaN(numYear)||isNaN(numMonth) || numYear < 2021 || numMonth > 12 || numMonth<1){
//        return {
//         notFound:true,
//        }
//     } 

//     const filteredEvents = await getFilteredEvents({
//         year:numYear,
//         month:numMonth
//     });

//     return {
//         props:{
//             events:filteredEvents,
//             date:{
//                 year:numYear,
//                 month:numMonth 
//             }
//         }
//     }


// }

export default FilteredEventsPage;