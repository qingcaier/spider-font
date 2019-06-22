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

      <div class="chartArea">
        <div id="myChart" :style="{width: '800px', height: '500px'}"></div>
        <div class="showTime">数据获取时间：{{this.totalData.time}}&emsp;单位(千万)</div>
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

      currentChart: '', //当前图表
      totalData: {} // 图表数据
    }
  },
  methods: {
    drawLine() {
      // document.getElementById('myChart').innerHTML = ''
      let buttomId = this.currentChart

      if (buttomId === 0) {
        // 渲染第一个图表
        // 基于准备好的DOM，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'), 'light')
        // 绘制图表
        myChart.setOption({
          title: { text: '在线观看人数统计' },
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
              name: '观看人数',
              type: 'bar',
              data: [5, 20, 36, 1000, 10]
              // data: this.totalData.numberData
            }
          ]
        })
        // this.$forceUpdate()
      } else if (buttomId === 1) {
        // 渲染第二个图表
        let myChart = echarts.init(document.getElementById('myChart'), 'light')
        // 绘制图表
        myChart.setOption({
          title: { text: '订阅量统计' },
          tooltip: {},
          xAxis: {
            // name: '直播平台',
            // nameTextStyle: { fontSize: 8 },
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
              name: '订阅量',
              type: 'bar',
              data: [30, 20, 5, 4, 40]
              // data: this.totalData.numberData
            }
          ]
        })
        // this.$forceUpdate()
      }
    },

    // 获取图表需要的数据
    getTotalData() {
      this.$axios
        .get('/', {
          params: {
            pageId: this.pageIndex,
            tableId: this.chartId
          }
        })
        .then(response => {
          this.totalData = response.data.totalData
          this.showTime = response.data.showTime
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

  mounted() {
    this.currentChart = 0
    // 初始化渲染图表
    this.getTotalData()
    this.drawLine()
  }
}
</script>

<style lang="stylus" scoped src="../css/shouye.styl"></style>
