const ErrorMessages = [
  {
    code: 404,
    title: 'Error 404',
    subtitle: 'Oops! Page Not Be Found',
    body: 'Sorry but the page you are looking for does not exist.',
  },
  {
    code: 403,
    title: 'Error 403',
    subtitle: "You're not allowed to be here",
    body: "The page you're looking is forbidden.",
  },
  {
    code: 500,
    title: 'Error 500',
    subtitle: 'Houston, we have a problem!',
    body: 'The page you are looking for is temporarily unavailable.',
  },
];

function getErrorMessage(errCode) {
  const message = ErrorMessages.find((element) => element.code === errCode);
  return message;
}
export default getErrorMessage;
