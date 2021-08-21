import firebase from '../firebase/firebase-config'
import { useContext } from 'react';

const socialMediaAuth = (provider) => {
    return firebase.auth().signInWithPopup(provider).then((res) => {
        return res.user;
    })
        .catch((er) => {
            return er;
        })
}

export default socialMediaAuth
