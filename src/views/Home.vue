<template>
  <div class="home">
    <CustomCode />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import SixCode from '@/components/SixCode.vue';
import CustomCode from '@/components/customCode.vue'

@Component({
  components: {
    HelloWorld,
    // SixCode
    CustomCode
  },
})
export default class Home extends Vue {}
</script>
