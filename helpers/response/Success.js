// 2xx, if everything was okay,
// 3xx, if the resource was moved,
// 4xx, if the request cannot be fulfilled because of a client error (like requesting a resource that does not exist),
// 5xx, if something went wrong on the API side (like an exception happened).

const Success = (res, message = undefined, data = undefined) => res.status(200).json({ message: message || "Request Success", code: "S200", data });

const Created = (res, message = undefined, data = undefined) => res.status(201).json({ message: message || "Resource Created", code: "S201", data });

const Accepted = (res, message = undefined, data = undefined) => res.status(202).json({ message: message || "We have recieved your request, We will Process it ASAP", code: "S202", data });

const NoContent = (res, message = undefined, data = undefined) => res.status(204).json({ message: message || "No Such Content", code: "S204", data });

const PartialContent = (res, message = undefined, data = undefined) => res.status(206).json({ message: message || "Sending Partial Info", code: "S206", data });

const AlreadyReported = (res, message = undefined, data = undefined) => res.status(208).json({ message: message || "Already Reported", code: "S208", data });


const StandardSuccessCodes = {
    "S200": "Request Success",
    "S201": "Resource Created",
    "S202": "We have recieved your request, We will Process it ASAP",
    "S204": "No Such Content",
    "S206": "Sending Partial Info",
    "S208": "Already Reported"
}

const CustomSuccessCodes = {

}


module.exports = {
    Success,
    Created,
    Accepted,
    NoContent,
    PartialContent,
    AlreadyReported,

}