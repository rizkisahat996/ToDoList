import {useAuthContext} from './useAuthContext'
import {useListsContext} from './useListsContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: listsDispatch } = useListsContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        listsDispatch({type: 'SET_LISTS', payload: null})
    }

    return {logout }
}