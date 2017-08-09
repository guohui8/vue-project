<template>
  <div>
  <div class='body-main'>
    <banner-head :dataContent="dataContent"></banner-head>
    <div class='program-list'>
      <div class='program-list-wrap clearfix'>
        <router-view :dataContent="dataContent" keep-alive></router-view>
      </div>
    </div>
  </div>
  <div class="elevator">
    <a href="https://github.com/giscafer" class="elevator-faq" target="_blank">
      <span class="">GitHub</span>
    </a>
    <a href="http://giscafer.com" class="elevator-msg" target="_blank">
      <span class="">博客</span>
    </a>
    <a href="http://weibo.com/laohoubin" target="_blank" class="elevator-app">
      <span class="">微博</span>
      <div class="elevator-app-box"></div>
    </a>
     <!--<a href="javascript:void(0)" class="elevator-top no-goto"  id="backTop">-->
       <!--<span class="">返回顶部</span>-->
     <!--</a>-->
  </div>
  </div>
</template>


<script>
  import router from './router'
  import BannerHead from './components/BannerHead'
  const ERR_OK = 0;
  export default {
    name: 'app',
    data() {
      return {
        dataContent: {},
        newContent: {}
      };
    },
    created() {

      this.$http.get('/api/all').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.dataContent = Object.assign({}, this.dataContent, response.data);
          //console.log( this.dataContent);
          //console.log($router.path)
          this.newContent = Object.assign({}, this.dataContent, response.data);
          this.changeData()


        }
      });
    },
//    mounted: function() {
//      var type = this.$route.path.substr(1);
//      this.changeData(type)
//    },
    components: {
      'banner-head': BannerHead
    },
    methods:{
      changeData:function() {
        var type = this.$route.path.substr(1);
        console.log("已经进入到changeData--"+type);
        this.dataContent.project = this.filterPro(type);
//        console.log(this.dataContent.project)

      },
      filterPro:function(type){
        if(!type){
          return this.newContent.project;
        }
        return this.newContent.project.filter(item => {
          return item.type.includes(type);
        })
      }

    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "changeData"
    }

  }

</script>

<style>
  @import "../src/assets/css/common.css";
  @import "../src/assets/css/main.css";

</style>
