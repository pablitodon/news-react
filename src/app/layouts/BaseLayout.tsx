
import Header from "@/widgets/header/ui/Header/Header";
import { useTheme } from "../providers/ThemeProvider";
import { MainPage } from "@/pages/main";
import { Outlet } from "react-router-dom";

function BaseLayout() {
    const { isDark } = useTheme();
    return (
        <div className={`app ${isDark ? 'dark' : 'light'}`}>
            <Header />
            <div className='container'>
                <Outlet />
            </div>
        </div>


    )
}

export default BaseLayout 
