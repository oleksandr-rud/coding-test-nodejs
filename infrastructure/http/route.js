class Route {
    constructor(method, path, handler) {
        this.method = method;
        this.path = path;
        this.handler = handler;
    }

    static getName(method, path) {
        return `${method} ${path}`;
    }

    get name() {
        return Route.getName(this.method, this.path);
    }
}

module.exports = Route;