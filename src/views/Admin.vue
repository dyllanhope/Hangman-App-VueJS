<template>
  <div class="admin">
    <h1>Admin page</h1>
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="Users" active>
          <b-card-text>
            <label>
              Search user:
              <b-input-group style="margin-bottom:10px; width:200px" class="mt-3">
                <b-form-input v-model="search"></b-form-input>
                <b-input-group-append>
                  <b-button @click="searchUser" variant="outline-dark">Search</b-button>
                </b-input-group-append>
              </b-input-group>
            </label>
            <b-table dark striped :items="items" :fields="fields">
              <template v-for="(field, index) in fields" :slot="field.key" slot-scope="data">
                <div :key="index" v-if="field.colType === 'button'">
                  <b-button @click="deleteUser(data.item.Username)" variant="danger">Remove</b-button>
                </div>
                <div :key="index" v-else-if="field.colType === 'id'">
                  <h5>{{data.item.ID}}</h5>
                </div>
                <div :key="index" v-else-if="field.colType === 'Username'">
                  <h5>{{data.item.Username}}</h5>
                </div>
                <div :key="index" v-else-if="field.colType === 'Points'">
                  <h5>{{data.item.Points}}</h5>
                </div>
              </template>
            </b-table>
          </b-card-text>
        </b-tab>
        <b-tab>
          <template slot="title">
            <span>
              New Words
              <b-badge variant="primary">{{ newWords }}</b-badge>
            </span>
          </template>
          <h1>Verify new words</h1>
          <b-table dark striped :items="words" :fields="columns">
            <template v-for="(column, index) in columns" :slot="column.key" slot-scope="data">
              <div :key="index" v-if="column.colType === 'status'">
                <b-button
                  style="margin:5px"
                  @click="confirmWord(data.item.word, data.item.username)"
                  variant="success"
                >+</b-button>
                <b-button style="margin:5px" @click="denyWord(data.item.word)" variant="danger">-</b-button>
              </div>
              <div :key="index" v-else-if="column.colType === 'user'">
                <h5>{{data.item.username}}</h5>
              </div>
              <div :key="index" v-else-if="column.colType === 'word'">
                <h5>{{data.item.word}}</h5>
              </div>
            </template>
          </b-table>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.allUsers()
      .then(res => {
        let list = [];
        let response = res.data;
        let users = response.words;
        for (let x = 0; x < users.length; x++) {
          let item = {
            Username: users[x].username,
            Points: users[x].points
          };
          list.push(item);
          this.items = list;
        }
      })
      .then(() => {
        this.allNewWords().then(res => {
          const response = res.data;
          const words = response.words;
          const list = [];
          this.newWords = 0;
          for (let item of words) {
            if (item.status === "pending") {
              let wordData = {
                username: item.username,
                word: item.word
              };
              list.push(wordData);
              this.newWords++;
              this.$forceUpdate();
            }
          }
          this.words = list;
        });
      });
  },
  data() {
    return {
      fields: [
        { key: "Username", label: "Username", colType: "user" },
        { key: "Points", label: "Points", colType: "points" },
        { key: "Remove", label: "", colType: "button" }
      ],
      items: [],
      columns: [
        { key: "username", label: "Username", colType: "user" },
        { key: "word", label: "Word", colType: "word" },
        { key: "status", label: "Confirm/Deny", colType: "status" }
      ],
      words: [],
      search: "",
      newWords: 0
    };
  },
  methods: {
    async deleteUserAccount(username) {
      const config = {
        method: "post",
        url: "https://hangman-webapp.herokuapp.com/api/delete/user",
        headers: { auth: localStorage["token"], user: localStorage['user'] },
        data: { username }
      };
      return await axios(config);
    },
    async addWordFrom(word, user) {
      const config = {
        method: "post",
        url: "https://hangman-webapp.herokuapp.com/api/add/word/from/user/",
        headers: { auth: localStorage["token"], user: localStorage['user'] },
        data: { word, user }
      };
      return await axios(config);
    },
    async setNewWordStatus(word, status) {
      const config = {
        method: "post",
        url: "https://hangman-webapp.herokuapp.com/api/set/new/word/status",
        headers: { auth: localStorage["token"], user: localStorage['user'] },
        data: { word, status }
      };
      return await axios(config);
    },
    async findUser(user) {
      const token = localStorage["token"];
      const config = {
        method: "get",
        url: "https://hangman-webapp.herokuapp.com/api/find/user/" + user,
        headers: { auth: token, user: localStorage['user'] }
      };
      return await axios(config);
    },
    async allNewWords() {
      const config = {
        method: "get",
        url: "https://hangman-webapp.herokuapp.com/api/all/new/words",
        headers: { auth: localStorage["token"], user: localStorage['user'] }
      };
      return await axios(config);
    },
    async allUsers() {
      const config = {
        method: "get",
        url: "https://hangman-webapp.herokuapp.com/api/all/users",
        headers: { auth: localStorage["token"], user: localStorage['user'] }
      };
      return await axios(config);
    },
    searchUser() {
      let user = this.search;
      if (user != "") {
        this.findUser(user).then(res => {
          let response = res.data;
          let user = response.user;
          let item = {
            Username: user.username,
            Points: user.points
          };
          this.items = [item];
        });
      } else {
        this.allUsers().then(res => {
          let list = [];
          let response = res.data;
          let users = response.words;
          for (let x = 0; x < users.length; x++) {
            let item = {
              Username: users[x].username,
              Points: users[x].points
            };
            list.push(item);
            this.items = list;
          }
        });
      }
    },
    deleteUser(username) {
      if (confirm("Are you sure you want to delete this users' account?")) {
        let list = [];
        this.deleteUserAccount(username).then(res => {
          let response = res.data;
          let users = response.users;
          for (let x = 0; x < users.length; x++) {
            let item = {
              Username: users[x].username,
              Points: users[x].points
            };
            list.push(item);
            this.items = list;
          }
        });
      }
    },
    confirmWord(word, user) {
      this.addWordFrom(word, user).then(res => {
        this.setNewWordStatus(word, "confirmed").then(res => {
          this.allNewWords().then(res => {
            const response = res.data;
            const words = response.words;
            this.newWords = 0;
            const list = [];
            for (let item of words) {
              if (item.status === "pending") {
                let wordData = {
                  username: item.username,
                  word: item.word
                };
                list.push(wordData);
                this.newWords++;
                this.$forceUpdate();
              }
            }
            this.words = list;
          });
        });
      });
    },
    denyWord(word) {
      this.setNewWordStatus(word, "denied").then(res => {
        this.allNewWords().then(res => {
          const response = res.data;
          const words = response.words;
          this.newWords = 0;
          const list = [];
          for (let item of words) {
            if (item.status === "pending") {
              let wordData = {
                username: item.username,
                word: item.word
              };
              list.push(wordData);
              this.newWords++;
              this.$forceUpdate();
            }
          }
          this.words = list;
        });
      });
    }
  }
};
</script>