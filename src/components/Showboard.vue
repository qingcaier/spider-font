<!--展示面板组件，展示查询搜索得到的信息等-->
<template>
  <div class="showBoard">
    <div class="showHeader">
      <div class="selectArea">
        <Select v-model="model1" style="width:75%" size="large" placement="top-start">
          <Option v-for="item in sortWay" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model2" style="width:75%" size="large" placement="top-start">
          <Option v-for="item in anchorClass" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model3" style="width:75%" size="large">
          <Option v-for="item in crawlTime" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <div class="refreshButton">
          <Button type="primary" icon="ios-checkmark" long @click="conditionQuery">刷新</Button>
        </div>
      </div>
      <div class="introduction">
        <svg-icon :icon-class="specialLogo"></svg-icon>
        <p style="text-align:left">&emsp;&emsp;{{introduction}}</p>
      </div>

      <div class="search">
        <Input
          type="text"
          search
          placeholder="请输入关键词"
          v-model="value"
          size="large"
          style="width:90%"
          @on-search="keywordSearch"
        />
      </div>
    </div>

    <div class="all">
      <div class="tableHeader">{{tableName}}</div>
      <div class="tableBody">
        <Table border stripe :columns="columns" :data="data" class="default"></Table>
      </div>
      <div class="tableNav">
        <Page
          :total="totalData"
          :page-size="20"
          :current="currentPage"
          show-elevator
          @on-change="change"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { sortWay, columns } from '../js/config'
export default {
  props: ['index', 'specialLogo', 'introduction', 'anchorClass'], // 从各平台父组件传来的页面值、logo图标、介绍信息和直播类型
  data() {
    return {
      sortWay: sortWay, // 可选择的排序方式：按观看人数和按订阅量
      // liveClass: [],
      crawlTime: [
        // 默认不选择时间的取值
        {
          value: '0',
          label: '全部时间'
        }
      ],
      columns: columns, // 展示信息的表格表头
      data: [
        // 展示的信息
        // {
        //   ranking: 1,
        //   anchor_name: '可乐酱Cola',
        //   anchor_portrait: '',
        //   anchor_category: '英雄联盟',
        //   fan_num: 4325789,
        //   watch_num: 3425789,
        //   anchor_roomname: '是不是缺个玩伴，低端局，求订阅',
        //   anchor_url: 'http://www.huya.com/21769863',
        //   crawl_time: '2018-06-18 15:00'
        // },
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {}
        // {},
        // {},
        // {},
        // {},
        // {}
      ],

      model1: '0', // 选择排序方式的默认值：按观看人数排
      model2: '0', // 选择直播类型的默认值：无类型
      model3: '0', // 选择要查看的数据的时间默认值：全部时间

      totalData: 0, // 匹配的数据的总量(有几条数据)
      currentPage: 1, // 当前表格所在的页数(第1页)

      value: '', // 搜索字段
      searchReault: [], // 搜索所返回的匹配信息结果

      tableName: '查询结果' // 表格名称
    }
  },
  methods: {
    // 关键词搜索
    keywordSearch: function() {
      let requestPage = this.index
      let requestValue = this.value
      let requestTime = this.model3
      let requestpage = this.currentPage
      this.$axios
        .get('/api/keywordSearch', {
          params: {
            websiteId: requestPage, // 发起搜索请求的平台页面
            keyword: requestValue, // 搜素的关键词
            dataTime: requestTime, // 想要搜索的时间
            page: requestPage // 请求的表格页数
          }
        })
        .then(response => {
          // 获取搜索结果的总数据量
          this.totalPage = response.data.result.length

          // 获取搜索的匹配信息
          this.searchReault = response.data.result
        })
        .catch(function(err) {
          console.log(err)
        })

      // this.currentPage = 1 // 将表格页数置在第一页，即返回新的所有信息
      // console.log(requestPage)
    },

    // 条件组合查询方法
    conditionQuery: function() {
      this.$axios
        .get('/', {
          params: {
            websiteId: this.index, // 发起请求的平台页面
            sortWay: this.model1, // 请求的排序方式
            liveClass: this.model2, // 请求的直播类型
            dataTime: this.model3, // 要请求的时间
            page: this.currentPage // 请求的表格页数
          }
        })
        .then(response => {
          // 获取搜索到的结果
          this.searchReault = response.data.result

          // 获取搜索到的数据总量
          this.totalPage = response.data.result.length
        })
        .catch(function(err) {
          console.log(err)
        })

      // this.currentPage = 1
    },

    // 页数改变时更新数据
    change: function(page) {
      this.currentPage = page
      this.conditionQuery()
    },

    // 刚进入页面时所有时间的初始化数据
    init: function() {
      let requestIndex = this.index

      // console.log('dshfgjsadhfaj' + getIndex)
      this.$axios
        .get('/', {
          params: {
            websiteId: requestIndex // 发起请求的平台页面
          }
        })
        .then(response => {
          // 将初始化的默认时间并入传回的时间列表，得到一个新的时间列表
          let timeList = response.data.timeList
          timeList.push(this.crawlTime[0])
          this.crawlTime = timeList
        })
        .catch(function(err) {
          console.log(err)
        })

      // this.currentPage = 1
    }
  },

  //初始化页面，得到时间列表，总数据量
  created() {
    this.init()
    this.conditionQuery()
  }
}
</script>

<style lang="stylus" src="../css/showBoard.styl"></style>
