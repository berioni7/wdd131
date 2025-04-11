document.addEventListener("DOMContentLoaded", () => {

    const products = [
        { id: "fc-1888", name: "Writers", averagerating: 4.5 },
        { id: "fc-2050", name: "Directors", averagerating: 4.7 },
        { id: "fs-1987", name: "Actors", averagerating: 3.5 },
        { id: "ac-2000", name: "Composers", averagerating: 3.9 },
        { id: "jj-1969", name: "Directors of photography", averagerating: 5.0 },
        { id: "jj-1970", name: "Editor", averagerating: 5.0 } 
    ];

    const select = document.querySelector("#content");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });

    const form = document.getElementById("feedbackForm");
    const message = document.getElementById("successMessage");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); 

        const content = form.content.value;
        const rating = form.rating.value;
        const features = [...form.querySelectorAll('input[name="features"]:checked')].map(el => el.value);
        const review = form.review.value;
        const username = form.username.value;

        const feedback = {
            content,
            rating,
            features,
            review,
            username,
            date: new Date().toISOString()
        };

        const previous = JSON.parse(localStorage.getItem("feedbacks") || "[]");
        previous.push(feedback);
        localStorage.setItem("feedbacks", JSON.stringify(previous));

        form.reset();

        message.style.display = "block";

        setTimeout(() => {
            message.style.display = "none";
        }, 4000);
    });
});