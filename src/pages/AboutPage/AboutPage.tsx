import { FC, useContext } from "react"
import styles from "./AboutPage.module.scss"
import MenuComp from "../../components/MenuComp/MenuComp"
import { ThemeContext } from "../../context/themeContext";
import { PAGE_THEME } from "../../config/constants";

const AboutPage: FC = () => {
    const { currentTheme } = useContext(ThemeContext)
    
    return (
        <div className={`about-page ${currentTheme==PAGE_THEME.DARK?'is-dark-mode':''}`}>
            <MenuComp />
            <div>
                About Page
            </div>
        </div>
    );
};

export default AboutPage;