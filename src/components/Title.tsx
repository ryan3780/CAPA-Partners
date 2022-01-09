import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {NotMobile} from './Interface';


export default function Title({NotMobile}:NotMobile) {
  const ml = NotMobile ? '155px' : '20px';
  return (
    <Box sx={{ width: '100%'}}>
        <Typography  
          gutterBottom 
          component="div" 
          mt={5} 
          ml={ml} 
          mb={0} 
          sx={{width: '320px',
              height: '32px',
              fontFamily: 'Noto Sans KR Bold',
              fontSize: '20px',
              lineHeight: '32px',
              fontWeight : 600
              }}
         >
          들어온 요청
        </Typography>
        <Typography  
          gutterBottom 
          component="div"  
          ml={ml}
          sx={{width: '320px',
          height: '24px',
          fontFamily: 'Noto Sans KR Regular',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight : 400
          }}>
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </Typography>
    </Box>
  );
}
