import React, { useEffect, useState } from 'react';
import  * as TutoresServer from './TutoresServer';

const TutoresList=()=>{
    const [tutores,setTutores]=useState([]);
    
    const listTutores=async ()=>{
        try{
            const res =await TutoresServer.listTutores();
            const data=await res.json();
            setTutores(data);
            console.log(data);
        }catch(error){
            console.log(error);
        }
    };
   
    useEffect(()=>{
        listTutores();
    },[]);
   
    return(
        <div>
            { tutores !== undefined && tutores.map(tutores=> (
                
                    <h2>
                        {tutores.nombre_empleado}
                    </h2>
              
                
            ))}


        </div>

    );
};

export default TutoresList;