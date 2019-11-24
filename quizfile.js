const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function getFormData(){ 
    var name=document.getElementById('name').value;
    return name
    }

    
function catQuiz(){
  var result = []
  var userInput = []
  var question1s = document.getElementsByName("question1");
  for (var i = 0; i < question1s.length; i++) {
    if (question1s[i].checked) {
        result.push(question1s[i].value)
    }
}
var question2s = document.getElementsByName("question2");

  for (var j = 0; j < question2s.length; j++) {
    if (question2s[j].checked) {
        result.push(question2s[j].value)
    }
}
if (result[0] === 'Orange' && result[1] === 'Chonky') {
  var image = document.createElement('img');
  image.setAttribute('src','chonkorange.jpg');
  document.body.appendChild(image);
  alert(`Hi, ${getFormData()} Your cat is ready. Scroll down & pick it up below, meow!`)
  resultsContainer.innerHTML = ''
  result.Container.appendChild(image)
} else if (result[0] === 'Orange' && result[1] === 'Smol') {
  var image = document.createElement('img');
  image.setAttribute('src','Munchkin-Cat.jpg');
  document.body.appendChild(image);
  alert(`Hi, ${getFormData()} Your cat is ready. Scroll down & pick it up below, meow!`)
  resultsContainer.innerHTML = ''
  result.Container.appendChild(image)
} else if (result[0] === 'Grey' && result[1] === 'Chonky') {
  var image = document.createElement('img');
  image.setAttribute('src','chonkygrey.jpeg');
  document.body.appendChild(image);
  alert(`Hi, ${getFormData()} Your cat is ready. Scroll down & pick it up below, meow!`)
  resultsContainer.innerHTML = ''
  result.Container.appendChild(image)
} else if (result[0] === 'Grey' && result[1] === 'Smol') {
  var image = document.createElement('img');
  image.setAttribute('src','smolgrey.jpg');
  document.body.appendChild(image);
  alert(`Hi, ${getFormData()} Your cat is ready. Scroll down & pick it up below, meow!`)
  resultsContainer.innerHTML = ''
  result.Container.appendChild(image)
} else if (result[0] === 'White' && result[1] === 'Smol') {
  var image = document.createElement('img');
  image.setAttribute('src','smolwhite.jpg');
  document.body.appendChild(image);
  alert(`Hi, ${getFormData()} Your cat is ready. Scroll down & pick it up below, meow!`)
  resultsContainer.innerHTML = ''
  result.Container.appendChild(image)
}  else if (result[0] === 'White' && result[1] === 'Chonky') {
  var image = document.createElement('img');
  image.setAttribute('src','chonkywhite.jpg');
  document.body.appendChild(image);
  alert(`Hi, ${getFormData()} Your cat is ready. Scroll down & pick it up below, meow!`)
  resultsContainer.innerHTML = ''
  result.Container.appendChild(image)
}
}

catQuiz()
submitButton.addEventListener('click', catQuiz, getFormData);