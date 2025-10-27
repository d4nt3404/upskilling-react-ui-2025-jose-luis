export function validate_username(username: string): string{
    if(!username.trim()){
        return "Username is required";
    }
    return "";
}

export function validate_email(email: string): string{
    if(!email.trim()){
        return "Email is required";
    }
    return "";
}