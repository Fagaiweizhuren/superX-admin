<template>
  <div class="home">
    <div class="header">
      <div class="logo">
        <div class="icon">
          <span class="iconfont icon-title_logo1"></span>
        </div>
        <div class="text">闪云付商户门户</div>
      </div>
      <div class="nav">
        <div class="list">
          <!-- <div class="box" :class="{select: currentNav === 'guidePage'}"  @click="navToActive('guidePage')"> -->
          <router-link
            tag="div"
            class="box"
            :to="{name: 'guidePage'}">
            <span class="iconfont icon-title_zhinan"></span>
            <span class="text">指南</span>
          </router-link>
          <!-- </div> -->
        </div>
        <div class="list">
          <!-- <div class="box" :class="{select: currentNav === 'managePage'}" @click="navToActive('managePage')"> -->
          <router-link
            tag="div"
            class="box"
            :to="{name: 'managePage'}">
            <span class="iconfont icon-title_chanpinguanli"></span>
            <span class="text">产品管理</span>
          </router-link>
          <!-- </div> -->
        </div>
      </div>
    </div>
    <div class="main-router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      currentNav: ''
    }
  },
  computed: {

  },
  mounted () {
    this.$nextTick(function() {

    })
  },
  beforeDestroy () {

  },
  methods: {
    init () {
      this.$router.replace({ name: 'guidePage' })
      this.currentNav = 'guidePage'
    },
    navToActive (navTo) {
      this.$router.push({ name: navTo })
      this.currentNav = navTo
    }
  },
  created () {
    console.log('app created')
    this.init()
  }
}
</script>

<style lang="less">
  @import '../styles/app.less';
</style>


