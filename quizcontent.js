(function() {
    function buildQuiz() {
 
      const output = [];
  
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
      
        const answers = [];
  
     
        for (letter in currentQuestion.answers) {
        
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
    
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
   
      let numCorrect = 0;
  
      
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
     
        if (userAnswer == currentQuestion.correctAnswer) {
      
          numCorrect++;
  
         
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
         
          answerContainers[questionNumber].style.color = "red";
        }
      });
  

      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
          question: "Do you give your cat some milk?",
          answers: {
            a: "Yep, sometimes",
            b: "Never",
            c: "Everyday",
          },
          correctAnswer: "b",
        },
        {
          question: "How often do you play with your cat?",
          answers: {
            a: "Twice a week",
            b: "On the weekends",
            c: "Everyday",
          },
          correctAnswer: "c",
        },
        {
          question: "Do you talk to your cat?",
          answers: {
            a: "Yes",
            b: "Not really",
            c: "I'm not crazy, so no"
          },
          correctAnswer: "a",
        }
      ];
  
    
    buildQuiz();
  
 
    submitButton.addEventListener("click", showResults);
  })()