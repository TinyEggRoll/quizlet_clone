import { useHistory } from 'react-router-dom'

import { useAuth } from '../../context/auth-context'

const Temp = () => {
    const { currentUser } = useAuth();
    const history = useHistory()

    // Redirects to create URL | Eliminates White Space Between (F & L) name -> localhost:3000/_USERNAME_ 
    history.push('/' + currentUser.displayName.replace(/ /g, '') + '/view/sets')

    return (<></>)
}

export default Temp
