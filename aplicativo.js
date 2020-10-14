
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));




app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
});

app.get("/sobre",(req,res)=>{
    res.sendFile(__dirname + "/views/sobre.html")
});

app.get("/index",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
});
   

app.get("/contato",(req,res)=>{
    res.sendFile(__dirname + "/views/contato.html")
});

app.get("/confirmacao",(req,res)=>{
    res.sendFile(__dirname + "/views/confirmacao.html")
});

{/*app.post("action",(req,res)=>{
   console.log(req.body.fname);
   console.log(req.body.lname);
   console.log(req.body.Assunto);
 }); */}



app.post("/confirmacao",(req,res)=>{
    res.send("Obrigado "+req.body.fname+" por ter enviado a mensagem "+req.body.Assunto+" Retornaremos no email "+
    req.body.lname);
 });

app.listen(3000, ()=>{
    console.log("o servidor esta rodando.");
});