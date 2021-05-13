<template>
  <div class="page-wrapper">
    <div class="page" :id="resumeId" :class="resumeId">
      <div class="page-inner">
        <component :is="resumeId"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "../resumes/resumes";
export default Vue.component("resume", {
  name: "app",
  data() {
    return {
      resumeId: "cool"
    };
  }
});
</script>

<style scoped>
.page-inner {
  height: 100%;
  width: 100%;
}
.page-wrapper {
  overflow-x: hidden;
  background: #cccccc;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}

.resume {
  height: 100%;
  width: 100%;
}

.page {
  background: white;
  position: relative;
  width: 21cm;
  /* height: 29.68cm; */
  height: auto;
  display: block;
  page-break-after: auto;
  overflow: hidden;
}
</style>
