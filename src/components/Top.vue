<template>
    <v-app>
        <h1>雑談ネタアプリ</h1>
        <div class="text-center hidden-sm-and-down">
            <v-btn rounded color="info" @click="gotoMain" dark x-large>すぐに開始する</v-btn>
        </div>
        <div class="hidden-md-and-up">
            <v-btn rounded color="info" @click="gotoMain" dark x-large>すぐに開始する</v-btn>
        </div>

        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
            color="purple lighten-2"
            fill-dot
            right
            >
            <v-card>
                <v-card-title class="purple lighten-2">
                <v-icon
                    dark
                    size="42"
                    class="mr-4"
                >
                    mdi-magnify
                </v-icon>
                <h2 class="display-1 white--text font-weight-light">初めに</h2>
                </v-card-title>
                <v-container>
                <v-row>
                    <v-col cols="12" md="10">
                    <p>当サイトをご利用いただきありがとうございます。</p>
                    よく話題のネタがなくて
                    <li>「毎回ただの愚痴発散の飲み会になってしまう」</li>
                    <li>「合コンで何を話していいかわからない」</li>
                    <li>「自己紹介のネタに１つ話題を付け加えたい」</li>
                    など雑談のネタに困っている人のために当アプリを作成いたしました。<br>
                    <br>
                    <p>ブラウザ上で動作するためアプリをインストールせずに利用可能です。</p>
                    ※要望が多くなってきたらアプリ化も検討していく予定です。
                    </v-col>
                    <v-col
                    class="hidden-sm-and-down text-right"
                    md="2"
                    >
                    <v-icon size="64">mdi-calendar-text</v-icon>
                    </v-col>
                </v-row>
                </v-container>
            </v-card>
            </v-timeline-item>

            <v-timeline-item
            color="amber lighten-2"
            fill-dot
            left
            >
            <v-card>
                <v-card-title class="amber lighten-1 justify-end">
                <h2 class="display-1 mr-4 white--text font-weight-light">本アプリの概要</h2>
                <v-icon
                    dark
                    size="42"
                >mdi-home-outline</v-icon>
                </v-card-title>
                <v-container>
                <v-row>
                    <v-col cols="12" md="10">
                    <p>コミュニケーションを取りたいけど、どんな話題を出せばいいか中々思いつかない時に話題のネタをランダムで表示します。</p>
                    <p>なるべく大人数で利用すると盛り上がりますが、少人数でもご利用いただけます。</p>
                    <p>一人で雑談ネタを仕入れるのに使っても全然OKです！</p>
                    <p>雑談力で仕事も恋も上手くいくかも？（自己責任で）</p>
                    </v-col>
                </v-row>
                </v-container>
            </v-card>
            </v-timeline-item>

            <v-timeline-item
            color="cyan lighten-1"
            fill-dot
            right
            >
            <v-card>
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
                <v-container>
                <v-row>
                    <v-col cols="12" md="10">
                        <p>主に下記の場面で利用すると盛り上がります！</p>
                        <li>合コンや会社の飲み会などを盛り上げたい</li>
                        <li>ディスカッションの練習テーマ</li>
                        <li>レジャー施設等の待ち時間で会話を繋げたい</li>
                        <li>ビジネスの雑談タイムで会話を繋げたい</li>
                        <li>場を盛り上げたい時に</li>
                        <li>こっそりと雑談ネタを仕入れたい時に</li>
                    </v-col>
                </v-row>
                </v-container>
            </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
  methods: {
    gotoMain() {
      this.$router.push('/main')  
    }
  }
};
</script>