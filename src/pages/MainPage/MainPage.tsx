import { FC, useContext, useEffect, useState } from "react"
import styles from "./MainPage.module.scss"
import MenuComp from "../../components/MenuComp/MenuComp"
import { ThemeContext } from "../../context/themeContext"
import { PAGE_THEME } from "../../config/constants"
import SearchBlock from "../../components/SearchBlock/SearchBlock"
import * as FacilityApi from '../../services/facilities-api'
import { updateFacilities } from "../../redux/facility/facilitySlice"
import { useDispatch } from "react-redux"

const MainPage: FC = () => {
    const dispatch = useDispatch();
    const { currentTheme } = useContext(ThemeContext)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("main page mounted.")
        fetchFacilities()
    }, [])

    const fetchFacilities = async (page?: number, filter?: string) => {
        setLoading(true);
        await FacilityApi.getAllFacilities(page, filter)
        .then((res) => {
            console.log("== facilitiesList: ", res)
            dispatch(updateFacilities(res))
            setLoading(false);
        })
        .catch((e) => {
            console.log(e)
            setLoading(false);
        })
    }

    return (
        <>
            <div className={`container ${currentTheme==PAGE_THEME.DARK?'is-dark-mode':''}`}>
                <MenuComp />
                <div className={`${styles.mainPage}`}>
                    <SearchBlock 
                    loading={loading}
                    updateFacilitiesNext={fetchFacilities} 
                />
                </div>
            </div>
        </>
    );
};

export default MainPage;