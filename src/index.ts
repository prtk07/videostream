import { Request, Response } from "express";
import { sendVideo } from "./controllers";
const path = require("path");

const express = require("express");
const app = express();
app.set("view engine", "ejs");
const port = 3000;

app.get("/", (req: Request, res: Response) => res.render("home"));
app.get("/video", sendVideo);

app.listen(port, () => console.log(` listening on port: ${port}`));
