import React, { useEffect, useState } from 'react';
import './pagi.css'

const Pagination = ({count, numberOfRecord,onChangePage, lostOfRecord=[5,10]}) => {
    const[page, setPage] = useState(1);
    const [pageNum, setPageNum] = useState([])
    const [numOfRecord, setNumOfRecord]=useState(numberOfRecord);
    

    useEffect(()=>{
        const lastPage = Math.ceil(count/ numOfRecord)
        const tempPageNum = new Array(lastPage).fill(1).map((item,ind)=> ind+1)
        setPageNum([...tempPageNum])
        setPage(1)
    },[count, numOfRecord,numOfRecord])
    const handelPageChange=(value)=>{
        setPage(value)
        onChangePage(value,numOfRecord)
    }
    const handelRecord=(e)=>{
        setNumOfRecord(e.target.value)
        onChangePage(value,numOfRecord)
    }

    return (
        <div className='pagiContainer'>
          {page !=1 &&  <button  onClick={()=> handelPageChange(page-1)}> Pri</button>}
            {
                pageNum.map((item)=> (
                     <p className={page == item ? 'Active' :''} onClick={()=> handelPageChange(item)} key={item}> {item}</p>
                    ))
            }
           {page != pageNum.at(-1) &&  <button onClick={()=> handelPageChange(page+1)}> Nex</button>}
           <div className="info">
            {page * numOfRecord -numOfRecord+1} to {page * numOfRecord >count ? count:  page * numOfRecord} of {count}
           </div>

           <div className="handelRecord">
            <select defaultValue={numOfRecord} onChange={handelRecord}>
                {lostOfRecord.map((item)=>(
                    <option key={item} >{item}</option>
                ))}
            </select>
           </div>

        </div>
    );
}

export default Pagination;
