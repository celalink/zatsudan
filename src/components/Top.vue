<template>
  <div class="top">
    <v-countent>
      <v-container>
        <v-row justify="center">
          <h1>会話のきっかけにもう悩まない！<br>雑談ネタを提供する「HANASHIKA」</h1>
        </v-row>
        <hr>
        <div class="readMe">
          <p>よく話題のネタがなくて</p>
          <li>「毎回ただの愚痴発散の飲み会になってしまう」</li>
          <li>「合コンで何を話していいかわからない」</li>
          <li>「自己紹介のネタに１つ話題を付け加えたい」</li>
          など雑談のネタに困っている人のために当アプリを作成いたしました。<br>
          <br>
          <p>ブラウザ上で動作するためアプリをインストールせずに利用可能です。</p>
          ※要望が多くなってきたらアプリ化も検討していく予定です。
        </div>
        <v-row justify="center">
          <v-btn class="startBtn" @click="gotoMain">すぐに開始する</v-btn>
        </v-row>
        <v-spacer />

        <v-row justify="center">
          <v-col cols="auto">
            <v-card class="main-card">
              <v-card-title class="amber lighten-1">
                <h2 class="display-1 mr-4 white--text font-weight-light">本アプリの概要</h2>
                <v-icon
                    dark
                    size="42"
                >mdi-home-outline</v-icon>
              </v-card-title>
              <v-row>
                <v-col style="margin: 20px 0 20px 0;">
                  <div>
                    コミュニケーションを取りたいけど、どんな話題を出せばいいか<br>
                    中々思いつかない時に話題のネタをランダムで表示します。<br>
                    なるべく大人数で利用すると盛り上がりますが、少人数でもご利用いただけます。<br>
                    一人で雑談ネタを仕入れるのに使っても全然OKです！<br>
                    雑談力で仕事も恋も上手くいくかも？（自己責任で）<br>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card class="main-card">
              <v-card-title class="cyan lighten-1">
                <v-icon
                    class="mr-4"
                    dark
                    size="42"
                >
                    mdi-account-multiple-outline
                </v-icon>
                <h2 class="display-1 white--text font-weight-light">利用シーン</h2>
              </v-card-title>
                <v-row>
                  <v-col>
                    <p>主に下記の場面で利用すると盛り上がります！</p>
                    <li>合コンや会社の飲み会などを盛り上げたい</li>
                    <li>ディスカッションの練習テーマ</li>
                    <li>レジャー施設等の待ち時間で会話を繋げたい</li>
                    <li>ビジネスの雑談タイムで会話を繋げたい</li>
                    <li>場を盛り上げたい時に</li>
                    <li>こっそりと雑談ネタを仕入れたい時に</li>
                  </v-col>
                </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <a href="">画像提供：pixabay</a>
        </v-row>
      </v-container>
    </v-countent>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    };
  },
  methods: {
    gotoMain() {
      this.$router.push('/main');
    }
  }
};
</script>
<style>
h1{
  text-align: center;
  color: #B5C7D3;
}
.startBtn {
  height: 150px !important;
  width: 250px !important;
  background-color: #F5B895 !important;
  font-size: 16px !important;
  margin: 20px 0 30px 0;
}
.top {
  background-image: url("~@/assets/img/background01.jpg");
  background-color:  #014c86;
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  height:100%;
}
.readMe {
  margin: 20px 0 20px 0;
  text-align: center;
  color: #ffffff;
}
.main-card {
  min-height: 300px;
  width: 500px;
}
</style>