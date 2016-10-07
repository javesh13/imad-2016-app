//counter valuer
var button=document.getElementById('counter');
var counter=0;
button.onclick = function()
{
   
    var request =  new XMLHttpRequest();
    
    
     if(request.readystate===XMLHttpRequest.DONE){
         
     if(request.status===200){
    request.onreadystatechange=function(){
        var counter =request.responseText();
        var span = document.getElementById('count');
        span.innerHtml=counter.toString();
        };
     }
        
 }
 request.open('GET','http://javesh13.imad.hasura-app.io/counter',true);
 request.send(null);
};