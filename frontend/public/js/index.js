
var input_field = document.querySelector("#input");
var isloading = document.querySelector("#isloading");
var sub = document.querySelector("#submit_button");
var calc = document.querySelector("#calc");


submit_button.addEventListener("click", (e) => {


    input = input_field.value;

    if (input >= 50 || input < 0) {
        input_field.classList.add('is-invalid');
    } else {
        input_field.classList.remove('is-invalid');
        isloading.classList.remove('d-none')
        calc.classList.add('d-none');
        sub.setAttribute("disabled", true)

        console.log(input)
        e.preventDefault();
        fetch('http://localhost:3000/performance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: { input: input } })
        }).then((data) => {
            console.log(data)
            return data.json()
        }).then((data) => {
            console.log(data)
            sub.removeAttribute("disabled", true)

            isloading.classList.add('d-none');
            calc.classList.remove('d-none');


            document.querySelector("#recursive_result").value = data['recursivo'] + ' ms'
            document.querySelector("#dynamic_result").value = data['dinamico'] + ' ms'
            document.querySelector("#result").value = data['resultado']
        })
    }
})

reset_button.addEventListener("click", (e) => {

    input_field.value.split(' ');

    e.preventDefault();

    input_field.classList.remove('is-invalid');
    document.querySelector("#recursive_result").value = null
    document.querySelector("#input").value = null
    document.querySelector("#dynamic_result").value = null
    document.querySelector("#result").value = null
})