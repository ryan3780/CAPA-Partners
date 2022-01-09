import Header from './components/Header'
import Title from './components/Title'
import GridSelectAndSwitch from './components/GridSelectAndSwitch'
import useMediaQuery from '@mui/material/useMediaQuery';


function App() {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div className="App">
      <Header NotMobile={matches}/>
      <Title NotMobile={matches} />
      <GridSelectAndSwitch NotMobile={matches}/>
    </div>
  );
}

export default App;
