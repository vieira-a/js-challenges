/**
 * Split the string into pair os two characters.
 * If the strings contains an odd of characters then 
 * it should replace the missing second character of the final pair with a underscore('_')
 * Eg:
 * 'abc' =>  ['ab', 'c_']
 * 'abcdef' => ['ab', 'cd', 'ef']
 */

/**
 * [x] Take intial position of the string character
 * [x] Split the string into pair of two characters
 * [ ] Aplly regex to validate typeof
 */

const myString = 'anderson';

function validate(str) {

    for(let pos1 = 0, pos2 = 1; pos2 <= str.length; pos1+=2, pos2+=2){

        console.log(
            (str[pos1] === undefined || typeof(pos1) === Number ? '_' : str[pos1]) +
            (str[pos2] === undefined || typeof(pos2) === Number ? '_' : str[pos2]))
        
    }   
}

validate(myString)


/* for(let i = 0; i < str.length; i++){
    console.log(str.split('')).join(str[i+1])
} */

/* 

const strSplited = str.split('');

strSplited.forEach((e, i) => {
    console.log(i[e])
})  */