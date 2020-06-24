document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
    let value2 = document.querySelector('.carlinhos')
    value2.href = "projeto.html?cat="+value+"&pro={{@key}}"
    //value2.src  = "assets/img/"+value+".jpg"
    //console.log(value)
  let db = coDesConnect('https://codes-luiz.firebaseio.com')

db.download('/', function(data) {
    context = data.portfolio
    //console.log(context)
    // menuzinho show
    coDesReplace('.ul-categoria', context)
  })
db.download('/', function(data){
context = data
    // console.log(value)

    context = data['portfolio']['portfolio'][value]
    console.log(context)
    //substitui o título
    coDesReplace('title', context)
    coDesReplace('.categoria', context)
    context = data['portfolio']['portfolio'][value]
    console.log(context)
    coDesReplace('.abacate', context)
  })
})