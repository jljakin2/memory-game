const validateForm = values => {
  let errors = {};

  // is the name missing?
  if (!values.name.trim()) {
    errors.name = "Name is missing";
  }

  // is the email missing?
  if (!values.email.trim()) {
    errors.email = "Email is missing";
    // is the email in the correct format?
  } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
    errors.email = "Must be a valid email address";
  }

  // is the subject missing?
  if (!values.subject.trim()) {
    errors.subject = "Subject is missing";
  }

  // is the message missing?
  if (!values.message.trim()) {
    errors.message = "Message is missing";
  }

  return errors;
};

export default validateForm;
