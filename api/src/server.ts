import dotenv from "dotenv";
dotenv.config()
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import path from "path";
import helmet from "helmet";
import cors from "cors";
import setAllowedOrigins from "./utils/setAllowedOrigins"
import connectDB from "./config/connectDB";
import {
    donorRoutes, 
    bloodGroupRoutes, 
    contactUsRoutes,
    subscriberRoutes,
    bloodRequirerRoutes,
    homePageRoutes,
    aboutUsPageRoutes,
    galleryPageRoutes,
    faqPageRoutes,
    contactUsPageRoutes,
    adminRoutes,
} from "./routes"

const app = express();

setAllowedOrigins(app);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")))
app.use(morgan("combined"));
app.use(helmet());
app.use(cookieParser());


app.use("/api/donor", donorRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/blood-group", bloodGroupRoutes);
app.use("/api/contact-us", contactUsRoutes);
app.use("/api/subscriber", subscriberRoutes);
app.use("/api/blood-requirer", bloodRequirerRoutes);
app.use("/api/home-page", homePageRoutes);
app.use("/api/about-us-page", aboutUsPageRoutes);
app.use("/api/gallery-page", galleryPageRoutes);
app.use("/api/faq-page", faqPageRoutes);
app.use("/api/contact-us-page", contactUsPageRoutes);

(async ()=>{
    try {
        const PORT = process.env.PORT || 5500;
        await connectDB();
        app.listen(PORT, ()=> console.log(`Server is listening on port: ${PORT}`));
    }catch (err){
        console.error(err)
    }
})()

