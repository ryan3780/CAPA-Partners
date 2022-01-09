import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import CardList from './CardList';
import { useState, useEffect } from 'react';
import {NotMobile} from './Interface';


const ITEM_HEIGHT = 80;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 130,
    },
  },
};

const names = [
  '밀링',
  '선반'
];
const sources = [
    '알루미늄',
    '탄소강',
    '구리',
    '합금강',
    '강철'
];

export default function MultipleSelectCheckmarks({NotMobile} : NotMobile) {
  const [method, setMethod] = useState<string[]>([]);
  const [source, setSource] = useState<string[]>([]);
  const [isConsult, setIsConsult] = useState<boolean>(false);
  const [isFilterd, setIsFilterd] = useState<object>({method : '', material : ''});
  const [isSelected, setIsSelected] = useState<boolean>(false);
  
  useEffect(()=>{

    setIsFilterd({
      method : method,
      material : source
    })
    
  },[method, source])

  const handleMethodChange = (event: SelectChangeEvent<typeof method>) => {
    const {
      target: { value },
    } = event;

    setMethod(
      typeof value === 'string' ? value.split(',') : value,
    );
    setIsSelected(true);
  };

  const handleSourceChange = (event: SelectChangeEvent<typeof source>) => {
    const {
      target: { value },
    } = event;

    setSource(
      typeof value === 'string' ? value.split(',') : value,
    );
    setIsSelected(true);
  };

  const handleReset = (event: React.MouseEvent<HTMLInputElement>) => {

    setMethod([])
    setSource([])
    setIsSelected(false)

  };
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {

    setIsConsult(!isConsult);

  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const mr = NotMobile ? '155px' : '20px';

  return (
    <Box sx={{ flexGrow: 1, ml: mr, width : '320px'}}>
        <Grid
          container
          direction="row"
          alignItems="center"
          sx={{mt:4}}
        >
      <FormControl>
        <Select
          sx={{
            height : 40, 
            "&:hover": {
            "&& fieldset": {
              border: "1px solid #2196F3"
            }
          }}}
          multiple
          displayEmpty
          value={method}
          onChange={handleMethodChange}
          renderValue={() => '가공방식'}
          MenuProps={MenuProps}
        >
          
          {names.map((name) => (
            <MenuItem  key={name} value={name}>
              <Checkbox checked={method.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width:'100px', mr : 3}}>
          <Select
            sx={{height : 40, 
              "&:hover": {
              "&& fieldset": {
                border: "1px solid #2196F3"
              },
              
            }}}
            multiple
            displayEmpty
            value={source}
            onChange={handleSourceChange}
            renderValue={() => source.length === 0 ? `재료` : `재료(${source.length})`}
            MenuProps={MenuProps}
          >
          {sources.map((itme) => (
            <MenuItem key={itme} value={itme} sx={{ml:'-0.9rem'}}>
              <Checkbox checked={source.indexOf(itme) > -1} />
              <ListItemText primary={itme} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {isSelected ? 
      <Box
        onClick={handleReset}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          "&:hover": {
            cursor : "pointer"
          },
        mt : 3, 
        mb : 3
        }} 
      >
      <RefreshIcon sx={{color: '#2196F3', ml : '24px', mr : '12px'}} />
      필터링 리셋
      </Box> : ''}
      
      <Box
        flexGrow={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      />
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        sx={{mr : mr}}
      > 
        <Switch {...label}  onChange={handleToggle} />
        상담 중인 요청만 보기
      </Box>
      </Grid>
      <CardList isConsult={isConsult} isFilterd={isFilterd} NotMobile={NotMobile}/>
    </Box>
      
  );
}
