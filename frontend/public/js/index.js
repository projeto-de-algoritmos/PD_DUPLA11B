var submit_button = document.querySelector("#submit_button");
var reset_button = document.querySelector("#reset_button");
var numbers = document.querySelector("#numbers");

submit_button.addEventListener("click", (e) => {
    arrayNum = numbers.value.split(' ').split(',');

    e.preventDefault();
    fetch('http://localhost:3000/imparpar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: {arrayNum} })
    }).then((data) => {
        console.log(data)
        return data.json()
    }).then((data) => {
        console.log(data)
        result = ''
        data.forEach(element => {
           result += ' ' + element;
        });
            document.querySelector("#result").value = result
        })
})
reset_button.addEventListener("click", (e) => {

    arrayNum = numbers.value.split(' ');

    e.preventDefault();

    document.querySelector("#numbers").value = null  
    document.querySelector("#result").value = null
})