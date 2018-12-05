export default {
  getCookie(name) {
    let v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    return v ? v[2] : null
  },

  setCookie(name, value, days) {
    let d = new Date
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString()
  },

  delCookie(name = 'user') {
    this.setCookie(name, '', -1)
  },

	getSection(name){
		return sessionStorage.getItem(name)
	},
	setSection(name,val){
		sessionStorage.setItem(name,val)
	},
	timestampToTime(timestamp){
			let date = new Date(timestamp * 1000);//参数单位是s，如果是ms则不需要乘1000
			let Y = date.getFullYear() + '-';
			let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			let D = date.getDate() + ' ';
		/* 	let h = date.getHours() + ':';
			let m = date.getMinutes() + ':';
			let s = date.getSeconds(); */
		//	return Y+M+D+h+m+s;
			return Y+M+D;
	}
}

