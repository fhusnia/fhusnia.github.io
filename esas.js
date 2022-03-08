var navbar=document.querySelector('.navbar');
  window.addEventListener('scroll',function(){
    
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 300 || window.pageXOffset > 100){
      navbar.classList.add("yeninav");
    }else{
      navbar.classList.remove('yeninav');
    }
  });