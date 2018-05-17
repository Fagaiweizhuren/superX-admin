<template>
  <div class="my-product">
    <div class="button-on">
      <div class="demo">
        <div class="im-btn" @click="clickArrOne">
          <span>重置</span>
        </div>
        <div class="im-btn on" @click="clickArrOne">
          <span>悬浮</span>
        </div>
        <div class="im-btn small" @click="clickArrOne">
          <span>重置</span>
        </div>
      </div>
      <div class="demo">
        <div class="im-btn hero" @click="clickArrTwo">
          <span>正常</span>
        </div>
        <div class="im-btn hero on" @click="clickArrTwo">
          <span>悬浮</span>
        </div>
      </div>
      <div class="demo">
        <div class="im-btn primary" @click="clickArrThree">
          <span>正常</span>
        </div>
        <div class="im-btn primary on" @click="clickArrThree">
          <span>悬浮</span>
        </div>
        <div class="im-btn primary small" @click="clickArrThree">
          <span>HI</span>
        </div>
      </div>
    </div>

    <div class="alert-on">
      <Alert show-icon>
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <div slot="desc">提示：请按照约定，选择需要开通的产品</div>
      </Alert>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tipArr: [],
      outWord: [
        '嗨，你终于还是点击了按钮！',
        'hahaha，逗比还再点击！',
        '你是不是傻~~~~~~~！'
      ],
      clickNumber: 0,
      checkTwo: false,
      checkThree: false
    }
  },
  computed: {
    tipArrT () {
      return new Set(this.tipArr)
    }
  },
  mounted () {
    this.$nextTick(function() {

    })
  },
  methods: {
    clickArrOne () {
      this.tipArr.push('one')
      this.clickNumber += 1
      this.clearNumber()
      this.$Notice.success({
        title: 'THANKS GOD YOU CLICKED, HAHAHA',
        desc: this.outWord[this.tipArrT.size - 1] + this.clickNumber
      })
    },
    clickArrTwo () {
      this.tipArr.push('two')
      this.clickNumber += 1
      this.clearNumber()
      this.$Notice.success({
        title: 'THANKS GOD YOU CLICKED, HAHAHA',
        desc: this.outWord[this.tipArrT.size - 1] + this.clickNumber
      })
    },
    clickArrThree () {
      this.tipArr.push('three')
      this.clickNumber += 1
      this.clearNumber()
      this.$Notice.success({
        title: 'THANKS GOD YOU CLICKED, HAHAHA',
        desc: this.outWord[this.tipArrT.size - 1] + this.clickNumber
      })
    },
    clearNumber () {
      if ( this.tipArrT.size === 2) {
        if (!this.checkTwo) {
          this.clickNumber = 1
          this.checkTwo = true
        }
      }
      if ( this.tipArrT.size === 3) {
        if (!this.checkThree) {
          this.clickNumber = 1
          this.checkThree = true
        }
      }
    }
  },
  created () {

  }
}
</script>

<style lang="less">

</style>

<style lang="less" scoped>
  .button-on {
    padding: 30px;
  }
  .alert-on {
    padding: 30px;
    width: 800px;
  }
  .demo {
    padding: 20px;

    & > div {
      margin-right: 30px;
    }
  }
</style>



