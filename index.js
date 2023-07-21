import express from "express";
import path from "path";
import bodyparser from "body-parser";

const app=express();
const __dirname =path.resolve;

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  const today = new Date();
  const day =today.getDay();

  let dayType="a weekday";
  let advice ="work hard!";

  console.log(day)

  if (day ===0 || day===6)
  {
    dayType="a weekend",
    advice= "Enjoy!"
  }

  res.render("index.ejs",{dayType :dayType,advice : advice});

})

app.post("/submit",(req,res)=>{
    if(week_name==="saturday"||week_name==="sunday"){
      res.send("weekend enjoy!!");
    }
    else{
      res.send("work hard");
    }
})

app.listen(3000,(req,res)=>{
  console.log("Port live at 3000");
})
