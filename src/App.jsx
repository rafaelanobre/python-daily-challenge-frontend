import './App.css'
import { ClerkProviderWithRoutes } from './auth/ClerkProviderWithRoutes.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
    return <ClerkProviderWithRoutes>
        <Routes>

        </Routes>
    </ClerkProviderWithRoutes>
}

export default App
