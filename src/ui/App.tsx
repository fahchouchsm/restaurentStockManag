import './App.css';

function App() {
  return (
    <>
      <button
        onClick={() => {
          console.log('full');
          window.Electron.ipcRenderer.send('action', 'fullScreen');
        }}
      >
        hello world
      </button>
    </>
  );
}

export default App;
