class ExpressError extends Error {
    Constructor(message, statusCode) {
        // super();
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;