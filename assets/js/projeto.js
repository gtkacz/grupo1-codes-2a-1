document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['cat']
  let proj = params['pro']
  let db = coDesConnect('https://codes-luiz.firebaseio.com/')

  
  db.download('/', function(data) {
    context = data.portfolio
    coDesReplace('.ul-categoria', context)
    context = data['portfolio']['portfolio'][value]['projetos'][proj]
    console.log(context)
    coDesReplace('.maca', context)
    coDesReplace('.uva', context)
    coDesReplace('.poloni', context)
  })
})