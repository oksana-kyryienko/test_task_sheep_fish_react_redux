import './App.css';
import { userSlice } from './store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { useEffect } from 'react';
import { fetchUsers } from './store/reducers/ActionCreators';


function App() {

  const dispatch = useAppDispatch()
  const { users, isLoading, error } = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers())

  }, [])
  return (
    <div>
      {JSON.stringify(users)}
  
    </div>
  );
}

export default App;
