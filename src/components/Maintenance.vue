<template>
  <v-content>
    <v-container>
      <v-row>
        <h1>管理画面</h1>
      </v-row>
      <v-row justify="end">
        <v-btn class="ma-2" width="200px" color="success" large @click="signOut">ログアウト</v-btn>
      </v-row>
      <v-row>
        <p>{{message}}</p>
      </v-row>
      <v-row>
        <p v-if="items.length==0">登録されている雑談テーマがありません</p>
        <p v-else>登録済雑談テーマ件数:{{items.length}}件</p>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col>
          <v-file-input multiple label="File input" @change="loadCsvFile"></v-file-input>
        </v-col>
        <v-col cols="2"></v-col>
        <table border="1">
          <tr v-for="(worker, index) in workers" :key="index">
            <td v-for="(column, index) in worker" :key="index">{{ column }}</td>
        </tr>
      </table>
      </v-row>

      <v-row justify="center">
        <v-container fluid>
          <template>
            <v-card>
              <v-card-title>
                雑談ネタ一覧
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2 ml-10"
                    v-bind="attrs"
                    v-on="on"
                    @click="getLatestId"
                  >新規登録</v-btn>
                </template>
                <v-card>
                  <v-card-title>{{formTitle}}</v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.id" label="ID"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.theme_type" label="雑談タイプ"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-text-field v-model="editedItem.theme" label="雑談内容"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-btn @click="save">{{formTitle}}</v-btn>
                        <v-btn class="ml-6" @click="close">閉じる</v-btn>
                      </v-row>
                    </v-container>
                  </v-card-text>

                </v-card>
              </v-dialog>

              <v-data-table
                no-results-text="検索結果なし"
                sort-by="docItem.id"
                :footer-props="{itemsPerPageOptions: [50, 100, -1]}"
                :items-per-page="50"
                :headers="headers"
                :items="items"
                :search="search"
              >
              <template v-slot:item.actions="{ item }">
                <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  small
                  @click="deleteItem(item)"
                >
                  mdi-delete
                </v-icon>
              </template>
              </v-data-table>
            </v-card>
          </template>
        </v-container>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      search: '',
      dialog: false,
      headers: [
        {text: 'document', value: 'docId'},
        {
          text: 'id',
          align: 'start',
          sortable: true,
          value: 'docItem.id',
        },
        { text: 'text', value: 'docItem.theme_type' },
        { text: 'theme', value: 'docItem.theme' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      message: "インポートするデータを選択してください",
      workers: [],
      items:[],
      defaultItem: {
        id: '',
        theme_type: '',
        theme: '',
      },
      editedIndex: -1,
      editedDocument: '',
      editedItem: {
        id: '',
        theme_type: '',
        theme: '',
      },
    };
  },
  created() {
    this.getThemeList();
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '新規登録' : '更新';
    },
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
          let val = lines[i].split(",");
          db.collection("theme").add({
            id:val[0],
            theme_type:val[1],
            theme:val[2],
          })
            .then(function(docRef) {
              console.log(docRef);
            })
            .catch(function(error) {
              vm.message = "インポートに失敗しました";
              console.log(error);
            });

          linesArr[i] = lines[i].split(",");
        }
        vm.workers = linesArr;
        vm.message = "インポートが完了しました";
      };
    },
    async getThemeList() {
      this.items = [];
      var db = firebase.firestore();
      await db.collection("theme").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var docItem = doc.data();
          var docId = doc.id;
          this.items.push({docId, docItem});
        });
      });
    },
    async getLatestId() {
      console.log("最新ID取得");
      var db = firebase.firestore();
      let latestId = await db.collection("theme").orderBy('id').limit(1).get();
      if (latestId != null) {
        console.log(latestId);
        this.editItem.id = latestId;
      }
    },
    editItem (item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedDocument = item.docId;
      this.editedItem = Object.assign({}, item.docItem);
      this.dialog = true;
    },
    deleteItem (item) {
      const index = this.items.indexOf(item);
      confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1);
    },
    async save () {
      var db = firebase.firestore();

      if (this.editedIndex > -1) {
        // 更新処理
        let val = await db.collection("theme").doc(this.editedDocument);
        await val.update({
          id: this.editedItem.id,
          theme_type: this.editedItem.theme_type,
          theme: this.editedItem.theme
        });
      } else {
        // 新規登録
        db.collection("theme").add({
          id:this.editedItem.id,
          theme_type:this.editedItem.theme_type,
          theme:this.editedItem.theme
        })
          .then(function(docRef) {
            console.log(docRef);
          })
          .catch(function(error) {
            this.message = "新規登録に失敗しました";
            console.log(error);
          });
      }
      this.getThemeList();
      this.close();
    },
    close () {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    signOut() {
      console.log("ログアウト");
      firebase.auth().signOut();
    }
  }
};
</script>