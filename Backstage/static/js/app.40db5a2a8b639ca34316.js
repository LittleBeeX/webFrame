webpackJsonp([15],{"+ofK":function(e,a){e.exports={name:"web3",namespace:"ethereum",version:"1.0.0-beta.36",description:"Ethereum JavaScript API",repository:"https://github.com/ethereum/web3.js/tree/master/packages/web3",license:"LGPL-3.0",main:"src/index.js",bugs:{url:"https://github.com/ethereum/web3.js/issues"},keywords:["Ethereum","JavaScript","API"],author:"ethereum.org",authors:[{name:"Fabian Vogelsteller",email:"fabian@ethereum.org",homepage:"http://frozeman.de"},{name:"Marek Kotewicz",email:"marek@parity.io",url:"https://github.com/debris"},{name:"Marian Oancea",url:"https://github.com/cubedro"},{name:"Gav Wood",email:"g@parity.io",homepage:"http://gavwood.com"},{name:"Jeffery Wilcke",email:"jeffrey.wilcke@ethereum.org",url:"https://github.com/obscuren"}],dependencies:{"web3-bzz":"1.0.0-beta.36","web3-core":"1.0.0-beta.36","web3-eth":"1.0.0-beta.36","web3-eth-personal":"1.0.0-beta.36","web3-net":"1.0.0-beta.36","web3-shh":"1.0.0-beta.36","web3-utils":"1.0.0-beta.36"},_from:"web3@1.0.0-beta.36",_resolved:"http://registry.npm.taobao.org/web3/download/web3-1.0.0-beta.36.tgz"}},0:function(e,a){},1:function(e,a){},"1hgp":function(e,a){e.exports={"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}},2:function(e,a){},3:function(e,a){},"5sw0":function(e,a){},"7Jh7":function(e,a){e.exports={sha224WithRSAEncryption:{sign:"rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},"RSA-SHA224":{sign:"ecdsa/rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},sha256WithRSAEncryption:{sign:"rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},"RSA-SHA256":{sign:"ecdsa/rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},sha384WithRSAEncryption:{sign:"rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},"RSA-SHA384":{sign:"ecdsa/rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},sha512WithRSAEncryption:{sign:"rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA512":{sign:"ecdsa/rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA1":{sign:"rsa",hash:"sha1",id:"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{sign:"ecdsa",hash:"sha1",id:""},sha256:{sign:"ecdsa",hash:"sha256",id:""},sha224:{sign:"ecdsa",hash:"sha224",id:""},sha384:{sign:"ecdsa",hash:"sha384",id:""},sha512:{sign:"ecdsa",hash:"sha512",id:""},"DSA-SHA":{sign:"dsa",hash:"sha1",id:""},"DSA-SHA1":{sign:"dsa",hash:"sha1",id:""},DSA:{sign:"dsa",hash:"sha1",id:""},"DSA-WITH-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-WITH-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-WITH-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-WITH-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-RIPEMD160":{sign:"dsa",hash:"rmd160",id:""},ripemd160WithRSA:{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},"RSA-RIPEMD160":{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},md5WithRSAEncryption:{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"},"RSA-MD5":{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"}}},BFZn:function(e,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),c.d(a,"m",function(){return f});var f={music:"Music",findMusic:"FIND MUSIC",myMusic:"MY MUSIC",friend:"FRIEND",musician:"MUSICIAN",download:"DOWNLOAD"}},GLlW:function(e,a){e.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}},NHnr:function(e,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var f=c("rVsN"),t=c.n(f),d=c("IvJb"),n={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var b=c("C7Lr")({name:"App",mounted:function(){this.$store.dispatch("getContractInstance")},beforeCreate:function(){this.$store.dispatch("registerWeb3")}},n,!1,function(e){c("5sw0")},null,null).exports,i=c("zO6J"),s=c("9rMa"),r={web3:{isInjected:!1,web3Instance:null,networkId:null,coinbase:null,balance:null,error:null},contractInstance:null},o=c("aA9S"),u=c.n(o),h=c("6798"),p=c.n(h),l=new t.a(function(e,a){var c=window.web3;if(void 0!==c){var f=new p.a(c.currentProvider);e({web3:function(){return f}})}else a(new Error("Unable to connect to Metamask"))}).then(function(e){return new t.a(function(a,c){e.web3().eth.net.getId(function(f,t){f?c(new Error("Unable to retrieve network ID")):(e=u()({},e,{networkId:t}),a(e))})})}).then(function(e){return new t.a(function(a,c){e.web3().eth.getCoinbase(function(f,t){f?c(new Error("Unable to retrieve coinbase")):(e=u()({},e,{coinbase:t}),a(e))})})}).then(function(e){return new t.a(function(a,c){e.web3().eth.getBalance(e.coinbase,function(f,t){f?c(new Error("Unable to retrieve balance for address: "+e.coinbase)):(e=u()({},e,{balance:t}),a(e))})})}),m=function(e){var a=window.web3,c=void 0,f=new p.a(a.currentProvider);f.eth.getCoinbase().then(function(e){c=e}),setInterval(function(){f&&k.state.web3.web3Instance&&(c!==k.state.web3.coinbase?f.eth.getBalance(c,function(e,a){e?console.log(e):k.dispatch("pollWeb3",{coinbase:c,balance:parseInt(a,10)})}):f.eth.getBalance(k.state.web3.coinbase,function(e,a){e?console.log(e):parseInt(a,10)!==k.state.web3.balance&&k.dispatch("pollWeb3",{coinbase:k.state.web3.coinbase,balance:a})}))},500)},g=c("kxYP"),y=c.n(g),w=[{constant:!1,inputs:[{name:"_caddr",type:"address"}],name:"toVote",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getMyAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"quertCandidateCount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"queryCandidate",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"}];d.default.use(y.a,{web3:new p.a(web3.currentProvider)});var v=new t.a(function(e,a){e(new web3.eth.contract(w,"0x59162aac49e60dd30b1cb46741537a589fd25a6f"))}),S=function(e){return sessionStorage.getItem(e)},A=function(e,a){sessionStorage.setItem(e,a)};d.default.use(s.a);var k=new s.a.Store({strict:!0,state:r,mutations:{registerWeb3Instance:function(e,a){var c=a,f=e.web3;f.coinbase=c.coinbase,f.networkId=c.networkId,f.balance=parseInt(c.balance,10),f.web3Instance=c.web3,e.web3=f,m(),A("myAddress",c.coinbase)},pollWeb3Instance:function(e,a){e.web3.coinbase=a.coinbase,e.web3.balance=parseInt(a.balance,10)},registerContractInstance:function(e,a){e.contractInstance=function(){return a}},refreshCoinbase:function(e,a){e.web3.coinbase=a}},actions:{registerWeb3:function(e){var a=e.commit;l.then(function(e){a("registerWeb3Instance",e)}).catch(function(e){console.log("error in action registerWeb3",e)})},pollWeb3:function(e,a){(0,e.commit)("pollWeb3Instance",a)},getContractInstance:function(e){var a=e.commit;v.then(function(e){a("registerContractInstance",e)}).catch(function(e){return console.log(e)})}}});d.default.use(i.a);var C=new i.a({scrollBehavior:function(e,a,c){return c||{x:0,y:0}},routes:[{path:"/",redirect:"/index"},{path:"/home",name:"Home",redirect:"/home/overview",component:function(){return Promise.all([c.e(0),c.e(2)]).then(c.bind(null,"0PpB"))},children:[{path:"overview",component:function(){return Promise.all([c.e(0),c.e(1)]).then(c.bind(null,"sC7C"))}},{path:"capTable",component:function(){return c.e(7).then(c.bind(null,"fM9J"))}},{path:"mintTransfer",component:function(){return c.e(8).then(c.bind(null,"Vjjf"))}},{path:"virtualBoardroom",component:function(){return c.e(4).then(c.bind(null,"yK50"))}},{path:"esop",component:function(){return c.e(13).then(c.bind(null,"WWKE"))}},{path:"sto",component:function(){return c.e(12).then(c.bind(null,"c1Qa"))}}]},{path:"/index",redirect:"/index/config",name:"Index",component:function(){return c.e(5).then(c.bind(null,"gwi3"))},children:[{path:"config",component:function(){return Promise.all([c.e(0),c.e(6)]).then(c.bind(null,"WBkb"))}},{path:"userIdent",component:function(){return Promise.all([c.e(0),c.e(3)]).then(c.bind(null,"GPdl"))}},{path:"companyIdent",component:function(){return Promise.all([c.e(0),c.e(10)]).then(c.bind(null,"BUFa"))}},{path:"tokenSet",component:function(){return Promise.all([c.e(0),c.e(11)]).then(c.bind(null,"Z9Fv"))}},{path:"tokenPayment",component:function(){return c.e(9).then(c.bind(null,"FoKo"))}}]}]});C.beforeEach(function(e,a,c){null==k.state.web3.coinbase&&k.commit("refreshCoinbase",S("myAddress")),c()});var I=C,E=c("wmI7"),M=c("waDh"),j=c.n(M),B=(c("rnh/"),c("aozt")),W=c.n(B);d.default.use(E.a);var D=new E.a({locale:"zh-CN",messages:{"zh-CN":c("iqfK"),"en-US":c("BFZn"),"ko-KR":c("lqUD"),"it-JP":c("ZjNv")}});d.default.use(j.a),d.default.prototype.$axios=W.a,W.a.defaults.timeout=5e3,W.a.interceptors.request.use(function(e){return j.a.LoadingBar.start(),null!=k.state.web3.coinbase&&""!=k.state.web3.coinbase||(k.dispatch("getContractInstance"),d.default.nextTick(function(){null!=k.state.web3.coinbase&&""!=k.state.web3.coinbase||j.a.Notice.warning({title:"请先登录metamask钱包，刷新后进行操作！"})})),e},function(e){return j.a.LoadingBar.error(),j.a.Notice.warning({title:"加载超时！"}),t.a.reject(e)}),W.a.interceptors.response.use(function(e){return j.a.LoadingBar.finish(),101!=e.data.state&&102!=e.data.state||(j.a.Notice.warning({title:"请先登录！"}),I.push({path:"/"})),e},function(e){return j.a.LoadingBar.error(),j.a.Notice.warning({title:"加载失败！"}),t.a.reject(e)}),d.default.config.productionTip=!1;var F=new d.default;new d.default({el:"#app",data:{Bus:F},router:I,i18n:D,store:k,components:{App:b},template:"<App/>"})},UgYt:function(e,a){e.exports={modp1:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},modp2:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},modp5:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},modp14:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},modp15:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},modp16:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},modp17:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},modp18:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}},WOOH:function(e,a){e.exports={name:"websocket",description:"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",keywords:["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],author:"Brian McKelvey <brian@worlize.com> (https://www.worlize.com/)",contributors:["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],version:"1.0.26",repository:{type:"git",url:"https://github.com/theturtle32/WebSocket-Node.git"},homepage:"https://github.com/theturtle32/WebSocket-Node",engines:{node:">=0.10.0"},dependencies:{debug:"^2.2.0",nan:"^2.3.3","typedarray-to-buffer":"^3.1.2",yaeti:"^0.0.6"},devDependencies:{"buffer-equal":"^1.0.0",faucet:"^0.0.1",gulp:"git+https://github.com/gulpjs/gulp.git#4.0","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1",jshint:"^2.0.0",tape:"^4.0.1"},config:{verbose:!1},scripts:{install:"(node-gyp rebuild 2> builderror.log) || (exit 0)",test:"faucet test/unit",gulp:"gulp"},main:"index",directories:{lib:"./lib"},browser:"lib/browser.js",license:"Apache-2.0",_from:"websocket@git://github.com/frozeman/WebSocket-Node.git#browserifyCompatible",_resolved:"https://github.com/frozeman/WebSocket-Node.git#browserifyCompatible"}},ZjNv:function(e,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),c.d(a,"m",function(){return f});var f={music:"Music八嘎雅鹿",findMusic:"FIND MUSIC八嘎雅鹿",myMusic:"MY MUSIC八嘎雅鹿",friend:"FRIEND八嘎雅鹿",musician:"MUSICIAN八嘎雅鹿",download:"DOWNLOAD八嘎雅鹿"}},Zmyt:function(e,a){e.exports={name:"elliptic",version:"6.4.1",description:"EC cryptography",main:"lib/elliptic.js",files:["lib"],scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",unit:"istanbul test _mocha --reporter=spec test/index.js",test:"npm run lint && npm run unit",version:"grunt dist && git add dist/"},repository:{type:"git",url:"git@github.com:indutny/elliptic"},keywords:["EC","Elliptic","curve","Cryptography"],author:"Fedor Indutny <fedor@indutny.com>",license:"MIT",bugs:{url:"https://github.com/indutny/elliptic/issues"},homepage:"https://github.com/indutny/elliptic",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},_from:"elliptic@6.4.1",_resolved:"http://registry.npm.taobao.org/elliptic/download/elliptic-6.4.1.tgz"}},gCvn:function(e,a){e.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}},iqfK:function(e,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),c.d(a,"m",function(){return f});var f={music:"网易云音乐",findMusic:"发现音乐",myMusic:"我的音乐",friend:"朋友",musician:"音乐人",download:"下载客户端"}},lqUD:function(e,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),c.d(a,"m",function(){return f});var f={music:"Music思密达",findMusic:"FIND MUSIC思密达",myMusic:"MY MUSIC思密达",friend:"FRIEND思密达",musician:"MUSICIAN思密达",download:"DOWNLOAD思密达"}},"rnh/":function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.40db5a2a8b639ca34316.js.map