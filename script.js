const ratingBtns = document.getElementsByClassName('rating-button');
const submitButton = document.getElementById('submit');
const ratingContainer = document.getElementById('rating-state');
const thankyouContainer = document.getElementById('thank-you-state');

for (let i = 0; i < ratingBtns.length; i++)
{
    ratingBtns[i].addEventListener("click", () => {
        if (document.getElementsByClassName("rating-button active").length === 1)
        {
            var activeBtn = document.getElementsByClassName("rating-button active");
            activeBtn[0].className = "rating-button";
        }
        ratingBtns[i].className = "rating-button active";
    });
}

submitButton.addEventListener("click", () => {
    // hide the rating container and show the thank you container
    ratingContainer.className = "content-container hidden";
    thankyouContainer.className = "content-container";

    // get selected rating from active button
    var activeBtn = document.getElementsByClassName("rating-button active");
    const rating = activeBtn[0].getAttribute("value");

    const selected = document.getElementsByClassName('selected');
    selected[0].textContent = `You selected ${rating} out of 5`;
});