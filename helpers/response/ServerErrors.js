// 2xx, if everything was okay,
// 3xx, if the resource was moved,
// 4xx, if the request cannot be fulfilled because of a client error (like requesting a resource that does not exist),
// 46x, Custom Client Errors
// 5xx, if something went wrong on the API side (like an exception happened).

const ServiceUnavailable = (res, message) => res.status(503).json({ message: message || "Service temporarily down", code: "E503" });

const UnknownError = (res, message) => res.status(520).json({ message: message || "Unknown Error", code: "E520" });


// CUSTOM

const NumbersNotAvailabe = (res) => res.status(503).json({ message: "Numbers are temporarily unavailable", code: "E563" });

const StandardErrCodes = {
    "E503": "Service temporarily down",
}

const CustomErrCodes = {
    "E563": "Numbers are temporarily unavailable"
}


module.exports = {
    ServiceUnavailable,
    NumbersNotAvailabe,
    UnknownError
}