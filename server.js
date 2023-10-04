var express=require('express');
var app=express();
app.use(express.static('public'))
app.get("/",(req, res)=>{res.send("Welcome to CDAC ACTS");});
app.get("/courses",(req, res)=>{var p={ "id":1, "title":"Diploma in Advance Computing",
                                        "id":2, "title":"Diploma in Big data Analytics"
};
                                       res.send(p);
});
app.listen(8000);
console.log("App is listening on port 8000");