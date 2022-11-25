import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

const App = ({children}) => {

  return (
    <div className="root-main">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default App
