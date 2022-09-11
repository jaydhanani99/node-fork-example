process.on("message", message => {
    const jsonResponse = isPrime(message.number);
    process.send(jsonResponse);
    process.exit();
})

function isPrime(number) {
    if (number <= 1) return false;

    for (let i = 2; i < number; i++) {
        if (number % i == 0) return false;
    }
    return true;
}