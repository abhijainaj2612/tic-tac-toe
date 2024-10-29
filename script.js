const arr= Array(9).fill(null);
const con= document.querySelector(".container");
let current="X";
function load(){
    location.reload();
}
function checkDraw(){
    for(let i=0;i< 9;i++)
    {
        if(arr[i]==null) return;
    }
    con.innerHTML=`<h1 class="main"> Match Draw !! </h1>
    <button onclick="load()"> play again </button>`;
}
function check(){
    if(
        (arr[0]!== null && arr[0]==arr[1] && arr[1]==arr[2])||
        (arr[3]!== null && arr[3]==arr[4] && arr[4]==arr[5])||
        (arr[6]!== null && arr[6]==arr[7] && arr[7]==arr[8])||
        (arr[0]!== null && arr[0]==arr[3] && arr[3]==arr[6])||
        (arr[1]!== null && arr[1]==arr[4] && arr[4]==arr[7])||
        (arr[2]!== null && arr[2]==arr[5] && arr[5]==arr[8])||
        (arr[0]!== null && arr[0]==arr[4] && arr[4]==arr[8])||
        (arr[2]!== null && arr[2]==arr[4] && arr[4]==arr[6])

    ){  
        con.innerHTML=`<h1 class="main"> Winner is ${current} </h1>
        <button onclick="load()"> play again </button>`;
    }
    else checkDraw();
}

function handle(el){
    let id=el.id;
    if(arr[id]!== null) return;
    arr[id]=current;
    el.innerText=current;
    check();
    current = current==="X" ? "O" : "X";
}