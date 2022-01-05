//  MULTIPLE CHOICE QUIZ
// question 1 result
function userAnswer1() {
    if (document.getElementById('option-11').checked) {
        document.getElementById('result-11').style.color = 'green';
        document.getElementById('result-11').innerHTML = 'Correct!';
        // innerHTML allows reading and replacing everything within a given HTML tag (span)
    }
    if (document.getElementById('option-12').checked) {
        document.getElementById('result-12').style.color = 'red';
        document.getElementById('result-12').innerHTML = 'Incorrect!';
    }
    if (document.getElementById('option-13').checked) {
        document.getElementById('result-13').style.color = 'red';
        document.getElementById('result-13').innerHTML = 'Incorrect!';
    }
    if (document.getElementById('option-14').checked) {
        document.getElementById('result-14').style.color = 'red';
        document.getElementById('result-14').innerHTML = 'Incorrect!';
    }
}
// question 1 answer
function showCorrectAnswer1() {
    document.getElementById('result-11').style.color = 'green';
    document.getElementById('result-11').innerHTML = 'Actus reus - yes, he left the store with an unpaid CD; Mens rea - no, there was no intent to steal';
}
// question 2 result
function userAnswer2() {
    if (document.getElementById('option-21').checked) {
        document.getElementById('result-21').style.color = 'red';
        document.getElementById('result-21').innerHTML = 'Incorrect!';
        // innerHTML allows reading and replacing everything within a given HTML tag (span)
    }
    if (document.getElementById('option-22').checked) {
        document.getElementById('result-22').style.color = 'red';
        document.getElementById('result-22').innerHTML = 'Incorrect!';
    }
    if (document.getElementById('option-23').checked) {
        document.getElementById('result-23').style.color = 'red';
        document.getElementById('result-23').innerHTML = 'Incorrect!';
    }
    if (document.getElementById('option-24').checked) {
        document.getElementById('result-24').style.color = 'green';
        document.getElementById('result-24').innerHTML = 'Correct!';
    }
}
// question 2 answer
function showCorrectAnswer2() {
    document.getElementById('result-24').style.color = 'green';
    document.getElementById('result-24').innerHTML = 'Actus reus - no, it was a consensual fight; Mens rea - yes, there was an intent to punch';
}

// SELECT QUIZ
function selectAnswer1() {
    var ans = document.getElementById('ansJudge');
    var selectAns = ans.options[ans.selectedIndex].value;
    if (selectAns == 'judge') {
        document.getElementById('result-1').style.color = 'green';
        document.getElementById('result-1').innerHTML = 'Correct!';
    }
    else if (selectAns == 'blank') {
        document.getElementById('result-1').style.color = 'red';
        document.getElementById('result-1').innerHTML = 'Please select an answer.';
    }
    else {
        document.getElementById('result-1').style.color = 'red';
        document.getElementById('result-1').innerHTML = 'Incorrect!';
    }
}

function selectAnswer2() {
    var ans = document.getElementById('ansJury');
    var selectAns = ans.options[ans.selectedIndex].value;
    if (selectAns == 'jury') {
        document.getElementById('result-2').style.color = 'green';
        document.getElementById('result-2').innerHTML = 'Correct!';
    }
    else if (selectAns == 'blank') {
        document.getElementById('result-2').style.color = 'red';
        document.getElementById('result-2').innerHTML = 'Please select an answer.';
    }
    else {
        document.getElementById('result-2').style.color = 'red';
        document.getElementById('result-2').innerHTML = 'Incorrect!';
    }
}

function selectAnswer3() {
    var ans = document.getElementById('ansProsecution');
    var selectAns = ans.options[ans.selectedIndex].value;
    if (selectAns == 'prosecution') {
        document.getElementById('result-3').style.color = 'green';
        document.getElementById('result-3').innerHTML = 'Correct!';
    }
    else if (selectAns == 'blank') {
        document.getElementById('result-3').style.color = 'red';
        document.getElementById('result-3').innerHTML = 'Please select an answer.';
    }
    else {
        document.getElementById('result-3').style.color = 'red';
        document.getElementById('result-3').innerHTML = 'Incorrect!';
    }
}

function selectAnswer4() {
    var ans = document.getElementById('ansDefence');
    var selectAns = ans.options[ans.selectedIndex].value;
    if (selectAns == 'defence') {
        document.getElementById('result-4').style.color = 'green';
        document.getElementById('result-4').innerHTML = 'Correct!';
    }
    else if (selectAns == 'blank') {
        document.getElementById('result-4').style.color = 'red';
        document.getElementById('result-4').innerHTML = 'Please select an answer.';
    }
    else {
        document.getElementById('result-4').style.color = 'red';
        document.getElementById('result-4').innerHTML = 'Incorrect!';
    }
}

function selectAnswer5() {
    var ans = document.getElementById('ansWitness');
    var selectAns = ans.options[ans.selectedIndex].value;
    if (selectAns == 'witness') {
        document.getElementById('result-5').style.color = 'green';
        document.getElementById('result-5').innerHTML = 'Correct!';
    }
    else if (selectAns == 'blank') {
        document.getElementById('result-5').style.color = 'red';
        document.getElementById('result-5').innerHTML = 'Please select an answer.';
    }
    else {
        document.getElementById('result-5').style.color = 'red';
        document.getElementById('result-5').innerHTML = 'Incorrect!';
    }
}

function selectAnswer6() {
    var ans = document.getElementById('ansPublic');
    var selectAns = ans.options[ans.selectedIndex].value;
    if (selectAns == 'public') {
        document.getElementById('result-6').style.color = 'green';
        document.getElementById('result-6').innerHTML = 'Correct!';
    }
    else if (selectAns == 'blank') {
        document.getElementById('result-6').style.color = 'red';
        document.getElementById('result-6').innerHTML = 'Please select an answer.';
    }
    else {
        document.getElementById('result-6').style.color = 'red';
        document.getElementById('result-6').innerHTML = 'Incorrect!';
    }
}