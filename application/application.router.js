const Router = require('../infrastructure/http/router');
const ResponseHandler = require('../infrastructure/http/response-handler');
const { RequestValidator } = require('../core/validators');
const ApplicationService = require('./application.service');

const applicationRouter = new Router();

applicationRouter.add('GET', '/process', async (req, res) => {
    const num = parseInt(req.params.num, 10);
    RequestValidator.validateNumberOrThrow(num);

    const result = ApplicationService.processNumber(num);
    await ResponseHandler.handleSuccess(res, result);
});

module.exports = applicationRouter;