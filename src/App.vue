<template>
  <div id="app">
    <contract-detail :model="contractDetailData" />
  </div>
</template>

<script>
import Hello from './components/Hello'
import ContractDetail from './components/ContractDetail'

export default {
  name: 'app',
  components: {
    Hello,
    ContractDetail
  },
  data () {
    return {
      contractDetailData: {
        applicant: '小明',
        applyDate: '2016-01-02',
        city: ['湖北', '武汉', '玄武区'],
        price: 1234,
        clientType: 1
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 700px;
}
</style>
