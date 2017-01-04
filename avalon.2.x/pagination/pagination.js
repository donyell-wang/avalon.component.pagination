avalon.component('ms-pagination', {
  template: __inline('pagination.html'),
  defaults: {
      $id: 'ms-pagination',
      //外部配置属性
      current:1,//当前页码
      totalPage:1,//总页数
      //外部配置参数
      $onclicked: function () {},
      //view接口
      _switchPage: function (idx) {},
      //对外方法
      setTotalPage:function () {},
      setCurrent: function () {},
      onInit:function () {
          var that = this;
          that._switchPage = function (idx) {
              that.current = idx;
              if(typeof that.$onclicked == 'function') {
                  that.$onclicked(idx);
              };
          };
          that.setCurrent = function (idx) {
              that.current = idx;
          }
          that.setTotalPage = function (idx) {
              that.totalPage = idx;
          }
      }
  }
});
