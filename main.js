const inp = document.getElementById('newUserCode');
inp.addEventListener('input', function (evt) {
    
});


function eopen(id,value){
    var e = document.getElementById(id);
    if(e.style.height==value){
        e.style="height:0px;visibility:hidden";
    }else{
    e.style="height:50px;visibility:visible";
    }
}