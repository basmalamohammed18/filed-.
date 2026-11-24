let buttons = document.querySelectorAll(".menu > span");
let cards = document.querySelectorAll(".menu-card");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let category = button.textContent.trim().toLowerCase();

        cards.forEach(function(card) {

            let name = card.querySelector(".card-header span").textContent.trim().toLowerCase();

            if (category === "all") {
                card.style.display = "flex";
            }
            else if (
                (category === "breakfast" && name === "avocado toast") ||
                (category === "mains" && (name === "grilled chicken bowl" || name === "spicy pasta")) ||
                (category === "drinks" && name === "iced caramel latte")
            ) {
                card.style.display = "flex";
            }
            else {
                card.style.display = "none";
            }

        });

    });

});
let form=document.getElementById('form')
let btn=document.getElementById('btn')
let Name=document.getElementById('name')
let email=document.getElementById('email')
let message=document.getElementById('message')

form.addEventListener('submit',function(e){
    e.preventDefault()
    if(Name.value==='' ||email.value==='' ||message.value==='' ){
        alert('please fill all fields...✍️')
    }
    else if(!email.value.includes("@") || !email.value.includes(".")) {
    alert("Please enter a valid email address! this must contain of ( @ ) and ( . ) ⁉️");   
}
else{
    alert('your form is submited Successfully ✔️')
}

})