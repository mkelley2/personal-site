export const isValidEmail = (email) => {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

export const isPasswordValid = (pass) => {
    return pass.length > 6;
}

export const isNotEmpty = (field) => {
    return {
      valid: (field && field.value.replace(/\s+/, '').length),
      errorText: field.fieldName + " is required"
    };
}

export const isValidUrl = (field) => {
    return {
      valid: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(field.value),
      errorText: "Invalid URL"
    };
}

export const isValidPhone = (field) => {
    return {
      valid: /^\b\d{3}[-.]?\d{3}[-.]?\d{4}\b$/i.test(field.value),
      errorText: "Invalid Phone Number"
    };
}

export const fieldsMatch = (fields) => {
    return {
      valid: fields[0].value === fields[1].value,
      errorText: fields[0].fieldName + " must match " + fields[1].fieldName
    }
}

export const isValidDate = (field) => {
    return {
      valid: (field.value instanceof Date && !isNaN(field.value)),
      errorText: field.fieldName + " is invalid"
    };
}

export const isOlderThan = (field, minAge) => {
    let today = new Date(),
      birthDate = new Date(field.value),
      age = today.getFullYear() - birthDate.getFullYear(),
      m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return {
      valid: age >= minAge,
      errorText: `Must be at least ${minAge} years old`
    }
}
