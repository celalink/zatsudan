<template>
  <v-app id="inspire">
    <p class="text-right">
      <v-btn x-large color="blue" @click="nextTheme" dark>雑談テーマを変更する</v-btn>
    </p>
    <v-container>
      <v-row>
        <v-chip
          class="ma-2"
          disabled
          label
        >
          雑談ジャンル：{{getType()}}
        </v-chip>
      </v-row>
      <v-row>
        <p class="mainText">{{getTheme()}}</p>
      </v-row>
      <v-row>
        <ShareTweetBtn :pageTitle="theme"/>
        <!-- ShareFacebookBtn :pageTitle="theme" /--> 
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import vuetify from '../plugins/vuetify';
import ShareTweetBtn from './ShareTweetBtn';
export default {
  vuetify,
  data () {
    return {
      num: 0,
      type: "",
      theme: "",
    }
  },
  components: {
    ShareTweetBtn,
  },
  props: {
    itemList:null,
  },
  created() {
    console.log("雑談表示")
    if (this.itemList.length != 0) {
      var min = 0;
      var max = this.itemList.length;

      this.num = Math.floor( Math.random() * (max + 1 - min) ) + min
      console.log(this.itemList[this.num])
    } else {
      alert("雑談ネタの取得に失敗したのでトップページへ戻ります。");
      this.$router.push("/")
    }
  },
  methods: {
    nextTheme() {
      this.$router.push({name:"load", params: {itemList: this.itemList}})
    },
    getTheme() {
      this.theme = this.itemList[this.num].theme
      return this.theme
    },
    getType() {
      this.type = this.itemList[this.num].theme_type
      return this.type
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
.cardMain {
  background-color: #B5C7D3;
}
</style>