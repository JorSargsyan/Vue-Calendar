<template>
     <div id="calendar-day"  @click="setActiveDay(day.id)" >
                <div class="title">
                    <h4>{{day.fullTitle}}</h4>
                </div>
                <div class="content">
                    <p>{{day.id}}</p>
                    <CalendarEvent v-for="event in day.events" 
                        v-bind:event="event"
                        v-bind:key="day.events.indexOf(event)"
                        v-bind:day = day
                     
                    />
                </div>
    </div>
</template>


<script>
import CalendarEvent from "./calendarEvent.vue"
import {store} from "../store.js"

export default {
    name: "CalendarDay",
    props:["day"],
    components:{
        CalendarEvent
    },
    methods:{
        setActiveDay(id){
            store.setActiveDay(id);
        }
    }
}
</script>


<style lang="scss">

  #calendar-day {
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.39);
    color: white;
    flex: 1;
    .title {
      background: #00000085;
      padding: 5px 5px;
      h4 {
          text-align: center;
        font-size: 18px;
      }
    }
    .content {
      height: calc(100% - 39px);
      padding: 5px;
      background: #00000047;
   
    }
  }

</style>

