<template>
           <div id="calendar-week">
               <CalendarDay v-for="day in sharedState.seedData"
                v-bind:key="day.id"
                v-bind:day="day" />
            </div>
</template>


<script>
import {store} from "../store.js"
import CalendarDay from "./calendarDay.vue"

export default {
  name:  "CalendarWeek",
  data(){
      return {
          sharedState :store.state
      }
  },
  components:{
      CalendarDay
  }
}
</script>


<style  lang="scss">
      #calendar-week {
        box-shadow: 0 0 13px 4px #0000008c;
        display: flex;
        background: rgba(0, 0, 0, 0.308);
        padding: 15px;
    }
</style>


