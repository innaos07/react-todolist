import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';


function App() {

    return (
        <div className='container'>
            <div className='todo__wrapper'>
                <Header/>
                <Main/>
            </div>
        </div>
    );
}

export default App;
