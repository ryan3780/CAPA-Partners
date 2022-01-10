import Header from './components/Header';
import Title from './components/Title';
import GridSelectAndSwitch from './components/GridSelectAndSwitch'
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';



function App() {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div className="App">
      
        <Header NotMobile={matches}/>
        <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      >
        <Title NotMobile={matches} />
        <GridSelectAndSwitch NotMobile={matches}/>
      </Grid>
    </div>
  );
}

export default App;
