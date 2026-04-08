function showMap(){
    document.getElementById("map").classList.toggle("show");
}

function showMap2(){
    document.getElementById("map2").classList.toggle("show");
}

const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const target = this.getAttribute("data-tab");

            tabs.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(0)';
    sidebar.style.display = 'block';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(400px)';
    sidebar.style.display = 'none';
}

function showMore(){
    document.querySelector('.hidden').classList.toggle("active");
    document.querySelector('.upShow').classList.toggle("active");
}

function showMore2(){
    document.querySelector('.sec').classList.toggle("active");
    document.querySelector('.fir').classList.toggle("active");
}

function showMore3(){
    document.querySelector('.seco').classList.toggle("active");
    document.querySelector('.firs').classList.toggle("active");
}