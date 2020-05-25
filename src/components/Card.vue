<template>
  <v-app id="inspire">
    <p class="mainText">{{getTheme()}}</p>
    <p class="text-right">
      <v-btn x-large color="blue" href="/load" dark>雑談テーマを変更する</v-btn>
    </p>
  </v-app>
</template>

<script>
import vuetify from '../plugins/vuetify';
export default {
  vuetify,
  data () {
    return {
      theme:"",
    }
  },
  props: {
    itemList:null,
  },
  methods: {
    getTheme() {
      if (this.itemList.length == 0) {
        this.theme = ""

      } else {
        var min = 0;
        var max = this.itemList.length;

        var num = Math.floor( Math.random() * (max + 1 - min) ) + min
        this.theme = this.itemList[num].theme
      }
      return this.theme
    },
  }
}
</script>
<style>
.mainText {
  font-size:5.46vw;
  width: 75vw;
  position: absolute;
  top: 40%; /*親要素を起点に上から40%*/
  left: 55%;  /*親要素を起点に左から50%*/
  transform: translateY(-50%) translateX(-50%); /*要素の大きさの半分ずつを戻す*/
  -webkit-transform: translateY(-50%) translateX(-50%);
}

</style>