import express from "express";
import userRoutes from "./routes/userRoutes";
import companyRoutes from "./routes/companyRoutes";
import certificateRoutes from "./routes/certificateRoutes";
import jobRoutes from "./routes/jobRoutes";
import studyRoutes from "./routes/studyRoutes";
import experienceRoutes from "./routes/experienceRoutes";
import morgan from "morgan";
import languageRoutes from "./routes/lenguageRoutes";

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware de logs HTTP
app.use(morgan("dev"));  

// Tus rutas
app.use("/users", userRoutes); 
app.use("/companies", companyRoutes);
app.use("/certificates", certificateRoutes);
app.use("/jobs", jobRoutes);
app.use("/studies", studyRoutes);
app.use("/experiences", experienceRoutes);
app.use("/languages", languageRoutes);

export default app;
