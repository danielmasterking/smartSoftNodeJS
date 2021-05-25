"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var auth_controller_1 = require("../controllers/auth.controller");
router.post("/auth", auth_controller_1.sigIn);
exports.default = router;
