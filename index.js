const app = require("express")();

app.get("/isprime", (req, res) => {
    const jsonResponse = isPrime(parseInt(req.query.number))
    res.send(jsonResponse)
})

app.listen(8081, () => console.log("Listening on 8081"))

function isPrime(number) {
    if (number <= 1) return false;

    for (let i = 2; i < number; i++) {
        if (number % i == 0) return false;
    }
    return true;
}