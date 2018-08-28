<template>
    <div id="app">
        <div class="container-fluid">
            <div  class=" calendar">
               <CalendarWeek />
            </div>
            <CalendarEntry />
        </div>
    </div>
</template>
<script>

import CalendarWeek from "./components/CalendarWeek.vue"
import CalendarEntry from "./components/CalendarEntry.vue"



export default {
  name: "App",
  components:{
      CalendarWeek,
      CalendarEntry
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  background: rgb(95, 95, 95);
  height: 100vh;
}
.calendar {
  padding-top: 12%;


}

</style>
