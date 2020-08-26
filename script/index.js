const convert = document.querySelector('.convert');
const decodificar = document.querySelector('.decodificar');
const msg = document.querySelector('.msg').valueOf();
const codificado = document.querySelector('.codificado');
const reload = document.querySelector('.reload');
const block = document.querySelector('.block');
const password = document.querySelector('.password');
const enter= document.querySelector('.enter');

let date = new Date();
let hour = date.getHours();

function blockLayer() {
    block.classList = 'layer';
} 

enter.addEventListener('click', () => {
    if (password.value == 'holaAle') {
        block.classList.remove('layer');
    } else {
        password.value = '';
    }
})

convert.addEventListener('click', () => {
    if (hour > 8 && hour < 14) {
        block.classList.add('layer');
    }
    let message = msg.value.toLowerCase();
    let msgArr = Array.from(message)
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
                convertedArr.push('!');
            break
            case 'c': 
                convertedArr.push('2');
            break
            case 'd':
                convertedArr.push('"');
            break
            case 'e': 
                convertedArr.push('3');
            break
            case 'f':
                convertedArr.push('·');
            break
            case 'g': 
                convertedArr.push('4');
            break
            case 'h':
                convertedArr.push('$');
            break
            case 'i':
                convertedArr.push('5')
            break
            case 'j': 
                convertedArr.push('%');
            break
            case 'k':
                convertedArr.push('6');
            break
            case 'l': 
                convertedArr.push('&');
            break
            case 'm':
                convertedArr.push('7');
            break
            case 'n': 
                convertedArr.push('/');
            break
            case 'ñ':
                convertedArr.push('8');
            break
            case 'o': 
                convertedArr.push('(');
            break
            case 'p':
                convertedArr.push('9');
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
            case '0':
                convertedArr.push('q');
            break
            case '1':
                convertedArr.push('w');
            break
            case '2':
                convertedArr.push('e');
            break
            case '3':
                convertedArr.push('r');
            break
            case '4':
                convertedArr.push('t');
            break
            case '5':
                convertedArr.push('y');
            break
            case '6':
                convertedArr.push('u');
            break
            case '7':
                convertedArr.push('i');
            break
            case '8':
                convertedArr.push('o');
            break
            case '9':
                convertedArr.push('p');
            break
            case 'á':
                convertedArr.push('[');
            break
            case 'é':
                convertedArr.push(']');
            break
            case 'í':
                convertedArr.push('|');
            break
            case 'ó':
                convertedArr.push('@');
            break
            case 'ú':
                convertedArr.push('#');
            break
        }
        
    }
    let coded = convertedArr.join('');
    codificado.innerHTML = coded;
    msg.value = '';
})

decodificar.addEventListener('click', () => {
    if (hour > 8 && hour < 14) {
        block.classList.add('layer');
    }
    let message = msg.value;
    let msgArr = Array.from(message)
    let convertedArr = []
    for (i = 0; i < msgArr.length; i++) {
        switch (msgArr[i]) {
            case ' ':
                convertedArr.push(' ')
            break
            case '1': 
                convertedArr.push('a');
            break
            case '!':
                convertedArr.push('b');
            break
            case '2': 
                convertedArr.push('c');
            break
            case '"':
                convertedArr.push('d');
            break
            case '3': 
                convertedArr.push('e');
            break
            case '·':
                convertedArr.push('f');
            break
            case '4': 
                convertedArr.push('g');
            break
            case '$':
                convertedArr.push('h');
            break
            case '5':
                convertedArr.push('i')
            break
            case '%': 
                convertedArr.push('j');
            break
            case '6':
                convertedArr.push('k');
            break
            case '&': 
                convertedArr.push('l');
            break
            case '7':
                convertedArr.push('m');
            break
            case '/': 
                convertedArr.push('n');
            break
            case '8':
                convertedArr.push('ñ');
            break
            case '(': 
                convertedArr.push('o');
            break
            case '9':
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
            case 'q':
                convertedArr.push('0');
            break
            case 'w':
                convertedArr.push('1');
            break
            case 'e':
                convertedArr.push('2');
            break
            case 'r':
                convertedArr.push('3');
            break
            case 't':
                convertedArr.push('4');
            break
            case 'y':
                convertedArr.push('5');
            break
            case 'u':
                convertedArr.push('6');
            break
            case 'i':
                convertedArr.push('7');
            break
            case 'o':
                convertedArr.push('8');
            break
            case 'p':
                convertedArr.push('9');
            break
            case '[':
                convertedArr.push('á');
            break
            case ']':
                convertedArr.push('é');
            break
            case '|':
                convertedArr.push('í');
            break
            case '@':
                convertedArr.push('ó');
            break
            case '#':
                convertedArr.push('ú');
            break
        }
    }
    let stringCode = convertedArr.join('');
    codificado.innerHTML = stringCode;
    msg.value = '';
})

reload.addEventListener('click', () => {
    location.reload();
})