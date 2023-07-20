import React, { useState, useEffect } from 'react'
import { slice } from 'lodash';
import Test from './shared/industries-data.json';
import { MyDiv } from '../Common/Common';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Posts() {
  const [value,setValue]=useState('option-1');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e);
  }
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(5)
  const initialPosts = slice(Test, 0, index)

  const loadMore = () => {
    setIndex(index + 5)
    console.log(index)
    if (index >= Test.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
  useEffect(() => {
  //  getData()
  }, [])
  return (
    <div>
        <DropdownButton alignRight title={value} id="dropdown-menu-align-right" onSelect={handleSelect} >

        <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>

        <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>

        <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>

        <Dropdown.Divider />

        <Dropdown.Item eventKey="some link">some link</Dropdown.Item>

</DropdownButton>

{/* <h4>You selected {value}</h4> */}

  { value == "option-1" ?  
    <MyDiv className='sssa'>
    <h1>pooja</h1>
    </MyDiv>:""}

    { value == "option-2" ?  
    <MyDiv className='sssb'>
    <h1>krithi</h1>
    </MyDiv>:""}



    {/* {value == "option-1"  ? (
        <MyDiv className='sssa'>
    <h1>pooja</h1>
    </MyDiv>
      ) : (
        <>
          <h1> Hi!, New User </h1>
          <h3> Welcome to our palace </h3>
        </>
      )} */}


    { value == "option-1"  ? 
       <MyDiv className='sssa'>
       <h1>pooja3</h1>
       </MyDiv>
          : value == "option-2" ? 
          <MyDiv className='sssa'>
       <h1>poojasssswsaaa</h1>
       </MyDiv>:"" }
















      {initialPosts.map((item, index ) => {
        return (
          <div
            className="mb-3 card "  key={item.index}
          >
            <div className="card-body">{item.title}</div>
            {/* <img alt="timer" src={require('../assets/img/industries/industries-desktop1.png')} />
            <img className="arrow-icon" src={item.post_images} alt="arrow icon"/> */}
            {/* <img alt="timer" src={require('../assets/img/industries/'+ item.post_images)} /> */}
            {item.applist}
            {/* <span>
              {item.Type}
            </span>*/}

            {item.Type.split(',').map((cat_type)=> <h1>{cat_type}</h1>)} 

            {item.Type.split(',').map((step, i) => (
            <span>
                
                  {i > 0 && ""}

                  {step}
                
            </span>
 ))}


            {/* {item.Type.map((items, i) => {

                return <li key={i}>{items}</li>

               })} */}

          </div>
        )
      })}
      <div className="mt-3 mb-5">
        {isCompleted ? (
          <button
            onClick={loadMore}
            type="button"
            className="btn  disabled"
          >
            That's It
          </button>
        ) : (
          <button onClick={loadMore} type="button" className="btn ">
            Load More +
          </button>
        )}
      </div>
    </div>
  )
}
export default Posts;