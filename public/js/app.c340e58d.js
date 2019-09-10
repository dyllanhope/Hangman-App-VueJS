(function(t){function e(e){for(var r,o,i=e[0],l=e[1],u=e[2],c=0,p=[];c<i.length;c++)o=i[c],s[o]&&p.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"05d1":function(t,e,a){},"0c7d":function(t,e,a){t.exports=a.p+"img/hangman-game.efb7e914.svg"},"274f":function(t,e,a){},"2b9f":function(t,e,a){},"3a2a":function(t,e,a){"use strict";var r=a("2b9f"),s=a.n(r);s.a},4636:function(t,e,a){"use strict";var r=a("274f"),s=a.n(r);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),s=a("8c4f"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"play"},[a("b-container",[a("div",[a("h1",[t._v("Hangman")]),t.play?t._e():a("div",[a("p",[t._v("Enter a word length:")]),a("b-button-group",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.length,expression:"length"}],staticClass:"lengthInput",attrs:{type:"number",placeholder:"Enter a word-length",disabled:t.play},domProps:{value:t.length},on:{input:function(e){e.target.composing||(t.length=e.target.value)}}}),t.play?t._e():a("b-button",{attrs:{variant:"outline-primary"},on:{click:t.activatePlay}},[t._v("Submit")]),t.play?a("b-button",{attrs:{variant:"outline-primary",disabled:""},on:{click:t.activatePlay}},[t._v("Submit")]):t._e()],1)],1),a("b-row",[a("b-col"),a("b-col",[a("div",{staticStyle:{"margin-top":"5px","margin-left":"50px"}},[t.guessesLeft<=6?a("div",{staticClass:"rope"}):t._e(),t.guessesLeft<=5?a("div",{staticClass:"head"}):t._e(),t.guessesLeft<=4?a("div",{staticClass:"body"}):t._e(),t.guessesLeft<=3?a("div",{staticClass:"arm1"}):t._e(),t.guessesLeft<=2?a("div",{staticClass:"arm2"}):t._e(),t.guessesLeft<=1?a("div",{staticClass:"leg1"}):t._e(),t.guessesLeft<=0?a("div",{staticClass:"leg2"}):t._e(),t.guessesLeft<=6?a("div",{staticClass:"crossBeam"}):t._e(),t.guessesLeft<=6?a("div",{staticClass:"pole"}):t._e(),a("div",{staticClass:"base"})])]),a("b-col")],1)],1),t.play?a("div",[!t.win&&t.guessesLeft>0?a("div",[t.loading?a("b-spinner",{attrs:{label:"Spinning"}}):t._l(t.wordGuessed,function(e,r){return a("span",{key:r},[t._v(t._s(e)+" ")])})],2):t.win?a("div",[a("h1",[t._v("Congratulations!")]),a("h3",[t._v("\n          The word was\n          "),a("span",{staticClass:"word"},[t._v(t._s(t.word.word))])]),a("h4",[t._v("\n          You won\n          "),a("span",{staticClass:"points"},[t._v(t._s(t.length))]),t._v(" points!\n        ")]),a("b-button",{on:{click:t.resetGame}},[t._v("New Game")])],1):0===t.guessesLeft?a("div",[a("h1",{staticClass:"guess"},[t._v("Game Over!")]),a("h3",[t._v("\n          The word was\n          "),a("span",{staticClass:"word"},[t._v(t._s(t.word.word))])]),a("h4",[t._v("\n          You lost\n          "),a("span",{staticClass:"points"},[t._v(t._s(t.lost))]),t._v(" points!\n        ")])]):t._e(),t.error?a("b-alert",{staticStyle:{"margin-top":"20px"},attrs:{show:"",variant:"danger"}},[t._v("We have no words with a length of "+t._s(t.length)+" letters")]):t._e(),0===t.guessesLeft||t.error?a("b-button",{on:{click:t.resetGame}},[t._v("New Game")]):t._e(),!t.win&&t.guessesLeft>0?a("b-row",[a("hr"),a("b-col",{attrs:{sm:""}}),a("b-col",{attrs:{sm:""}},[t.loading||t.error?t._e():a("div",t._l(t.alphabet,function(e,r){return a("b-button",{key:r,staticClass:"letter",attrs:{variant:"light",disabled:t.isDisabled(r)},on:{click:function(a){return t.letterCheck(e.letter)}}},[t._v(t._s(e.letter))])}),1)]),a("b-col",{attrs:{sm:""}},[t.hintGiven||!t.play||t.loading?t._e():a("b-button",{attrs:{variant:"outline-dark"},on:{click:t.giveHint}},[t._v("Hint")]),t.hintGiven||!t.play||t.loading?t._e():a("p",[t._v("Gives you one letter at the cost of a guess.")])],1)],1):t._e()],1):t._e()])],1)},o=[],i=(a("ac4d"),a("8a81"),a("ac6a"),a("bc3a")),l=a.n(i),u={name:"play",data:function(){return{lost:0,length:0,play:!1,guessesLeft:6,wordGuessed:[],win:!1,loading:!1,error:!1,word:{},hintGiven:!1,lettersGuessed:[],alphabet:[{letter:"A",disable:!1},{letter:"B",disable:!1},{letter:"C",disable:!1},{letter:"D",disable:!1},{letter:"E",disable:!1},{letter:"F",disable:!1},{letter:"G",disable:!1},{letter:"H",disable:!1},{letter:"I",disable:!1},{letter:"J",disable:!1},{letter:"K",disable:!1},{letter:"L",disable:!1},{letter:"M",disable:!1},{letter:"N",disable:!1},{letter:"O",disable:!1},{letter:"P",disable:!1},{letter:"Q",disable:!1},{letter:"R",disable:!1},{letter:"S",disable:!1},{letter:"T",disable:!1},{letter:"U",disable:!1},{letter:"V",disable:!1},{letter:"W",disable:!1},{letter:"X",disable:!1},{letter:"Y",disable:!1},{letter:"Z",disable:!1}]}},methods:{activatePlay:function(){var t=this;this.loading=!0,this.wordGuessed=[],l.a.get("https://hangman-webapp.herokuapp.com/api/list/size/"+this.length).then(function(e){var a=e.data,r=a.words;if(r.length>0){var s=r.length,n=Math.ceil(Math.random()*s)-1;t.word=r[n],t.$forceUpdate();var o=t.word.word;l.a.post("https://hangman-webapp.herokuapp.com/api/check/word/played",{user:localStorage["user"],word:o}).then(function(e){var a=e.data,r=a.result;if("found"===r){t.error=!0,t.play=!1;var s=!0,n=!1,o=void 0;try{for(var i,l=t.alphabet[Symbol.iterator]();!(s=(i=l.next()).done);s=!0){var u=i.value;u.disable=!1}}catch(d){n=!0,o=d}finally{try{s||null==l.return||l.return()}finally{if(n)throw o}}return t.guessesLeft=6,t.length=0,t.wordGuessed=[],t.win=!1,t.word={},t.lettersGuessed=[],void(t.hintGiven=!1)}}).then(function(){t.loading=!1;for(var e=0;e<o.length;e++)"-"===o[e]?t.wordGuessed.push("-"):t.wordGuessed.push("_")})}else t.error=!0,t.loading=!1,t.$forceUpdate()}),this.play=!0},letterCheck:function(t){this.lettersGuessed.push(t);var e=!1,a=this.word.word;a=a.toLowerCase();var r=t.toLowerCase(),s=!0,n=!1,o=void 0;try{for(var i,u=this.alphabet[Symbol.iterator]();!(s=(i=u.next()).done);s=!0){var d=i.value;d.letter===t&&(d.disable=!0)}}catch(w){n=!0,o=w}finally{try{s||null==u.return||u.return()}finally{if(n)throw o}}for(var c=0;c<a.length;c++)r===a[c]&&(this.wordGuessed[c]=r,this.$forceUpdate(),e=!0);var p="",h=!0,m=!1,v=void 0;try{for(var f,b=this.wordGuessed[Symbol.iterator]();!(h=(f=b.next()).done);h=!0){var g=f.value;p+=g}}catch(w){m=!0,v=w}finally{try{h||null==b.return||b.return()}finally{if(m)throw v}}p===a&&(this.win=!0,l.a.post("https://hangman-webapp.herokuapp.com/api/add/to/user",{username:localStorage["user"],word:this.word.word,state:"won"}).then(function(t){})),e||(this.guessesLeft--,0===this.guessesLeft&&(this.lost=Math.ceil(this.length/2),l.a.post("https://hangman-webapp.herokuapp.com/api/add/to/user",{username:localStorage["user"],word:this.word.word,state:"lost"}).then(function(t){})))},isDisabled:function(t){return this.alphabet[t].disable},resetGame:function(){this.error=!1,this.play=!1;var t=!0,e=!1,a=void 0;try{for(var r,s=this.alphabet[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var n=r.value;n.disable=!1}}catch(o){e=!0,a=o}finally{try{t||null==s.return||s.return()}finally{if(e)throw a}}this.guessesLeft=6,this.length=0,this.wordGuessed=[],this.win=!1,this.word={},this.lettersGuessed=[],this.hintGiven=!1},giveHint:function(){this.hintGiven=!0,this.guessesLeft--;var t=0,e=!0,a=!1,r=void 0;try{for(var s,n=this.wordGuessed[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var o=s.value;if("_"===o){for(var i=this.word.word[t],l=0;l<this.word.word.length;l++)i===this.word.word[l]&&(this.wordGuessed[l]=i);var u=!0,d=!1,c=void 0;try{for(var p,h=this.alphabet[Symbol.iterator]();!(u=(p=h.next()).done);u=!0){var m=p.value;m.letter===o&&(m.disable=!0)}}catch(v){d=!0,c=v}finally{try{u||null==h.return||h.return()}finally{if(d)throw c}}return}t++}}catch(v){a=!0,r=v}finally{try{e||null==n.return||n.return()}finally{if(a)throw r}}}}},d=u,c=(a("d07f"),a("2877")),p=Object(c["a"])(d,n,o,!1,null,"0109ee0d",null),h=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"leaderboard"},[a("b-container",{staticStyle:{width:"100%"}},[a("b-row",[a("b-col",{staticStyle:{"margin-top":"30px"},attrs:{sm:"4"}},[a("h3",[a("u",[t._v("Most words won")])]),t.statLoading?a("b-spinner",{attrs:{small:"",label:"Small Spinner"}}):a("span",[t._v(t._s(t.topUser)+" - "+t._s(t.mostWords))]),a("hr"),a("h3",[a("u",[t._v("Longest word")])]),t.statLoading?a("b-spinner",{attrs:{small:"",label:"Small Spinner"}}):a("span",[t._v(t._s(t.longestUser)+" - "+t._s(t.longestWord)+" letters")])],1),a("b-col",{staticStyle:{"margin-top":"30px"},attrs:{sm:"8"}},[a("h1",[t._v("The Hangman Leaderboards")]),t.loading?a("b-spinner",{attrs:{label:"Spinning"}}):a("b-table",{attrs:{"sticky-header":"",info:"",items:t.items,fields:t.fields,"tbody-tr-class":t.rowClass}})],1)],1)],1)],1)},v=[],f={beforeCreate:function(){var t=this;this.loading=!0,this.statLoading=!0,l.a.get("https://hangman-webapp.herokuapp.com/api/all/users").then(function(e){for(var a=[],r=e.data,s=r.words,n=0;n<s.length;n++){var o={Rank:n+1,Username:s[n].username,Pts:s[n].points,Ratio:s[n].win_rate};a.push(o),t.items=a,t.loading=!1}}).then(function(){l.a.get("https://hangman-webapp.herokuapp.com/api/link/data").then(function(e){var a=e.data,r=a.items,s={};t.longestWord=r[0].word.length,t.longestUser=r[0].username;var n=!0,o=!1,i=void 0;try{for(var l,u=r[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var d=l.value;"won"===d.complete_state&&(void 0===s[d.username]?s[d.username]=1:s[d.username]++)}}catch(m){o=!0,i=m}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}var c="",p=0;for(var h in s)s[h]>p&&(c=h,p=s[h]);t.topUser=c,t.mostWords=p,t.statLoading=!1})})},data:function(){return{fields:["Rank","Username","Pts","Ratio"],items:[],mostWords:0,topUser:"",longestWord:0,longestUser:"",loading:!0,statLoading:!0}},methods:{rowClass:function(t,e){if(t)return 1===t.Rank?"table-warning":void 0}}},b=f,g=Object(c["a"])(b,m,v,!1,null,null,null),w=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new"},[a("b-container",[a("b-row",[a("b-col",{attrs:{sm:"5"}},[a("h4",{staticStyle:{"margin-top":"15px"}},[a("u",[t._v("How does this work?")])]),a("p",[t._v("On this page you can add new words to the current repository of words. These added words will be used in games that other players play. When you click submit, the word is sent in to be confirmed/verified. Once verified, you will recieve 3 points for every new word you add.")])]),a("b-col",{attrs:{sm:"7"}},[a("h1",[t._v("Add new word here..")]),a("b-input-group",{staticClass:"mt-3 mx-auto",staticStyle:{"margin-bottom":"10px",width:"200px"}},[a("b-form-input",{attrs:{placeholder:"eg. hangman"},model:{value:t.word,callback:function(e){t.word=e},expression:"word"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"outline-dark"},on:{click:t.submitWord}},[t._v("Submit")])],1)],1),t.error?a("b-alert",{staticStyle:{margin:"5px"},attrs:{show:"",variant:"danger"}},[t._v(t._s(t.message))]):t.success?a("b-alert",{attrs:{show:"",variant:"success"}},[t._v(t._s(t.message))]):a("b-alert",{attrs:{hide:"",variant:"danger"}},[t._v(t._s(t.message))])],1)],1)],1)],1)},y=[],k={data:function(){return{word:"",error:!1,success:!1,message:""}},methods:{submitWord:function(){var t=this,e="";l.a.get("https://hangman-webapp.herokuapp.com/api/check/word/"+this.word).then(function(t){var a=t.data;e=a.check}).then(function(){"new"===e?(t.success=!0,t.error=!1,t.message="Your word has been sent in to be verified",l.a.post("https://hangman-webapp.herokuapp.com/api/store/new/word",{word:t.word,user:localStorage["user"]}).then(function(t){t.data})):(t.success=!1,t.error=!0,t.message="This word already exists in our repository")})}}},S=k,C=Object(c["a"])(S,_,y,!1,null,null,null),x=C.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"}),a("div",{staticClass:"col-sm"},[a("h1",[t._v("Login")]),a("table",[a("tr",[a("td",[t._v("username")]),a("td",[a("b-form-input",{attrs:{placeholder:"username"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1)]),a("tr",[a("td",[t._v("Password")]),a("td",[a("b-form-input",{attrs:{type:"password",placeholder:"password"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1)])]),t.error?a("b-alert",{staticStyle:{margin:"5px"},attrs:{show:"",variant:"danger"}},[t._v(t._s(t.message))]):a("b-alert",{attrs:{hide:"",variant:"danger"}},[t._v(t._s(t.message))]),a("b-button",{staticClass:"login",on:{click:t.submitUser}},[t._v("Login")]),a("b-button",{staticClass:"login",on:{click:t.registerUser}},[t._v("Sign up")])],1),a("div",{staticClass:"col-sm"})])])])},U=[],L=new r["default"],W={name:"login",data:function(){return{user:"",pass:"",error:!1,message:""}},methods:{submitUser:function(){var t=this,e=this.user,a=this.pass;e&&a?l.a.post("https://hangman-webapp.herokuapp.com/api/login/check",{username:e,password:a}).then(function(a){var r=a.data,s=r.auth;if(s){var n=r.token;localStorage["token"]=n,localStorage["user"]=e,L.$emit("userData",t.user),t.$router.push({name:"Play"})}else t.error=!0,t.message=r.message}):(this.error=!0,this.message="Please enter a username and a password")},registerUser:function(){this.$router.push({name:"register"})}}},G=W,T=(a("8460"),Object(c["a"])(G,P,U,!1,null,"6a4c1d5e",null)),$=T.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"}),a("div",{staticClass:"col-sm"},[a("h1",[t._v("Register")]),a("table",[a("tr",[a("td",[t._v("username")]),a("td",[a("b-form-input",{attrs:{placeholder:"username"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1)]),a("tr",[a("td",[t._v("Password")]),a("td",[a("b-form-input",{attrs:{type:"password",placeholder:"password"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1)]),a("tr",[a("td",[t._v("Confirm password")]),a("td",[a("b-form-input",{attrs:{type:"password",placeholder:"password"},model:{value:t.passConfirm,callback:function(e){t.passConfirm=e},expression:"passConfirm"}})],1)])]),t.error?a("b-alert",{staticStyle:{margin:"5px"},attrs:{show:"",variant:"danger"}},[t._v(t._s(t.message))]):a("b-alert",{attrs:{hide:"",variant:"danger"}},[t._v(t._s(t.message))]),a("b-button",{staticClass:"login",on:{click:t.submitUser}},[t._v("Sign up")]),a("b-button",{staticClass:"login",on:{click:t.back}},[t._v("Back")])],1),a("div",{staticClass:"col-sm"})])])])},R=[],A={name:"Register",data:function(){return{user:"",pass:"",passConfirm:"",message:"",error:!1,accountAvailability:!1}},methods:{submitUser:function(){var t,e=this;this.user&&this.pass?this.pass===this.passConfirm?l.a.get("https://hangman-webapp.herokuapp.com/api/check/user/"+this.user).then(function(a){var r=a.data;t=r.message,"already exists"===t?(e.error=!0,e.message="This username already exists"):e.accountAvailability=!0,e.$forceUpdate(),e.accountAvailability&&l.a.post("https://hangman-webapp.herokuapp.com/api/add/user/",{username:e.user,password:e.pass}).then(function(t){e.$router.push({name:"login"})})}):(this.error=!0,this.message="The passwords you have entered do not match"):(this.error=!0,this.message="Please enter a username and a password")},back:function(){this.$router.push({name:"login"})}}},j=A,q=(a("dc07"),Object(c["a"])(j,O,R,!1,null,"0cef9e80",null)),E=q.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Profile"},[a("b-container",[a("b-row",[a("b-col",{staticStyle:{"margin-top":"50px"},attrs:{sm:""}},[a("h1",[t._v(t._s(t.user))]),a("h2",[t._v("\n          Points:\n          "),t.loading?a("b-spinner",{attrs:{variant:"warning",small:"",label:"Small Spinner"}}):a("span",{staticClass:"points"},[t._v(t._s(t.points))])],1),a("h2",[t._v("\n          Ranking:\n          "),t.statLoading?a("b-spinner",{attrs:{variant:"warning",small:"",label:"Small Spinner"}}):a("span",[t._v(t._s(t.ranking))])],1),a("hr"),a("h5",[t._v("filter:")]),a("b-form-select",{staticClass:"mb-3",on:{change:function(e){return t.onChange(e)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("option",{domProps:{value:null}},[t._v("Game history")]),a("option",{attrs:{value:"won"}},[t._v("Words won")]),a("option",{attrs:{value:"lost"}},[t._v("Words lost")])]),a("hr"),a("h2",[t._v("\n          Win Rate:\n          "),t.loading?a("b-spinner",{attrs:{variant:"success",label:"Spinning"}}):t._e(),t.winPercentage>50&&!t.loading?a("span",{staticClass:"winRate"},[t._v(t._s(t.winPercentage)+"%")]):t.winPercentage<=50&&!t.loading?a("span",{staticClass:"loseRate"},[t._v(t._s(t.winPercentage)+"%")]):t._e()],1)],1),a("b-col",{attrs:{sm:""}},[t.history?a("div",{staticStyle:{"margin-top":"100px"}},[a("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1):a("b-table",{staticStyle:{"margin-top":"50px"},attrs:{"sticky-header":"",info:"",items:t.items,fields:t.fields,"tbody-tr-class":t.rowClass}})],1)],1)],1)],1)},M=[],D={beforeCreate:function(){var t=this;this.loading=!0,this.history=!0,this.points=0,l.a.get("https://hangman-webapp.herokuapp.com/api/get/user/data/"+localStorage["user"]).then(function(e){for(var a=e.data,r=a.data,s=[],n=0;n<r.length;n++){t.points+=r[n].points,t.points<0&&(t.points=0);var o={Total_points:t.points,Word:r[n].word,Result:r[n].complete_state,Pts:r[n].points};s.push(o)}var i=0,u=0,d=!0,c=!1,p=void 0;try{for(var h,m=r[Symbol.iterator]();!(d=(h=m.next()).done);d=!0){var v=h.value;i++,"won"===v.complete_state&&u++}}catch(f){c=!0,p=f}finally{try{d||null==m.return||m.return()}finally{if(c)throw p}}t.winPercentage=(u/i*100).toFixed(2),t.loading=!1,t.items=s,t.history=!1,l.a.get("https://hangman-webapp.herokuapp.com/api/all/users").then(function(e){for(var a=e.data,r=a.words,s=0;s<r.length;s++)r[s].username===localStorage["user"]&&(t.ranking=s+1,t.statLoading=!1)})})},data:function(){return{user:localStorage["user"],fields:["Total_points","Word","Result","Pts"],winPercentage:0,items:[],totalPoints:0,points:0,ranking:0,selected:null,loading:!0,statLoading:!0,history:!0}},methods:{rowClass:function(t,e){if(t)return"won"===t.Result?"table-success":"table-danger"},onChange:function(t){var e=this;this.totalPoints=0,this.history=!0,this.$forceUpdate(),this.selected?l.a.get("https://hangman-webapp.herokuapp.com/api/get/user/data/user/"+localStorage["user"]+"/choice/"+this.selected).then(function(t){for(var a=t.data,r=a.data,s=[],n=0;n<r.length;n++){e.totalPoints+=r[n].points;var o={Total_points:e.totalPoints,Word:r[n].word,Result:r[n].complete_state,Pts:r[n].points};s.push(o)}e.items=s,e.$forceUpdate(),e.history=!1}):l.a.get("https://hangman-webapp.herokuapp.com/api/get/user/data/"+localStorage["user"]).then(function(t){for(var a=t.data,r=a.data,s=[],n=0;n<r.length;n++){e.totalPoints+=r[n].points,e.totalPoints<0&&(e.totalPoints=0);var o={Total_points:e.totalPoints,Word:r[n].word,Result:r[n].complete_state,Points:r[n].points};s.push(o)}e.items=s,e.history=!1})}}},F=D,N=(a("4636"),Object(c["a"])(F,H,M,!1,null,"551b825a",null)),Y=N.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin"},[a("h1",[t._v("Admin page")]),a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{pills:"",card:"",vertical:""}},[a("b-tab",{attrs:{title:"Users",active:""}},[a("b-card-text",[a("label",[t._v("\n              Search user:\n              "),a("b-input-group",{staticClass:"mt-3",staticStyle:{"margin-bottom":"10px",width:"200px"}},[a("b-form-input",{model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"outline-dark"},on:{click:t.searchUser}},[t._v("Search")])],1)],1)],1),a("b-table",{attrs:{dark:"",striped:"",items:t.items,fields:t.fields},scopedSlots:t._u([t._l(t.fields,function(e,r){return{key:e.key,fn:function(s){return["button"===e.colType?a("div",{key:r},[a("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.deleteUser(s.item.Username)}}},[t._v("Remove")])],1):"id"===e.colType?a("div",{key:r},[a("h5",[t._v(t._s(s.item.ID))])]):"Username"===e.colType?a("div",{key:r},[a("h5",[t._v(t._s(s.item.Username))])]):"Points"===e.colType?a("div",{key:r},[a("h5",[t._v(t._s(s.item.Points))])]):t._e()]}}})],null,!0)})],1)],1),a("b-tab",[a("template",{slot:"title"},[a("span",[t._v("\n              New Words\n              "),a("b-badge",{attrs:{variant:"primary"}},[t._v(t._s(t.newWords))])],1)]),a("h1",[t._v("Verify new words")]),a("b-table",{attrs:{dark:"",striped:"",items:t.words,fields:t.columns},scopedSlots:t._u([t._l(t.columns,function(e,r){return{key:e.key,fn:function(s){return["status"===e.colType?a("div",{key:r},[a("b-button",{staticStyle:{margin:"5px"},attrs:{variant:"success"},on:{click:function(e){return t.confirmWord(s.item.word,s.item.username)}}},[t._v("+")]),a("b-button",{staticStyle:{margin:"5px"},attrs:{variant:"danger"},on:{click:function(e){return t.denyWord(s.item.word)}}},[t._v("-")])],1):"user"===e.colType?a("div",{key:r},[a("h5",[t._v(t._s(s.item.username))])]):"word"===e.colType?a("div",{key:r},[a("h5",[t._v(t._s(s.item.word))])]):t._e()]}}})],null,!0)})],2)],1)],1)],1)},I=[],J=(a("386d"),{beforeCreate:function(){var t=this;l.a.get("https://hangman-webapp.herokuapp.com/api/all/users").then(function(e){for(var a=[],r=e.data,s=r.words,n=0;n<s.length;n++){var o={Username:s[n].username,Points:s[n].points};a.push(o),t.items=a}}).then(function(){l.a.get("https://hangman-webapp.herokuapp.com/api/all/new/words").then(function(e){var a=e.data,r=a.words,s=[];t.newWords=0;var n=!0,o=!1,i=void 0;try{for(var l,u=r[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var d=l.value;if("pending"===d.status){var c={username:d.username,word:d.word};s.push(c),t.newWords++,t.$forceUpdate()}}}catch(p){o=!0,i=p}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}t.words=s})})},data:function(){return{fields:[{key:"Username",label:"Username",colType:"user"},{key:"Points",label:"Points",colType:"points"},{key:"Remove",label:"",colType:"button"}],items:[],columns:[{key:"username",label:"Username",colType:"user"},{key:"word",label:"Word",colType:"word"},{key:"status",label:"Confirm/Deny",colType:"status"}],words:[],search:"",newWords:0}},methods:{searchUser:function(){var t=this,e=this.search;""!=e?l.a.get("https://hangman-webapp.herokuapp.com/api/find/user/"+this.search).then(function(e){var a=e.data,r=a.user,s={Username:r.username,Points:r.points};t.items=[s]}):l.a.get("https://hangman-webapp.herokuapp.com/api/all/users").then(function(e){for(var a=[],r=e.data,s=r.words,n=0;n<s.length;n++){var o={Username:s[n].username,Points:s[n].points};a.push(o),t.items=a}})},deleteUser:function(t){var e=this;if(confirm("Are you sure you want to delete this users' account?")){var a=[];l.a.post("https://hangman-webapp.herokuapp.com/api/delete/user",{username:t}).then(function(t){for(var r=t.data,s=r.users,n=0;n<s.length;n++){var o={Username:s[n].username,Points:s[n].points};a.push(o),e.items=a}})}},confirmWord:function(t,e){var a=this;l.a.post("https://hangman-webapp.herokuapp.com/api/add/word/from/user/",{word:t,user:e}).then(function(e){l.a.post("https://hangman-webapp.herokuapp.com/api/set/new/word/status",{word:t,status:"confirmed"}).then(function(t){l.a.get("https://hangman-webapp.herokuapp.com/api/all/new/words").then(function(t){var e=t.data,r=e.words;a.newWords=0;var s=[],n=!0,o=!1,i=void 0;try{for(var l,u=r[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var d=l.value;if("pending"===d.status){var c={username:d.username,word:d.word};s.push(c),a.newWords++,a.$forceUpdate()}}}catch(p){o=!0,i=p}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}a.words=s})})})},denyWord:function(t){var e=this;l.a.post("https://hangman-webapp.herokuapp.com/api/set/new/word/status",{word:t,status:"denied"}).then(function(t){l.a.get("https://hangman-webapp.herokuapp.com/api/all/new/words").then(function(t){var a=t.data,r=a.words;e.newWords=0;var s=[],n=!0,o=!1,i=void 0;try{for(var l,u=r[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var d=l.value;if("pending"===d.status){var c={username:d.username,word:d.word};s.push(c),e.newWords++,e.$forceUpdate()}}}catch(p){o=!0,i=p}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}e.words=s})})}}}),V=J,z=Object(c["a"])(V,B,I,!1,null,null,null),K=z.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friends"},[a("h1",[t._v("Friends")]),a("div",[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{pills:"",card:"",vertical:""}},[a("b-tab",{attrs:{title:"Search",active:""}},[a("b-card-text",[a("label",[a("h3",[t._v("Search for someone:")]),a("b-input-group",{staticClass:"mt-3",staticStyle:{"margin-bottom":"10px",width:"200px"}},[a("b-form-input",{model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"outline-dark"},on:{click:t.searchUser}},[t._v("Search")])],1)],1)],1),a("div",[a("b-card-group",{attrs:{columns:""}},t._l(t.results,function(e,r){return a("b-card",{key:r,attrs:{"bg-variant":"primary","text-variant":"white"}},[a("b-card-text",[t._v(t._s(e.username)+" - "+t._s(e.points)+" points")]),a("b-button",{attrs:{variant:"outline-light"},on:{click:function(a){return t.sendRequest(e.username)}}},[t._v("Send friend request")])],1)}),1)],1)])],1),a("b-tab",{attrs:{title:"Friends list"}},[a("b-card-text",[a("h3",[t._v("Friends List")]),a("div",[a("b-card-group",{attrs:{columns:""}},t._l(t.requests,function(e,r){return a("b-card",{key:r,attrs:{"bg-variant":"primary","text-variant":"white"}},[a("b-card-text",[t._v(t._s(e.username)+" - "+t._s(e.points)+" points")]),a("b-button",{attrs:{variant:"outline-success"}},[t._v("Accept")]),a("b-button",{attrs:{variant:"outline-danger"}},[t._v("Deny")])],1)}),1)],1)])],1),a("b-tab",{attrs:{title:"Challenges"}},[a("b-card-text",[t._v("Challenges")])],1)],1)],1)],1)])},X=[],Z={beforeCreate:function(){var t=this;l.a.get("https://hangman-webapp.herokuapp.com/api/friend/requests/for/"+localStorage["user"]).then(function(e){var a=e.data,r=a.result;t.requests=r,t.$forceUpdate()})},data:function(){return{search:"",results:[],requests:[]}},methods:{searchUser:function(){var t=this,e=this.search;""!=e?l.a.get("https://hangman-webapp.herokuapp.com/api/find/user/"+this.search).then(function(e){for(var a=e.data,r=a.user,s=[],n=0;n<r.length;n++){var o={username:r[n].username,points:r[n].points};s.push(o)}t.results=s}):l.a.get("https://hangman-webapp.herokuapp.com/api/all/users").then(function(e){var a=[],r=e.data;console.log(r);for(var s=r.words,n=0;n<s.length;n++){var o={username:s[n].username,points:s[n].points};a.push(o)}t.results=a})},sendRequest:function(t){var e=this;l.a.post("https://hangman-webapp.herokuapp.com/api/add/friends",{requester:localStorage["user"],receiver:t}).then(function(t){var a=t.data;a.status;e.results=[]})}}},tt=Z,et=Object(c["a"])(tt,Q,X,!1,null,null,null),at=et.exports;r["default"].use(s["a"]);var rt=new s["a"]({routes:[{path:"/",name:"login",component:$},{path:"/admin",name:"admin",component:K,meta:{adminAuth:!0}},{path:"/register",name:"register",component:E},{path:"/leader",name:"Leaderboard",component:w,meta:{requiresAuth:!0}},{path:"/new/word",name:"Add new word",component:x,meta:{requiresAuth:!0}},{path:"/play",name:"Play",component:h,meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:Y,meta:{requiresAuth:!0}},{path:"/friends",name:"Friends",component:at,meta:{requiresAuth:!0}}]});rt.beforeEach(function(t,e,a){if(t.matched.some(function(t){return t.meta.requiresAuth})){var r=localStorage["token"];l.a.post("https://hangman-webapp.herokuapp.com/api/token/check",r).then(function(e){var r=e.data,s=r.success;s?a():a({path:"/",query:{redirect:t.fullPath}})})}else if(t.matched.some(function(t){return t.meta.adminAuth})){var s=localStorage["token"];l.a.post("https://hangman-webapp.herokuapp.com/api/token/check",s).then(function(e){var r=e.data,s=r.success,n=r.user;s&&"admin"===n?a():a({path:"/",query:{redirect:t.fullPath}})})}else a()});var st=rt,nt=a("5f5b"),ot=(a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)}),it=[],lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{href:"#"}},[r("img",{staticClass:"d-inline-block align-top",attrs:{src:a("0c7d"),alt:"logo"}})]),r("b-navbar-nav",[r("b-nav-item",[r("router-link",{attrs:{to:"/Play"}},[t._v("Play")])],1),r("b-nav-item",[r("router-link",{attrs:{to:"/leader"}},[t._v("Leaderboard")])],1),r("b-nav-item",[r("router-link",{attrs:{to:"/new/word"}},[t._v("Add new word")])],1)],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{text:"Other",right:""}},[r("b-dropdown-item",{attrs:{to:"/profile"}},[t._v("Profile")]),r("b-dropdown-item",{attrs:{to:"/friends"}},[t._v("Friends")]),"admin"===t.user?r("b-dropdown-item",{attrs:{to:"/admin"}},[t._v("Admin Page")]):t._e(),r("b-dropdown-divider"),r("b-dropdown-item",{on:{click:t.logout}},[t._v("Logout")])],1)],1)],1)],1)])},ut=[],dt={data:function(){return{user:""}},mounted:function(){var t=this;L.$on("userData",function(e){t.user=e})},methods:{logout:function(){localStorage.clear(),this.user="",this.$router.push({name:"login"}),l.a.post("https://hangman-webapp.herokuapp.com/api/logout").then(function(t){console.log("logged out")})},setUser:function(t){this.user=t}}},ct=dt,pt=(a("3a2a"),Object(c["a"])(ct,lt,ut,!1,null,"5fbaae36",null)),ht=pt.exports,mt={name:"app",components:{Header:ht}},vt=mt,ft=(a("034f"),Object(c["a"])(vt,ot,it,!1,null,null,null)),bt=ft.exports;r["default"].use(nt["a"]),r["default"].config.productionTip=!1,new r["default"]({router:st,render:function(t){return t(bt)}}).$mount("#app")},"64a9":function(t,e,a){},8460:function(t,e,a){"use strict";var r=a("c6ac"),s=a.n(r);s.a},"94e3":function(t,e,a){},c6ac:function(t,e,a){},d07f:function(t,e,a){"use strict";var r=a("94e3"),s=a.n(r);s.a},dc07:function(t,e,a){"use strict";var r=a("05d1"),s=a.n(r);s.a}});
//# sourceMappingURL=app.c340e58d.js.map