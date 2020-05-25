<template>
    <v-app>
        <h1>遊び方</h1>
        
        <v-stepper v-model="e13" vertical>
            <v-stepper-step step="1">
            ルール
            </v-stepper-step>

            <v-stepper-content step="1">
            <v-card color="yellow lighten-4" class="mb-12">
                <p>ゲーム開始時に必ず下記のルールを参加者に伝えてください。</p>
                <li>ルール１：答えたくない or 答えられない質問は無理に答えず次のテーマに移動すること</li>
                <li>ルール２：雑談ネタの中には恋バナや下ネタ系を含むものもあります。苦手な人はごめんなさい</li>
                <li>ルール３：参加者の皆様は紳士・淑女の方々とお見受けします。ドン引きする過激な内容はほどほどに・・・・</li>
                <li>ルール４：もしかしたら聞いちゃいけない話もあると思うので、ゲーム終了後には忘れましょう！</li>
                <li>※でも良い話は拡散してもいいかも♪</li>
            </v-card>
            <v-btn color="primary" @click="e13 = 2">次のルールを確認</v-btn>
            <v-btn color="primary" href="/">最初に戻る</v-btn>
            </v-stepper-content>

            <v-stepper-step step="2">基本的な遊び方</v-stepper-step>
            <v-stepper-content step="2">
            <v-card color="yellow lighten-4" class="mb-12">
               <div>
                    <p>表示したテーマを全員に見えるようにして、テーマにそって話をします。</p>
                    <p>コミュニケーションなので相手が話した内容に対して質問したりツッコミいれたりして</p>
                    <p>会話を広げてください</p>

                    <p>参加者によりますが、一人３〜５分くらいで、必ず参加者全員がトークを引けるように</p>
                    <p>タイムキーパーがいると尚良いです。</p>
                    <p>１人２問回答で１回やってみて時間を調整すると良いです。</p>
                </div> 
            </v-card>
            <v-btn color="primary" @click="e13 = 3">次のルールを確認</v-btn>
            </v-stepper-content>

            <v-stepper-step step="3">1つのテーマを全員で話す時</v-stepper-step>
            <v-stepper-content step="3">
            <v-card color="yellow lighten-4" class="mb-12">
                <div>
                    <p>パソコン/スマートフォン/タブレットで当アプリを表示し、</p>
                    <p>全員が見えるように表示してください。</p>
                </div>
            </v-card>

            <v-btn color="primary" @click="e13 = 4">次のルールを確認</v-btn>
            </v-stepper-content>

            <v-stepper-step step="4">一人ひとり違うテーマを話したい時</v-stepper-step>
            <v-stepper-content step="4">
            <v-card color="yellow lighten-4" class="mb-12">
                <div>
                    <p>1台のパソコン/スマートフォン/タブレットを共有して利用するか、</p>
                    <p>各参加者に本アプリを起動していただき、各参加者が全員に見えるように表示してください。</p>
                </div>
            </v-card>
            <v-btn color="primary" @click="e13 = 5">次のルールを確認</v-btn>
            </v-stepper-content>

            <v-stepper-step step="5">グループ毎にテーマを話す場合</v-stepper-step>
            <v-stepper-content step="5">
            <v-card color="yellow lighten-4" class="mb-12">
                <div>
                    <p>グループの数分のパソコン/スマートフォン/タブレットを準備してください</p>
                    <p>各グループで本アプリを使用してください</p>
                </div>
            </v-card>
            <v-btn color="primary" @click="e13 = 6">次のルールを確認</v-btn>
            </v-stepper-content>

            <v-stepper-step step="6">ちょっと変わった遊び方</v-stepper-step>
            <v-stepper-content step="6">
            <v-card color="yellow lighten-4" class="mb-12">
                <li>自分が何のテーマを話しているのか当ててもらうゲームとして利用</li>
                <li>トーク番組のようにMC役の方が参加者に話題を振っていく</li>
                <li>大喜利のネタとして！</li>
            </v-card>
            <v-btn color="primary" @click="e13 = 1">次のルールを確認</v-btn>
            </v-stepper-content>
        </v-stepper>
    </v-app>
</template>
<script>
  export default {
    data () {
      return {
        e13: 1,
      }
    },
  }
</script>