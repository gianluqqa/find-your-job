import express from "express";
import userRoutes from "./routes/userRoutes";
import companyRoutes from "./routes/companyRoutes";
import certificateRoutes from "./routes/certificateRoutes";
import jobRoutes from "./routes/jobRoutes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes); 
app.use("/company", companyRoutes);
app.use("/certificates", certificateRoutes);
app.use("/job", jobRoutes);

export default app;
