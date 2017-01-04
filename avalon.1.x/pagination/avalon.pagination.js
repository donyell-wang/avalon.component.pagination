/**
 * paginaiton component
 * work with avalon 1.4 +
 * ui looks better with Bootstrap 3.x
 * code by donyell-wang
 */
define(['avalon','text!./avalon.pagination.html'],function(avalon,_template){
    avalon.component("com:pagination",{
        //标签属性 basic attributes
        current:1,//当前页码 current page number
        totalPage:1,//总页数 total page number
        //外部配置参数 hook callbacks
        $onclicked: null,
        $onready: null,
        //view接口 function binding in html
        _switchPage: function (idx) {},
        //对外方法 interfaces
        setCurrent:function () {},
        setTotalPage:function () {},
        //内部接口 inside function
        $trigger: null,
        //默认配置 other configs
        $replace: 1,
        $dispose: function (vm, elem) {
        },
        $init: function(vm, elem) {
            vm.$trigger = function(ev, type) {
				switch (type) {
					case 'ready':
						if(typeof vm.$onready == 'function') {
							vm.$onready(ev, vm);
						}
						break;
					default: break;
				}
			};
            vm._switchPage = function (idx) {
                vm.current = idx;
                if(typeof vm.$onclicked == 'function') {
                    vm.$onclicked(idx);
                };
            };
            vm.setCurrent = function (idx) {
                vm.current = idx;
            }
            vm.setTotalPage = function (idx) {
                vm.totalPage = idx;
            }
            // console.log('com:pagination init')
        },
        $ready: function(vm, elem){
            vm.$trigger(elem, 'ready');
            // console.log('com:pagination Ready')
        },
        $template:_template
    });
});
