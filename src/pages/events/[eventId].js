import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data"; 
function EventDetailPage (){
    const router = useRouter();
    console.log(router.query);
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    if(!event){
        return <p>NO EVENT FOUND</p>
    }
    return (
        <div>
            <h1>Event Detail</h1>
        </div>
    )
}
export default EventDetailPage;