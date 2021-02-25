const app = require('./config/server'),
    config = require('./config/env');

app.listen(config.app_port, () => {
    console.log(`Server started on port ${config.app_port}`);
});