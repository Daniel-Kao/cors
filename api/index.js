const express = require("express");

const app = express();

const whiteList = ["http://127.0.0.1:5500"];
app.use(function (req, res, next) {
  const origin = req.headers.origin;
  if (whiteList.includes(origin)) {
    console.log(origin);
    // res.header("Access-Control-Allow-Origin", origin);
    // // 设置哪些请求方法可访问
    res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE");
    // res.setHeader("Access-Control-Expose-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      console.log("options");
      return res.end(); //OPTIONS请示不做任何处理
    }
  }
  next();
});

app.get("/getData", (req, res) => {
  console.log(123);
  res.end("hahah");
});
app.delete("/getData", (req, res) => {
  console.log(123);
  res.end("hahah");
});
app.put("/getData", (req, res) => {
  console.log(123);
  res.end("hahah");
});

app.listen(4000, console.log("server listening on 4000"));
