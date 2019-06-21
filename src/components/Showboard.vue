<template>
  <div class="showBoard">
    <div class="showHeader">
      <div class="selectArea">
        <Select v-model="model1" style="width:180px" size="large" placement="top-start">
          <Option v-for="item in sortWay" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model2" style="width:180px" size="large" placement="top-start">
          <Option v-for="item in anchorClass" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model3" style="width:180px" size="large">
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
          style="width:200px"
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
  props: ['index', 'specialLogo', 'introduction', 'anchorClass'],
  data() {
    return {
      sortWay: sortWay,
      // liveClass: [],
      crawlTime: [
        {
          value: '0',
          label: '时间'
        }
      ],
      columns: columns,
      data: [
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

      model1: '0',
      model2: '0',
      model3: '0',

      totalData: 0,
      currentPage: 1,

      value: '',
      searchReault: [],

      tableName: '查询结果'
    }
  },
  methods: {
    // 关键词查询
    keywordSearch: function() {
      let requestPage = this.index
      let requestValue = this.value
      let requestTime = this.model3
      this.$axios
        .get('/api/keywordSearch', {
          params: {
            index: requestPage,
            keyword: requestValue,
            dataTime: requestTime
          }
        })
        .then(response => {
          this.totalPage = response.data.result.length
          this.searchReault = response.data.result
        })
        .catch(function(err) {
          console.log(err)
        })

      this.currentPage = 1
      console.log(requestPage)
    },

    // 条件组合查询方法
    conditionQuery: function() {
      this.$axios
        .get('/', {
          params: {
            websiteId: this.index,
            sortWay: this.model1,
            liveClass: this.model2,
            dataTime: this.model3,
            page: this.currentPage
          }
        })
        .then(response => {
          this.searchReault = response.data.result
          this.totalPage = response.data.result.length
        })
        .catch(function(err) {
          console.log(err)
        })

      this.currentPage = 1
    },

    change: function(page) {
      this.currentPage = page
    },
    init: function() {
      let requestIndex = this.index
      let requestSortWay = this.model1
      let requestLiveClass = this.model2
      let requestDataTime = this.model3
      let requestPage = this.currentPage
      // console.log('dshfgjsadhfaj' + getIndex)
      // this.conditionQuery(getIndex,getSortWay,getLiveClass,getDataTime)
      this.$axios
        .get('/', {
          params: {
            websiteId: requestIndex,
            sortWay: requestSortWay,
            liveClass: requestLiveClass,
            dataTime: requestDataTime,
            page: requestPage
          }
        })
        .then(response => {
          this.totalPage = response.data.result.length

          // 将初始化的默认时间并入传回的时间列表，得到一个新的时间列表
          let timeList = response.data.timeList
          timeList.push(this.crawlTime[0])
          this.crawlTime = timeList

          this.searchReault = response.data.result
        })
        .catch(function(err) {
          console.log(err)
        })

      // this.currentPage = 1
    }
  },

  //初始化页面，返回时间列表，数据总量页数，部分按照默认排序方式的数据
  created() {
    this.init()
  }
}
</script>

<style lang="stylus" src="../css/showBoard.styl"></style>

