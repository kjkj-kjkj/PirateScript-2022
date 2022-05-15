function piratize(input_text){
    let pirate_text = [];

    let new_text = input_text.split (/[^A-Za-z0-9]/);
    console.log(new_text);

    no_of_words = new_text.length;
    for (i=0; i<no_of_words; i++){
        eachword = new_text[i];
        let replacement = " ";
        n = eachword.length; 

        if (eachword === 'pounds'){
            replacement = 'doubloons'
        }

        else if (isNaN(eachword) === true){
            replacement = eachword.substr(1,n-1);
            replacement = replacement + eachword[0];
            replacement = replacement + 'arr';
        }

        else {
            replacement = eachword; 
        }

        pirate_text.push (replacement);
    }
    return pirate_text.join(' ');
    // add you code in here
} 

console.log (piratize("hello"));
console.log (piratize("hello world"));
console.log (piratize("pizza costs 20 pounds"));

console.log (piratize("Hello. Pizza is 30 pounds!!"))