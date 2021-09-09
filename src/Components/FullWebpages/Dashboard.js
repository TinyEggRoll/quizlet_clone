import { useState, useEffect } from 'react'

import { useParams, useHistory } from 'react-router-dom'
import firebase from 'firebase'

import DashboardTopHeader from '../Fragments/DashboardTopHeader'
import TopNavBar from '../Fragments/TopNavBar'
import StudySets from '../Fragments/ViewOptions/StudySets'
import Folders from '../Fragments/ViewOptions/Folders'

import { useAuth } from '../../context/auth-context'

const Dashboard = () => {
    const [studySetList, setStudySetList] = useState([])
    const [uniqueKeyList, setUniqueKeyList] = useState([])

    const { currentUser } = useAuth()
    const { container } = useParams()

    useEffect(() => {
        const totalStudySets = firebase.database().ref('totalStudySets')
        totalStudySets.on('value', (snapshot) => {
            const tempList = []
            const tempUniqueKey = []

            const todos = snapshot.val()

            for (let id in todos) {
                tempUniqueKey.unshift(id)
                tempList.unshift(todos[id])
            }
            setStudySetList(tempList)
            setUniqueKeyList(tempUniqueKey)
        })
    }, [])

    return (
        <>
            <TopNavBar currentUser={currentUser} />
            <DashboardTopHeader currentUser={currentUser} />
            {container === 'sets' && <StudySets studySetList={studySetList} uniqueKeyList={uniqueKeyList} />}
            {container === 'folders' && <Folders />}
        </>
    )
}

export default Dashboard
