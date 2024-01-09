import React, { useEffect, useState } from 'react'
import { PermissionProvider } from '../Helper/Context'
import { getToken } from '../assets/auth/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { Routes } from '../router/routes'
import toast from 'react-hot-toast'
// import { getReq } from '../assets/auth/jwtService'

const PermissionWrapper = ({children}) => {
    const defaultData = {
        appName: '',
        multipleDomain: [],
        apiKey: '',
        installedApps: [],
        campaign: [],
        isSupport: false,
        isAdmin: false,
        currencySymbol: "₹"
    }
    const [userPermission, setUserPermission] = useState(localStorage.getItem('userPermission') ? JSON.parse(localStorage.getItem('userPermission')) : defaultData)
    const location = useLocation()
    const navigate = useNavigate()

    // let callbackChild = children
    //  console.log(callbackChild)
    // useEffect(() => {
    //     console.log("calling")
    //     callbackChild = children
    // }, [userPermission.apiKey, reloader])

    useEffect(() => {
        // console.log(userPermission, "changed")
        if (getToken()) {
            localStorage.setItem('userPermission', JSON.stringify(userPermission))
        }
        
    }, [userPermission])

    useEffect(() => {
        // let isMounted = true
        if (getToken()) {
            console.log("Not Mounted", "Route Permission")
            // if (isMounted) {
                const currentRoute = Routes?.filter((curRoute) => {
                    return curRoute?.path.toLowerCase() === location?.pathname.toLowerCase()
                })
                console.log(currentRoute[0]?.app, "Route Permission")
    
                if (currentRoute[0]?.app) {
                    if (userPermission?.installedApps?.includes(currentRoute[0]?.app)) {
                        console.log("INSTALLED", "Route Permission")
                        setUserPermission({...userPermission, appName: currentRoute[0]?.app})
                    } else {
                        console.log("NOT INSTALLED", "Route Permission")
                        toast.error("You don't have access of that App")
                        navigate("/merchant/apps/")
                    }
    
                }
            // }
        }
        const params = new URLSearchParams(location.search)
        if (params.get('aft_no')) {
            localStorage.setItem('aft_no', params.get('aft_no'))
        }

        // if (params.get('aft_no') && localStorage.getItem('aft_no')) {
        //     affiliateTracking(params.get('aft_no') ? params.get('aft_no') : localStorage.getItem('aft_no'))
        // }

        // return () => { isMounted = false }
    }, [location])

    // console.log(multipleDomain)

    return (
        <PermissionProvider.Provider value={{ userPermission, setUserPermission}}>
            {children}
        </PermissionProvider.Provider>
    )
}

export default PermissionWrapper