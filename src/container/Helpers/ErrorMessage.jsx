const ErrorMessage = ({errors, type}) => {
    return (
        <p className="Auth-for-error">*{errors[type].message}</p>
    )
}

export default ErrorMessage