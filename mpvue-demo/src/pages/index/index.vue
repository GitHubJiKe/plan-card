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
    <div class="column">
      <card v-for="(text,idx) in array5" :text="text" :key="idx" :showBig="showBig"/>
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
      ]
    }
  },
  methods: {
    showBig: function (params) {
      if (!this.showBigOne) {
        this.text = params
        this.showBigOne = true
      }
    },
    closeCard: function (params) {
      this.showBigOne = false
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
</style>
