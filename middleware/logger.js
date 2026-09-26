// middle ware - Middleware is a function that runs in between 
//               the request and the final response.

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

module.exports = logger;