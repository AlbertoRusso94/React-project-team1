
import React from "react";
import './Standard.css'

function Standard() {
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
  <>
  <li><svg className="iconSvg" xmlns="http://www.w3.org/2000/svg" width="22.903" height="19.395" fill="#0F9E5E">
    <path d="M22.903 2.828 20.075 0 6.641 13.435 3.102 9.09 0 11.616l6.338 7.779L22.903 2.828z"/></svg>{list.name}</li>
  </>
)
  return (
    <div className="cardPremium"
      style={{
        width: 400,
        height: 450,
        borderColor:'#246cfd',
        borderWidth: '5px',
        borderStyle: 'solid',
        /* 
              backgroundColor: '#142850', */
        backgroundColor: "#DBE2EF",
      }}
    >
      <span className="titleCard">Only $67 / month</span>
      <ul>
        {list}
      </ul>
      <button className="btnButton buttonStandard"> Standard</button>
    </div>
  );
}

export default Standard;
