// Question : Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.


function makeRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// in the below line I use includes() method to check 'word' is available or not in the random set of string and the expected result is False as includes() method returns boolean
console.log(makeRandomString(10).includes('word'));