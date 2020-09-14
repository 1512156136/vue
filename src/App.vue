<template>
  <div id="app" class="clearfix">
    <div id="nav">
	  <ul class="daohang">
		<li>首页</li>
		<li data_yin="1" @click.stop="pull">数据管理<span>></span></li>
		<div class="listss">
			<router-link to="/用户列表">用户列表</router-link>
			<router-link to="/商家列表">商家列表</router-link>
		</div>			
		<li data_yin="1" @click.stop="pull">添加数据<span>></span></li>
		<div class="listss">
			<router-link to="/添加商铺">添加商铺</router-link>
			<router-link to="/添加商品">添加商品</router-link>
		</div>		
		<li data_yin="1" @click.stop="pull">图标<span>></span></li>
		<div class="listss">
			<router-link to="/用户分布图">用户分布</router-link>
		</div>	
		<li li data_yin="1" @click.stop="pull">编辑<span>></span></li>
		<div class="listss">
			
		</div>
		<li li data_yin="1" @click.stop="pull">设置<span>></span></li> 
		<div class="listss">
			
		</div>
	  </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
	export default{
		name:"App",
		methods:{
			pull(e){
				let li = e.target;
				if(li.getAttribute("data_yin")){
					if(li.getAttribute("data_yin") == 1){
						li.nextElementSibling.style.display = "block";
						li.setAttribute("data_yin","0");
						li.firstElementChild.style.transform = "rotate(-90deg)";
					}else{
						li.nextElementSibling.style.display = "none";
						li.setAttribute("data_yin","1");
						li.firstElementChild.style.transform = "rotate(90deg)";
					}
				}
			}
		}
	}
</script>
<style>
.clearfix:before, .clearfix:after {
	content: "";
	display: block;
	clear: both;
}	
	
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  clear:both;
}
*{
	margin: 0;
	padding: 0;
}
a {
	text-decoration: none;
}
ul,li{
	list-style: none;
}
#nav{
	min-height: 100%;
	background-color: rgb(50, 64, 87);
	width: 16.66667%;
	float: left;
}
.listss{
	display: none;
}
ul .listss a:hover{
	background-color: #48576a;
}
ul .listss a{
	background-color: #1f2d3d;
}
li,.listss a{
	display: block;
	color: #bfcbd9;
	height: 56px;
	line-height: 56px;
	font-size: 14px;
	padding: 0 20px;
	position: relative;
}
li span{
	position: absolute;
	right: 20px;
	transform:rotate(90deg);
}
</style>
