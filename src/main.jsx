// import './index.css'

// import App from './App.jsx'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
// import { PdfProvider } from './Pdfs/AdminDashBoard/PdfContextCurrent.jsx'
// import { PdfProviderPrevious } from './Pdfs/AdminDashBoard/PdfContextPrevious.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PdfProviderPrevious> */}
      {/* <PdfProvider> */}
        <App />
      {/* </PdfProvider> */}
    {/* </PdfProviderPrevious> */}
  </StrictMode>
);
