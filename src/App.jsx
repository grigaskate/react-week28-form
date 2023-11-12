import Form from './components/Form/Form';
import './style/App.css';

function App() {
  return (
    <div className="App">
        <div>
          <p className="title">Сервис комментариев со спам фильтром</p>
        </div>
        < div className="body">
            <Form/>
        </div>
    </div>
  );
}

export default App;
