;(function(){
    let header = document.querySelector('.header');
    let headerLogo = document.querySelector('.header-logo');
    
    window.addEventListener('scroll', function() {
        if(window.pageYOffset > 350) {
            headerLogo.style.opacity = '0';
        }
        else headerLogo.style.opacity = '1';
    });
    // 
    function show(target){
        target.classList.toggle('active');
    }
    function close(target){
        target.classList.remove('active');
    }
    window.addEventListener('click', function(e){
        let target = e.target;
        let popClass = target.getAttribute('data-menu');
       
        console.log(popClass);
        if(popClass === null) return;
        
        let popClass2 = document.querySelector('.'+popClass);

        show(popClass2);
        console.log(popClass2);
           
            
       
    })

})();