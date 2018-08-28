<template>
      <div id="calendar-event" class="text-center" v-bind:style="GetComputedColor" >
        <div v-if="!event.edit">
            <p>{{event.details}}</p>
            <button @click="editEvent(day.id,event.details)" class="btn btn-success"><i class='fa fa-edit'></i></button>
            <button @click="deleteEvent(day.id,event.details)" class="btn btn-danger"><i class='fa fa-remove'></i></button>
        </div>
        <div v-if="event.edit">
            <input type="text" :placeholder="event.details" v-model="newEventDetails">
            <button @click="updateEvent(day.id,event.details,newEventDetails)" class="btn btn-success"><i class="fa fa-check"></i></button>
        </div>
      </div>
</template>


<script>
import CalendarDay from "./calendarDay.vue";
import {store} from "../store.js";

export default {
  name: "CalendarEvent",
  data(){
      return {
          newEventDetails:""
      }
  },
  props: ["day", "event"],
  computed: {
    GetComputedColor() {
      const Colors = [ "#5A7EB8", "#80609E","#1ad611","#118dd6"];
      let randomColor = Colors[Math.floor(Math.random() * Colors.length)];
      return `background-color :${randomColor}`;
    }
  },
  methods:{
      editEvent(dayId,eventDetails){
         store.editEvent(dayId,eventDetails);
      },
      updateEvent(dayId,originalEventDetails,newEventDetails){
          if(newEventDetails == "")
          {return originalEventDetails = newEventDetails};
          store.updateEvent(dayId,originalEventDetails,newEventDetails);
          this.newEventDetails = "";
      },
      deleteEvent(dayId,eventDetails){
          store.deleteEvent(dayId,eventDetails);
      }
  }
};
</script>


<style lang="scss">
#calendar-event {
  background: rgb(0, 255, 64);
  padding: 5px;
  margin-bottom: 15px;
  color: black;
  box-shadow: 0 0 5px 3px #00000026;
  p {
    margin-bottom: 0 !important;
    text-transform: uppercase;
    font-weight: 100;
    font-size: 18px;
  }
  button {
    padding: 3px;
    width: 50px;
  }
  input{
    border: none;
    background: transparent;
    border-bottom: 1px solid white;
    outline:none;
    color:white;
    margin: 10px 5px;
    &::placeholder{
      color:white;
    }
  }
}
</style>

