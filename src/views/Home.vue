<template>
  <div class="home">
    <img src="../assets/logo.png">
    
    <demo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Demo from '@/components/Demo.vue'

@Component({
  components: {
    HelloWorld,
    Demo
  },
})
export default class Home extends Vue {}
</script>
