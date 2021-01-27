var Data = {
	name:"邹鑫",
	sex:"男",
	age:"24岁",
	nation:"汉族",
	WechatNumber:"17623162066",
	email:"1024195025@qq.com",
	nativePlace:"重庆",
	residentialAddress:"成都金牛区",
	specialty:"计算机",
	education:"学历",
}
// 工作经历
var work =[
	{
		company:"重庆晋才富熙",
		post:"前端开发工程师",
		time:"2018/10-2020/2",
		technology:["js","css","jQ","element-UI","vue"]
	},
	{
		company:"四川大决策",
		post:"前端开发工程师",
		time:"2020/3",
		technology:["js","css","vue","uni-app","Echart","Color-ui"]
	}
]

var project = [
	{
		projectName:"宜保贵宾app",
		projectTime:"2018/11",
		technology:["vue","uni-app","Uni-Hello","Echart"],
		lightspot:["三级联动","自定义图表","页面通信","权限分级"],
		introductory:"该项目的开发初衷是为了让用户更直观的了解自己的保险合法权益，保险种类，以及产品售后服务专员。第二点是让保险销售人员，针对客户信息，进行客户维护，做好服务。",
	},
	{
		projectName:"四川大决策公众号",
		projectTime:"2019/3",
		technology:["uni-app","Uni-Hello","Echart"],
		lightspot:["公共组件","自定义图表","即时聊天","ajax联动"],
		introductory:"该项目是基于uin-app开发的一端多发布，兼容了小程序和app，在提高开发速度的同时，也兼顾了小程序和app的制作，项目中优化了数据请求框架，复用，调用公共组件成为主要逻辑层编写。",
	},
	{
		projectName:"邹先生简历小程序",
		projectTime:"2021/1",
		technology:["uni-app","Uni-Hello",],
		lightspot:["公共组件","数据模拟","数据管理"],
		introductory:"该项目从页面设计，框架构想，到小程序前端页面制作，功能完善，再到json数据模拟后台数据，集中管理，方便维护，甚至一些基础的bug修复，打包上线，版本发布，都是由本人独自完成。",
	},
	]
	
var education ={
	college:"重庆大学",
	graduateTime:"2016/7",
	specialty:"计算机专业",
	educations:"大专"
}
var evaluate ={
	isEvaluate:"本人有3年前端开发经验，精通css, js, jq, html, vue, uni-app, 能严格按照 W3C 国际标准完成项目开发，在工作期间完成过，移动端的手机APP，微信公众号，小程序，pc 端的 H5 页面等等，对浏览器兼容性，也是有所了解。熟练使用 jQuery, Element-ui, Bootstrap, color-ui, 等前端UI框架，日常工作能独立完成，也会在工作中逐步积累。"
}


export default {
	Data,
	work,
	project,
	education,
	evaluate
}