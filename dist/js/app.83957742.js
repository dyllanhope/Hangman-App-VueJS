(function(t){function e(e){for(var s,o,i=e[0],l=e[1],u=e[2],c=0,p=[];c<i.length;c++)o=i[c],r[o]&&p.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),r=a.n(s);r.a},"05d1":function(t,e,a){},"0c7d":function(t,e,a){t.exports=a.p+"img/hangman-game.efb7e914.svg"},"274f":function(t,e,a){},4636:function(t,e,a){"use strict";var s=a("274f"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=a("8c4f"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"play"},[a("b-container",[a("div",[a("h1",[t._v("Hangman")]),t.play?t._e():a("div",[a("p",[t._v("Enter a word length:")]),a("b-button-group",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.length,expression:"length"}],staticClass:"lengthInput",attrs:{type:"number",placeholder:"Enter a word-length",disabled:t.play},domProps:{value:t.length},on:{input:function(e){e.target.composing||(t.length=e.target.value)}}}),t.play?t._e():a("b-button",{attrs:{variant:"outline-primary"},on:{click:t.activatePlay}},[t._v("Submit")]),t.play?a("b-button",{attrs:{variant:"outline-primary",disabled:""},on:{click:t.activatePlay}},[t._v("Submit")]):t._e()],1)],1),a("b-row",[a("b-col"),a("b-col",[a("div",{staticStyle:{"margin-top":"5px","margin-left":"50px"}},[t.guessesLeft<=6?a("div",{staticClass:"rope"}):t._e(),t.guessesLeft<=5?a("div",{staticClass:"head"}):t._e(),t.guessesLeft<=4?a("div",{staticClass:"body"}):t._e(),t.guessesLeft<=3?a("div",{staticClass:"arm1"}):t._e(),t.guessesLeft<=2?a("div",{staticClass:"arm2"}):t._e(),t.guessesLeft<=1?a("div",{staticClass:"leg1"}):t._e(),t.guessesLeft<=0?a("div",{staticClass:"leg2"}):t._e(),t.guessesLeft<=6?a("div",{staticClass:"crossBeam"}):t._e(),t.guessesLeft<=6?a("div",{staticClass:"pole"}):t._e(),a("div",{staticClass:"base"})])]),a("b-col")],1)],1),t.play?a("div",[!t.win&&t.guessesLeft>0?a("div",[t.loading?a("b-spinner",{attrs:{label:"Spinning"}}):t._l(t.wordGuessed,function(e,s){return a("span",{key:s},[t._v(t._s(e)+" ")])})],2):t.win?a("div",[a("h1",[t._v("Congratulations!")]),a("h3",[t._v("\n          The word was\n          "),a("span",{staticClass:"word"},[t._v(t._s(t.word.word))])]),a("h4",[t._v("\n          You won\n          "),a("span",{staticClass:"points"},[t._v(t._s(t.length))]),t._v(" points!\n        ")]),a("b-button",{on:{click:t.resetGame}},[t._v("New Game")])],1):0===t.guessesLeft?a("div",[a("h1",{staticClass:"guess"},[t._v("Game Over!")]),a("h3",[t._v("\n          The word was\n          "),a("span",{staticClass:"word"},[t._v(t._s(t.word.word))])]),a("h4",[t._v("\n          You lost\n          "),a("span",{staticClass:"points"},[t._v(t._s(t.lost))]),t._v(" points!\n        ")])]):t._e(),t.error?a("b-alert",{staticStyle:{"margin-top":"20px"},attrs:{show:"",variant:"danger"}},[t._v("We have no words with a length of "+t._s(t.length)+" letters")]):t._e(),0===t.guessesLeft||t.error?a("b-button",{on:{click:t.resetGame}},[t._v("New Game")]):t._e(),!t.win&&t.guessesLeft>0?a("b-row",[a("hr"),a("b-col",{attrs:{sm:""}}),a("b-col",{attrs:{sm:""}},[t.loading||t.error?t._e():a("div",t._l(t.alphabet,function(e,s){return a("b-button",{key:s,staticClass:"letter",attrs:{variant:"light",disabled:t.isDisabled(s)},on:{click:function(a){return t.letterCheck(e.letter)}}},[t._v(t._s(e.letter))])}),1)]),a("b-col",{attrs:{sm:""}},[t.hintGiven||!t.play||t.loading?t._e():a("b-button",{attrs:{variant:"outline-dark"},on:{click:t.giveHint}},[t._v("Hint")]),t.hintGiven||!t.play||t.loading?t._e():a("p",[t._v("Gives you one letter for free.")])],1)],1):t._e()],1):t._e()])],1)},o=[],i=(a("ac4d"),a("8a81"),a("ac6a"),a("bc3a")),l=a.n(i),u={name:"play",data:function(){return{lost:0,length:0,play:!1,guessesLeft:6,wordGuessed:[],win:!1,loading:!1,error:!1,word:{},hintGiven:!1,lettersGuessed:[],alphabet:[{letter:"A",disable:!1},{letter:"B",disable:!1},{letter:"C",disable:!1},{letter:"D",disable:!1},{letter:"E",disable:!1},{letter:"F",disable:!1},{letter:"G",disable:!1},{letter:"H",disable:!1},{letter:"I",disable:!1},{letter:"J",disable:!1},{letter:"K",disable:!1},{letter:"L",disable:!1},{letter:"M",disable:!1},{letter:"N",disable:!1},{letter:"O",disable:!1},{letter:"P",disable:!1},{letter:"Q",disable:!1},{letter:"R",disable:!1},{letter:"S",disable:!1},{letter:"T",disable:!1},{letter:"U",disable:!1},{letter:"V",disable:!1},{letter:"W",disable:!1},{letter:"X",disable:!1},{letter:"Y",disable:!1},{letter:"Z",disable:!1}]}},methods:{activatePlay:function(){var t=this;this.loading=!0,this.wordGuessed=[],l.a.get("https://hangman-webapp.herokuapp.com/api/list/size/"+this.length).then(function(e){var a=e.data,s=a.words;if(s.length>0){var r=s.length,n=Math.ceil(Math.random()*r)-1;t.word=s[n],t.$forceUpdate();var o=t.word.word;t.loading=!1;for(var i=0;i<o.length;i++)"-"===o[i]?t.wordGuessed.push("-"):t.wordGuessed.push("_")}else t.error=!0,t.loading=!1,t.$forceUpdate()}),this.play=!0},letterCheck:function(t){this.lettersGuessed.push(t);var e=!1,a=this.word.word;a=a.toLowerCase();var s=t.toLowerCase(),r=!0,n=!1,o=void 0;try{for(var i,u=this.alphabet[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var d=i.value;d.letter===t&&(d.disable=!0)}}catch(w){n=!0,o=w}finally{try{r||null==u.return||u.return()}finally{if(n)throw o}}for(var c=0;c<a.length;c++)s===a[c]&&(this.wordGuessed[c]=s,this.$forceUpdate(),e=!0);var p="",h=!0,m=!1,v=void 0;try{for(var f,b=this.wordGuessed[Symbol.iterator]();!(h=(f=b.next()).done);h=!0){var g=f.value;p+=g}}catch(w){m=!0,v=w}finally{try{h||null==b.return||b.return()}finally{if(m)throw v}}p===a&&(this.win=!0,l.a.post("https://hangman-webapp.herokuapp.com/api/add/to/user",{username:localStorage["user"],word:this.word.word,state:"won"}).then(function(t){})),e||(this.guessesLeft--,0===this.guessesLeft&&(this.lost=Math.ceil(this.length/2),l.a.post("https://hangman-webapp.herokuapp.com/api/add/to/user",{username:localStorage["user"],word:this.word.word,state:"lost"}).then(function(t){})))},isDisabled:function(t){return this.alphabet[t].disable},resetGame:function(){this.error=!1,this.play=!1;var t=!0,e=!1,a=void 0;try{for(var s,r=this.alphabet[Symbol.iterator]();!(t=(s=r.next()).done);t=!0){var n=s.value;n.disable=!1}}catch(o){e=!0,a=o}finally{try{t||null==r.return||r.return()}finally{if(e)throw a}}this.guessesLeft=6,this.length=0,this.wordGuessed=[],this.win=!1,this.word={},this.lettersGuessed=[],this.hintGiven=!1},giveHint:function(){this.hintGiven=!0;var t=0,e=!0,a=!1,s=void 0;try{for(var r,n=this.wordGuessed[Symbol.iterator]();!(e=(r=n.next()).done);e=!0){var o=r.value;if("_"===o){var i=this.word.word[t];return void(this.wordGuessed[t]=i)}t++}}catch(l){a=!0,s=l}finally{try{e||null==n.return||n.return()}finally{if(a)throw s}}}}},d=u,c=(a("66d6"),a("2877")),p=Object(c["a"])(d,n,o,!1,null,"07b67966",null),h=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"leaderboard"},[a("b-container",{staticStyle:{width:"100%"}},[a("b-row",[a("b-col",{staticStyle:{"margin-top":"30px"},attrs:{sm:"4"}},[a("h3",[a("u",[t._v("Most words won")])]),t.statLoading?a("b-spinner",{attrs:{small:"",label:"Small Spinner"}}):a("span",[t._v(t._s(t.topUser)+" - "+t._s(t.mostWords))]),a("hr"),a("h3",[a("u",[t._v("Longest word")])]),t.statLoading?a("b-spinner",{attrs:{small:"",label:"Small Spinner"}}):a("span",[t._v(t._s(t.longestUser)+" - "+t._s(t.longestWord))])],1),a("b-col",{staticStyle:{"margin-top":"30px"},attrs:{sm:"8"}},[a("h1",[t._v("The Hangman Leaderboards")]),t.loading?a("b-spinner",{attrs:{label:"Spinning"}}):a("b-table",{attrs:{"sticky-header":"",info:"",items:t.items,fields:t.fields,"tbody-tr-class":t.rowClass}})],1)],1)],1)],1)},v=[],f={beforeCreate:function(){var t=this;this.loading=!0,this.statLoading=!0,l.a.get("https://hangman-webapp.herokuapp.com/api/all/users").then(function(e){for(var a=[],s=e.data,r=s.words,n=0;n<r.length;n++){var o={Rank:n+1,Username:r[n].username,Pts:r[n].points,Ratio:r[n].win_rate};a.push(o),t.items=a,t.loading=!1}}).then(function(){l.a.get("https://hangman-webapp.herokuapp.com/api/link/data").then(function(e){var a=e.data,s=a.items,r={};t.longestWord=s[0].word,t.longestUser=s[0].username;var n=!0,o=!1,i=void 0;try{for(var l,u=s[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var d=l.value;"won"===d.complete_state&&(void 0===r[d.username]?r[d.username]=1:r[d.username]++)}}catch(m){o=!0,i=m}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}var c="",p=0;for(var h in r)r[h]>p&&(c=h,p=r[h]);t.topUser=c,t.mostWords=p,t.statLoading=!1})})},data:function(){return{fields:["Rank","Username","Pts","Ratio"],items:[],mostWords:0,topUser:"",longestWord:"",longestUser:"",loading:!0,statLoading:!0}},methods:{rowClass:function(t,e){if(t)return 1===t.Rank?"table-warning":void 0}}},b=f,g=Object(c["a"])(b,m,v,!1,null,null,null),w=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new"},[a("b-container",[a("b-row",[a("b-col",{attrs:{sm:"5"}},[a("h4",{staticStyle:{"margin-top":"15px"}},[a("u",[t._v("How does this work?")])]),a("p",[t._v("On this page you can add new words to the current repository of words. These added words will be used in games that other players play. When you click submit, the word is sent in to be confirmed/verified. Once verified, you will recieve 3 points for every new word you add.")])]),a("b-col",{attrs:{sm:"7"}},[a("h1",[t._v("Add new word here..")]),a("b-input-group",{staticClass:"mt-3 mx-auto",staticStyle:{"margin-bottom":"10px",width:"200px"}},[a("b-form-input",{attrs:{placeholder:"eg. hangman"},model:{value:t.word,callback:function(e){t.word=e},expression:"word"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"outline-dark"},on:{click:t.submitWord}},[t._v("Submit")])],1)],1),t.error?a("b-alert",{staticStyle:{margin:"5px"},attrs:{show:"",variant:"danger"}},[t._v(t._s(t.message))]):t.success?a("b-alert",{attrs:{show:"",variant:"success"}},[t._v(t._s(t.message))]):a("b-alert",{attrs:{hide:"",variant:"danger"}},[t._v(t._s(t.message))])],1)],1)],1)],1)},y=[],k={data:function(){return{word:"",error:!1,success:!1,message:""}},methods:{submitWord:function(){var t=this,e="";l.a.get("https://hangman-webapp.herokuapp.com/api/check/word/"+this.word).then(function(t){var a=t.data;e=a.check}).then(function(){"new"===e?(t.success=!0,t.error=!1,t.message="Your word has been sent in to be verified",l.a.post("https://hangman-webapp.herokuapp.com/api/store/new/word",{word:t.word,user:localStorage["user"]}).then(function(t){t.data})):(t.success=!1,t.error=!0,t.message="This word already exists in our repository")})}}},C=k,S=Object(c["a"])(C,_,y,!1,null,null,null),x=S.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"}),a("div",{staticClass:"col-sm"},[a("h1",[t._v("Login")]),a("table",[a("tr",[a("td",[t._v("username")]),a("td",[a("b-form-input",{attrs:{placeholder:"username"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1)]),a("tr",[a("td",[t._v("Password")]),a("td",[a("b-form-input",{attrs:{type:"password",placeholder:"password"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1)])]),t.error?a("b-alert",{staticStyle:{margin:"5px"},attrs:{show:"",variant:"danger"}},[t._v(t._s(t.message))]):a("b-alert",{attrs:{hide:"",variant:"danger"}},[t._v(t._s(t.message))]),a("b-button",{staticClass:"login",on:{click:t.submitUser}},[t._v("Login")]),a("b-button",{staticClass:"login",on:{click:t.registerUser}},[t._v("Sign up")])],1),a("div",{staticClass:"col-sm"})])])])},U=[],L=new s["default"],W={name:"login",data:function(){return{user:"",pass:"",error:!1,message:""}},methods:{submitUser:function(){var t=this,e=this.user;e=e.toLowerCase();var a=this.pass;e&&a?l.a.post("https://hangman-webapp.herokuapp.com/api/login/check",{username:e,password:a}).then(function(a){var s=a.data,r=s.auth;if(r){var n=s.token;localStorage["token"]=n,localStorage["user"]=e,L.$emit("userData",t.user),t.$router.push({name:"Play"})}else t.error=!0,t.message=s.message}):(this.error=!0,this.message="Please enter a username and a password")},registerUser:function(){this.$router.push({name:"register"})}}},T=W,G=(a("8868"),Object(c["a"])(T,P,U,!1,null,"bf44c7b8",null)),$=G.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"}),a("div",{staticClass:"col-sm"},[a("h1",[t._v("Register")]),a("table",[a("tr",[a("td",[t._v("username")]),a("td",[a("b-form-input",{attrs:{placeholder:"username"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1)]),a("tr",[a("td",[t._v("Password")]),a("td",[a("b-form-input",{attrs:{type:"password",placeholder:"password"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1)]),a("tr",[a("td",[t._v("Confirm password")]),a("td",[a("b-form-input",{attrs:{type:"password",placeholder:"password"},model:{value:t.passConfirm,callback:function(e){t.passConfirm=e},expression:"passConfirm"}})],1)])]),t.error?a("b-alert",{staticStyle:{margin:"5px"},attrs:{show:"",variant:"danger"}},[t._v(t._s(t.message))]):a("b-alert",{attrs:{hide:"",variant:"danger"}},[t._v(t._s(t.message))]),a("b-button",{staticClass:"login",on:{click:t.submitUser}},[t._v("Sign up")]),a("b-button",{staticClass:"login",on:{click:t.back}},[t._v("Back")])],1),a("div",{staticClass:"col-sm"})])])])},R=[],j={name:"Register",data:function(){return{user:"",pass:"",passConfirm:"",message:"",error:!1,accountAvailability:!1}},methods:{submitUser:function(){var t,e=this;this.user&&this.pass?this.pass===this.passConfirm?l.a.get("https://hangman-webapp.herokuapp.com/api/check/user/"+this.user).then(function(a){var s=a.data;t=s.message,"already exists"===t?(e.error=!0,e.message="This username already exists"):e.accountAvailability=!0,e.$forceUpdate(),e.accountAvailability&&l.a.post("https://hangman-webapp.herokuapp.com/api/add/user/",{username:e.user,password:e.pass}).then(function(t){e.$router.push({name:"login"})})}):(this.error=!0,this.message="The passwords you have entered do not match"):(this.error=!0,this.message="Please enter a username and a password")},back:function(){this.$router.push({name:"login"})}}},A=j,D=(a("dc07"),Object(c["a"])(A,O,R,!1,null,"0cef9e80",null)),E=D.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Profile"},[a("b-container",[a("b-row",[a("b-col",{staticStyle:{"margin-top":"50px"},attrs:{sm:""}},[a("h1",[t._v(t._s(t.user))]),a("h2",[t._v("\n          Points:\n          "),t.loading?a("b-spinner",{attrs:{variant:"warning",small:"",label:"Small Spinner"}}):a("span",{staticClass:"points"},[t._v(t._s(t.points))])],1),a("h2",[t._v("\n          Ranking:\n          "),t.statLoading?a("b-spinner",{attrs:{variant:"warning",small:"",label:"Small Spinner"}}):a("span",[t._v(t._s(t.ranking))])],1),a("hr"),a("h5",[t._v("filter:")]),a("b-form-select",{staticClass:"mb-3",on:{change:function(e){return t.onChange(e)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("option",{domProps:{value:null}},[t._v("Game history")]),a("option",{attrs:{value:"won"}},[t._v("Words won")]),a("option",{attrs:{value:"lost"}},[t._v("Words lost")])]),a("hr"),a("h2",[t._v("\n          Win Rate:\n          "),t.loading?a("b-spinner",{attrs:{variant:"success",label:"Spinning"}}):t._e(),t.winPercentage>50&&!t.loading?a("span",{staticClass:"winRate"},[t._v(t._s(t.winPercentage)+"%")]):t.winPercentage<=50&&!t.loading?a("span",{staticClass:"loseRate"},[t._v(t._s(t.winPercentage)+"%")]):t._e()],1)],1),a("b-col",{attrs:{sm:""}},[t.history?a("div",{staticStyle:{"margin-top":"100px"}},[a("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1):a("b-table",{staticStyle:{"margin-top":"50px"},attrs:{"sticky-header":"",info:"",items:t.items,fields:t.fields,"tbody-tr-class":t.rowClass}})],1)],1)],1)],1)},H=[],M={beforeCreate:function(){var t=this;this.loading=!0,this.history=!0,this.points=0,l.a.get("https://hangman-webapp.herokuapp.com/api/get/user/data/"+localStorage["user"]).then(function(e){for(var a=e.data,s=a.data,r=[],n=0;n<s.length;n++){t.points+=s[n].points,t.points<0&&(t.points=0);var o={Total_points:t.points,Word:s[n].word,Result:s[n].complete_state,Pts:s[n].points};r.push(o)}var i=0,u=0,d=!0,c=!1,p=void 0;try{for(var h,m=s[Symbol.iterator]();!(d=(h=m.next()).done);d=!0){var v=h.value;i++,"won"===v.complete_state&&u++}}catch(f){c=!0,p=f}finally{try{d||null==m.return||m.return()}finally{if(c)throw p}}t.winPercentage=(u/i*100).toFixed(2),t.loading=!1,t.items=r,t.history=!1,l.a.get("https://hangman-webapp.herokuapp.com/api/all/users").then(function(e){for(var a=e.data,s=a.words,r=0;r<s.length;r++)s[r].username===localStorage["user"]&&(t.ranking=r+1,t.statLoading=!1)})})},data:function(){return{user:localStorage["user"],fields:["Total_points","Word","Result","Pts"],winPercentage:0,items:[],totalPoints:0,points:0,ranking:0,selected:null,loading:!0,statLoading:!0,history:!0}},methods:{rowClass:function(t,e){if(t)return"won"===t.Result?"table-success":"table-danger"},onChange:function(t){var e=this;this.totalPoints=0,this.history=!0,this.$forceUpdate(),this.selected?l.a.get("https://hangman-webapp.herokuapp.com/api/get/user/data/user/"+localStorage["user"]+"/choice/"+this.selected).then(function(t){for(var a=t.data,s=a.data,r=[],n=0;n<s.length;n++){e.totalPoints+=s[n].points;var o={Total_points:e.totalPoints,Word:s[n].word,Result:s[n].complete_state,Pts:s[n].points};r.push(o)}e.items=r,e.$forceUpdate(),e.history=!1}):l.a.get("https://hangman-webapp.herokuapp.com/api/get/user/data/"+localStorage["user"]).then(function(t){for(var a=t.data,s=a.data,r=[],n=0;n<s.length;n++){e.totalPoints+=s[n].points,e.totalPoints<0&&(e.totalPoints=0);var o={Total_points:e.totalPoints,Word:s[n].word,Result:s[n].complete_state,Points:s[n].points};r.push(o)}e.items=r,e.history=!1})}}},q=M,N=(a("4636"),Object(c["a"])(q,I,H,!1,null,"551b825a",null)),Y=N.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin"},[a("b-container",[a("h1",[t._v("Admin page")]),a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{pills:"",card:"",vertical:""}},[a("b-tab",{attrs:{title:"Users",active:""}},[a("b-card-text",[a("label",[t._v("\n              Search user:\n              "),a("b-input-group",{staticClass:"mt-3",staticStyle:{"margin-bottom":"10px",width:"200px"}},[a("b-form-input",{model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"outline-dark"},on:{click:t.searchUser}},[t._v("Search")])],1)],1)],1),a("b-table",{attrs:{dark:"",striped:"",items:t.items,fields:t.fields},scopedSlots:t._u([t._l(t.fields,function(e,s){return{key:e.key,fn:function(r){return["button"===e.colType?a("div",{key:s},[a("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.deleteUser(r.item.ID)}}},[t._v("Remove")])],1):"id"===e.colType?a("div",{key:s},[a("h5",[t._v(t._s(r.item.ID))])]):"Username"===e.colType?a("div",{key:s},[a("h5",[t._v(t._s(r.item.Username))])]):"Points"===e.colType?a("div",{key:s},[a("h5",[t._v(t._s(r.item.Points))])]):t._e()]}}})],null,!0)})],1)],1),a("b-tab",[a("template",{slot:"title"},[a("span",[t._v("\n              New Words\n              "),a("b-badge",{attrs:{variant:"primary"}},[t._v(t._s(t.newWords))])],1)]),a("h1",[t._v("Verify new words")]),a("b-table",{attrs:{dark:"",striped:"",items:t.words,fields:t.columns},scopedSlots:t._u([t._l(t.columns,function(e,s){return{key:e.key,fn:function(r){return["status"===e.colType?a("div",{key:s},[a("b-button",{staticStyle:{margin:"5px"},attrs:{variant:"success"},on:{click:function(e){return t.confirmWord(r.item.word,r.item.username)}}},[t._v("+")]),a("b-button",{staticStyle:{margin:"5px"},attrs:{variant:"danger"},on:{click:function(e){return t.denyWord(r.item.word)}}},[t._v("-")])],1):"user"===e.colType?a("div",{key:s},[a("h5",[t._v(t._s(r.item.username))])]):"word"===e.colType?a("div",{key:s},[a("h5",[t._v(t._s(r.item.word))])]):t._e()]}}})],null,!0)})],2)],1)],1)],1)],1)},J=[],F=(a("386d"),{beforeCreate:function(){var t=this;l.a.get("https://hangman-webapp.herokuapp.com/api/all/users").then(function(e){for(var a=[],s=e.data,r=s.words,n=0;n<r.length;n++){var o={ID:r[n].id,Username:r[n].username,Points:r[n].points};a.push(o),t.items=a}}).then(function(){l.a.get("https://hangman-webapp.herokuapp.com/api/all/new/words").then(function(e){var a=e.data,s=a.words,r=[];t.newWords=0;var n=!0,o=!1,i=void 0;try{for(var l,u=s[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var d=l.value;if("pending"===d.status){var c={username:d.username,word:d.word};r.push(c),t.newWords++,t.$forceUpdate()}}}catch(p){o=!0,i=p}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}t.words=r})})},data:function(){return{fields:[{key:"ID",label:"ID",colType:"id"},{key:"Username",label:"Username",colType:"user"},{key:"Points",label:"Points",colType:"points"},{key:"Remove",label:"",colType:"button"}],items:[],columns:[{key:"username",label:"Username",colType:"user"},{key:"word",label:"Word",colType:"word"},{key:"status",label:"Confirm/Deny",colType:"status"}],words:[],search:"",newWords:0}},methods:{searchUser:function(){var t=this,e=this.search;""!=e?l.a.get("https://hangman-webapp.herokuapp.com/api/find/user/"+this.search).then(function(e){var a=e.data,s=a.user,r={ID:s.id,Username:s.username,Points:s.points};t.items=[r]}):l.a.get("https://hangman-webapp.herokuapp.com/api/all/users").then(function(e){for(var a=[],s=e.data,r=s.words,n=0;n<r.length;n++){var o={ID:r[n].id,Username:r[n].username,Points:r[n].points};a.push(o),t.items=a}})},deleteUser:function(t){var e=this;if(confirm("Are you sure you want to delete this users' account?")){var a=[];l.a.post("https://hangman-webapp.herokuapp.com/api/delete/user",{id:t}).then(function(t){for(var s=t.data,r=s.users,n=0;n<r.length;n++){var o={ID:r[n].id,Username:r[n].username,Points:r[n].points};a.push(o),e.items=a}})}},confirmWord:function(t,e){var a=this;l.a.post("https://hangman-webapp.herokuapp.com/api/add/word/from/user/",{word:t,user:e}).then(function(e){l.a.post("https://hangman-webapp.herokuapp.com/api/set/new/word/status",{word:t,status:"confirmed"}).then(function(t){l.a.get("https://hangman-webapp.herokuapp.com/api/all/new/words").then(function(t){var e=t.data,s=e.words;a.newWords=0;var r=[],n=!0,o=!1,i=void 0;try{for(var l,u=s[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var d=l.value;if("pending"===d.status){var c={username:d.username,word:d.word};r.push(c),a.newWords++,a.$forceUpdate()}}}catch(p){o=!0,i=p}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}a.words=r})})})},denyWord:function(t){var e=this;l.a.post("https://hangman-webapp.herokuapp.com/api/set/new/word/status",{word:t,status:"denied"}).then(function(t){l.a.get("https://hangman-webapp.herokuapp.com/api/all/new/words").then(function(t){var a=t.data,s=a.words;e.newWords=0;var r=[],n=!0,o=!1,i=void 0;try{for(var l,u=s[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var d=l.value;if("pending"===d.status){var c={username:d.username,word:d.word};r.push(c),e.newWords++,e.$forceUpdate()}}}catch(p){o=!0,i=p}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}e.words=r})})}}}),V=F,z=Object(c["a"])(V,B,J,!1,null,null,null),K=z.exports;s["default"].use(r["a"]);var Q=new r["a"]({routes:[{path:"/",name:"login",component:$},{path:"/admin",name:"admin",component:K,meta:{adminAuth:!0}},{path:"/register",name:"register",component:E},{path:"/leader",name:"Leaderboard",component:w,meta:{requiresAuth:!0}},{path:"/new/word",name:"Add new word",component:x,meta:{requiresAuth:!0}},{path:"/play",name:"Play",component:h,meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:Y,meta:{requiresAuth:!0}}]});Q.beforeEach(function(t,e,a){if(t.matched.some(function(t){return t.meta.requiresAuth})){var s=localStorage["token"];l.a.post("https://hangman-webapp.herokuapp.com/api/token/check",s).then(function(e){var s=e.data,r=s.success;r?a():a({path:"/",query:{redirect:t.fullPath}})})}else if(t.matched.some(function(t){return t.meta.adminAuth})){var r=localStorage["token"];l.a.post("https://hangman-webapp.herokuapp.com/api/token/check",r).then(function(e){var s=e.data,r=s.success,n=s.user;r&&"admin"===n?a():a({path:"/",query:{redirect:t.fullPath}})})}else a()});var X=Q,Z=a("5f5b"),tt=(a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)}),et=[],at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",[s("b-navbar",{attrs:{type:"dark",variant:"dark"}},[s("b-navbar-brand",{attrs:{href:"#"}},[s("img",{staticClass:"d-inline-block align-top",attrs:{src:a("0c7d"),alt:"logo"}})]),s("b-navbar-nav",[s("b-nav-item",[s("router-link",{attrs:{to:"/Play"}},[t._v("Play")])],1),s("b-nav-item",[s("router-link",{attrs:{to:"/leader"}},[t._v("Leaderboard")])],1),s("b-nav-item",[s("router-link",{attrs:{to:"/new/word"}},[t._v("Add new word")])],1)],1),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item-dropdown",{attrs:{text:"Other",right:""}},[s("b-dropdown-item",{attrs:{to:"/profile"}},[t._v("Profile")]),"admin"===t.user?s("b-dropdown-item",{attrs:{to:"/admin"}},[t._v("Admin Page")]):t._e(),s("b-dropdown-divider"),s("b-dropdown-item",{on:{click:t.logout}},[t._v("Logout")])],1)],1)],1)],1)])},st=[],rt={data:function(){return{user:""}},mounted:function(){var t=this;L.$on("userData",function(e){t.user=e})},methods:{logout:function(){localStorage.clear(),this.user="",this.$router.push({name:"login"})},setUser:function(t){this.user=t}}},nt=rt,ot=(a("d7f3"),Object(c["a"])(nt,at,st,!1,null,"b6441522",null)),it=ot.exports,lt={name:"app",components:{Header:it}},ut=lt,dt=(a("034f"),Object(c["a"])(ut,tt,et,!1,null,null,null)),ct=dt.exports;s["default"].use(Z["a"]),s["default"].config.productionTip=!1,new s["default"]({router:X,render:function(t){return t(ct)}}).$mount("#app")},"64a9":function(t,e,a){},"66d6":function(t,e,a){"use strict";var s=a("9b46"),r=a.n(s);r.a},8868:function(t,e,a){"use strict";var s=a("c992"),r=a.n(s);r.a},9927:function(t,e,a){},"9b46":function(t,e,a){},c992:function(t,e,a){},d7f3:function(t,e,a){"use strict";var s=a("9927"),r=a.n(s);r.a},dc07:function(t,e,a){"use strict";var s=a("05d1"),r=a.n(s);r.a}});
//# sourceMappingURL=app.83957742.js.map