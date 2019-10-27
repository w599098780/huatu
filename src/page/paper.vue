<template>
    <div class="paper">
      <div class="top" v-if="type!=1">
        <div class="module1">1/45</div>
        <div class="module2">00:00:13</div>
        <router-link to="/report" class="module3" tag="div"><span>交卷</span></router-link >
      </div>
     <!-- 单选-->
      <single :type="type"></single>
      <!-- 多选-->
      <multiple  :type="type"></multiple>
      <!--判断-->
      <judge  :type="type"></judge>
      <!--填空-->
      <fill-bank :type="type"></fill-bank>
     <!--简答-->
      <short-answer :type="type"></short-answer>

    </div>
</template>


<script>
  import single from "../components/single.vue"
  import multiple from "../components/multiple.vue"
  import judge from "../components/judge.vue"
  import fillBank from "../components/fillBank.vue"
  import shortAnswer from "../components/shortAnswer.vue"
    export default {
        name: '',
        components: {single,multiple,judge,fillBank,shortAnswer},
        data() {
            return {
              type:''
            }
        },
      created(){
          this.type=this.$route.query.type

      },
        methods: {}
    }
</script>

<style lang="scss">
  @import "../css/comFun";
  .paper{
    .top{
      font-size: 0;
      height: rem(120);
      border-bottom: 1px solid #409EFF;

      .module1{
        width: 20%;
        display: inline-block;
        font-size: rem(30);
        text-align: center;
        font-size: rem(30);
        line-height: rem(120);

      }
      .module2{
        width: 50%;
        display: inline-block;
        font-size: rem(30);
        padding-left: rem(20);
        box-sizing: border-box;
        font-size: rem(30);
        line-height: rem(120);

      }
      .module3{
        width: 30%;
        display: inline-block;
        text-align: center;
        span{
          color: #fff;
          display: inline-block;
          background: #409EFF;
          font-size: rem(30);
          height: rem(40);
          line-height:rem(40);
          padding:rem(10) rem(20);
          border-radius: rem(20);

        }

       }
    }
    .subType{
      .type{
        font-size: rem(35);
        padding: rem(30);
      }
      .ques{
        padding: rem(10) rem(20);
        font-size: rem(28);
      }
      .options{
        padding-bottom: rem(20);
        .optionItem{
          margin-left: rem(20);
          margin-top: rem(60);
          span{
            width: 20%;
            max-width: rem(60);
            height: rem(60);
            background: #E4E7ED;
            border-radius:50%;
            text-align: center;
            line-height:rem(60);
            display: inline-block;
            font-size: rem(35);
            vertical-align: top;
            &.active{
              color: #fff;
              background: #409EFF;

           }
          }
          p{
            display:inline-block;
            font-size: rem(30);
            margin-left: rem(10);
            width: 80%;
            vertical-align: top;
            line-height: rem(45);


          }
        }

      }
      .res{
       padding: rem(60) rem(20);

        @include border-top-1px(#E4E7ED);
        span{
          font-size: rem(35);
          margin:0 rem(10);
          display: inline-block;
          .wrong{
            color: #F56C6C;
          }
          .right{
            color: #67C23A;
          }
          span{

            display: inline-block;
            margin:0 rem(10);
          }
        }
        h3{
          font-size: rem(35);
          margin-top: rem(40);
          padding-left: rem(10);
        }
        p{
          font-size: rem(28);
          line-height: rem(40);
          padding: rem(20);
        }
      }
    }

  }

</style>
