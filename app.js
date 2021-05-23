const button = document.getElementById("button")
var numberInTheShape =  1 ; 
var oldValue = 0 ;

button.onclick=()=>{
    let n = document.getElementById("number").value;
    const circle = document.getElementById("circle");
    const sqaure = document.getElementById("square");
    const rectangle = document.getElementById("rectangle"); 
    const triangle = document.getElementById("triangle"); 
    const trapezoid = document.getElementById("trapezoid");
    const $box = document.getElementById("box");
    let j;

    n=Number(oldValue)+Number(n);

    for(let j = numberInTheShape; j<=n; j++){
        var shape = document.createElement("div");
        shape.innerHTML += numberInTheShape;
        if(sqaure.checked){
              shape.classList.add("square"); 
        } 
        else if(circle.checked){
            shape.classList.add("circle"); 
      }
        else   if(rectangle.checked){
        shape.classList.add("rectangle"); 
  }
 else if(triangle.checked){
    shape.classList.add("triangle"); 
}  
else if(trapezoid.checked){
    shape.classList.add("trapezoid"); 
} 
         else{
             document.write("invalid input") ;
                  }
                 $box.appendChild(shape);
                 numberInTheShape++;
                 oldValue=document.getElementById("box").lastElementChild.innerHTML;  
        }
}