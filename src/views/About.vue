<template>
  <div class="About">
    <div v-if="hasCodes">
      <code-list :codes="codes" editable @remove="handleRemove"></code-list>
      <div class="filterResult">
        <label for="">筛选结果：</label>
        <el-badge :value="`${codes.length}个`" class="result-tag">
          <el-button size="small" @click="clearAll">重置</el-button>
        </el-badge>
      </div>
    </div>
    <div v-else class="empty">
      暂无内容
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CodeList from '@/components/CodeList'

export default {
  name: 'About',

  components: {
    CodeList
  },

  computed: {
    ...mapState({
      codes: state => state.codes
    }),

    hasCodes () {
      return this.codes && this.codes.length
    }
  },

  methods: {
    ...mapMutations([
      'removeCode',
      'clearAll'
    ]),

    handleRemove (code) {
      this.removeCode(code)
    }
  }
}
</script>

<style lang="scss" scoped>
.filterResult {
  margin-top: 20px;
}

.empty {
  color: #ccc;
  font-size: 14px;
}
</style>
