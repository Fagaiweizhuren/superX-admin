<template>
  <div class="list im-toggle-nav" :class="{'im-toggle-nav-open' : isOpen}">
    <div class="t-box">
      <div class="cell" @click="navClick">
        <div class="box no-effect">
          <span>{{ label }}</span>
          <span v-if="hasDefaultSlot" class="im-toggle-nav-decoration contain-box">
            <i class="iconfont icon-caidan_zhankai"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="s-box im-toggle-nav-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavListBox',
    props: {
      label: {
        type: String
      },
      defaultOpen: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isOpen: this.defaultOpen
      }
    },
    methods: {
      navClick () {
        this.isOpen ? this.isOpen = false : this.isOpen = true
      }
    },
    computed: {
      hasDefaultSlot () {
        return !!this.$slots.default
      }
    }
  }
</script>

