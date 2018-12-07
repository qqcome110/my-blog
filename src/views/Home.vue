<template>
  <div class="home">
    <img src="../assets/logo.png">
    <SixCode />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import SixCode from '@/components/SixCode.vue';

@Component({
  components: {
    HelloWorld,
    SixCode
  },
})
export default class Home extends Vue {}
</script>
