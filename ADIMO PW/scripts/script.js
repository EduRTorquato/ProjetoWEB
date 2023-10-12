const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {

        e.preventDefault();

        const user = document.querySelector("#user");
        const password = document.querySelector("#pass")

        const valueUser = user.value;
        const valuePass = password.value

        console.log(valueUser, valuePass)
}
)
