const convert = document.querySelector('.convert');
const decodificar = document.querySelector('.decodificar');
const msg = document.querySelector('.msg').valueOf();
const codificado = document.querySelector('.codificado');

convert.addEventListener('click', () => {
    let message = msg.value.toLowerCase();
    console.log(message);
    let msgArr = Array.from(message)
    console.log(msgArr);
    let convertedArr = []
    for (i = 0; i < msgArr.length; i++) {
        switch (msgArr[i]) {
            case ' ':
                convertedArr.push(' ');
            break
            case 'a': 
                convertedArr.push('1');
            break
            case 'b':
                convertedArr.push('2');
            break
            case 'c': 
                convertedArr.push('3');
            break
            case 'd':
                convertedArr.push('4');
            break
            case 'e': 
                convertedArr.push('5');
            break
            case 'f':
                convertedArr.push('6');
            break
            case 'g': 
                convertedArr.push('7');
            break
            case 'h':
                convertedArr.push('8');
            break
            case 'i':
                convertedArr.push('9')
            break
            case 'j': 
                convertedArr.push('!');
            break
            case 'k':
                convertedArr.push('"');
            break
            case 'l': 
                convertedArr.push('·');
            break
            case 'm':
                convertedArr.push('$');
            break
            case 'n': 
                convertedArr.push('%');
            break
            case 'ñ':
                convertedArr.push('&');
            break
            case 'o': 
                convertedArr.push('/');
            break
            case 'p':
                convertedArr.push('(');
            break
            case 'q':
                convertedArr.push(')');
            break
            case 'r':
                convertedArr.push('=')
            break
            case 's': 
                convertedArr.push('?');
            break
            case 't':
                convertedArr.push('¿');
            break
            case 'u': 
                convertedArr.push('¡');
            break
            case 'v':
                convertedArr.push('+');
            break
            case 'w': 
                convertedArr.push('*');
            break
            case 'x':
                convertedArr.push(';');
            break
            case 'y': 
                convertedArr.push(':');
            break
            case 'z':
                convertedArr.push('-');
            break
        }
        
    }
    console.log(convertedArr);
    let coded = convertedArr.join('');
    codificado.innerHTML = coded;
})

decodificar.addEventListener('click', () => {
    let message = msg.value;
    console.log(message);
    let msgArr = Array.from(message)
    console.log(msgArr);
    let convertedArr = []
    for (i = 0; i < msgArr.length; i++) {
        switch (msgArr[i]) {
            case ' ':
                convertedArr.push(' ')
            break
            case '1': 
                convertedArr.push('a');
            break
            case '2':
                convertedArr.push('b');
            break
            case '3': 
                convertedArr.push('c');
            break
            case '4':
                convertedArr.push('d');
            break
            case '5': 
                convertedArr.push('e');
            break
            case '6':
                convertedArr.push('f');
            break
            case '7': 
                convertedArr.push('g');
            break
            case '8':
                convertedArr.push('h');
            break
            case '9':
                convertedArr.push('i')
            break
            case '!': 
                convertedArr.push('j');
            break
            case '"':
                convertedArr.push('k');
            break
            case '·': 
                convertedArr.push('l');
            break
            case '$':
                convertedArr.push('m');
            break
            case '%': 
                convertedArr.push('n');
            break
            case '&':
                convertedArr.push('ñ');
            break
            case '/': 
                convertedArr.push('o');
            break
            case '(':
                convertedArr.push('p');
            break
            case ')':
                convertedArr.push('q');
            break
            case '=':
                convertedArr.push('r')
            break
            case '?': 
                convertedArr.push('s');
            break
            case '¿':
                convertedArr.push('t');
            break
            case '¡': 
                convertedArr.push('u');
            break
            case '+':
                convertedArr.push('v');
            break
            case '*': 
                convertedArr.push('w');
            break
            case ';':
                convertedArr.push('x');
            break
            case ':': 
                convertedArr.push('y');
            break
            case '-':
                convertedArr.push('z');
            break
        }
    }
    let stringCode = convertedArr.join('');
    codificado.innerHTML = stringCode;
})

