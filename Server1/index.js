const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password:"" ,
  database: "cardsystems",
});

app.get("/cards", (req, res) => {
    db.query("SELECT * FROM cards", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.post('/create', (req,res)=>{
    const name =req.body.name;
    const status =req.body.status;
    const content =req.body.content;
    const category =req.body.category;
    const author =req.body.author;
    db.query("INSERT INTO cards (name, status, content, category, author) VALUES(?,?,?,?,?)",
    [name, status, content, category, author ],
    (err, result)=> {
       if (err){
           console.log(err)}
        else{
               res.send("values insert")
           }
       }
    );
    
    

})

app.put("/update/3", (req, res) => {
    const id = req.body.id;
    const content = req.body.content;
    
    db.query(
      "UPDATE cards SET content = ? WHERE id = ?",
      [content, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
app.put("/update/1", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    
    db.query(
      "UPDATE cards SET name = ? WHERE id = ?",
      [name, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

app.put("/update/2", (req, res) => {
    const id = req.body.id;
    const status = req.body.status;
    
    db.query(
      "UPDATE cards SET status = ? WHERE id = ?",
      [status, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

app.put("/update/4", (req, res) => {
    const id = req.body.id;
    const category = req.body.category;
    
    db.query(
      "UPDATE cards SET category = ? WHERE id = ?",
      [category, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
app.delete('/delete/:id', (req,res) =>{
    const id = req.params.id;
    db.query("DELETE FROM cards WHERE id= ?",id,(err,result)=>{
        if (err){
            console.log(err)}
         else{
                res.send(result)
            }
    })
})

app.listen('3001',()=>{
    console.log('Sucess')
})
