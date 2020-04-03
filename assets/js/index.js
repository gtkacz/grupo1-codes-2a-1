document.addEventListener('DOMContentLoaded', function() {
	let params = coDesExtract()
	let value = params['key']
    let value2 = document.querySelector('.batatinha')
  	value2.href = "projeto.html?cat="+value+"&pro={{@key}}"
  	value2.src  = "assets/img/{{key}}.jpg"
  	console.log(value2)
  	let db = coDesConnect('https://codes-luiz.firebaseio.com/portfolio/portfolio')

  	db.download('/', function(data)) {
  		context = data
  		console.log(context)
  		coDesReplace('.ul-categoria', context )
  	}
}