const counters = document.querySelectorAll(".counter");
const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const update = () => {
        const increment = target/ 100;
        if (count < target){
            count += increment;
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(update);
        }
        else{
            counter.innerText = target;
        }
    };

    update();
}

const resetCounter = (counter) => {
    counter.innerText = 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const counter = entry.target;
        if(entry.isIntersecting){
            animateCounter(counter);
        }
        else{
            resetCounter(counter);
        }
    });
}, {
    threshold: 0.5
});
counters.forEach(counter => observer.observe(counter));