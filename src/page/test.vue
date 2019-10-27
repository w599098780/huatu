<template>
    <div class="test">
      <div class="list">
        <div class="left">
          <img src="../img/cepingLogo.png" alt="">
        </div>
        <div class="center">
          <p>高等数学 测评</p>
          <span>免费</span>
        </div>
        <div class="right">
          <p>试卷0套 <span>|</span> 已测24</p>
        </div>
      </div>
      <div class="paperList">
        <router-link to="/paper" class="inner95" v-for="item in 5" tag="div">
          <div class="icon ">
            <span class="iconfont icon-xiaoshijuan"></span>
          </div>
          <div class="name">

            <p class="title">名词性从句</p>
            <p><span>共 <b>33</b> 题</span><span>14人测试</span></p>
          </div>
          <div class="icon jiantou">
            <span class="iconfont icon-dibudaohanglan-"></span>
          </div>
        </router-link>


      </div>


    </div>
</template>

<script>


    export default {
        name: '',
        components: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>


<style lang="scss">
  @import "../css/comFun";
  .test{
    background: #F2F6FC;
    .list{
      font-size: 0;
      background:#fff;
      margin: rem(10) auto 0;
      padding: rem(30) 0;
      @include border-1px(#E4E7ED);
      min-height: rem(100);
      position: relative;

      .left{
        width: 30%;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        img{
          width: 50%;
        }
      }
      .center{
        width: 40%;
        display: inline-block;
        vertical-align: top;
        p{
          font-size: rem(25);
        }
        span{
          color: #409EFF;
          font-size: rem(28);
          display: inline-block;
          margin-top: rem(50);
        }
      }
      .right{
        width: 30%;
        display: inline-block;
        vertical-align: top;
        height: 100%;
        p{
          font-size: rem(20);
          color: #909399;
          bottom: rem(30);
          position: absolute;

        }

      }

    }
    .paperList{
      font-size: 0;
      margin: rem(10) auto 0;
      background: #fff;
      .inner95{
        width:95%;
        margin: 0 auto;
        @include border-1px(#E4E7ED);
        padding: rem(30) 0;

        .icon{
          width: 15%;
          display: inline-block;
          vertical-align: top;
          text-align: center;
          &.jiantou{
            text-align: right;
          }
          span{
            font-size: rem(50);
            display: inline-block;
            margin-top: rem(15);
          }

        }
        .name{
          width: 70%;
          display: inline-block;
          vertical-align: top;
          p{
            font-size: rem(28);
            line-height: rem(40);
            color: #909399;
          }
          .title{
            font-size: rem(35);
            line-height: rem(50);
            color: #303133;
            margin-bottom: rem(10);
          }

        }
      }




    }
  }


</style>
