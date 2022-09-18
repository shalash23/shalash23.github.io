

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            console.log(entry);
            
        }else{
            entry.target.classList.remove('show')
            console.log(entry);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el)=> observer.observe(el));


