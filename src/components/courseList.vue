<template>
    <div class="courseList">
      <div class="menu">
        <div :class="{'active':active==1}" @click="menuFun('1')">所有分类</div>
        <div :class="{'active':active==2}" @click="menuFun('2')">大学语文</div>
        <div :class="{'active':active==3}" @click="menuFun('3')">高等数学</div>
        <div :class="{'active':active==4}" @click="menuFun('4')">大学英语</div>
        <div :class="{'active':active==5}" @click="menuFun('5')">计算机</div>
        <div :class="{'active':active==6}" @click="menuFun('6')">英语四级</div>
      </div>
      <div class="content">
        <div class="all" v-if="active==1">
          <div class="listWrap">
            <img src="../img/2.png" alt="">
            <p>大学语文</p>
          </div>
          <div class="listWrap">
            <img src="../img/2.png" alt="">
            <p>高等数学</p>
          </div>
          <div class="listWrap">
            <img src="../img/2.png" alt="">
            <p>大学英语</p>
          </div>
          <div class="listWrap">
            <img src="../img/2.png" alt="">
            <p>计算机</p>
          </div>
          <div class="listWrap">
            <img src="../img/2.png" alt="">
            <p>英语四级</p>
          </div>
        </div>
        <div class="classification" v-else >
          <div class="bigPic">
            <img src="../img/2.png" alt="">
          </div>
          <div class="picList">
            <div class="listWrap">
              <img src="../img/1.png" alt="">
              <p>大学语文基础系列</p>
            </div>
            <div class="listWrap">
              <img src="../img/1.png" alt="">
              <p>大学语文冲刺大学语文冲刺大学语文冲刺</p>
            </div>
            <div class="listWrap">
              <img src="../img/1.png" alt="">
              <p>大学语文精品系列</p>
            </div>
          </div>

        </div>

      </div>

    </div>
</template>

<script>


    export default {
        name: '',
        components: {},
        data() {
            return {
              active:1
            }
        },
        methods: {
          menuFun(val){
            this.active=val
          }
        }
    }
</script>

<style lang="scss">
  @import "../css/comFun";
  .courseList{
    font-size: 0;
    .menu{
      width: 25%;
      display: inline-block;
      font-size: rem(30);
      vertical-align: top;
      div{
        height: rem(130);
        line-height: rem(130);
        padding-left: rem(30);
        box-sizing: border-box;
        &.active{
          background: #fff;
          position: relative;
          &::after{
            content: "";
            display: block;
            position: absolute;
            height: rem(60);
            width: 6px;
            background: #409EFF;
            left: 0;
            top:50%;
            transform: translateY(-50%);
          }
        }

      }
    }
    .content{
      width: 75%;
      display: inline-block;
      font-size: 0;
      background: #fff;
      vertical-align: top;
      padding-top: rem(40);

      .all{
        .listWrap{
          width: 50%;
          display: inline-block;
          margin-bottom: rem(25);
          text-align: center;
          p{
            font-size: rem(28);
            text-align: center;
            line-height: rem(80);
          }
          img{
            width: 90%;
          }
        }
      }
      .classification{
        .bigPic{
          text-align: center;
          margin-bottom: rem(30);
          img{
            width: 95%;
          }
        }
        .picList{
          .listWrap{
            width: 50%;
            display: inline-block;
            margin-bottom: rem(10);
            text-align: center;
            p{
              font-size: rem(28);
              text-align: center;
              line-height: rem(40);
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            img{
              width: 90%;
            }
          }
        }

      }
    }

  }


</style>
