<template>
  <v-app>
    <v-app-bar 
      color="#ffb2d8"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Menu</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item href="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
<!--
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
-->

          <v-list-item href="/howto">
            <v-list-item-icon>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-icon>
            <v-list-item-title>使い方</v-list-item-title>
          </v-list-item>

          <v-list-item href="/policy">
            <v-list-item-icon>
              <v-icon>mdi-file</v-icon>
            </v-list-item-icon>
            <v-list-item-title>利用規約</v-list-item-title>
          </v-list-item>

          <v-list-item href="/maintenance">
            <v-list-item-icon>
              <v-icon>mdi-wrench</v-icon>
            </v-list-item-icon>
            <v-list-item-title>メンテナンス画面</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Theme表示部分-->
    <Card :itemList="items"/>
    <!-- Footer表示部分 -->
    <!-- <Footer/> -->
  </v-app>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Card from './Card';
// import Footer from './Footer';
import * as firebase from "firebase/app";

export default {
  name: 'App',

  components: {
    Card,
    // Footer,
  },
  data: () => ({
    drawer: false,
    items:[],
  }),
  created() {
    console.log("画面初期起動時");
    this.getThemeList();
    console.log("雑談ネタ取得完了")
    console.log(this.items)
    
  },
  methods: {
    async getThemeList() {
      var db = firebase.firestore();
      await db.collection("theme").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var docItem = doc.data()
          this.items.push(docItem)
        });
      });
    }
  }
};
</script>
