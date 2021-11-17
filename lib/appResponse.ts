function formatMessage(objectOrMessage:any) {
	if (typeof objectOrMessage === "string") return objectOrMessage;

	if (typeof objectOrMessage === "object" && objectOrMessage.message) {
		return objectOrMessage.message;
	}

	return "";
}
type result = {
    message: string | number | {},
    data: string | number | {},
    success: boolean
}
function createResponse(objectOrMessage:any, data:{}, success = null): result {
	return {    
		message: formatMessage(objectOrMessage),
		data,
		success: success === null ? true : success,
		
	};
}

export default createResponse;
