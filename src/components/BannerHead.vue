<template>

  <div class='program-banner'>

    <div class='relative banner-head js-banner-head'>
        <!--<div class='js-all' :class="firstNavPath?'active':''">-->
            <!--<h2 class='tit'>firstNav.introTitle</h2>-->
            <!--<p class='intro'>-->
                <!--firstNav.intro-->
            <!--</p>-->
        <!--</div>-->
      <div id="blockhide" v-for="nav in dataContent.navs" :class="(nav.routerUrl==curRoutePath)?'active':''" >
          <span>{{nav.routerUrl==curRoutePath}}</span>
          <h2 class='tit'>{{nav.introTitle}}</h2>
          <p class='intro'>{{nav.intro}}</p>
      </div>

    </div>


    <div class='tab-nav js-tabNav clearfix'>
        <div v-for="nav in dataContent.navs">
            <router-link class="navitem navitemall" :to="nav.routerUrl"  :class="(nav.routerUrl==curRoutePath)?'active':''" v-on:click.native="navLine">
                <i class='navicon' :class="nav.navIcon"></i>
                <span class='navtext' >{{nav.navText}}</span>
                <div class='navbot'></div>
            </router-link>
        </div>
    </div>

    <div class='MMM'></div>
    <div class='program-banner-wrap'>
      <div class='program-banner-absolute'>
        <div class='program-banner-bk'>
          <div class='svg-block image1'></div>
          <div class='svg-diamond image2'></div>
          <div class='svg-leaf image3'></div>
          <div class='svg-small-circle'></div>
          <div class='svg-big-circle'></div>
          <div class='svg-triangle image4'></div>
        </div>
      </div>
    </div>
  </div>


</template>

<script type="text/ecmascript-6">
var curRoutePath;
var firstNavPath;
  export default {
    props: ['dataContent'],
    data() {
        return {
//            curRoutePath: $route.path
            isJsall:true,
            curRoutePath : "",
            firstNavPath : ""
        };
    },
    created(){
        this.firstNavPath =this.$route.path.startsWith("/all");
        console.log(firstNavPath)

    },
    mounted() {
     this.curRoutePath =this.$route.path;

    },
    methods:{
      'navLine': function(){
          this.curRoutePath =this.$route.path;
      }
    }

  };
</script>

<style scoped>
    /*.program-banner .blockhide{*/
        /*display: none;*/
    /*}*/

</style>
