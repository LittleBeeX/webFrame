import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import Web3 from 'web3'
import { userABI } from '@/util/constants/contract'

import state from './state'
import getWeb3 from '@/util/getWeb'
import getContract from '@/util/getContract'


export const store = new Vuex.Store({
	strict: true,
	state,
	mutations: {
		registerWeb3Instance(state, payload) {
		    let result = payload
			let web3Copy = state.web3
			web3Copy.coinbase = result.coinbase
			web3Copy.networkId = result.networkId
			web3Copy.balance = parseInt(result.balance, 10)
			web3Copy.web3Instance = result.web3
			state.web3 = web3Copy
		},
		registerAdminContractInstance(state, payload) {
			state.tokenInstance = () => payload.tokenContractInstance
		},
		registerUserContractInstance(state, payload) {
			state.userInstance = () => payload.userContractInstance
		},
		refreshCoinbase(state,payload){
			state.web3.coinbase = payload
		}
	},
	actions: {
	    registerWeb3({
			commit
		}) {
			getWeb3.then(result => {
				commit('registerWeb3Instance', result)
			}).catch(e => {
				console.log('error in action registerWeb3', e)
			})
		},
		getContractInstance({
			commit
		}) {
			getContract.then(result => {
				commit('registerAdminContractInstance', result)
			}).catch(e => console.log(e))
		},
		getUserContract({
			commit
		},payload){
			let getContract = new Promise(function(resolve, reject) {
				let web3 = new Web3(window.web3.currentProvider)
				let userContractInstance = new web3.eth.Contract(userABI,payload.contract)
				resolve({userContractInstance})
			}).then(result => {
				commit('registerUserContractInstance',result)
			}).catch(console.log)
		}
	}
})
