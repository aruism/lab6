function greetings(n) {
    console.log('Nice to meet you, ' + in_name +'!');
}

function check01(x) {
    if(x >= 0 && x <= 1) {
        console.log('You gave number ' + x + '. Given number IS between 0 and 1.');
    }
    else {
        console.log('You gave number ' + x + '. Given number IS NOT between 0 and 1.');
    }
}

function week(w) {
    if(w == 1) { console.log('Number ' + w + ' corresponds to Monday!'); }
    else if(w == 2) { console.log('Number ' + w + ' corresponds to Tuesday!'); }
    else if(w == 3) { console.log('Number ' + w + ' corresponds to Wednesday!'); }
    else if(w == 4) { console.log('Number ' + w + ' corresponds to Thusrday!'); }
    else if(w == 5) { console.log('Number ' + w + ' corresponds to Friday!'); }
    else if(w == 6) { console.log('Number ' + w + ' corresponds to Saturday!'); }
    else if(w == 7) { console.log('Number ' + w + ' corresponds to Sunday!'); }
    else { console.log('Your input is not between 1 and 7'); }

}

var in_name = prompt("I am performing task 4. What is your name?");
greetings(in_name);


var in_number = prompt("Now, I will check whether a number is between 0 and 1, which is task 12. Give me a number:");
check01(in_number);

var in_week = prompt('I will now do task 15. Give me a number between 1 and 7, and I will tell you the corresponding day of the week:');
week(in_week);