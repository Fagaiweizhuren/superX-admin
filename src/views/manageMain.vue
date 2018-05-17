<template>
  <div class="home-index">
    <div class="home-side">
      <div class="nav">
        <div class="list">
          <div class="t-box">
            <div class="cell">
              <router-link
                tag="div"
                class="box"
                :to="{name: 'myProduct'}">
                <span>我的产品</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="t-box">
            <div class="cell">
              <router-link
                tag="div"
                class="box"
                :to="{name: 'examineProgress'}">
                <span>审查进度查询</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentNavPath: 'myProduct'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    init() {
      this.$router.replace({ name: this.currentNavPath })
    },
    navToName (navTo) {
      this.$router.push({ name: navTo })
      this.currentNavPath = navTo
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="less">
  @import './home-main/home-main';
</style>

<style lang="less" scoped>

</style>



