import React from 'react';
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import Memo from './memoized';

const AppRouter = () => (
  <Router>
  <Routes>
    <Route path="/" element={<Memo/>} />
</Routes>
</Router>
)

export default AppRouter