<template>
  <div class="home-index">
    <div class="home-side">
      <div class="nav">
        <nav-list-box
          label="可视化产品"
          defaultOpen>
          <div class="cell">
            <router-link
              tag="div"
              class="box"
              :to="{name: 'cashier'}">
              <span>综合收银台</span>
            </router-link>
          </div>
          <div class="cell">
            <router-link
              tag="div"
              class="box"
              :to="{name: 'authenPayment'}">
              <span>认证支付</span>
            </router-link>
          </div>
          <div class="cell">
            <router-link
              tag="div"
              class="box"
              :to="{name: 'internetCash'}">
              <span>互金收银台</span>
            </router-link>
          </div>
          <div class="cell">
            <router-link
              tag="div"
              class="box"
              :to="{name: 'entrustPayment'}">
              <span>委托收付款</span>
            </router-link>
          </div>
        </nav-list-box>
        <div class="list">
          <div class="t-box">
            <div class="cell">
              <router-link
                tag="div"
                class="box"
                :to="{name: 'apiProduct'}">
                <span>API产品</span>
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
                :to="{name: 'addService'}">
                <span>增值服务</span>
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
                :to="{name: 'openProduct'}">
               <span>开通产品</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-router">
      <router-view></router-view>
    </div>
    <div class="extend">
      <div class="handle" @click="triggerView">
        <div class="im-btn hero">
          <span>咨询</span>
        </div>
      </div>
      <div class="view" :class="{open: rightView}">
        <div class="box ps-bar">
          <div class="guide-view">
            <div class="name-title">
              产品咨询
            </div>
            <div class="view-form">

              <div class="input-title">
                公司名称
              </div>
              <Input placeholder="输入公司名称"></Input>
              <div class="input-title">
                公司地址
              </div>
              <Input placeholder="输入公司地址"></Input>
              <div class="input-title">
                邮箱
              </div>
              <Input placeholder="输入邮箱"></Input>
              <div class="input-title">
                联系人
              </div>
              <Input placeholder="输入联系人"></Input>
              <div class="input-title">
                手机
              </div>
              <Input placeholder="输入手机"></Input>

              <div class="intention-product">
                <div class="intention-title">
                  意向产品(可多选)
                </div>
                <div class="list">
                  <div class="title">
                    可视化类产品
                  </div>
                  <div class="c-box">
                    <Row>
                      <Col span="12">
                        <div class="c-cell">
                          <div class="cell-inner">
                            <Checkbox v-model="checkA">综合收银台</Checkbox>
                          </div>
                          <div class="cell-inner">
                            <Checkbox>互金收银台</Checkbox>
                          </div>
                        </div>
                      </Col>
                      <Col span="12">
                        <div class="c-cell">
                          <div class="cell-inner">
                            <Checkbox>认证支付</Checkbox>
                          </div>
                          <div class="cell-inner">
                            <Checkbox v-model="checkA">委托付款</Checkbox>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div class="list">
                  <div class="title">
                    API 类产品
                  </div>
                  <div class="c-box">
                    <Row>
                      <Col span="12">
                        <div class="c-cell">
                          <div class="cell-inner">
                            <Checkbox>信息认证</Checkbox>
                          </div>
                          <div class="cell-inner">
                            <Checkbox>公安认证</Checkbox>
                          </div>
                          <div class="cell-inner">
                            <Checkbox>网银支付</Checkbox>
                          </div>
                          <div class="cell-inner">
                            <Checkbox>一键支付</Checkbox>
                          </div>
                        </div>
                      </Col>
                      <Col span="12">
                        <div class="c-cell">
                          <div class="cell-inner">
                            <Checkbox>微信支付</Checkbox>
                          </div>
                          <div class="cell-inner">
                            <Checkbox>支付宝支付</Checkbox>
                          </div>
                          <div class="cell-inner">
                            <Checkbox>委托付款</Checkbox>
                          </div>
                          <div class="cell-inner">
                            <Checkbox v-model="checkA">委托收款</Checkbox>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div class="list">
                  <div class="title">
                    增值类产品
                  </div>
                  <div class="c-box">
                    <Row>
                      <Col span="12">
                        <div class="c-cell">
                          <div class="cell-inner">
                            <Checkbox>企业门户</Checkbox>
                          </div>
                          <div class="cell-inner">
                            <Checkbox>账户营销服务</Checkbox>
                          </div>
                        </div>
                      </Col>
                      <Col span="12">
                        <div class="c-cell">
                          <div class="cell-inner">
                            <Checkbox>账户服务</Checkbox>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>

              </div>
              <div class="ti-jiao">
                <div class="im-btn hero" @click="warning">
                  <span>提交</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="bar">
          <div class="link-box">
            <div class="text">
              <span>关注</span>
              <span class="wei-text">
                <Poptip placement="top">
                  <span>微信公众号</span>
                  <div class="erweima" slot="content">
                    <img src="../images/erweima.png" alt="闪云付官网微信公众号">
                  </div>
                </Poptip>
              </span>
              <span>获得及时咨询</span>
            </div>
          </div>
          <div class="close-box">
            <div class="close" @click="triggerView">
              <span class="iconfont icon-cebianlan_guanbi"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar'
import NavListBox from './components/NavListBox.vue'

export default {
  components: {
    NavListBox
  },
  data () {
    return {
      rightView: false,
      currentNavPath: 'cashier',
      checkA: true,
      isOpen: true
    }
  },
  computed: {

  },
  mounted () {
    this.$nextTick(function() {
      const psView = document.querySelector('.view .ps-bar')
      const psRouter = document.querySelector('.home-router')

      /* eslint-disable no-unused-vars */
      const psV = new PerfectScrollbar(psView)

      /* eslint-disable no-unused-vars */
      const psR = new PerfectScrollbar(psRouter)
    })
  },
  methods: {
    init () {
      this.$router.replace({ name: this.currentNavPath })
    },
    triggerView () {
      this.rightView = !this.rightView
    },
    navToName (navTo) {
      this.$router.push({ name: navTo })
      this.currentNavPath = navTo
    },
    warning () {
      this.$Message.warning('嗨，这还需要跟后台联调！')
    },
    navClick () {
      this.isOpen ? this.isOpen = false : this.isOpen = true
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="less">
  @import './home-main/home-main';
  @import './home-main/guide';
</style>

<style lang="less" scoped>

</style>



