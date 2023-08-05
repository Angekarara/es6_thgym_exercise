function highlight(strings, ...values) {
    let str = ''
    strings.forEach((string,i) => {
        str += string+values[i]
        
    });
    return str;
    
}
const name =  'snickers';
const age = '100'
const sentence = highlight`my name is ${name} and my age is ${age} years old`;
console.log(sentence)