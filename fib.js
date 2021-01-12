const form = document.getElementById('fib-form')
const input = document.getElementById('number')
const output = document.getElementById('output')

form.addEventListener('submit', (e) => { 
    e.preventDefault()
    let num = input.value
    let result = fib(num)
    output.innerText = result
})

    let fib = function(n) {
        let a = 0, b = 1, f = 1;
        for(let i = 2; i <= n; i++) {
            f = a + b;
            a = b;
            b = f;
        }
        return f;
    };