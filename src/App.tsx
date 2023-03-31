import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { useEffect } from 'react';
import * as usersActions from './store/reducers/UserSlice';
import { users } from './store/reducers/UserSlice';

function App() {

  const dispatch = useAppDispatch();
  const allUsers = useAppSelector(users);

  useEffect(() => {
    dispatch(usersActions.init());

  }, [dispatch])
  return (
    <div>
      {JSON.stringify(allUsers)}

    </div>
  );
}

export default App;