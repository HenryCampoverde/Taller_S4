
import React, {useState} from 'react'
const Tarjeta = () => {
const [celebridades, setcelebridades] = useState(null)
const [error, seterror] = useState(false)
const getUsuarios = async() =>{
            try {
                const res = await fetch("https://randomuser.me/api/?results=1")
                const data = await res.json()
                setcelebridades(data.results[0])
                seterror(false)
            } catch (error) {
                console.log(error)
                seterror(true)
            }    
        }
    if (error){
        return <div class="alert alert-danger" role="alert">
                    Algo esta mal <a href='https://randomuser.me'>Arreglar</a>
               </div>}
    return ( 
        <div className='position-sticky col-md-7'>
            <div className = "card ">
        <img src={celebridades?.picture?.large} className="card-img-top"/>
        <div className="card-body ">
            <h5 className="card-title text-dark">{celebridades?.name?.last}</h5>
            <button className='btn btn-success fs-4'
            onClick={getUsuarios}>
                 Siguiente
            </button>
            </div>        
          </div>
        </div>
)   
}

export default Tarjeta;