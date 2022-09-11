const app = require("express")();
const { fork } = require("child_process");

app.get("/isprime", (req, res) => {
    const childProcess = fork('./isprime.js');
    childProcess.send({"number": parseInt(req.query.number)});
    childProcess.on('message', message => {
        res.send(message);
    })
})

app.listen(8081, () => console.log("Listening on 8081"))