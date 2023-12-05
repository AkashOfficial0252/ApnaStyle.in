function B(){
    window.print();
}

function A(){
    window.alert("U ARE A GOOD STUDENT");
}
var g=document.getElementById("j")
var but=document.getElementById("jj");
but.addEventListener('click',function(event){
    
        if(g.style.color==='black'){
            g.style.color='red';
        }
        else{
            g.style.color='black';
        }
    }
)