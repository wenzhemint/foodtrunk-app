import { FC } from "react"
import styles from "./MainPage.module.scss"
import Menu from "../../components/Menu/Menu"


const MainPage: FC = () => {
    return (
        <div className="main-page">
            <Menu />
            <div className="content">
                Main Page
            </div>
        </div>
    );
};

export default MainPage;