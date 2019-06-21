<template>
  <div class="home">
    <div class="chartBoard">
      <div class="control">
        <div
          :class="this.chartId===0?'selectButton':'changeButton'"
          class="publicStyle"
          @click="changeChart1"
        >
          <svg-icon icon-class="guankanren"></svg-icon>在线观看人数图
        </div>
        <div
          :class="this.chartId===1?'selectButton':'changeButton'"
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
      pageIndex: 0,
      chartId: 0,

      totalData: {}
    }
  },
  methods: {
    drawLine() {
      // document.getElementById('myChart').innerHTML = ''
      let buttomId = this.chartId

      if (buttomId === 0) {
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
    changeChart1: function() {
      this.chartId = 0
      this.getTotalData()
      this.drawLine()
    },
    changeChart2: function() {
      this.chartId = 1
      this.getTotalData()
      this.drawLine()
    }
  },

  mounted() {
    this.getTotalData()
    this.drawLine()
  }
}
</script>

<style lang="stylus" scoped>
.svg-icon {
  width: 25px;
  height: 25px;
  vertical-align: -0.15em;
  fill: darken;
  overflow: hidden;
}

.home {
  display: flex;
  justify-content: center;
}

.chartBoard {
  width: 80%;
  display: flex;
  background: rgba(256 256 256 0.6) center;
  margin-bottom: 3%;
}

.control {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: flex-end;
  width: 20%;
  // border: 1px solid red;
  // background: rgba(256 0 256 0.6) center;
}

.publicStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  border: 1px solid #555;
  margin-top: 30%;
  border-radius: 5px;
  color: rgba(256 256 256 0.6);
  font-size: 1vw;
  cursor: pointer;
}

.changeButton {
  background-color: #6e6e6e;
}

.changeButton:hover, .selectButton:hover {
  // background-color: rgba(260 260 260 0.9);
  width: 153px;
  background-color: rgba(108 108 108 0.5);
}

.selectButton {
  background-color: rgba(108 108 108 0.4);
}

.chartArea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
}

.showTime {
  font-size: 1.5vw;
  font-weight: bold;
}
</style>
