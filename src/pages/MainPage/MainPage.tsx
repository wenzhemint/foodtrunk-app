import { FC, useContext } from "react"
import styles from "./MainPage.module.scss"
import MenuComp from "../../components/MenuComp/MenuComp"
import { ThemeContext } from "../../context/themeContext"
import { PAGE_THEME } from "../../config/constants"

const MainPage: FC = () => {
    const { currentTheme } = useContext(ThemeContext)
    return (
        <div className={`main-page ${currentTheme==PAGE_THEME.DARK?'is-dark-mode':''}`}>
            <MenuComp />
            <div>
                Main Page
            </div>
        </div>
    );
};

export default MainPage;