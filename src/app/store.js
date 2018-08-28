import Vue from "vue"
import {seedData} from "./seed.js"

export const store = {
    state:{
        seedData
    },
    getActiveDay(){
        return this.state.seedData.find((day) => day.active);
    },
    setActiveDay(dayId){
        this.state.seedData.map((dayObj)=>{
            dayObj.id == dayId ? dayObj.active = true : dayObj.active=false;
        })
    },
    submitEvent(eventDetails){
        const ActiveDay = this.getActiveDay();
        ActiveDay.events.push({"details":eventDetails,"edit":false})
    },
    editEvent(DayId,eventDetails){
        this.resetAllEditFieldsHelper();
        const EventObj =   this.getEventObjHelper(DayId,eventDetails);

        EventObj.edit = true;
    },
    updateEvent(dayId,originalEventDetails,newEventDetails){
      
        const  EventObj =  this.getEventObjHelper(dayId,originalEventDetails);
          EventObj.details = newEventDetails;
          EventObj.edit = false;
      },
    deleteEvent(dayId,eventDetails){
       const DayObj = this.state.seedData.find(
           day => day.id === dayId
       )
       const DeletingItemIndex = DayObj.events.findIndex(
            event => event.details === eventDetails
       )

       DayObj.events.splice(DeletingItemIndex,1);

    },
    resetAllEditFieldsHelper(){
        this.state.seedData.map((dayObj => {
            dayObj.events.map((event)=>{
                event.edit=false;
            })
        }))
    },
   
    getEventObjHelper(dayId,eventDetails){
        const DayObj = this.state.seedData.find(
            day => day.id === dayId
        );
        return  DayObj.events.find(
            event => event.details == eventDetails
        )
    }
  
        
}