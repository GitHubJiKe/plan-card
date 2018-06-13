<template>
  <div class="container">
    <div class="column">
      <card text="0" :showBig="showBig"/>
      <card text="1/2" :showBig="showBig"/>
      <card text="1" :showBig="showBig"/>
    </div>
    <div class="column">
      <card text="2" :showBig="showBig"/>
      <card text="3" :showBig="showBig"/>
      <card text="5" :showBig="showBig"/>
    </div>
    <div class="column">
      <card text="8" :showBig="showBig"/>
      <card text="13" :showBig="showBig"/>
      <card text="20" :showBig="showBig"/>
    </div>
    <div class="column">
      <card text="40" :showBig="showBig"/>
      <card text="100" :showBig="showBig"/>
      <card text="∞" :showBig="showBig"/>
    </div>
    <div class="column">
      <card text="?" :showBig="showBig"/>
      <card text="Zzz" :showBig="showBig"/>
    </div>
    <div v-if="showBigOne" class="big-one-container">
      <bigcard :text="text" :onClick="closeCard"/>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import bigcard from '@/components/big-card'

export default {
  data () {
    return {
      text: '',
      showBigOne: false
    }
  },
  methods: {
    showBig: function (params) {
      console.log('show big', params)
      this.text = params
      this.showBigOne = true
    },
    closeCard: function (params) {
      this.showBigOne = false
    }
  },
  components: {
    card,
    bigcard
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
}
.column{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10rpx 30rpx;
  box-sizing: border-box;
}
.big-one-container{
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  text-align:center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
