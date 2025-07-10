const express = require("express");
const productRouter = require("./routes/producRouter");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/", productRouter);

app.listen(PORT, () =>
  console.log(`Server started listening on PORT: ${PORT}`)
);
