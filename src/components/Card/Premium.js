
import React from "react";
import './Premium.css'

function Premium(){
  const items = [{
    id: 1,
    name: 'Daily options recommendations',
  },
  {
    id: 2,
    name: 'Suggested strike prices for each symbol',
  },
  {
    id: 3,
    name: '8 recommended options strategies',
  },
  {
    id: 4,
    name: 'Grading system for better options trading',
  },
  {
    id: 5,
    name: 'Proprietary indicators',
  },
  ];
  const list = items.map(list =>
  <div className="listPremium">

  <li><svg className="iconSvg" xmlns="http://www.w3.org/2000/svg" width="22.903" height="19.395" fill="#0F9E5E">
    <path d="M22.903 2.828 20.075 0 6.641 13.435 3.102 9.09 0 11.616l6.338 7.779L22.903 2.828z"/></svg>{list.name}</li>
  </div>
  )
  return(
  <div className="cardPremium"
    style={{
      backgroundColor: 'rgb(191, 210, 227)',
      borderStyle: 'solid',
      width: 400,
      height: 450,
      borderColor:'#ff4d4f' ,
      borderWidth: '5px',
    }}
  >
    <span className="titleCard">Only $670/year</span><br></br>
    <bold className="titleCard subtitleCard">SAVE $134 ANNUALLY</bold>
    <ul>
      {list}
    </ul>
    <button className="btnButton">Premium</button>
  </div>
);


}

export default Premium;
