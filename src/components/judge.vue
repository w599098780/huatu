<template>
  <div class="subType judge">
    <div class="type">判断题</div>
    <div class="ques">{{topic.title}}</div>
    <div class="options">
      <div class="optionItem" v-for="item in topic.option">
        <span :class="{active:ans=='F'}" @click="checkFun('F')">F</span>
        <span :class="{active:ans=='N'}" @click="checkFun('N')">N</span>
        <p class="w70">{{item.qus}}</p>
      </div>

    </div>
    <div class="res" v-if="type==1">
      <span>参考答案：<span class="m30">B</span></span>
      <span>你的答案：<span class="wrong">A</span><span class="right">B</span></span>
      <h3>解析：</h3>
      <p>无</p>
    </div>
  </div>
</template>

<script>


    export default {
        name: '',
        props:['type'],
        components: {},
        data() {
            return {
              topic:{
                title:'1.判断字母大小写是否正确.',
                option:[
                  {qus:'Ee'}
                ]
              },
              ans:''
            }
        },
      created(){

      },
        methods: {
          checkFun(val){
            this.ans=val

          }
        }
    }
</script>

<style lang="scss">
  @import "../css/comFun";
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
          &.w70{
            display:inline-block;
            font-size: rem(30);
            margin-left: rem(10);
            width: 70%;
            vertical-align: top;
            line-height: rem(45);

          }

        }
      }

    }

  }

</style>
