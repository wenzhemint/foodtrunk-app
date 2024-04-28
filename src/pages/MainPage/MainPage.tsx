import { FC, useContext, useEffect, useState } from "react"
import styles from "./MainPage.module.scss"
import MenuComp from "../../components/MenuComp/MenuComp"
import { ThemeContext } from "../../context/themeContext"
import SearchBlock from "../../components/SearchBlock/SearchBlock"
import * as FacilityApi from '../../services/facilities-api'
import { updateFacilities } from "../../redux/facility/facilitySlice"
import { useDispatch } from "react-redux"
import { PAGE_THEME, NETWORK_ERROR } from "../../utils/helpers/constants"

const MainPage: FC = () => {
    const dispatch = useDispatch();
    const { currentTheme } = useContext(ThemeContext)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [errMessage, setErrMessage] = useState('')

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
            setLoading(false)
            setError(false)
        })
        .catch((e) => {
            console.log("== error: ")
            console.log(e)
            if(e==NETWORK_ERROR) {
                console.log("== Network Error occured. ")
                setErrMessage(NETWORK_ERROR)
            }
            setLoading(false)
            setError(true)
        })
    }

    return (
        <>
            <div className={`container ${currentTheme==PAGE_THEME.DARK?'is-dark-mode':''}`}>
                <MenuComp />
                <div className={`${styles.mainPage}`}>
                    <SearchBlock 
                    loading={loading}
                    error={error}
                    errMessage={errMessage}
                    updateFacilitiesNext={fetchFacilities} 
                />
                </div>
            </div>
        </>
    );
};

export default MainPage;