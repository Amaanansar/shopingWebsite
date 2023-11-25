import React, {useContext, useEffect} from 'react'
import productContext from '../context/notes/productContext'
import { useNavigate } from 'react-router-dom'

const Cards = () => {

  const context = useContext(productContext)
  const {cardData ,getListOfdata ,pagesNumber, getListOfdataPages,prevNext,pagesDetails, setViewData} = context    
  
  let navigate = useNavigate()
  useEffect(() => {
    if (pagesDetails === false) {
      getListOfdata("")
    } 
    // eslint-disable-next-line
  }, [])
  
  function calculateOriginalPrice(discountedPrice, discountPercentage) {
    const originalPrice = discountedPrice / (1 - discountPercentage / 100);  
    return originalPrice.toFixed(2);
  }

  const changesPage = (elem) => {
    getListOfdataPages(elem);
  }
  const ViewDetailPage = (data) => {
    setViewData(data)
    navigate("/ViewDetailPage")
  }
  
  return (
   <div className='border border-start-black cardScrollData px-2' style={{height:'calc(100vh - 130px)',overflowY:'auto'}}>
     <div className='d-flex align-content-start flex-wrap p-3 gap-2 classCardMain'>
      {cardData.map((element)=>{
         return <div onClick={()=>{ViewDetailPage(element)}} data={element} key={element.title} className="card my-1" style={{minWidth:"240px",width:"16%"}}>
            <img src={element.thumbnail} className="card-img-top" loading='lazy' alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                {[...Array(5)].map((star,i) => {
                  if (element.rating-2>i){
                    return (
                      <span key={i} className={`startssss checked`}>&#128970;</span>
                      );
                  }
                    return (
                      <span key={i} className={`startssss star${i}`}>&#128970;</span>
                      );
                })}
                <div className='pricendiscount d-flex align-items-center'>
                  <div className='amount d-flex align-items-center justify-content-between flex-wrap'>
                    <div className='discountamt' style={{fontSize:'24px',fontWeight:'bold'}}>${element.price}</div>
                    &nbsp; 
                    <div className='actualamount d-flex'>MRP:<i><s style={{opacity:'0.7'}}>{calculateOriginalPrice(element.price,element.discountPercentage)}</s></i></div>
                  <div className='actualamount text-danger d-flex amountPresce'>({element.discountPercentage}% off)</div>
                  </div>
                </div>
                <p className="card-text">{element.description}</p>
            </div>
            </div>
        })
      }
    </div>
      <div className="d-flex" style={{justifyContent: "center",marginBottom: "20px"}}>
         {pagesNumber !== 1 && <nav aria-label="Page navigation example">
          <ul className="pagination">
            <button disabled={prevNext === 0} onClick={()=>{changesPage(prevNext-1)}} className="btn rounded-start border page-link rounded-0">Previous</button>
            {[...Array(Math.ceil(pagesNumber))].map((star,i) => {
               return <li key={i} className="page-item"><p className="page-link" onClick={()=>{changesPage(i)}}>{i+1}</p></li>
              })
            }
        <button disabled={prevNext === 3} onClick={()=>{changesPage(prevNext+1)}} className="btn rounded-end border page-link rounded-0">Next</button>
        </ul>
      </nav>}
      </div>
   </div>
  )
}

export default Cards
