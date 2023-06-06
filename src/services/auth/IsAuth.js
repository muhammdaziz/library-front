import AuthConsumer from "../../context/auth/AuthConsumer";

const IsAuth = ({children}) => {

    return(
        <AuthConsumer>
            {({isAuthenticated = false}) => {
                return isAuthenticated ? children : null;
            }}
        </AuthConsumer>
    )
}

export default IsAuth;