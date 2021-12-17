const btn = document.querySelector('.btn');
const hex = document.querySelector('.hex');
const body = document.querySelector('BODY');
const alphabets = 'ABCDEF';
let hexCode = '#';

//console.log(hex.style);

btn.addEventListener('click', () => {
  
  generate();
  hex.textContent = hexCode;
  body.style.backgroundColor = hexCode;
  //console.log(hexCode);
  hexCode = '#';
  
});

function generate(){
  
    
    for(let i = 0; i < 6; i++){
      
      var randomBool = Math.random() < 0.5;
      var randomNum = Math.floor(Math.random() * 9+1);
      var randomAlphabet = Math.floor(Math.random() * alphabets.length);
      
      if(randomBool == true){
        hexCode += alphabets[randomAlphabet];
      }else{
        hexCode += randomNum;
      }
      
    }
    
}

