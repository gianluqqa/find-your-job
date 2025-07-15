import express from "express";
import userRoutes from "./routes/UserRoutes";

const app = express();

app.use(express.json());
app.use("/", userRoutes);  // Rutas sin prefijo, accedés directo con /users

export default app;
