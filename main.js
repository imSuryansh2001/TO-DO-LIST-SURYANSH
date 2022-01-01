// for clock date / time / day/ year
setInterval(() => {

    let a;
    let date;
    let time;

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br>on " + date;

}, 1000);







// to to list


let plusIcon=document.getElementsByClassName('bi-plus-square-fill')[0];         // add icon
let mainInput=document.getElementsByClassName('work')[0];                 // input field
let scroLbox=document.getElementsByClassName('scroll-box')[0];           // scroll container
let clearButton=document.getElementsByClassName('clear-button')[0];     // clear button


plusIcon.addEventListener('click',function(){

     // adding input text to box
    var paraGraph = document.createElement('p');
    paraGraph.innerText = mainInput.value;
    scroLbox.appendChild(paraGraph);

   

    

    // styling
    
    paraGraph.style.fontSize="2rem";
    paraGraph.style.textAlign="center";
    paraGraph.style.Color="#FFFFFF";
    paraGraph.style.backgroundColor="#290122";
    

    // cutting line after work done
   paraGraph.addEventListener('click',function(){
   paraGraph.style.textDecoration="line-through";
    
   });



   // clearing box when overloads
   clearButton.addEventListener('click',function(){
     scroLbox.removeChild(paraGraph);
   });

}); 






