document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['cat']
  let proj = params['pro']
  let db = coDesConnect('https://codes-luiz.firebaseio.com/')

  //let imag = document.querySelector('.batato')
  //imag.src = "assets/img/"+proj+".jpg"
  
  db.download('/', function(data) {
    context = data
    //coDesReplace('.nav-cat-sup', context)

    context = data['portfolio']['portfolio'][value]['projetos'][proj]
    console.log(context)
    /*coDesReplace('.k1', context)
    coDesReplace('.k2', context)
    coDesReplace('.k3', context)
    coDesReplace('.k4', context)
    context = data['portfolio']['portfolio'][value]['projetos'][proj]
    console.log(context)
    coDesReplace('.k5',context)
    coDesReplace('.k6', context)*/
  })
})
