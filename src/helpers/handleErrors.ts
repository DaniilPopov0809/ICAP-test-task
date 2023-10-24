type ErrorMessageList = {
  [status: number]: string;
};
const errorMessageList: ErrorMessageList = {
    400: "Bad Request",
    401: "User unauthorized",
    403: "You not access",
    404: "Not found",
    409: "Conflict",
    500: "Oops something wrong"
  }
  
  const handleErrors = (status: number) => {
    const message = errorMessageList[status];
    return message;
  };
  
export default handleErrors;