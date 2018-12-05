
import Web3 from 'web3'
import { address, ABI, tokenABI, tokenAddress } from './constants/casinoContract'
let getContract = new Promise(function(resolve, reject) {
	let web3 = new Web3(window.web3.currentProvider)
	let adminContractInstance = new web3.eth.Contract(ABI,address)
	let tokenContractInstance = new web3.eth.Contract(tokenABI,tokenAddress)
	resolve({adminContractInstance,tokenContractInstance})
})
export default getContract