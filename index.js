const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
// routes
//app.use('/api/v1.0/users', QuestionnaireRoutes);

// Uses to start the server.
const PORT = process.env.PORT || 9090;

// opens a port
app.listen(PORT, () => {
    loggerService.info(`Server running on port ${PORT}`);
});
