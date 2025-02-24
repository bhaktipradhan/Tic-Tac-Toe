let turn = "X"
let isgameover = false;


const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}


const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('pattern');
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            let info = document.querySelector('.info')
            info.innerText = boxtext[e[0]].innerText + " Won"
            boxtext[e[0]].style.color = 'red';
            boxtext[e[1]].style.color = 'red';
            boxtext[e[2]].style.color = 'red';
            info.style.color = 'red';
            isgameover = true;
        }  
    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.pattern');
    element.addEventListener('click', ()=>{
        if((boxtext.innerText === '') && (isgameover == true)){
            boxtext.innerText = '';
        }
        else if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            }            
        }
        else if((boxtext.innerText === '') && (isgameover == true)){
            document.getElementsByClassName("info")[0].innerText = "Tie";
        }
            
    })
})
