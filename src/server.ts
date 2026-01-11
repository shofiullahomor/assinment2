import app from "./app";
import config from "./database";



app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});