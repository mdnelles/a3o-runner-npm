import app from "./app";

const port = process.env.NODE_PORT || 5026

const server = app.listen( () => {
    console.log(`App is running at http://localhost:${port} in %s mode`);
    console.log("  Press CTRL-C to stop\n");
});

export default server;