//? API is made so that everyone across the world can be able to use by using same URl link
import express from "express";

const app = express();

//req method => post, put, get, delete

app.use("/user", (req, res) => {
  let userList = ["Reena", "Sona", "Sumitra"];

  return res.status(200).send(userList);
});

///
app.get("/student/details", (req, res) => {
  let studentDetails = {
    fName: "Jibana",
    lName: "Bam",
    address: "patan",
  };
  return res.status(200).send(studentDetails);
});

//network port allocate
const port = 8000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
