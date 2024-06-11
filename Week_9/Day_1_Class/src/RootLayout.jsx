import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function RootLayout()
    {
        return(
        <div>
            <Header />
            {/* Dynamic content*/ }
            <Footer />
        </div>
        )
    }
export default RootLayout;