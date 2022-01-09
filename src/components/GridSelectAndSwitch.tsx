import SelectBoxAndSwitch from './SelectBoxAndSwitch';
import {NotMobile} from './Interface';
import Grid from '@mui/material/Grid';


export default function Main({NotMobile} : NotMobile) {

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      sx={{
      maxWidth : '1440px', 
      height : '1050px'
      }}
    >
    <SelectBoxAndSwitch NotMobile={NotMobile} />
    </Grid>
  );
}
