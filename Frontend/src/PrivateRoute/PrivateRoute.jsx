
import { Route,Redirect} from "react-router-dom";



export const PrivateRoute = ({ path, children }) => {

    let result = localStorage.getItem('firstname');
    result = JSON.parse(result);
    
    if(result===null){
        return <Redirect to ="/signup"/>
    }

    return <Route path={path}>
        {children}
    </Route>

}