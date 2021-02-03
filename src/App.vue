<template>
  <TheHeader />
  <router-view></router-view>
  <TheFooter />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TheHeader from "@/components/general/TheHeader.vue";
import TheFooter from "@/components/general/TheFooter.vue";

export default defineComponent({
  name: 'App',
  components: { TheHeader, TheFooter },
});
</script>

<style lang="scss"></style>
