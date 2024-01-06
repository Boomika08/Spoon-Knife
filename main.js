const 
  box = document.querySelectorAll('.box'),
  rstbtn =  document.querySelector('#rstbtn'),
  x_score = document.querySelector('#x_score'),
  o_score = document.querySelector('#o_score')
  
  let 
    turn = 'x'
    x = '0',
    o = '0'

box.forEach(e => {
    e.onclick = () => {
        if(e.innerText == ''){
            e.innerText = turn
            turn == 'x' ? turn = 'o' : turn = 'x'
            winner()
        }
    }
}) 

function winner(){
    winCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    winCombination.forEach(e=>{
        if (box[e[0]].innerText === box[e[1]].innerText
        && box[e[1]].innerText === box[e[2]].innerText && 
        box[e[0]].innerText){
            box[e[0]].innerText == 'x'? x++ : o++ 
            setTimeout(() => reset(),1500);
        }
        x_score.innerText = x
        o_score.innerText = o
    })
}

rstbtn.onclick = () => reset()
function reset() {
   box.forEach(e => e.innerText = '')
   turn = 'x'
}
