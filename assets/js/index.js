document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://codes-luiz.firebaseio.com/')

  db.download('/', function(data) {
    context = data.portfolio
    console.log(data.portfolio.hardware)
    coDesReplace('.ul-categoria', context)
  })
})