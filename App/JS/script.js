const panels = document.querySelectorAll('.panel');

panels.forEach(function(panel){
    panel.addEventListener('click',function(){
        removePanel();
        panel.classList.add('active');
    });
});

function removePanel(){
    panels.forEach((panel)=>{
        panel.classList.remove("active");
    })
}

