<template>
      <div id="calendar-entry">
                <input type="text" placeholder="New Event" required v-model="inputEntry"/>
                <p v-if="error" style="color:red">Type something first</p>
                <hr>
                <p>Day of Event: <span>{{titleOfActiveDay}}</span></p>
                <button @click="submitEvent(inputEntry)" class="btn btn-success">Submit</button>
        </div>
</template>


<script>
import {store} from "../store.js"

export default {

    name: "CalendarEntry",
    data(){
      return{
        inputEntry:"",
        error: false
      } 
    },
    computed:{
      titleOfActiveDay(){
       return store.getActiveDay().fullTitle
      }
    },
      methods:{
        submitEvent(eventDetails){
          if (eventDetails === "")
            {return this.error = true;}
          store.submitEvent(eventDetails);
          this.inputEntry = "";
          this.error = false;
        }
    }
}
</script>


<style lang="scss">
    #calendar-entry {
  width: 250px;
  background: white;
  padding: 15px;
  border: 1px solid green;
  border-radius: 17px;
  margin: 0 auto;
  margin-top: 50px;
  h5 {
    color: rgb(63, 62, 62);
  }
  p {
    color: green;
  }
}
</style>

