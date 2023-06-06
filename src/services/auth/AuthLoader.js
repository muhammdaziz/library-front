import InitialLoader from "../initialLoader";
import Consumer from "../../context/auth/AuthConsumer";

const AuthLoader = ({children}) => {

    return(
        <Consumer>
            {({isFetched = false}) => {
                return isFetched ? children : <InitialLoader/>
            }}
        </Consumer>
    )
}

export default AuthLoader;