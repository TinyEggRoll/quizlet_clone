import { useState, useEffect } from 'react'

import { useParams, useHistory } from 'react-router-dom'

import DashboardTopHeader from '../Fragments/DashboardTopHeader'
import TopNavBar from '../Fragments/TopNavBar'
import StudySets from '../Fragments/ViewOptions/StudySets'
import Folders from '../Fragments/ViewOptions/Folders'

import { useAuth } from '../../context/auth-context'
import firebase from 'firebase'
import { AiOutlineConsoleSql } from 'react-icons/ai'

const Dashboard = () => {
    const [studySetList, setStudySetList] = useState()
    const [uniqueKeyList, setUniqueKeyList] = useState()

    useEffect(() => {
        const totalStudySets = firebase.database().ref('totalStudySets')
        totalStudySets.on('value', (snapshot) => {
            const tempList = []
            const tempUniqueKey = []

            const todos = snapshot.val()

            for (let id in todos) {
                tempUniqueKey.push(id)
                tempList.push(todos[id])
            }
            setStudySetList(tempList)
            setUniqueKeyList(tempUniqueKey)
        })
    }, [])


    const { currentUser } = useAuth()
    const { container } = useParams()

    return (
        <>
            <TopNavBar currentUser={currentUser} />
            <DashboardTopHeader currentUser={currentUser} />
            {container === 'sets' && <StudySets uniqueKeyList={uniqueKeyList} studySetList={studySetList} currentUser={currentUser} />}
            {container === 'folders' && <Folders currentUser={currentUser} />}
        </>
    )
}

export default Dashboard
