var faqBtn = document.querySelectorAll(".faq");
var arrow = document.querySelectorAll(".icon");
var title = document.querySelectorAll(".question");
var answer = document.getElementsByClassName("ans");

for (let i = 0; i < faqBtn.length; i++) {
    faqBtn[i].addEventListener("click", () => {
        closeAll();
        openQuest(i);
    });
}

function openQuest(i) {
    arrow[i].style.transform = "rotateX(180deg)";
    title[i].style.fontWeight = "700";
    answer[i].style.display = "block";

}

function closeAll(){
    for (let i = 0; i < faqBtn.length; i++) {
        arrow[i].style.transform = "rotateX(0deg)";
        title[i].style.fontWeight = "400";
        answer[i].style.display = "none";
    }
}