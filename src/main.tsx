import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from "./components/ui/layout.tsx";
import BuyerPage from "./pages/buyer-page.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
        <Layout>
         <BuyerPage/>
        </Layout>
)
