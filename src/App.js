import {Routes,Route} from "react-router-dom"
import {MainLayouts} from "./Layouts";
import {AboutPage, HomePage, PostsPage, SinglePostPage, UsersPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayouts/>}>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}/>
                </Route>
                <Route path={'/about'} element={<AboutPage/>}/>
                </Route>
        </Routes>
    )
}
export default App;
