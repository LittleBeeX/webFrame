import Web3 from 'web3'
import { store } from '../store/'
import mutil from '@/util/mutil'

let pollWeb3 = function (state) {
  let web3js = window.web3
	let newCoinbase
  let web3 = new Web3(web3js.currentProvider)
  setInterval(() => {
		web3.eth.getCoinbase().then(result => {
				newCoinbase = result
		})
		if (newCoinbase !== undefined && newCoinbase !== store.state.web3.coinbase) {
			mutil.setSection('myAddress', newCoinbase)
			location.reload()
		}
   if (web3 && store.state.web3.web3Instance) {
      if (newCoinbase !== store.state.web3.coinbase) {
        web3.eth.getBalance(newCoinbase, function (err, newBalance) {
          if (err) {
            console.log(err)
          } else {
            store.dispatch('pollWeb3', {
              coinbase: newCoinbase,
              balance: parseInt(newBalance, 10)
            })
          }
        })
      } else {
        web3.eth.getBalance(store.state.web3.coinbase, (err, polledBalance) => {
          if (err) {
            console.log(err)
          } else if (parseInt(polledBalance, 10) !== store.state.web3.balance) {
            store.dispatch('pollWeb3', {
              coinbase: store.state.web3.coinbase,
              balance: polledBalance
            })
          }
        })
      }
    }
  }, 500)
}

export default pollWeb3
