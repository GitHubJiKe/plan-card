<template>
  <div class="container">
    <div class="column">
      <card v-for="(text,idx) in array1" :text="text" :key="idx" :showBig="showBig"/>
    </div>
    <div class="column">
      <card v-for="(text,idx) in array2" :text="text" :key="idx" :showBig="showBig"/>
    </div>
    <div class="column">
      <card v-for="(text,idx) in array3" :text="text" :key="idx" :showBig="showBig"/>
    </div>
    <div class="column">
      <card v-for="(text,idx) in array4" :text="text" :key="idx" :showBig="showBig"/>
    </div>
    <div class="column" style="margin-bottom:100rpx;">
      <card v-for="(text,idx) in array5" :text="text" :key="idx" :showBig="showBig"/>
    </div>
    <button class="qrcode_btn" :disabled="showBigOne" @click="toggleQrCode">{{open ? '取消' : '分享'}}</button>
    <div @click="toggleQrCode">
      <div v-if="open" class="qrcode_box animated zoomIn">
      <img class="qr_image" :src="qrcodePath"/>
    </div>
    </div>
    <div v-if="showBigOne" class="big-one-container">
      <bigcard :text="text" :onClick="closeCard"/>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import bigcard from '@/components/big-card'
import qrcodePath from '../../assets/qrcode.jpg'
export default {
  data () {
    return {
      text: '',
      showBigOne: false,
      array1: [
        '0',
        '1/2',
        '1'
      ],
      array2: [
        '2',
        '3',
        '5'
      ],
      array3: [
        '8',
        '13',
        '20'
      ],
      array4: [
        '40',
        '100',
        '∞'
      ],
      array5: [
        '?',
        'Zzz'
      ],
      qrcodePath,
      open: false
    }
  },
  methods: {
    showBig: function (params) {
      if (!this.showBigOne && !this.open) {
        this.text = params
        this.showBigOne = true
      }
    },
    closeCard: function () {
      this.showBigOne = false
    },
    toggleQrCode: function () {
      this.open = !this.open
    }
  },
  components: {
    card,
    bigcard
  },
  onShareAppMessage () {}
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
.qrcode_btn{
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 10000;
  border-radius: 0px;
  border: none;
}
.qrcode_box{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px; 
  top: 0px; 
  background-color:#1aad19; 
  filter:alpha(opacity=90); 
  -moz-opacity:0.9; 
  opacity:0.9; 
  text-align: center;
}
.qr_image{
  width: 430rpx;
  height: 430rpx;
  border-radius: 430rpx;
  position: absolute;
  top: 33%;
  left: 22%;
  background-color: #000;
}
</style>
