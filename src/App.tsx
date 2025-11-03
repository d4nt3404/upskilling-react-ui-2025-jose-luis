import { useRoutes } from 'react-router-dom'
import './App.css'
import { appRoutes } from './routes/routes.tsx'
import { Suspense } from 'react';


function App() {
  const routing = useRoutes(appRoutes);
 return (
  <>
    <h1>Accenture Movies</h1>
    <hr/>
    <Suspense fallback={<p>Loading...</p>}>{routing}</Suspense>
    {routing}
  </>
 )
}
 
export default App
