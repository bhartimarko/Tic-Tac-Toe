const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const msg = document.querySelector(".msg");
const msgContainer = document.querySelector(".msg-container");
const newGame = document.querySelector(".newGame");

let turnO = true;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [1,4,7]
];

boxes.forEach( (box) => {
    box.addEventListener("click" , () => {
        if(turnO == true){
            box.innerText = "O";
            turnO = false;
        }
        else{
             box.innerText = "X";
             turnO = true;
        }
        box.disabled  = true;
        checkWinPattern();
    })
    
})

function checkWinPattern(){
      for (let pattern of winningPattern) {

        const box = document.getElementsByClassName('box');

         let position1Val = boxes[pattern[0]].innerText;
         let position2Val = boxes[pattern[1]].innerText;
         let position3Val = boxes[pattern[2]].innerText;

         if(position1Val != "" && position2Val != "" && position3Val != ""){
              if(position1Val === position2Val && position2Val === position3Val){
                console.log("Hello world!",position1Val);
                disabledBoxes();
                showWinner(position1Val);
              }             
         }
        
        //  console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
     }    
}

//for disable Boxes.
function disabledBoxes() {   
    for (const box of boxes) {
        box.disabled = true;
    }
}

//for enableBoxes.
function EnableBoxes() {   
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

//Show Winner.
const showWinner = (Winner) => {
      msg.innerText = ` Congratulation Winner is ${Winner}`;
      msgContainer.classList.remove('hide');
      disabledBoxes();
}

//Reset button.
const reset = () =>{
   turnO = true;
   EnableBoxes();
   msgContainer.classList.add('hide');
}

// draw message.


newGame.addEventListener("click", reset);
resetBtn.addEventListener("click", reset);

