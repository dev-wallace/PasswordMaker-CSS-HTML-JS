// Função para obter os tipos de caracteres selecionados pelo usuário
function getCharTypes() {
    const uppercase = document.querySelector('#include_uppercase').checked;
    const lowercase = document.querySelector('#include_lowercase').checked;
    const number = document.querySelector('#include_number').checked;
    const specialCharacter = document.querySelector('#include_special_character').checked;

    // Inicializa um array vazio e adiciona os tipos de caracteres selecionados pelo usuário
    const charTypes = [];

    if (uppercase) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // 'A' a 'Z'
    }

    if (lowercase) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz'); // 'a' a 'z'
    }

    if (number) {
        charTypes.push('0123456789'); // '0' a '9'
    }

    if (specialCharacter) {
        charTypes.push('!@#$%^&*()_-+={}[]|\\/?><:;"\'.,~`');
    }

    return charTypes;
}
function randomCharType(charTypes){
    const randomIndex = Math.floor(Math.random()*charTypes.length);
    
    return randomIndex


}


document.querySelector('#generate').addEventListener('click',function(){
    console.log(randomCharType(getCharTypes()));
});


