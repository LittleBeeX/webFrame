import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import state from './state'
import getWeb3 from '@/util/getWeb'
import pollWeb3 from '@/util/pollWeb3'
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
		pollWeb3Instance(state, payload) {
			state.web3.coinbase = payload.coinbase
			state.web3.balance = parseInt(payload.balance, 10) 
		},
		registerContractInstance(state, payload) {
			state.contractInstance = () => payload
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
		pollWeb3({
			commit
		}, payload) {
			commit('pollWeb3Instance', payload);
		},
		getContractInstance({
			commit
		}) {
			getContract.then(result => {
				commit('registerContractInstance', result)
			}).catch(e => console.log(e))
		}
	}
})
