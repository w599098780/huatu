<template>
  <div class="subType">
    <div class="type">多选题</div>
    <div class="ques">{{topic.title}}</div>
    <div class="options">
      <div class="optionItem" v-for="item in topic.option"  @click="checkFun(item.type)">
        <span :class="{active:ans.indexOf(item.type)>=0}">{{item.type}}</span>
        <p>{{item.val}}</p>
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
        components: {},
      props:['type'],
        data() {
            return {
              topic:{
                title:'1.茉莉.',
                option:[
                  {type:"A",val:'poke'},
                  {type:"B",val:'barcode'},
                  {type:"C",val:'burger'},
                  {type:"D",val: 'pulse'},
                  {type:"E",val:'glove'},
                ]
              },
              ans:[]
            }
        },
        methods: {
          checkFun(val){
            if( this.ans.indexOf(val)>=0){
              let index=this.ans.indexOf(val)
              this.ans.splice(index,1)
            }else {
              this.ans.push(val);
            }
            console.log(this.ans)

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
          display:inline-block;
          font-size: rem(30);
          margin-left: rem(10);
          width: 80%;
          vertical-align: top;
          line-height: rem(45);


        }
      }

    }
    &.judge{

    }
  }

</style>
