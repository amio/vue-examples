<template>
  <div>
    <h2>合同详情</h2>
    <table>
      <tbody>
        <tr>
          <th colspan="100">基本信息</th>
        </tr>
        <tr>
          <td>申请人</td>
          <td><el-input v-model="model.applicant" /></td>
        </tr>
        <tr>
          <td>申请时间</td>
          <td><el-date-picker v-model="model.applyDate" type="date" /></td>
        </tr>
        <tr>
          <th colspan="100">卖家信息</th>
        </tr>
        <tr>
          <td>成交价格</td>
          <td>
            <el-input v-model="model.price">
              <template slot="append">元</template>
            </el-input>
          </td>
        </tr>
        <tr>
          <td>线上线下客户</td>
          <td>
            <el-radio-group v-model="model.clientType">
              <el-radio :label="1">线上</el-radio>
              <el-radio :label="2">线下</el-radio>
            </el-radio-group>
          </td>
        </tr>
        <tr>
          <td>卖家地区</td>
          <td>
            <city-selector :city="model.city" />
          </td>
        </tr>
        <tr>
          <td>上传照片</td>
          <td>
            <el-upload
              action="//jsonplaceholder.typicode.com/posts/"
              type="drag"
            >
              <i class="el-icon-upload"></i>
              <div class="el-dragger__text">将文件拖到此处，或点击上传</div>
              <div class="el-upload__tip" slot="tip">身份证正面</div>
            </el-upload>
            <el-upload
              action="//jsonplaceholder.typicode.com/posts/"
              type="drag"
            >
              <i class="el-icon-upload"></i>
              <div class="el-dragger__text">将文件拖到此处，或点击上传</div>
              <div class="el-upload__tip" slot="tip">身份证反面</div>
            </el-upload>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CitySelector from './CitySelector'

export default {
  components: {
    CitySelector
  },
  props: {
    model: Object
  }
}
</script>

<style media="screen">
h2 {
  font-size: 18px;
  margin: 15px 0;
  text-align: center;
}
table {
  width: 100%;
  border-collapse: collapse;
  line-height: 27px;
}
th, td {
  padding: 3px 10px;
  font-weight: normal;
  font-size: 14px;
  border: 1px solid #DDD;
  text-align: left;
  white-space: nowrap;
}
th {
  background-color: #EEE;
  text-align: center;
}

/* overwrite default styles */
input.el-input__inner {
  border: none;
  height: 27px;
  padding-left: 2px;
}
div.el-input-group__append, div.el-input-group__prepend {
  border: none;
  background-color: transparent;
}
.el-picker-panel__body td {
  padding: 0;
}
div.el-upload,
div.el-dragger {
  display: inline-block;
  width: 240px;
  height: 160px;
  padding: 12px 6px;
}
div.el-upload__tip {
  font-size: 14px;
  position: relative;
  top: -6px;
}
</style>
