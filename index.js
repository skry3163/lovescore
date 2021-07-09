
// var names="sagar";

function calculate(){
    var name1=document.getElementById('name1').value;
    var name2=document.getElementById('name2').value;
    // var message="Your name is "+name1;
    var message="Your name is "+name1+" and your love name is "+name2;
    console.log(message);

    var mess1=document.getElementById('container1').innerHTML=name1+" ";
    // mess1.textContent=name1+" ";
    var mess2=document.getElementById('container2').innerHTML=""+name2;
    // mess2.textContent=name2;

    
}


function visible(){

    // document.getElementById('visi').style.display="inline-block";
    document.getElementById('mess').style.display="block";
    document.querySelector('.minicontainer').style.display="block";
}

function show(){
    var num=Math.random();
    num=num*100;
    num=Math.floor(num);
    num+=1;
    document.getElementById('score').innerHTML=num+"%";

    if(num===100){
        document.getElementById('res').innerHTML="You are giving hard compition to Romeo and Juliete.";
    }
    else if(num>=70 && num<100)
    {
        document.getElementById('res').innerHTML="Wow! you are strong contender of Modren Romeo and Juliete.";
    }
    else if(num>=30 && num<70)
    {
        document.getElementById('res').innerHTML="Not bad..You have a chance.";

    }
    else{
        document.getElementById('res').innerHTML="You are going together like oil and water.";
    }

}
 function hide(){
    document.getElementById('input').style.display="none";
    // document.getElementById('btn').innerHTML="Hide";
}


