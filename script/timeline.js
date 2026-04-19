const timelineItems=document.querySelectorAll('.timeline-item');
const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('show')}
        else{entry.target.classList.remove('show')}}
    )},
    {threshold:0.2});
    timelineItems.forEach(item=>{observer.observe(item)})