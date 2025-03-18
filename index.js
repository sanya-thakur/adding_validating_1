const express=require("express");
const app=express();
const mongoose=require("mongoose");
const userRoutes=require("./routes/userRoutes")
app.use(express.json());
const PORT=3010;

mongoose.connect("mongodb+srv://sanyathakurs69:sanya@cluster-data.lmjpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-data")
.then(()=>console.log("Connected to database"))
.catch((err)=>console.log("Error connecting to database: ", err))

app.use("/api/users", userRoutes);

app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}`))
