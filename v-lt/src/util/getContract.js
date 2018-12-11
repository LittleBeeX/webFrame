
import Web3 from 'web3'
import { address, ABI, tokenABI, tokenAddress, userABI, userAddress } from './constants/contract'
let getContract = new Promise(function(resolve, reject) {
	let web3 = new Web3(window.web3.currentProvider)
	let adminContractInstance = new web3.eth.Contract(ABI,address)
	let tokenContractInstance = new web3.eth.Contract(tokenABI,tokenAddress)
	let userContractInstance = new web3.eth.Contract(userABI,userAddress)
	resolve({adminContractInstance,tokenContractInstance,userContractInstance})
})
export default getContract