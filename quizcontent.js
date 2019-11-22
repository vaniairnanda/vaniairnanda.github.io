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
  
        // if answer is correct
        if (userAnswer == currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
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
          correctAnswer: "a",
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
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();