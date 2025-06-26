import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";

app.get("/", (req, res) => res.send("Hello, Welcome!"));
const PORT = 5000;

import todoRouter from "./routes/todo.routes.js";
app.use("/api/v1/todos", todoRouter);

app.listen(PORT, () => {
  console.log(` Server is listening to port ${PORT}`);
});
