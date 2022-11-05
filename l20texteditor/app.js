var gettxtarea = document.getElementById('textarea');
var getdivarea = document.getElementById('divarea');
getdivarea.contentEditable = true;
getdivarea.spellcheck = false;


var getbtns = document.querySelectorAll('.btn');
// console.log(getbtns);   //NodeList

getbtns.forEach(function(getbtn){

    getbtn.addEventListener('click',function(){
        // var getcommand = getbtn.getAttribute('data-command');
        var getcommand = getbtn.dataset['command'];
        // console.log(getcommand);

        if(getcommand === "cleartext"){
            getdivarea.innerHTML = "";
        }else if(getcommand === "createLink"){
            let geturl = prompt("Enter your website Link","https://");
            document.execCommand(getcommand,false,geturl);
        }else if(getcommand === "foreColor"){
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand = "backColor"){
            document.execCommand(getcommand,false,getbtn.value);
        }else{
            document.execCommand(getcommand,false,null);
        }  

    });

});

// function boldfun(){
//     gettxtarea.style.fontWeight = 'bold';
// }

// function italicfun(){
//     gettxtarea.style.fontStyle = 'italic';
// }

// function underlinefun(){
//     gettxtarea.style.textDecoration = 'underline';
// }

// function lalgfun(){
//     gettxtarea.style.textAlign = 'left';
// }

// function calgfun(){
//     gettxtarea.style.textAlign = 'center';
// }

// function ralgfun(){
//     gettxtarea.style.textAlign = 'right';
// }

function upcasefun(){
    gettxtarea.style.textTransform = 'uppercase';
}

function lwcasefun(){
    gettxtarea.style.textTransform = 'lowercase';
}

function capcasefun(){
    gettxtarea.style.textTransform = 'capitalize';
}

// function clearfun(){
//     gettxtarea.style.fontWeight = 'normal';
//     gettxtarea.style.fontStyle = 'normal';
//     gettxtarea.style.textDecoration = 'none';
//     gettxtarea.style.textAlign = 'left';
//     gettxtarea.value = '';
// }


// execCommand(aCommandName,aShowDefaultUI,aValueArgument);
