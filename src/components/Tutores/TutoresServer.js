const API_URL ="http://127.0.0.1:8000/api/Personal/";

export const listTutores= async ()=>{
    return await fetch(API_URL);
}