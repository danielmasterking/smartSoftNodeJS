"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.TokenValidation = function (req, res, next) {
    try {
        var token = req.header('token');
        if (!token)
            return res.status(401).json('Access Denied');
        var payload = jsonwebtoken_1.default.verify(token, process.env['TOKEN_SECRET'] || '');
        req.userId = payload._id;
        next();
    }
    catch (e) {
        res.status(400).send('Invalid Token');
    }
};
