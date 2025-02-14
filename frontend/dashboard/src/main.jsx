
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { MyProvider } from './contest/MyProvider.jsx';

createRoot(document.getElementById('root')).render(
<MyProvider>


    <BrowserRouter>
    <App />
   </BrowserRouter>
   </MyProvider>

)
