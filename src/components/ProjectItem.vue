<template>
  <div>
  <a v-for="item in dataContent.project" href='javascript:void(0)' target="_blank" class='program-item'>
    <div class='shadow'>
      <div class='program-list-head'>
        <div :id="'repo-bg-'+item.img"></div>
      </div>
      <div class='program-list-cont'>
        <div class='program-list-tit'>{{item.title}}</div>
        <div class='program-list-t clearfix'>
          <span class='text'>{{item.subtitle}}</span>
        </div>
        <div class='program-list-dest'>{{item.meta}}</div>

        <div class='program-list-bot'>
          <span class='text'><a  :href="item.demoUrl" target="_blank">在线演示</a></span>
          <span class='git'><a  :href="item.gitUrl" target="_blank">Github</a></span>
        </div>
      </div>
    </div>
    <div class='c-line'></div>
    <div class='d-line'></div>
  </a>
  </div>
  <!--<a *ngFor="let item of projects; let i=index;" href='javascript:void(0)' target="_blank" class='program-item'>-->
    <!--<div class='shadow'>-->
      <!--<div class='program-list-head'>-->
        <!--<div id='repo-bg-{{item.img}}'></div>-->
      <!--</div>-->
      <!--<div class='program-list-cont'>-->
        <!--<div class='program-list-tit'>{{item.title}}</div>-->
        <!--<div class='program-list-t clearfix'>-->
          <!--<span class='text'>{{item.subtitle}}</span>-->
        <!--</div>-->
        <!--<div class='program-list-dest'>{{item.meta}}</div>-->

        <!--<div class='program-list-bot'>-->
          <!--<span class='text'><a *ngIf="item.demoUrl!==''" href="{{item.demoUrl}}" target="_blank">在线演示</a></span>-->
          <!--<span class='git'><a *ngIf="item.gitUrl!==''" href="{{item.gitUrl}}" target="_blank">Github</a></span>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--<a  *ngIf="item.npm" href="{{item.npm}}" target="_blank"><span class='item-new'>npm</span></a>-->
    <!--<div class='c-line'></div>-->
    <!--<div class='d-line'></div>-->
  <!--</a>-->

</template>

<script >
  import {projectData} from "../../data.json";
    export default {
        props: ['dataContent'],
        data() {
            return {
              dataContent2: {}

            };
        },
        created(){
//            var type = this.$route.path.substr(1);
//            var project = this.myResult.project
//            this.changeData(type);
//          console.log(this.projectData);
        },
      wtach:{

      },
      methods:{
//          changeData:function(type) {
//              this.dataContent = this.filterPro(type);
//          },
//          filterPro:function(type){
//              if(!type){
//                  return this.dataContent;
//              }
//              return this.project.filter(item => {
//                  return item.type.includes(type);
//              })
//          }

      }

    };
</script>

<style>

</style>
