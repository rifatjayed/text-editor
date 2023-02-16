
  const textArea= document.getElementById("textArea");
document.getElementById("bold").addEventListener("click",function(){
   
  
    const textAreaValue= textArea.value;


    textArea.style.fontWeight = "900"

})


document.getElementById("italic").addEventListener("click",function(){
   
  
    const textAreaValue= textArea.value;


    textArea.style.fontStyle = "italic";

})



document.getElementById("underline").addEventListener("click",function(){
   
  
    const textAreaValue= textArea.value;


    textArea.style.textDecoration = "underline";

})



document.getElementById("left").addEventListener("click",function(){
   
  
    const textAreaValue= textArea.value;


    textArea.style.textAlign = "left";

})


document.getElementById("center").addEventListener("click",function(){
   
  
    const textAreaValue= textArea.value;


    textArea.style.textAlign = "center";

})

document.getElementById("right").addEventListener("click",function(){
   
  
    const textAreaValue= textArea.value;


    textArea.style.textAlign = "right";

})




