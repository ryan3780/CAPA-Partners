import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function EmptyRequests() {

  return (

        <Box
            sx={{
                width: 1130,
                minWidth : 320,
                height: 100,
                mt : 4,
                border : '1px solid #C2C2C2',
                boxSizing: 'border-box',
                borderRadius: '4px',
                padding: 5,
                fontSize : '14px',
                fontFamily : 'Noto Sans KR Regular',
                fontWeight : 400,
                color : '#939FA5'
            }}
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            > 
                조건에 맞는 견적 요청이 없습니다. 
            </Grid>
        </Box>
  );
}
