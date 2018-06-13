<template>
  <div v-if="show" class="big-card animated zoomIn" @click="closeCard">
    <label>{{text}}</label>
  </div>
  <div v-else class="big-card-noshow animated zoomIn" @click="showText">
    ?
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  props: {
    text: {
      type: String,
      default: 'text'
    },
    onClick: {
      type: Function,
      default: function (params) {
        console.log('default click of big card')
      }
    }
  },
  methods: {
    showText: function (params) {
      this.show = true
    },
    closeCard: function (params) {
      this.show = false
      if (this.onClick) {
        this.onClick()
      }
    }
  }
}
</script>
<style scoped>
  .big-card{
    width: 100%;
    height: 1000rpx;
    background-color: #1e35e4;
    border-radius: 20rpx;
    margin: 20rpx;
    text-align: center;
    font-size: 80pt;
    line-height: 1000rpx;
    color: white;
  }
  .big-card-noshow{
    width: 100%;
    height: 1000rpx;
    background-color: antiquewhite;
    margin: 20rpx;
    border-radius: 20rpx;
    text-align: center;
    font-size: 80pt;
    line-height: 1000rpx;
  }
</style>
