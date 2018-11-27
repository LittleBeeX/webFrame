import Web3 from 'web3'
import Vue from 'vue'
import vueWeb3 from 'vue-web3'
Vue.use(vueWeb3, { web3: new Web3(web3.currentProvider) })

import { address, ABI } from './constants/casinoContract'
let getContract = new Promise(function(resolve, reject) {
	let casinoContractInstance = new web3.eth.contract(ABI,address)
	
	resolve(casinoContractInstance)
})

export default getContract