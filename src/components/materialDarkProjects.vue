<template>
  <div class="section-wrapper">
    <div class="section-headline">{{ lang.projects }}</div>
    <div class="block" v-for="(project, index) in person.projects" :key="index">
      <div class="block-helper"></div>
      <h3 class="headline">
        <strong>{{ project.name }}</strong> - {{ project.platform }}
      </h3>
      <div class="subheadline">{{ project.timeperiod }}</div>
      <div class="subheadline" v-if="project.url">
        <a :href="project.url" rel="nofollow" target="_blank">
          {{ project.url }}
        </a>
      </div>
      <p class="info">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { getVueOptions } from "@/resumes/options";

export default {
  ...getVueOptions("Projects")
};
</script>

<style></style>
