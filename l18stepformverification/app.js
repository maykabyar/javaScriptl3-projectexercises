var getdots = document.getElementsByClassName('dot');
var getpages = document.getElementsByClassName('page');
// console.log(getpages);      // HTML Collection
var getform = document.getElementById('form');
var getprevbtn = document.getElementById('prevbtn');
var getnextbtn = document.getElementById('nextbtn');
const getrstcontainer = document.getElementById('result-container');
var objkeys = ["email","password","firstname","lastname","dob","phone","address"];
var datas = [];

var curridx = 0;

showpage(curridx);

function showpage(num){
    // console.log(getpages[num]);
    getpages[num].style.display = "block";

    num === 0 ? getprevbtn.style.display = "none" : getprevbtn.style.display = "block";

    num === (getpages.length-1) ? getnextbtn.textContent = "Submit" : getnextbtn.textContent = "Next";

    dotindicator(num);
}

function dotindicator(num){
    // console.log(num);

    for(var x = 0; x < getdots.length; x++){
        getdots[x].classList.remove("active");
    }

    getdots[num].className += " active";
}

function gonow(num){
    // console.log(num);

    // getpages[curridx].style.display = "none";

    // curridx = curridx + num;

    // if(curridx >= getpages.length){
    //     // getform.submit();

    //     getform.style.display = "none";
    //     getrstcontainer.style.display = "block";

    // }

    // showpage(curridx);


    // if(formvalidation()){
    //     getpages[curridx].style.display = "none";

    //     curridx = curridx + num;

    //     if(curridx >= getpages.length){
    //         // getform.submit();

    //         getform.style.display = "none";
    //         getrstcontainer.style.display = "block";

    //     }

    //     showpage(curridx);
    // }

    
    // if(!formvalidation()){
    //     return false;
    // }

    // if(!formvalidation()) return false;

    // getpages[curridx].style.display = "none";

    //     curridx = curridx + num;

    //     if(curridx >= getpages.length){
    //         // getform.submit();

    //         getform.style.display = "none";
    //         getrstcontainer.style.display = "block";

    //     }

    //     showpage(curridx);


    // if(num === 1 & formvalidation()){
    //     getpages[curridx].style.display = "none";

    //     curridx = curridx + num;

    //     if(curridx >= getpages.length){
    //         // getform.submit();

    //         getform.style.display = "none";
    //         getrstcontainer.style.display = "block";

    //     }

    //     showpage(curridx);
    // }


    // if(num === 1 & !formvalidation()){
    //     return false;
    // }

    if(num === 1 & !formvalidation()) return false;
   

    getpages[curridx].style.display = "none";

        curridx = curridx + num;
        // console.log(curridx)

        if(curridx >= getpages.length){
            // getform.submit();

            getform.style.display = "none";
            getrstcontainer.style.display = "block";

            result(datas);

            return false;

        }

        showpage(curridx);

}


function* genfun(){
    var index = 0;

    while(index < objkeys.length){
        yield index++;
    }
}

// console.log(genfun().next().value);      //0 function ka 1 khr lote p yin tay twr lo 1time bl alote lote top start ka nay sa p 0 bl ya ml
// console.log(genfun().next().value);      //0  

let gen = genfun();   // fun ko ma tay bl amyay ya chin top var pay p lote

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);



function formvalidation(){

    var valid = true;

    var getcurrinput = getpages[curridx].getElementsByTagName('input');
    // console.log(getcurrinput);
    // console.log(getcurrinput[0].value);

    for(var x = 0; x < getcurrinput.length; x++){
        // console.log(getcurrinput[x].value);

        if(getcurrinput[x].value === ''){
            getcurrinput[x].classList.add('invalid');
            valid = false;
        }else{
            // console.log('x value is = ',x);
            // console.log(objkeys[x]);
            // console.log(getcurrinput[x].value);

            // console.log('gen value is = ',gen.next().value);

            // Method 1

            // const keys = objkeys[gen.next().value];  // top ka objkeys array htae ka kg ko key anay net pay lite tr
            // // console.log(keys);
            // const values = getcurrinput[x].value;

            // const obj = {
            //     [keys]:values
            // }

            // datas.push(obj);



            //Method 2 

            // const keys = objkeys[gen.next().value];
            // const values = getcurrinput[x].value;
            // const obj = {};

            // obj[keys] = values;  // key ko apyin ka nay htae tae pone san ayin ka obj.city = 'yanogn' yay det pon san

            // datas.push(obj);



            // Method 3

            const keys = objkeys[gen.next().value];
            const values = getcurrinput[x].value;
            datas.push({[keys]:values});
        }
    }

    if(valid){
        getdots[curridx].className += " done"
    }

    return valid;

}

function result(data){
    // console.log(data);

    getrstcontainer.innerHTML = `
        <ul>
            <li>Name : ${data[2].firstname} ${data[3].lastname}</li>
            <li>Email : ${data[0].email}</li>
            <li>Date of birth : ${data[4].dob}</li>
            <li>Phone : ${data[5].phone}</li>
            <li>Address : ${data[6].address}</li>
        </ul>

        <button type="submit" class="submit-btn" onclick="submitbtn()">Submit</button>
    `
}

function submitbtn(){
    getform.submit();
}