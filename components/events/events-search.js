import Button from "../ui/button";
import classes from './events-search.module.css'
import { useRef } from "react";

function EventsSearch(props){
    const yearInputref = useRef();
    const monthInputref = useRef();

    const submitHandler = () =>{
        event.preventDefault();
        const selectedYear = yearInputref.current.value;
        const selectedMonth = monthInputref.current.value;
        console.log(selectedMonth);
        props.onSearch(selectedYear,selectedMonth);
    }


    return <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls} >
            <div className={classes.control} >
                <label htmlFor="year">

                </label>
                <select name="" id="year" ref={yearInputref}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor="month">Month</label>
                <select name="" id="month" ref={monthInputref}>
                    <option value="1">january</option>
                    <option value="2">feb</option>
                    <option value="3">march</option>
                    <option value="4">april</option>
                    <option value="5">may</option>
                    <option value="6">jun</option>
                    <option value="7">july</option>
                    <option value="8">aug</option>
                    <option value="9">sept</option>
                    <option value="10">oct</option>
                    <option value="11">nov</option>
                    
                </select>
            </div>
        </div>
        <Button>Find Events</Button>
    </form>
}
export default EventsSearch;