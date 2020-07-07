<template>
  <v-app>
    <h1>雑談テーマ選択</h1>
      <v-container>
        <v-row>
          <v-col>
            <v-card
              class="mx-auto"
              max-width="344"
              @click="start(items)"
            >
              <v-img src="/img/background01.jpg" height="150px"></v-img>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">すべてのジャンルから選択</v-list-item-title>
                  <v-list-item-subtitle><p class="regCnt">登録件数:{{items.length}}</p></v-list-item-subtitle>
                  <div class="text--primary">
                      ビジネス/プライベート/恋愛などすべてのジャンルから選択
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="mx-auto"
              max-width="344"
              @click="start(drunkItems)"
            >
              <v-img src="/img/background02.jpg" height="150px"></v-img>
              <v-list-item three-line>
              <v-list-item-content>
                  <v-list-item-title class="headline mb-1">飲み会での雑談テーマ</v-list-item-title>
                  <v-list-item-subtitle><p class="regCnt">登録件数:{{drunkItems.length}}</p></v-list-item-subtitle>
                  <div class="text--primary">
                      プライベートや恋愛など飲み会で盛り上がる雑談テーマ
                  </div>
              </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card
              class="mx-auto"
              max-width="344"
              @click="start(bizItems)"
            >
              <v-img src="/img/background03.jpg" height="150px"></v-img>
              <v-list-item three-line>
              <v-list-item-content>
                  <v-list-item-title class="headline mb-1">ビジネスでの雑談テーマ</v-list-item-title>
                  <v-list-item-subtitle><p class="regCnt">登録件数:{{bizItems.length}}</p></v-list-item-subtitle>
                  <div class="text--primary">
                      仕事に関する雑談テーマ
                  </div>
              </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
</template>
<script>
import * as firebase from "firebase/app";
export default {
  data() {
    return {
      drawer: false,
      items:[],
      drunkItems:[],
      bizItems:[],
      imagePath: require('@/assets/img/background01.jpg'),
    };
  },
  created() {
    console.log("雑談ジャンル選択");
    // 全雑談種別を取得
    this.getThemeAllList();
    // 飲み会用の雑談を取得
    this.getThemeList('プライベート', this.drunkItems);
    this.getThemeList('恋愛', this.drunkItems);
    this.getThemeList('飲み会', this.drunkItems);
    // ビジネス用の雑談を取得
    this.getThemeList('ビジネス', this.bizItems);
  },
  methods: {
    async getThemeAllList() {
      var db = firebase.firestore();
      await db.collection("theme").get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            var docItem = doc.data();
            this.items.push(docItem);
          });
        });
    },
    async getThemeList(type, arr) {
      var db = firebase.firestore();
      await db.collection("theme").where('theme_type', '==', type).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            var docItem = doc.data();
            arr.push(docItem);
          });
        });
    },
    start(arr) {
      console.log(arr);
      // this.$router.push({path:"load", params: {itemList: arr}}) <- pathだとpropが渡せない
      this.$router.push({name:"load", params: {itemList: arr}});
    }
  },
};
</script>
<style>
.start {
  background-color: #B5C7D3;
}
.regCnt {
  color: #e50112;
}
</style>