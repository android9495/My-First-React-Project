import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Fragment} from "react";
import routes from "./configs/routes";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route,key) => {
                        const {layout,element,...props} = route;
                        const Layout = layout ? layout : Fragment;
                        return <Route key={key} {...props} element={<Layout>{element}</Layout>}/>
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}
export default App;