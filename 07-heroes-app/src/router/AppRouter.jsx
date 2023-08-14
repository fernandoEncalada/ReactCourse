import { Routes, Route, Navigate } from 'react-router-dom'

import { LoginPage } from '../auth';
import { Navbar } from '../ui';
import { HeroesRoutes } from '../heroes';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={ <LoginPage /> }></Route>
            <Route path='/*' element={ <HeroesRoutes /> }></Route>
        </Routes>
    </>
  )
}
