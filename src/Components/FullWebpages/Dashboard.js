import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import firebase from 'firebase'

import DashboardTopHeader from '../Fragments/DashboardTopHeader'
import TopNavBar from '../Fragments/TopNavBar'
import StudySets from '../Fragments/ViewOptions/StudySets'
import Folders from '../Fragments/ViewOptions/Folders'
import { useAuth } from '../../context/auth-context'

const Dashboard = () => {
    const [studySetList, setStudySetList] = useState([])
    const { currentUser } = useAuth()
    const { container } = useParams()

    useEffect(() => {
        const totalStudySets = firebase.database().ref('users/' + currentUser.uid + '/totalStudySets')
        totalStudySets.get().then((snapshot) => {
            const firebaseSet = snapshot.val()
            const tempList = []

            for (let id in firebaseSet) {
                const temp = firebaseSet[id]
                temp.id = id
                tempList.unshift(temp)
            }
            setStudySetList(tempList)
        })
    }, [])

    return (
        <>
            <TopNavBar currentUser={currentUser} />
            <DashboardTopHeader currentUser={currentUser} />
            {container === 'sets' && <StudySets studySetList={studySetList} />}
            {container === 'folders' && <Folders />}
        </>
    )
}

export default Dashboard
