import Button from './components/Button';

function App() {
  return (
    <div>
      <h1>Isso é um teste para button</h1>
      <Button
        colorBorder={'green'}
        fontColor={'green'}
        title={'teste'}
        stroked={true}
        sizeText={'14px'}
      />
    </div>
  );
}

export default App;
