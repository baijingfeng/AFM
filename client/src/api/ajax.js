/** 功能描述
 * 能发送异步ajax请求的函数模块
 * 封装axios库
 * 函数返回promise对象
 */

import axios from 'axios'

export default function ajax(url, data = {}, method = 'GET') {
	if (type === 'GET') {
		return axios.get(url, {
			params: data
		})
	} else {
		return axios.post(url, data)
	}
}
