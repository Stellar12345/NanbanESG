import React from "react";


// React Component to display individual item
const Item = ({ title, Type}) => (
  <div className="item-container">
    <div>
      <span className="item-label">Name:</span>
      {title}
    </div>
    <div>
      <span className="item-label">Category:
      {/* {Type} */}
          {Type.split(',').map((cat_type)=> 
                                    <span className="pro-cat-list">{cat_type}</span>)
       }
       </span>
    </div>
  </div>
);
export default Item;
