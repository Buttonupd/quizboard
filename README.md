# Quiz

This website using html forms and javascript allows users to test their knowledge on html and javascript, giving
them the results as a percentage

Version 1.0.0

# Contributors
Raymond Gitonga

## Description
This website provides a set of multiple choice questions to the users, the multiple choices are provided using
radio buttons with the right choice having an attached value of 12.5 with the wrong ones having an attached value of 0
. The marks are then tallied up then the resulted are outputted as a percentage. Using an if statement when the user scores
more than 80% "EXCELLENT" is given as an output, when the user gets between 50% and 80% "Good Trial" is given as an
output, anything below 50% the user gets  a "Poor Trial as the output". This website also makes use of css and jquery animations
with the animate.css animations being used when the gets above 50%, and the jquery fireworks animation being used when the user gets above 80%

## BDD
|Behaviour   	|  Score Input  	|   Output	|   	
|---	|---	|---	|
|User gets 0 questions correct   	|0%|"Poor trial, try again"|   	
|User gets 1 question correct 	|12%|"Poor trial, try again"	|   
|User gets 2 questions correct 	|25%| "Poor trial, try again"	|   	
|User gets 3 questions correct 	|37%| "Poor trial, try again"	|
|User gets 4 questions correct 	|50%| "Good work"	+ bounce animation|
|User gets 5 questions correct 	|62%| "Good work"	+ bounce animation|
|User gets 6 questions correct 	|75%| "Good work"	+ bounce animation|
|User gets 7 questions correct 	|87%| "EXCELLENT PERFOMANCE!!!"	+ bounce animation + fireworks animation|
|User gets 8 questions correct 	|100%| "EXCELLENT PERFOMANCE!!!"	+ bounce animation + fireworks animation|

## Setup Installation Requirement
To access this project, you will need to access it from github then clone it.
Then run 'git clone https://github.com/raymondleta/quizboard' on your terminal

## Demo website

To test this website here is a live demo of the site https://raymondleta.github.io/quizboard/


## Technologies Used
This website has been created using HTML, styled using css and bootstrap and the functionality has been created using javascript and the jquery library

### Support or questions
For any questions feel free to contact me through gitongaraymondd@gmail.com
