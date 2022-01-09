import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import {Data} from './Interface';
import Chip from '@mui/material/Chip';


function Details(detailData:any[]){
    const detailNames:string[] = ['도면개수', '총 수량', '가공방식', '재료'];

    const list = detailNames.map((item, idx) => 
    <Grid
      key={idx}
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Typography
          sx={{
          minWidth : 70,
          height : 20,
          mr : 4,
          fontFamily : 'Noto Sans KR Regular',
          fontWeight : 400,
          fontSize : 14,
          lineHeight : '20px',
          color : '#323D45',
          mb : 1
          }}
      >
      {item} 
      </Typography>
      <Typography
        sx={{
        minHeight : 20,
        fontFamily : 'Noto Sans KR Bold',
        fontWeight : 700,
        fontSize : 14,
        lineHeight : '20px',
        color : '#323D45',
        mb : 1
        }}
      >
      {detailData[idx]}
      </Typography>
    </Grid>)

    return list
}

interface data{
    data : Data;
    NotMobile : boolean;
}

export default function BasicCard({data, NotMobile} : data) {

    const count = data.count ? data.count : data.docs;
    const detailData = [`${count}개`, `${data.amount}개`, data.method.join(', '), data.material.join(', ')];
    const maxWidth = NotMobile ? 366 : 320;
    const divider = NotMobile ? 344 : 288;

  return (
    <Card 
      sx={{ 
        minWidth: maxWidth,
        width : maxWidth, 
        mr : '16px', 
        mb : '16px', 
        "&:hover": {
          border: "1px solid #2196F3",
          cursor : "pointer"
        },
        border : "1px solid #E5E5E5",
        boxShadow : 0
      }}>
      <CardContent>
        <Typography 
            sx={{ 
            fontSize: 16, 
            fontFamily : 'Noto Sans KR Bold',
            fontWeight : 700,
            minWidth : '125px',
            minHeight : '24px',
            mb : '4px',
            display : 'flex',
            justifyContent: 'space-between' 
            }} 
            color="#323D45"
            component={'span'}
            >
          {data.title}
          {data.status === '상담중' ? <Chip label="상담중" color="warning" variant="outlined" sx={{height : 24}} /> : ''}
        </Typography>
        <Typography 
            sx={{
            minWidth : 51,
            minHeight: 20,
            fontFamily : 'Noto Sans KR Medium',
            fontWeight : 500,
            fontSize : 14,
            lineHeight : '20px',
            mb : '24px'
            }}>
          {data.client}
        </Typography>
        <Typography 
            sx={{
            minWidth : 125,
            minHeight : 20,
            fontFamily : 'Noto Sans KR Regular',
            fontWeight : 400,
            fontSize : 14,
            lineHeight : '20px',
            color : '#939FA5',
            mb : '16px'
            }}>
            {data.due}
        </Typography>
        <Divider sx={{mb : 4, width : divider}} />
        {Details(detailData)}
      </CardContent>
      <CardActions sx={{paddingLeft : 0}}>
        <Button variant="contained" sx={{backgroundColor : '#2196F3', ml: 2, padding : '6px 12px'}}>요청 내역 보기</Button>
        <Button variant="outlined">채팅하기</Button>
      </CardActions>
    </Card>
  );
}
