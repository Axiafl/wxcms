// Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [
      { "pagename": "留言本", "pagetext": "../ly/ly" },
      { "pagename": "利息计算器", "pagetext": "../lxjsq/lxjsq" },
      { "pagename": "猜字游戏", "pagetext": "../game/game" },
      { "pagename": "地图", "pagetext": "../map/map" },
      { "pagename": "扫码", "pagetext": "../sm/sm" },
      { "pagename": "问卷调查", "pagetext": "../wjdc/wjdc" }
    ],
  },
  attached() {
  },
  methods: {


  }
})