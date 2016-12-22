<template lang="html">
  <div class="city-selector">
    <el-select v-model="city[0]" placeholder="请选择">
      <el-option v-for="item in provinces" :label="item" :value="item" />
    </el-select>
    <el-select v-model="city[1]" placeholder="请选择">
      <el-option v-for="item in cities" :label="item" :value="item" />
    </el-select>
    <el-select v-model="city[2]" placeholder="请选择">
      <el-option v-for="item in districts" :label="item" :value="item" />
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    city: Array
  },
  data () {
    return {
      provinces: ['北京', '上海', '广州', '湖北', '湖南', '河北', '河南', '江苏'],
      cities: ['北京', '上海', '广州', '武汉'],
      districts: ['玄武区', '徐汇区']
    }
  },
  methods: {
    handleInputClick (el) {
      console.log(el)
    }
  }
}
</script>

<style lang="css">
.city-selector .el-select {
  display: inline-block;
  width: 100px;
  margin-right: 10px;
}
div.el-select-dropdown {
  min-width: 400px !important;
}
li.el-select-dropdown__item {
  width: 25%;
  display: inline-block;
  margin: 0 auto;
  text-align: center
}
</style>
