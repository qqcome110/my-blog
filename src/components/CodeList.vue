<template>
  <div class="result">
    <ul>
      <li v-for="r in sortedCodes" :key="r.code" :class="{
          [`code-${getCodeColor(r.code)}`]: true,
          'code-layout': true
        }">
        <span>{{ r.code }}</span>
        <span>{{ r.symbol }}</span>
        <a href="javascript:void(0);" v-if="editable" class="remove" @click="handleRemove(r)">
          <i class="el-icon-close"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { colorCodes } from '@/config'

export default {
  name: 'CodeList',

  props: {
    codes: {
      type: Array,
      default: () => []
    },

    editable: Boolean
  },

  computed: {
    hasCodes () {
      return this.codes && this.codes.length
    },

    sortedCodes () {
      if (!this.hasCodes) {
        return []
      }

      return this.codes.sort((a, b) => +a.code - +b.code)
    }
  },

  methods: {
    getCodeColor (code) {
      const matched = colorCodes.find(cc => cc.codes.includes(code))

      return matched ? matched.color : ''
    },

    handleRemove (code) {
      this.$emit('remove', code)
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin gen () {
  $opcity: .9;
  $selector: code;
  $colors: blue green red;

  %base {
    color: #fff;
    width: 40px;
    height: 40px;  
    font-weight: 700;
    border-radius: 50%;
    padding: 5px;
    appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  @each $color in $colors {
    .#{$selector}-#{$color} {
      @extend %base;
      background-color: rgba($color, $opcity);
    }
  }
}

.result {
  margin-top: 10px;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-flow: row wrap;
    justify-content: space-evenly;

    li {
      position: relative;
      margin-bottom: 10px;
    }
  }

  .code-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .remove {
    color: #f56c6c;
    position: absolute;
    top: -5px;
    right: -5px;
  }
}

@include gen();
</style>
