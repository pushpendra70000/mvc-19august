//const { application } = require('express');
const express = require ('express');
const { registercontroller } = require('../../controllers/admin/registercontroller');
const registerRoute= express.Router();


registerRoute.use(registercontroller)

registerRoute.post('/register',registercontroller)
exports.registerRoute= registerRoute;