import { FC, useContext } from "react"
import styles from "./MainPage.module.scss"
import MenuComp from "../../components/MenuComp/MenuComp"
import { ThemeContext } from "../../context/themeContext"
import { PAGE_THEME } from "../../config/constants"
import SearchBlock from "../../components/SearchBlock/SearchBlock"

const MainPage: FC = () => {
    const { currentTheme } = useContext(ThemeContext)
    return (
        <>
            <div className={`container ${currentTheme==PAGE_THEME.DARK?'is-dark-mode':''}`}>
                <MenuComp />
                <div className={`${styles.mainPage}`}>
                    <SearchBlock />
                </div>
            </div>
        </>
    );
};

export default MainPage;