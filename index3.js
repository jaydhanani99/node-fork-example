const cluster = require('cluster');
const app = require("express")();

if (cluster.isMaster) {
    console.log(`master process ${process.pid}`)
    const cpuCount = require('os').cpus().length;
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }
} else {
    app.get("/isprime", (req, res) => {
        const jsonResponse = isPrime(parseInt(req.query.number))
        res.send(jsonResponse)
    })
    console.log(`child process ${process.pid}`)
    app.listen(8081, () => console.log("Listening on 8081"))
}

function isPrime(number) {
    if (number <= 1) return false;

    for (let i = 2; i < number; i++) {
        if (number % i == 0) return false;
    }
    return true;
}