// 2xx, if everything was okay,
// 3xx, if the resource was moved,
// 4xx, if the request cannot be fulfilled because of a client error (like requesting a resource that does not exist),
// 46x, Custom Client Errors
// 5xx, if something went wrong on the API side (like an exception happened).

const BadRequest = (res, message) => res.status(400).json({ message: message || "Bad Request Recieved", code: "E400" });


const Unauthorized = (res, message = undefined) => res.status(401).json({ message: message || "Not Authroized", code: "E401" });


const PaymentRequired = (res, message = undefined) => res.status(402).json({ message: message || "Payment Required, Temporarily suspended", code: "E402" });


const Forbidden = (res, message = undefined) => res.status(403).json({ message: message || "Access forbidden", code: "E403" })


const NotFound = (res, message = undefined) => res.status(404).json({ message: message || "Content Not Found", code: "E404" });


const MethodNotAllowed = (res, message = undefined) => res.status(405).json({ message: message || "Method Not Allowed", code: "E404" });


const NotAcceptable = (res, message = undefined) => res.status(406).json({ message: message || "Missing Headers.", code: "E406" });


const Conflict = (res, message = undefined) => res.status(409).json({ message: message || "Resource Conflict", code: "E409" });


const Gone = (res, message = undefined) => res.status(410).json({ message: message || "Content Not Available Anymore", code: "E410" });


const TooLargePayload = (res, message = undefined) => res.status(413).json({ message: message || "Too Large Payload", code: "E413" });


const UnsupportedMediaType = (res, message = undefined) => res.status(415).json({ message: message || "Uploaded Content Type is Not Supported", code: "E415" });


const Teapot = (res, message = undefined, data = undefined) => res.status(418).json({ message: message || "I'm a teapot", code: "E418", data });


const UnprocessabelEnitity = (res, message = undefined) => res.status(422).json({ message: message || "Unprocessable Entity", code: "E422" });


const TooManyRequest = (res, message = undefined) => res.status(429).json({ message: message || "Too many requests", code: "E429" });


// CUSTOM

const InvalidVerificationCode = (res) => res.status(400).json({ message: "Invalid Verification Code", code: "E460" });


const JWTExpired = (res) => res.status(401).json({ message: "JWT expired", code: "E461" });


const ValidationFailed = (res, error) => res.status(400).json({ message: "Validation Failed", code: "E480", error });


const EmailNotVerified = (res) => res.status(403).json({ message: "Email Not Verified", code: "E481" });


const ContentNotFound = (res, message = undefined) => res.status(404).json({ message: message || "Content Not Found", code: "E484" });


const InvalidLoginToken = (res) => res.status(401).json({ message: "Invalid Login Key", code: "E462" });

const ResourceNotFound = (res, message) => res.status(404).json({ message: message || "Resource Not Found", code: "E464" });


const StandardErrCodes = {
    "E400": "Bad Request Recieved",
    "E401": "Not Authroized",
    "E402": "Payment Required, Temporarily suspended",
    "E403": "Access forbidden",
    "E404": "Content Not Found",
    "E404": "Method Not Allowed",
    "E406": "Missing Headers.",
    "E409": "Resource Conflict",
    "E410": "Content Not Available Anymore",
    "E413": "Too Large Payload",
    "E415": "Uploaded Content Type is Not Supported",
    "E422": "Unprocessable Entity",
    "E429": "Too many requests",
}

const CustomErrCodes = {
    "E460": "Invalid Verification Code",
    "E480": "Validation Failed",
    "E481": "Email Not Verified",
    "E484": "Content Not Found"
}


module.exports = {
    ValidationFailed,
    BadRequest,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
    MethodNotAllowed,
    NotAcceptable,
    Conflict,
    Gone,
    TooLargePayload,
    UnsupportedMediaType,
    UnprocessabelEnitity,
    TooManyRequest,
    InvalidVerificationCode,
    JWTExpired,
    EmailNotVerified,
    ContentNotFound,
    InvalidLoginToken,
    ResourceNotFound,
    Teapot
}