import Grid from '@mui/material/Grid';
import CardInfo from './CardInfo';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Data} from './Interface';

interface IsConsult{
    isConsult : boolean;
    isFilterd : any;
    NotMobile : boolean;
}

export default function DealCard({isConsult, isFilterd, NotMobile} : IsConsult) {
    const [data, setData] = useState<Data[]>([]);
    const [filterData, setFilterData] = useState<Data[]>([]);

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:4000/requests');
            setData(res.data)
            setFilterData(res.data)
        } catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if(isConsult){
            const consult = data.filter((item) => item.status == '상담중');
            setFilterData(consult);
        }else if(isFilterd.method.length > 0 || isFilterd.material.length > 0){
            
                isFilterd.method.sort();
                isFilterd.material.sort();

                const filteredData = data.filter((item, idx) => {
                    if(isFilterd.method.length > 0){
                        if(item.method.sort().join(' ').includes(isFilterd.method.join(' '))){
                            return item;
                        }
                    }else if(isFilterd.material.length > 0){
                        if(item.material.sort().join(' ').includes(isFilterd.material.join(' '))){
                            return item;
                        }
                    }
                })
                
                setFilterData(filteredData);
            
                if(isFilterd.method.length > 0 && isFilterd.material.length > 0){

                    isFilterd.method.sort();
                    isFilterd.material.sort();

                    const bothFilterdData = data.filter((item, idx) => {
                        if(item.method.sort().join(' ').includes(isFilterd.method.join(' ')) && 
                        item.material.sort().join(' ').includes(isFilterd.material.join(' '))){
                            return item;
                        }
                    })
                    setFilterData(bothFilterdData);
                }
      
        }else{
            setFilterData(data);
        }
    }, [isConsult, isFilterd])

  return (
    <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        item
        lg={12} md={8} sm={6} xs={3} 
    >
     {filterData.map((item, idx) => <CardInfo key={idx} data={item} NotMobile={NotMobile} />)}
    </Grid>
  );
}
