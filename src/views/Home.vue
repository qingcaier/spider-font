<!--首页-->

<template>
  <div class="home">
    <div class="chartBoard">
      <div class="control">
        <div
          :class="currentChart===0?'selectButton':'changeButton'"
          class="publicStyle"
          @click="changeChart1"
        >
          <svg-icon icon-class="guankanren"></svg-icon>在线观看人数图
        </div>
        <div
          :class="currentChart===1?'selectButton':'changeButton'"
          class="publicStyle"
          @click="changeChart2"
        >
          <svg-icon icon-class="dinyue"></svg-icon>总订阅量图
        </div>
      </div>

      <div class="chartArea" v-ratio="{ratio:1/1,fixed:'width',keep:true, debounce: 0}">
        <div id="myChart" :style="{width:'900px', height:'600px'}"></div>
        <div class="showTime">数据获取时间：{{showTime}}&emsp;单位(千万)</div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'Help',
  data() {
    return {
      pageIndex: 0, // 首页页面

      currentChart: 0, //当前图表
      // totalData: [], // 图表数据
      showTime: ''
    }
  },
  methods: {
    drawLine(data) {
      // document.getElementById('myChart').innerHTML = ''
      let buttomId = this.currentChart
      // let showData = data
      // 渲染第一个图表
      // 基于准备好的DOM，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'), 'light')

      let dataTitle, dataName
      if (buttomId === 0) {
        dataTitle = '在线观看人数统计'
        dataName = '观看人数'
      } else if (buttomId === 1) {
        dataTitle = '订阅量统计'
        dataName = '订阅人数'
      }
      // 绘制图表
      myChart.setOption(
        {
          title: {
            text: dataTitle
          },
          tooltip: {},
          xAxis: {
            data: ['斗鱼', '虎牙', '企鹅电竞', '触手TV', 'YY直播'],
            axisLabel: {
              fontSize: 24
            }
          },
          yAxis: {
            axisLabel: {
              fontSize: 18
            }
          },
          series: [
            {
              name: dataName,
              type: 'bar',
              // data: showData
              data: data
            }
          ]
        },
        true
      )
      // myChart.resize()
    },

    // 获取图表需要的数据
    getTotalData() {
      this.$axios
        .get('/api/showTable', {
          params: {
            pageId: this.pageIndex,
            tableId: this.currentChart
          }
        })
        .then(response => {
          // this.totalData = response.data.numberData
          console.log('1111111111')
          console.log(response)
          this.showTime = response.data.time

          this.drawLine(response.data.numberData)
          // this.$nextTick(() => {
          //   this.$store.state.retData = response.data
          //   console.log(this.$store.state.retData)
          // })
        })
        .catch(function(err) {
          console.log(err)
        })
    },

    // 第一个图表按钮，绘制第一个图表
    changeChart1: function() {
      this.currentChart = 0
      this.getTotalData()
      this.drawLine()
    },

    // 第二个图表按钮，绘制第二个图表
    changeChart2: function() {
      this.currentChart = 1
      this.getTotalData()
      this.drawLine()
    }
  },

  // computed: {
  //   equipData: function() {
  //     return this.$store.retData || ''
  //   }
  // },
  // beforeMount() {
  //   this.getTotalData()
  // },
  mounted() {
    // this.currentChart = 0
    // 初始化渲染图表

    this.getTotalData()
    // this.$nextTick(() => {
    // 加上延时避免 mounted 方法比页面加载早执行 或者 对img进行块级化设置宽高进行 提前站位
    // setTimeout(() => {
    // this.getTotalData()
    // console.log('-------' + this.showTime)
    // this.drawLine()
    // })
    // })
    // this.drawLine()
  }
}
</script>

<style lang="stylus" scoped src="../css/shouye.styl"></style>
