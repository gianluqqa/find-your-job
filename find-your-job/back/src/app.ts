import express from "express";
import userRoutes from "./routes/userRoutes";
import companyRoutes from "./routes/companyRoutes";
import certificateRoutes from "./routes/certificateRoutes";
import jobRoutes from "./routes/jobRoutes";
import studyRoutes from "./routes/studyRoutes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes); 
app.use("/companies", companyRoutes);
app.use("/certificates", certificateRoutes);
app.use("/jobs", jobRoutes);
app.use("/studies", studyRoutes);

export default app;
