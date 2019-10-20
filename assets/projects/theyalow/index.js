let button=document.getElementsByClassName("desktop-mobile")[0];

button.addEventListener("click", function(){
  let mobile=document.getElementsByClassName("iframe-mobile")[0];
  let desktop=document.getElementsByTagName("body")[0];
  if (mobile.style.display=="none") mobile.style.display="block";
    else mobile.style.display="none"
  if (desktop.style.display=="none") desktop.style.display="block";
    else desktop.style.display="none"
  });
