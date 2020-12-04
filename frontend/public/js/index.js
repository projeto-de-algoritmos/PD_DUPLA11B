
var input_field = document.querySelector("#input");

submit_button.addEventListener("click", (e) => {
    input = input_field.value;
    console.log(input)
    e.preventDefault();
    fetch('http://localhost:3000/perfomance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: {input: input} })
    }).then((data) => {
        console.log(data)
        return data.json()
    }).then((data) => {
        console.log(data)
            document.querySelector("#recursive_result").value = data['recursivo'] 
            document.querySelector("#dynamic_result").value = data['dinamico']
            document.querySelector("#result").value = data['resultado']
        })
})

reset_button.addEventListener("click", (e) => {

    input_field.value.split(' ');

    e.preventDefault();

    document.querySelector("#recursive_result").value = null  
    document.querySelector("#dynamic_result").value = null
    document.querySelector("#result").value = null
})