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
		if (newCoinbase !== undefined && newCoinbase !== mutil.getSection('myAddress')) {
			mutil.setSection('myAddress', newCoinbase)
			location.reload()
		}
  }, 500)
}

export default pollWeb3
