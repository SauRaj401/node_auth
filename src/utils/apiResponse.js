// import {Response} from "express";


// /*
//     * @class ApiResponse
//     * @description Api response class
//     * @param {number} statusCode - HTTP status code
//     * @param {string} message - Response message
//     * @param {object} data - Response data
//     * @param {array} errors - Response errors
//     * @returns ApiResponse
//     * 
// */

class ApiResponse {
    constructor(statusCode, message, data, errors) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.errors = errors;
    }

    // Send success response
    send(res) {
        return res.status(this.statusCode).json({
            message: this.message,
            data: this.data,
            errors: this.errors
        });
    }

    // Send error response
    sendError(res) {
        return res.status(this.statusCode).json({
            message: this.message,
            errors: this.errors
        });
    }
}