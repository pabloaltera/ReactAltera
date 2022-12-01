import React from 'react'

const card = (props) => {
    const { titulo, descripcion, img, button} = props; 
  return (
    <div className="card container-fluid p-2 mt-2" style={{width : "18rem"}}>
  <img src={img} className="card-img-top" height={"200px"} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">{descripcion}</p>
    <a href="#" className="btn btn-primary"> 
    {button} 
    </a>
  </div>
</div>
  );
};

export default card;