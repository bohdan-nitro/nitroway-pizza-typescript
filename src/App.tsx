
import { Home, Cart, FullPizza } from "./pages";
import { Route, Routes } from "react-router-dom";
import ThanksPage from "./components/ThanksPage";
import MainLayout from './layouts/MainLayout';


function App() {
    return (
        //Версия с компонентом аутлет из реакт-роутер-дом которий является родителем для вложенних роутов нам нужен главний роут в котором будет лежать аутлет
        <Routes>
            <Route path='/' element={<MainLayout/>}>
            <Route path="cart" element={<Cart/>}  />
            <Route path="" element={<Home/>}  />
            <Route path="pizza/:userId" element={<FullPizza/>} />
            <Route path="thanks" element={<ThanksPage/>}  />
            </Route>
        </Routes>
    );
}

export default App;
