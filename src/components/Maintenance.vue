<template>
    <v-app>
        <h1>管理画面</h1>
        <p>{{message}}</p>
        <p v-if="items.length==0">登録されている雑談テーマがありません</p>
        <p v-else>登録済雑談テーマ件数:{{items.length}}件</p>
        <!--
        <ul>
            <li v-for="item in items" :key="item.id">
               {{ item.theme }}
            </li>
        </ul>
        -->

        <v-file-input multiple label="File input" @change="loadCsvFile"></v-file-input>

        <table border="1">
            <tr v-for="(worker, index) in workers" :key="index">
              <td v-for="(column, index) in worker" :key="index">{{ column }}</td>
            </tr>
        </table>
        
    </v-app>
</template>

<script>
import * as firebase from "firebase/app";
export default {
  data() {
    return {
      message: "インポートするデータを選択してください",
      workers: [],
      items:[],
    };
  },
  created() {
      this.getThemeList()
  },
  methods: {
    loadCsvFile(e) {
      let vm = this;
      vm.workers = [];
      vm.message = "処理中";
      let file = e[0];
 
      if (!file.type.match("text/csv")) {
        vm.message = "CSVファイルを選択してください";
        return;
      }
 
      let reader = new FileReader();
      reader.readAsText(file);
 
      reader.onload = () => {
        let lines = reader.result.split("\n");
        lines.shift();
        let linesArr = [];
        for (let i = 0; i < lines.length; i++) {
            var db = firebase.firestore();
            let val = lines[i].split(",")
            db.collection("theme").add({
                id:val[0],
                theme_type:val[1],
                theme:val[2],
            })
            .then(function(docRef) {
                console.log(docRef)
            })
            .catch(function(error) {
                vm.message = "インポートに失敗しました"
                console.log(error)
            });

            linesArr[i] = lines[i].split(",");
        }
        vm.workers = linesArr;
        vm.message = "インポートが完了しました"
      };
    },
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