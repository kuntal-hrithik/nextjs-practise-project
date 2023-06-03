import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../../components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from "../../../components/events/results-title";
import Button from "../../../components/ui/button";
function FilteredEventsPage(){
    const router = useRouter();
    const filteredData = router.query.slug;
    //console.log(filteredData);
    if(!filteredData){
        return <p className="center"> Loading...</p>
    }

    const filteredYear = filteredData[0];
  
    const filteredMonth = filteredData[1];
    console.log(filteredMonth);
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numYear)||isNaN(numMonth) || numYear < 2021 || numMonth > 12 || numMonth<1){
       return <Fragment>
        <p>Invalid filter:Plaeade chck your url</p>
       </Fragment>
    } 

    const filteredEvents = getFilteredEvents({
        year:numYear,
        month:numMonth
    })
    console.log(filteredEvents);
    if(!filteredEvents || filteredEvents.length === 0){
        return <Fragment><p>No events found</p>
        <div className="center" >
        <Button link="/events" ></Button>
        </div>
       
        </Fragment>
    }
    const date = new Date(numYear, numMonth-1);
    return(
        <Fragment>
            <ResultsTitle date={date}/>
           <EventList items={filteredEvents} ></EventList>
        </Fragment>
    )
}

export default FilteredEventsPage;