import app from "./app";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Database connected!");
    app.listen(3000, () => {
      console.log("🚀 Server running on port 3000");
    });
  })
  .catch((error) => console.error("❌ Error connecting to database", error));
