<template>
  <div class="card" @click="onClick" :data-text="text">
    {{text}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      showBig: false
    }
  },
  props: {
    text: {
      type: String,
      default: 'text'
    },
    showBig: {
      type: Function,
      default: function (params) {
        console.log('default function')
      }
    }
  },
  methods: {
    onClick: function (params) {
      if (this.showBig) {
        this.showBig(params.target.dataset['text'])
      }
    }
  }
}
</script>

<style>
.card {
  display: inline-block;
  width: 20%;
  height: 100px;
  padding: 10px;
  border: 3px solid #1aad19;
  border-radius: 3px;
  text-align: center;
  line-height: 100px;
  font-size: 30pt;
}
</style>
