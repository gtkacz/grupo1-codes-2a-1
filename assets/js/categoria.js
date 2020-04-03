document.addEventListener('DOMContentLoaded'  
	, function(){
		let	params = coDesExtract()
		let value = param['key']
		console.log(value)
		let value2 = document.querySelector(".categoria-link")
		value2.href = 'projeto.html?pi=' + value + 'key={{@key}}'

		let db = coDesConnect('https://codes-luiz.firebaseio.com/')

		db.download('/', function(data) {
			context=data
			coDesReplace('.call-tittle', context)
			context=data['portfolio.portfolio'][value]
			console.log(context)
		})
	})