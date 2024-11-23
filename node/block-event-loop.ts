import express from "express";
const app = express();
function spromise() {
  return new Promise((res, rej) => res(0));
}

function fpromise() {
  return new Promise((res, rej) => rej(1));
}

app.get("/block", async (req, res) => {
  let j = 0;
  for (let i = 0; i < 1e8; ++i) {
    j = j + Math.round(Math.random());
  }
  res.send({ j });
});

app.get("/all", async (req, res) => {
  const flag = req.query["flag"];
  const promises = [spromise(), spromise(), spromise(), fpromise()];
  try {
    if (flag === "all") {
      const result = await Promise.all(promises);
      res.send({ status: "success", result });
    } else {
      const result = await Promise.allSettled(promises);
      res.send({ status: "success", result });
    }
  } catch (error) {
    res.send({ status: "fail" });
  }
});

app.listen(3000, () => {
  console.log("start express app on port 3000");
});
