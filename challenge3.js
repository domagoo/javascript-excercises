const poll = { 
    question: 'What is your favorite programming language?',
    options: ['0: Javascript', '1: Phyton', '2: Request', '3: C++'],
    // Generates [0, 0, 0, 0].
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        //Get Answer
        const answer = Number( prompt(`${this.question}\n${this.options.join('\n')} \n(Write option number)`
        )
        );
    console.log(answer);

       //Register Answer
       typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

       this.displayResults();
       this.displayResults('string');


    }, 
    displayResults( type = 'array'){
        if(type === 'array'){
            console.log(this.answers);
        }else if (type === 'string'){
            console.log(`Poll results are ${this.answers.join(',')}`);
        }
        },
    };

// poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers:[5,2,3] }, 'string');
//[5,2,3]
//[1,5,3,9,6,1]