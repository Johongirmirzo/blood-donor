"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
const setAllowedOrigins_1 = __importDefault(require("./utils/setAllowedOrigins"));
const connectDB_1 = __importDefault(require("./config/connectDB"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
(0, setAllowedOrigins_1.default)(app);
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "./public")));
app.use((0, morgan_1.default)("combined"));
app.use((0, helmet_1.default)());
app.use((0, cookie_parser_1.default)());
app.use("/api/donor", routes_1.donorRoutes);
app.use("/api/admin", routes_1.adminRoutes);
app.use("/api/blood-group", routes_1.bloodGroupRoutes);
app.use("/api/contact-us", routes_1.contactUsRoutes);
app.use("/api/subscriber", routes_1.subscriberRoutes);
app.use("/api/blood-requirer", routes_1.bloodRequirerRoutes);
app.use("/api/home-page", routes_1.homePageRoutes);
app.use("/api/about-us-page", routes_1.aboutUsPageRoutes);
app.use("/api/gallery-page", routes_1.galleryPageRoutes);
app.use("/api/faq-page", routes_1.faqPageRoutes);
app.use("/api/contact-us-page", routes_1.contactUsPageRoutes);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const PORT = process.env.PORT || 5500;
        yield (0, connectDB_1.default)();
        app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
    }
    catch (err) {
        console.error(err);
    }
}))();
