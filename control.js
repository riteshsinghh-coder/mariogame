let num=0;
document.onkeydown=((e)=>{
    console.log(e);
    if(e.keyCode==38){
        console.log(1)
        dino=document.getElementById('a');
        console.log(dino)
        dino.classList.add('animateDino');
       setTimeout(()=>{
           console.log('yes')
           dino.classList.remove('animateDino');
    
       },700);
    }
})
setInterval(()=>{
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover')
    
})