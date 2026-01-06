import express from "express"
import globalErrorHandler from "./middlewares/errorMiddleware.js";
import indexRoutes from "./routes/index.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
            origin: "http://localhost:5173",
            credentials: true
}))

app.use("/api", indexRoutes);


app.use(globalErrorHandler);



export default app;