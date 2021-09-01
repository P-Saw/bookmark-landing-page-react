const Validation = (mail) => {
  let error = "";

  if (!mail) {
    error = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(mail)) {
    error = "Whoops, make sure it's an email!";
  }
  return error;
};

export default Validation;
