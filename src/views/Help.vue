<template>
  <div class="help">
    <div class="problemSolve">
      <Timeline>
        <TimelineItem>
          <p class="time">Q: 这个网站有什么功能？</p>
          <p class="content">A: 我们提供斗鱼、虎牙、企鹅电竞、触手、YY直播这些热门直播平台热门的直播频道信息查询，并支持数据可视化。</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">Q: 进入首页时展示的是什么数据的图表？</p>
          <p class="content">A: 进入首页时初始化的是最新时间的各个平台的观看人数图表。可以通过按钮切换展示订阅量图表。</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">Q: 进入各个平台时初始化展示的数据是什么？</p>
          <p class="content">A: 进入各个直播平台时初始化展示按观看人数排序的所有直播类型和所有时间的直播间信息。</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">Q: 如何按需查询信息？</p>
          <p class="content">A: 目前可通过下拉框组合查询目的信息。之后迭代实现搜索功能。</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">Q: 如何跳转表格页数？</p>
          <p class="content">A: 输入目标页数后按下Enter键或者按下刷新按钮。</p>
        </TimelineItem>
      </Timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Help',
  data() {
    return {}
  }
  // methods: {
  //   getPageIndex: function(childValue) {
  //     this.pageIndex = childValue
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.help {
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  margin: auto;
  background: rgba(256 256 256 0.4);
  border-radius: 5px;
}

.problemSolve {
}

.time {
  margin-top: -8px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(256 256 256 0.9);
  text-align: left;
}

// 信息内容
.content {
  font-size: 18px;
  padding-top: 5px;
  padding-left: 5px;
  color: rgba(0 0 0 0.9);
  text-align: left;
}
</style>
