import express from "express";
import cors from "cors";           
import morgan from "morgan";

import userRoutes from "./routes/userRoutes";
import companyRoutes from "./routes/companyRoutes";
import certificateRoutes from "./routes/certificateRoutes";
import jobRoutes from "./routes/jobRoutes";
import studyRoutes from "./routes/studyRoutes";
import experienceRoutes from "./routes/experienceRoutes";
import languageRoutes from "./routes/lenguageRoutes";
import aptitudeRoutes from "./routes/aptitudeRoutes";
import skillRoutes from "./routes/skillRoutes";
import technologyRoutes from "./routes/technologyRoutes";

const app = express();

// ✅ Middleware para habilitar CORS (permite que el front acceda al back)
app.use(cors());

// ✅ Middleware para parsear JSON
app.use(express.json());

// ✅ Middleware para logs HTTP
app.use(morgan("dev"));

// ✅ Tus rutas
app.use("/users", userRoutes);
app.use("/companies", companyRoutes);
app.use("/certificates", certificateRoutes);
app.use("/jobs", jobRoutes);
app.use("/studies", studyRoutes);
app.use("/experiences", experienceRoutes);
app.use("/languages", languageRoutes);
app.use("/aptitudes", aptitudeRoutes);
app.use("/skills", skillRoutes);
app.use("/technologies", technologyRoutes);

export default app;
