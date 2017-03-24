	var app = angular.module('myapp', ['ui.router']);
	app.config(function($stateProvider, $urlRouterProvider) {
// 		$urlRouterProvider.otherwise('index');
    	$stateProvider.state('index_1',{
			url:'index_1',
			templateUrl:'shouye.html'
		})
    	$stateProvider.state('index_2',{
			url:'index_2',
			templateUrl:'YC/youchengxiezhu.html'
		})
    	$stateProvider.state('index_3',{
			url:'index_3',
			templateUrl:'order/YC_order/wodedingdan-ycdd.html'
		})
    	$stateProvider.state('index_4',{
			url:'index_4',
			templateUrl:'my_home/index.html'
		})
    	$stateProvider.state('index_5',{
			url:'index_5',
			templateUrl:'service/index.html'
		})
    	$stateProvider.state('index_6',{
			url:'index_6',
			templateUrl:'order/order_shop_details/shop details.html'
		})
    	$stateProvider.state('index_7',{
			url:'index_7',
			templateUrl:'index.html'
		})
	});

