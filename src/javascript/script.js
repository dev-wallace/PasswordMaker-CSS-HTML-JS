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

function getPasswordSize(){
    const size = document.querySelector('#size').value;

    if (size < 4 || size >128 || isNaN(size)) {

        Toastify({
            text: 'Tamanho inválido, digite um número entre 4 e 128!', 
            duration: 3000,
            style:{
                background: '#dc2626',
                boxShadow: 'none'
            }
        }).showToast();
        return null;
    }
    
    return size;

}

// Função para obter um caractere aleatório de um dos tipos de caracteres
function randomCharType(charTypes) {
    // Gera um índice aleatório para selecionar um dos tipos de caracteres disponíveis.
    const randomIndex = Math.floor(Math.random() * charTypes.length);
    
    // Seleciona um tipo de caractere da lista charTypes usando o índice aleatório gerado na linha anterior.
    const selectedType = charTypes[randomIndex];
    
    // Gera um índice aleatório para selecionar um caractere específico dentro do tipo de caractere selecionado
    const randomCharIndex = Math.floor(Math.random() * selectedType.length);
    
    // Retorna o caractere específico selecionado
    return selectedType[randomCharIndex];
}


 
function generatePassword(size, charTypes){

    let passwordGenerated = "";


   for(var i = 0; i< size; i++){
    passwordGenerated+=randomCharType(charTypes)

   }
    return passwordGenerated;
}

 document.querySelector('#generate').addEventListener('click', function() {
  const size = getPasswordSize();
  const charTypes = getCharTypes();
  const passwordGenerated = generatePassword(size,charTypes);

 



//usando o .textContent para passar para definir o conteúdo da div com id 'password',
// exibindo a senha gerada (passwordGenerated) dentro do campo apropriado.
document.querySelector('#password').textContent = passwordGenerated; 

});