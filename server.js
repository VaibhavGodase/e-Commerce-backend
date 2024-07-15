import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config()




//databse config
connectDB();

const app = express()

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);



app.get('/', (req, res) => {
    res.send("hello")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`sever is running on port no.${PORT}`.america);

})


