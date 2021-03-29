module.exports.give_response = function (res,data_to_send) {

    let data = data_to_send.data;
    let status_code  = data_to_send.status_code;
    res.status(status_code).json(data); 
    
}