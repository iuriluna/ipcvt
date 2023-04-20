import Router from './routes/Router';
import Menu from './components/Menu';
import MainArea from './components/MainArea';


function App() {
  return (
    <main>
      <Menu/>
      <MainArea/>
      <Router />
    </main>
  );
}

export default App;
