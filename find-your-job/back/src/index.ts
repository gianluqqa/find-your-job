import app from "./app";
import { AppDataSource } from "./config/data-source";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Database connected!");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("❌ Error connecting to database", error));

