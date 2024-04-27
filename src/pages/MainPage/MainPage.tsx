import { FC } from "react"
import styles from "./MainPage.module.scss"
import MenuComp from "../../components/MenuComp/MenuComp"

const MainPage: FC = () => {
    return (
        <div className="main-page">
            <MenuComp />
            <div className="content">
                Main Page
            </div>
        </div>
    );
};

export default MainPage;