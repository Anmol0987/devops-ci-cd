import express, { json } from "express";
import { prismaClient } from "@repo/db/clients";
const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await prismaClient.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  res.json({
    message: "signup successfull!",
    id: user.id,
  });
});
app.listen(3002, () => {
  console.log("server listening on the port 3002");
});
