import AuthConsumer from "../../context/auth/AuthConsumer";

const IsGuest = ({children}) => {

    return(
        <AuthConsumer>
            {({isAuthenticated = false}) => {
                return isAuthenticated ? children : null;
            }}
        </AuthConsumer>
    )
}

export default IsGuest;