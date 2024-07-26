export const checkValidateData = (email, password) => {

    if (email === "" || password === "") return "Enter valid email or password"
     
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isEmailValid || !isPasswordvalid) return "Email or Password is not valid"

    return null;
}