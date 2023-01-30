const Route = require('./route')

class Router {
    constructor() {
        this.routes = new Map();
    }

    add(method, path, handler) {
        const route = new Route(method, path, handler);
        this.routes.set(route.name, route.handler);
    }

    validateRouteOrThrow(routeName) {
        if (!this.routes.has(routeName)) {
            throw new ResponseError('Resourse not found', HttpStatus.NOT_FOUND);
        }
    }

    matchRouteOrThrow(method, path) {
        const routeName = Route.getName(method, path);
        this.validateRouteOrThrow(routeName);
        return this.routes.get(routeName);
    }
}

module.exports = Router;