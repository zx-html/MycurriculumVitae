<template style="height: 100%;">
	<view class="content">
		<!-- 轮播图 -->
		<swiper
			class="card-swiper"
			:indicator-dots="true"
			:circular="true"
			autoplay="true"
			interval="2000"
			duration="500"
			@change="cardSwiper"
			indicator-color="#8799a3"
			indicator-active-color="#fff"
		>
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
				</view>
			</swiper-item>
		</swiper>
		<!-- 标题 -->
		<view class="title">
			<view></view>
			<view>个人信息</view>
		</view>
		<!-- 卡片 -->
		<view>
			<view class="card">
				<uni-collapse ref="add" class="warp" @change="List_click(1)">
					<uni-collapse-item
						:thumb="listimgurl1 == false ? '../../static/1.png' : '../../static/1_click.png'"
						class="uni-collapse-item"
						:open="false"
						:show-animation="true"
						:disabled="false"
						title="基本信息"
					>
						<view class="content2">
							<view class="personage_box">
								<view class="personage_left">
									<view class="">
										<text>姓名:</text>
										<text>{{ Mydatas.Data.name }}</text>
									</view>
									<view class="">
										<text>性别:</text>
										<text>{{ Mydatas.Data.sex }}</text>
									</view>
									<view class="">
										<text>民族:</text>
										<text>{{ Mydatas.Data.nation }}</text>
									</view>
									<view class="">
										<text>籍贯:</text>
										<text>{{ Mydatas.Data.nativePlace }}</text>
									</view>
									<view class="">
										<text>专业:</text>
										<text>{{ Mydatas.Data.specialty }}</text>
									</view>
									<view class="">
										<text>年龄:</text>
										<text>{{ Mydatas.Data.age }}</text>
									</view>
								</view>
								<view class="personage_right"><image src="../../static/my1.jpg" mode=""></image></view>
							</view>
							<view class="basic dis_class">
								<view class="">
									<text>最高学历:</text>
									<text>{{ Mydatas.Data.education }}</text>
								</view>
								<view class="">
									<text>居住地址:</text>
									<text>{{ Mydatas.Data.residentialAddress }}</text>
								</view>
							</view>
							<view class="basic">
								<view class="" style="width: 100%;">
									<text>邮箱:</text>
									<text>{{ Mydatas.Data.email }}</text>
								</view>
							</view>
						
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
			
			<!-- 工作经历 -->
			<view class="card">
				<uni-collapse ref="add" class="warp" @change="List_click(2)">
					<uni-collapse-item
						:thumb="listimgurl2 == false ? '../../static/2.png' : '../../static/2_click.png'"
						class="uni-collapse-item"
						:open="false"
						:show-animation="true"
						:disabled="false"
						title="工作经历"
					>
						<view class="content2">
							<view class="work" v-for="(item, index) in Mydatas.work" :key="index">
								<view class="basic dis_class">
									<view class="">
										<text>公司:</text>
										<text>{{ item.company }}</text>
									</view>
									<view class="">
										<text>职位:</text>
										<text>{{ item.post }}</text>
									</view>
								</view>
								<view class="basic">
									<view class="">
										<text>日期:</text>
										<text>{{ item.time }}</text>
									</view>
								</view>
								<view class="basic">
									<view style="width: 100%;">
										<text>使用技术:</text>
										<text v-for="(item2, index) in item.technology" :key="index">{{ item.technology[index] }}</text>
									</view>
								</view>
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
			
			<!-- 项目经历 -->
			<view class="card">
				<uni-collapse ref="add" class="warp" @change="List_click(3)">
					<uni-collapse-item
						:thumb="listimgurl3 == false ? '../../static/3.png' : '../../static/3_click.png'"
						class="uni-collapse-item"
						:open="false"
						:show-animation="true"
						:disabled="false"
						title="项目经验"
					>
						<view class="content2">
							<view class="work" v-for="(item, index) in Mydatas.project" :key="index">
								<view class="basic">
									<view class="">
										<text>项目名:</text>
										<text>{{ item.projectName }}</text>
									</view>
									<view class="">
										<text>日期:</text>
										<text>{{ item.projectTime }}</text>
									</view>
								</view>
								<view class="basic">
									<view style="width: 100%;">
										<text>使用技术:</text>
										<text v-for="(item3, index) in item.technology" :key="index">{{ item.technology[index] }}</text>
									</view>
								</view>
								<view class="basic">
									<view style="width: 100%;">
										<text>关键技术:</text>
										<text v-for="(item4, index) in item.lightspot" :key="index">{{ item.lightspot[index] }}</text>
									</view>
								</view>
								<view class="basic">
									<view style="width: 100%;">
										<text>项目简介:</text>
										<text>{{ item.introductory }}</text>
									</view>
								</view>
							</view>
							<view class="" style="text-align: center; font-size: 12px;color: #000;">（为了突出技术性，只枚举三个项目）</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
			
			<!-- 最高学历 -->
			<view class="card">
				<uni-collapse ref="add" class="warp" @change="List_click(4)">
					<uni-collapse-item
						:thumb="listimgurl4 == false ? '../../static/4.png' : '../../static/4_click.png'"
						class="uni-collapse-item"
						:open="false"
						:show-animation="true"
						:disabled="false"
						title="最高学历"
					>
						<view class="content2">
							<view class="basic dis_class">
								<view class="">
									<text>毕业学院:</text>
									<text>{{ Mydatas.education.college }}</text>
								</view>
								<view class="">
									<text>毕业时间:</text>
									<text>{{ Mydatas.education.graduateTime }}</text>
								</view>
							</view>
							<view class="basic dis_class">
								<view class="">
									<text>最高学历:</text>
									<text>{{ Mydatas.education.educations }}</text>
								</view>
								<view class="">
									<text>专业:</text>
									<text>{{ Mydatas.education.specialty }}</text>
								</view>
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
			
			<!-- 自我评价 -->
			<view class="card">
				<uni-collapse ref="add" class="warp" @change="List_click(5)">
					<uni-collapse-item
						:thumb="listimgurl5 == false ? '../../static/5.png' : '../../static/5_click.png'"
						class="uni-collapse-item"
						:open="false"
						:show-animation="true"
						:disabled="false"
						title="自我评价"
					>
						<view class="content2" style="padding: 10px 5px;">
							<text style=" word-wrap:break-word; word-break:normal;">{{ Mydatas.evaluate.isEvaluate }}</text>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		
		</view>
		<view class="example-body" style="background-color: #fff;">
			<uni-notice-bar
				style="background-color: #fff;"
				:show-icon="true"
				:scrollable="true"
				:single="true"
				text="本程序仅为个人展示, 涉及的个人信息仅为求职展示, 如有取用, 违法必究。"
			/>
		</view>
	
	</view>

</template>

<script>
import Mydata from '@/store/Message.js';
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';
import uniSection from '@/components/uni-section/uni-section.vue';
export default {
	data() {
		return {
			dotStyle: true,
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: '../../static/p1.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: '../../static/p2.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: '../../static/p3.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: '../../static/p4.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: '../../static/p5.jpg'
				},
				{
					id: 5,
					type: 'image',
						url: '../../static/p6.jpg'
				},
				{
					id: 6,
					type: 'image',
						url: '../../static/p7.jpg'
				}
			],
			
			Mydatas: '',
			cardCur: 0,
			listimgurl1: false,
			listimgurl2: false,
			listimgurl3: false,
			listimgurl4: false,
			listimgurl5: false
			// showAnimation:true,
		};
	},
	onLoad() {
		this.Mydatas = Mydata;
		console.log(this.Mydatas);
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		},

		cardSwiper(e) {
			this.cardCur = e.detail.current;
		},

		List_click(val) {
			if (val == 1) {
				this.listimgurl1 = !this.listimgurl1;
			} else if (val == 2) {
				this.listimgurl2 = !this.listimgurl2;
			} else if (val == 3) {
				this.listimgurl3 = !this.listimgurl3;
			} else if (val == 4) {
				this.listimgurl4 = !this.listimgurl4;
			} else if (val == 5) {
				this.listimgurl5 = !this.listimgurl5;
			}
		}
	}
};
</script>

<style lang="less">
.content {
	padding: 10px;
	border-top: 1px #e9e9e9 solid;
}

// 轮播图
.swiper-box {
	width: 100%;
	height: 230px;
}
.swiper-item {
	width: 100%;
	height: 100%;
}
.swiperimage {
	width: 100%;
	height: 100%;
	border-radius: 10px;
}
.card-swiper {
	image {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
}

// 标题
.title {
	display: flex;
	margin: 20px 0;
}
.title view:nth-child(1) {
	width: 5px;
	height: 20px;
	font-weight: bold;
	margin-right: 5px;
	background-color: #ff1417;
	border-radius: 10px;
}
.title view:nth-child(2) {
	line-height: 20px;
	font-weight: bold;
	font-size: 16px;
}
// 卡片
.card {
	padding: 10px;
	border-radius: 10px;
	box-shadow: 1px 2px 11px 4px #e9e9e9;
	margin-bottom: 15px;
}

// 列表
.content2 {
	padding: 15px;
	font-size: 14px;
	line-height: 20px;
	background-color: #f9f9f9;
	color: #666;
}
.uni-collapse-cell__title {
	text-align: center;
}
// 个人信息
.personage_box {
	display: flex;
}
.personage_right {
	display: flex;
	justify-content: center;
}
.personage_right image {
	width: 80%;
	height: 95%;
}
.personage_left,
.personage_right {
	width: 50%;
}
.personage_left text:nth-child(1) {
	font-weight: bold;
	font-size: 16px;
	color: #000;
}
.personage_left text {
	margin-right: 5px;
	line-height: 30px;
}

// 基本信息
.basic {
	display: flex;
	justify-content: space-between;
}
.basic text {
	margin-right: 5px;
}
.basic view {
	// width: 50%;
	line-height: 30px;
}
.basic text:nth-child(1) {
	font-weight: bold;
	font-size: 16px;
	color: #000;
}
.dis_class view {
	width: 80%;
}
// 工作经历
.work {
	border: 1px solid #66aaff;
	padding: 5px;
	border-radius: 10px;
	margin-bottom: 10px;
}

.cs {
}
</style>
