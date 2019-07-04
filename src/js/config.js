// 页面的名称及路由信息
var navigatePages = [
  {
    id: 0,
    title: '首页',
    navigateTo: 'home'
  },
  {
    id: 1,
    title: '关于我们',
    navigateTo: 'aboutus'
  },
  {
    id: 2,
    title: '用户帮助',
    navigateTo: 'help'
  }
]

var websites = [
  {
    id: 3,
    name: '斗鱼直播',
    route: 'douyu'
  },
  {
    id: 4,
    name: '虎牙直播',
    route: 'huya'
  },
  {
    id: 5,
    name: '企鹅电竞',
    route: 'qie'
  },
  {
    id: 6,
    name: '触手TV',
    route: 'chushou'
  },
  {
    id: 7,
    name: 'YY直播',
    route: 'yy'
  }
]

// 选择排序方式的单选框
var sortWay = [
  {
    value: '0',
    label: '排序方式：观看人数'
  },
  {
    value: '1',
    label: '排序方式：订阅人数'
  }
]

// 展示表格的表头信息
var columns = [
  {
    title: '排名',
    key: 'ranking',
    className: 'demo-table-info-column',
    width: 80,
    align: 'center'
    // sortable: true
  },
  {
    title: '主播名字',
    key: 'anchor_name',
    width: 150,
    align: 'center'
  },
  // {
  //   title: '主播头像',
  //   key: 'anchor_portrait',
  //   align: 'center'
  //   // sortable: true
  // },
  {
    title: '主播类型',
    key: 'anchor_category',
    width: 120,
    align: 'center'
  },
  {
    title: '订阅人数',
    key: 'fan_num',
    sortable: true,
    width: 120,
    align: 'center'
  },
  {
    title: '观看人数',
    key: 'watch_num',
    sortable: true,
    width: 120,
    align: 'center'
  },
  {
    title: '直播间名称',
    key: 'anchor_roomname',
    align: 'center'
  },
  {
    title: '主播间链接',
    key: 'anchor_url',
    align: 'center'
  },
  {
    title: '爬取时间',
    key: 'crawl_time',
    sortable: true,
    align: 'center'
  }
]

// 各页面可选择的直播类型
var liveClasses = {
  douyu: [
    {
      value: '0',
      label: '直播类型：无类型'
    },
    {
      value: '1',
      label: '英雄联盟'
    },
    {
      value: '2',
      label: '王者荣耀'
    },
    {
      value: '3',
      label: '绝地求生'
    },
    {
      value: '4',
      label: '和平精英'
    },
    {
      value: '5',
      label: '颜值'
    }
  ],
  huya: [
    {
      value: '0',
      label: '直播类型：无类型'
    },
    {
      value: '1',
      label: '英雄联盟'
    },
    {
      value: '2',
      label: '王者荣耀'
    },
    {
      value: '3',
      label: '绝地求生'
    },
    {
      value: '4',
      label: '和平精英'
    },
    {
      value: '5',
      label: '颜值'
    }
  ],
  qie: [
    {
      value: '0',
      label: '直播类型：无类型'
    },
    {
      value: '1',
      label: '英雄联盟'
    },
    {
      value: '2',
      label: '王者荣耀'
    },
    {
      value: '3',
      label: '绝地求生'
    },
    {
      value: '4',
      label: '和平精英'
    },
    {
      value: '5',
      label: '颜值'
    }
  ],
  chushou: [
    {
      value: '0',
      label: '直播类型：无类型'
    },
    {
      value: '1',
      label: '英雄联盟'
    },
    {
      value: '2',
      label: '王者荣耀'
    },
    {
      value: '3',
      label: '绝地求生'
    },
    {
      value: '4',
      label: '和平精英'
    },
    {
      value: '5',
      label: '颜值'
    }
  ],
  yy: [
    {
      value: '0',
      label: '直播类型：无类型'
    },
    {
      value: '1',
      label: '英雄联盟'
    },
    {
      value: '2',
      label: '王者荣耀'
    },
    {
      value: '3',
      label: '绝地求生'
    },
    {
      value: '4',
      label: '和平精英'
    },
    {
      value: '5',
      label: '颜值'
    }
  ]
}

// 各平台页面的介绍信息
var introduction = {
  douyu:
    '斗鱼TV是一家弹幕式直播分享网站，为用户提供视频直播和赛事直播服务。 [1-2] 斗鱼TV的前身为ACFUN生放送直播，于2014年1月1日起正式更名为斗鱼TV。斗鱼TV以游戏直播为主，涵盖了娱乐、综艺、体育、户外等多种直播内容。',
  huya:
    '虎牙直播是以游戏直播为主营业务的弹幕式直播互动平台 ，虎牙直播以游戏直播为主，涵盖娱乐、综艺、教育、户外、体育等多种直播内容。 虎牙直播覆盖PC、WEB、移动三端，投入核心技术与优质资源，为用户提供超清、极速、流畅的直播观看体验，与此同时，用户还可以文字弹幕的形式与主播实时互动，享受社交乐趣。',
  qie:
    '企鹅电竞是腾讯旗下规模最大的移动电竞平台。其定位于电竞生态的“连接器”，整合腾讯网、QQ手游、腾讯互娱团队资源，与QGC、TGA等职业电竞赛事深度合作，同时汇聚海量大牌游戏主播，集手游职业竞赛、互动视频直播、游戏礼包分享等功能于一身，为玩家用户提供一站式的次世代移动电竞体验。',
  chushou:
    '触手TV是杭州开迅科技有限公司旗下直属的弹幕式手机游戏直播平台。以游戏直播为主，涵盖天天酷跑、全民枪战、我的世界等游戏直播内容。',
  yy:
    'YY直播 ，隶属于欢聚时代YY娱乐事业部，是国内网络视频直播行业的奠基者。目前YY直播是一个包含音乐、科技、户外、体育、游戏等内容在内的国内最大全民娱乐直播平台，注册用户达到10亿人，月活跃用户达到1.22亿。其最早建立在一款强大的富集通讯工具——YY语音的平台基础上。'
}

export { navigatePages, websites, sortWay, columns, liveClasses, introduction }
