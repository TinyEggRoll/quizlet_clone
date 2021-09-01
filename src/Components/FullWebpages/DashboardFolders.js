import { useHistory } from 'react-router-dom'

import DashboardTopHeader from '../Fragments/DashboardTopHeader'
import TopNavBar from '../Fragments/TopNavBar'
import Folders from '../Fragments/ViewOptions/Folders'

import { useAuth } from '../../context/auth-context'

const DashboardFolders = () => {
    const { currentUser, logOut } = useAuth();
    const history = useHistory()
    console.log(currentUser);

    const logoutHandler = async () => {
        try {
            await logOut()
            history.push('/login')
        } catch {
            console.log("There is an error in dashboardJS!")
        }
    }
    return (
        <>
            <TopNavBar logoutHandler={logoutHandler} currentUser={currentUser} />
            <DashboardTopHeader currentUser={currentUser} />
            <Folders />
        </>
    )
}

export default DashboardFolders
