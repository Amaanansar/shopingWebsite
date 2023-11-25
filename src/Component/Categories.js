import React, {useContext, useEffect} from 'react'
import productContext from '../context/notes/productContext'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
    const context = useContext(productContext)
    const { datas, getListOfCategory,  getListOfdata } = context
    let navigate = useNavigate()
    
    useEffect(() => {
        getListOfCategory()
    // eslint-disable-next-line
    }, [])
    

    const categoryClick = (data) =>{
        navigate('/')
        getListOfdata(data)
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg  secondNavbar bg-body-tertiary">
        <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <li onClick={()=>{categoryClick("")}} style={{width:"max-content"}} className="nav-link active text-white py-0">All</li>
            <li className="nav-item dropdown py-0">
                <p className="nav-link dropdown-toggle text-white py-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Mens
                </p>
                <ul className="dropdown-menu w-100 position-absolute mens bg-dark">
                    {datas.map((element)=>{
                    if (element.includes("womens")){
                        return ""
                    } else if (element.includes('mens')){
                        return <li key={element} onClick={()=>{categoryClick(`/category/${element}`)}} style={{width:"max-content",paddingTop: 0}} className="nav-link active text-white"id={`/category/${element}`} >{element}</li>
                    }
                    return ""
                    })}
                </ul>
            </li>
            <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle text-white py-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Womens
                </p>
                <ul className="dropdown-menu w-100 position-absolute womens bg-dark">
                {datas.map((element)=>{
                if (element.includes("womens")){
                    return <li key={element} onClick={()=>{categoryClick(`/category/${element}`)}} style={{width:"max-content",paddingTop: 0}} className="nav-link active text-white"id={`/category/${element}`} >{element}</li>
                }
                return ""
                })}
                
                </ul>
            </li>
            {datas.map((element)=>{
                if (element.includes("mens")){
                    return ""
                } else {
                    return <li key={element} style={{width:"max-content"}} onClick={()=>{categoryClick(`/category/${element}`)}} className="nav-link active text-white py-0 "id={`/category/${element}`} >{element}</li>
                }
            })}
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Categories
