/*
************************************************************
*                                                          *
*   Flowhooks Software - All Rights Reserved               *
*          (c) 2025 Felipe Cezar Zwerchowski Paz LTDA.     *
*                                                          *
*  This software is proprietary.                           *
*  Unauthorized use, reproduction, or distribution is      *
*  strictly prohibited.                                    *
*                                                          *
*  Author: Felipe Cezar Paz (git@felipecezar.com)          *
*  File:                                                   *
*  Description:                                            *
*                                                          *
************************************************************
*/
// app.js
require('dotenv').config();  // This loads the .env file at the beginning of your app
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
