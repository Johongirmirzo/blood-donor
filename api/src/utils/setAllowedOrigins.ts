import cors from "cors"
import {Express} from "express"

const setAllowedOrigins = (app: Express)=>{
    const allowedDomains = [process.env.CLIENT_URL || "http://localhost:3000", process.env.ADMIN_URL || "http://localhost:3001"]
    console.log("Allowed domains", allowedDomains)
    app.use(cors({
        origin: function (origin, callback) {
            console.log("Origin Check", origin)
            // bypass the requests with no origin (like curl requests, mobile apps, etc )
            if (!origin) return callback(null, true);
    
            if (allowedDomains.indexOf(origin) === -1) {
                var msg = `This site ${origin} does not have an access!. Only specific domains are allowed to access it.`;
                return callback(new Error(msg), false);
            }
            console.log("Access control enabled", allowedDomains.indexOf(origin))
            return callback(null, true);
        },
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }))
}

export default setAllowedOrigins;