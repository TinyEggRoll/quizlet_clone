import { useParams, useHistory } from 'react-router-dom'

import DashboardTopHeader from '../Fragments/DashboardTopHeader'
import TopNavBar from '../Fragments/TopNavBar'
import StudySets from '../Fragments/ViewOptions/StudySets'
import Folders from '../Fragments/ViewOptions/Folders'

import { useAuth } from '../../context/auth-context'

const Dashboard = () => {
    const { currentUser } = useAuth()
    const { container } = useParams()

    return (
        <>
            <TopNavBar currentUser={currentUser} />
            <DashboardTopHeader currentUser={currentUser} />
            {container === 'sets' && <StudySets />}
            {container === 'folders' && <Folders />}

        </>
    )
}

export default Dashboard
