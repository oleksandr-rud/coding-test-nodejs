const Server = require('./server');

const port = 3000;

Server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});