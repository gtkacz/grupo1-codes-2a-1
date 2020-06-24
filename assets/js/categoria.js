document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let value2 = document.querySelector('.batatinha')
  console.log(value2)
  let db = coDesConnect('https://codes-luiz.firebaseio.com/')

db.download('/', function(data) {
    context = data.portfolio
    console.log(data.portfolio.hardware)
    coDesReplace('.ul-categoria', context) 
  })
db.download('/', function(data){
context = data
    console.log(value)

    context = data['portfolio'][value]
    console.log(context)
    coDesReplace('.title-list', context)

  })
})

