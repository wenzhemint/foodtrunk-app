import { FC } from "react"
import styles from "./AboutPage.module.scss"
import MenuComp from "../../components/MenuComp/MenuComp"

const AboutPage: FC = () => {
    return (
        <div className="about-page">
            <MenuComp />
            <div className="content">
                About Page
            </div>
        </div>
    );
};

export default AboutPage;