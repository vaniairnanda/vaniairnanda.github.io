var body = document.body;
var mainDiv = document.createElement('div');
var mainDivAttrId = document.createAttribute('id');
mainDivAttrId.value = "main";
mainDiv.setAttributeNode(mainDivAttrId);
body.appendChild(mainDiv);
var insideMainDiv = document.createElement('div');
insideMainDiv.setAttribute('id', 'inside-main');
mainDiv.appendChild(insideMainDiv);
var h1 = document.createElement('h1');

var h1Text = document.createTextNode('Ever wonder how much your cat loves you?');
h1.appendChild(h1Text);
insideMainDiv.appendChild(h1);
var h2 = document.createElement('h2');

var h2Text = document.createTextNode('Find out how your cat feels!');
h2.appendChild(h2Text);
insideMainDiv.appendChild(h2);
var button = document.createElement('button');

var buttonText = document.createTextNode('Start quiz!');

button.appendChild(buttonText);
insideMainDiv.appendChild(button);
button.addEventListener("click", function(){
    location = "quizpage.html"; // Navigate to new page
  });
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
