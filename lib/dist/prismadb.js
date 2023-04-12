"use strict";
exports.__esModule = true;
var client_1 = require("@prisma/client");
var client = global.prismadb || new client_1.PrismaClient();
if (process.env.NODE_ENV === 'production')
    global.prismadb = client;
exports["default"] = client;
