import { createRoot } from 'react-dom/client'
import { FaBeer } from 'react-icons/fa'
import './index.css'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render( <App /> )
