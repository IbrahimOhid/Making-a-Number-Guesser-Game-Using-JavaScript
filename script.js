for (i = 1; i <= 3; i++) {
    var guessNumber = prompt("Enter a number 1 to 10");
    var correct_ans = Math.floor(Math.random() * 9) + 1;

    if (guessNumber < correct_ans) {
        alert('Correct answer is greater!');
    } else if(guessNumber > correct_ans){
        alert('Correct answer is smaller!');
    }else{
        alert('You Win');
    }
}