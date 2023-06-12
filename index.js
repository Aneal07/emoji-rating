const starsEl = document.querySelectorAll(".fa-star");

const emojisEl = document.querySelectorAll(".far");

const colorsArray = ["red", "orange", "blue", "lightgreen", "darkgreen"];

 updateRating(0);


starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click",() => {
        updateRating(index);
    });
});

function updateRating(index){
    starsEl.forEach((starEl, idx) => {
        if(idx < index + 1){
            starEl.classList.add("active");
        }else {
            starEl.classList.remove("active");
        }
    });

    emojisEl.forEach((emoEl) => {
        emoEl.style.transform = `translateX(-${index * 50}px)`;
        emoEl.style.color = colorsArray[index]
});
}