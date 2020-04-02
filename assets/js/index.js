  
document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://codes-luiz.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    console.log(data)
    coDesReplace('.meio', context)
  })
})