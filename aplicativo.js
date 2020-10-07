const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Seja muito bem vindo!");
});

app.get("/sobre",(req,res)=>{
    res.sendFile(__dirname + "/sobre/sobre.html");
});

app.get("/contato",(req,res)=>{
    res.sendFile(__dirname + "/contato/contato.html");
});

app.get("/confirmacao",(req,res)=>{
    res.sendFile(__dirname + "/confirmacao/confirmacao.html");
});

app.listen(3000, ()=>{
    console.log("o servidor esta rodando.");
});