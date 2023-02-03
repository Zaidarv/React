// import React, { Component } from "react";
// import './App.css';
import React, { useEffect, useState } from "react";
import axios, { Axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { render } from '@testing-library/react';

function Asignartutor() {

  const [tutores,setTutores] =useState([]);
  const [tablatutores,setTablaTutores] =useState([]);
  const [busqueda, setBusqueda]= useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

    
  // const [modeldata, setModeldata]= useState([]);

  const peticionGet = async()=>{
   await axios.get("http://127.0.0.1:8000/api/Personal/")
    .then(response =>{
      setTutores(response.data);
      setTablaTutores(response.data);
    }).catch(error =>{
      console.log(error);
    })
  }

  const peticionPost = async()=>{
    await axios.post('http://127.0.0.1:8001/api/tutores/', JSON.stringify(selectedItem))
    .then(response=>{
      console.log(response);
    })

    .catch(function (error) {
      console.log(selectedItem);
      console.log(error.message);
    });
}


  const peticionDelete= async()=>{
    await axios.delete('http://127.0.0.1:8001/api/tutores/')
    .then(() => setSelectedItem('Tutor eliminado'))

  .catch(function (error) {
    console.log(selectedItem)
    console.log(error.message);
  });
}

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  
  const showDetail = async(tutor) =>
    { 
      console.log(tutor)
      setSelectedItem(tutor)
      setDisplayModal(true)
      console.log(selectedItem)
    }

    
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablatutores.filter((elemento)=>{
      if(elemento.clave_area.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.rfc.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setTutores(resultadosBusqueda);
  }

  useEffect(()=>{
  peticionGet();
  },[])
  
  return ( 
   <React.Fragment>
    <div className="App">
    <div className="containerInput">
      <input
        className="form-control inputBuscar"
        value={busqueda}
        placeholder="Busqueda por Area Academica o RFC"
        onChange={handleChange}
      />
      <button className= "btn btn-success">
        <FontAwesomeIcon icon ={faSearch}/>
      </button>
    </div>
    <div className='table.responsive'>
      <table className='table table-sm table-bordered'>
      <thead>
        <tr>
          <th>RFC</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Area Academica</th>
          <th>Status</th>
          <th>Seleccionar Tutor</th>
        </tr>
      </thead>

      <tbody>
        {tutores &&
        tutores.map((tutor)=>(
          <tr key={tutor.rfc}>
            <td>{tutor.rfc}</td>
            <td>{tutor.nombre_empleado}</td>
            <td>{tutor.apellidos_empleado}</td>
            <td>{tutor.clave_area}</td>
            <td>{tutor.status_empleado}</td>
            <td>
         
            <button className= "btn btn-success" onClick={(e)=>showDetail(tutor)} data-toggle="modal" data-target="#myModal">
              Seleccionar Tutor
            </button> 
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
    </div>

  {/*Model Box  */}
    <div className={`modal ${displayModal ? "show" : ""}`} id="myModal" style={{"display": displayModal ? "block": "none"}}>
        <div className="modal-dialog" style={{width:"1000px"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">RFC EMPLEADO : {selectedItem.rfc}</h4>
              <button type="button" className="close" data-dismiss="modal" onClick={ () => setDisplayModal(false)} >&times;</button>
            </div>
             
            <div className="modal-body">
            <table className="table table-striped table-sm">
                        <thead className="thead-light">
                            <tr>
                                <th>RFC</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Area</th>
                                <th>Status</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                          {/* <tr key={modeldata.rfc}> */}
                          <tr>
                              <td>{selectedItem.rfc}</td>
                              <td>{selectedItem.nombre_empleado}</td>
                              <td>{selectedItem.apellidos_empleado}</td>
                              <td>{selectedItem.clave_area}</td>
                              <td>{selectedItem.status_empleado}</td>
                               
                           </tr>
                          
                        </tbody>
                    </table>
            </div>
             
             
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => peticionPost()}>Confirmar</button>
              {/* funcion para recibir el post  */}
              <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={ () => setDisplayModal(false)}>Close</button>
            </div>
             
          </div>
        </div>
      </div>
  
  </React.Fragment>
  );
}

export default Asignartutor;
