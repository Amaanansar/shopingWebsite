import { useState } from "react";
import productContext from "./productContext";

const NoteState = (props)=>{
  const [datas, setdatas] = useState([])
  const [cardData, setCardData] = useState([])
  const [totalNumber, setTotalNumber] = useState([])
  const [limiit, setLimiit] = useState([])
  const [pagesNumber, setPagesNumber] = useState([])
  const [prevNext, setPrevNext] = useState(0)
  const [pagesDetails, setPagesDetails] = useState(false)
  const [viewData, setViewData] = useState()
  
  
    const getListOfCategory = async()=>{
      const responses = await fetch(`https://dummyjson.com/products/categories`);
      const json = await responses.json();
      setdatas(json)
    }

    const getListOfdata = async(elem)=>{
      let jsonData =[
        {
          "id": 111,
          "title": "Massey LLC",
          "description": "Configurable reciprocal intranet",
          "price": 103.83,
          "discountPercentage": 44.73,
          "rating": 2.58,
          "stock": 73,
          "brand": "Bowers, Berry and Wilson",
          "category": "cold",
          "thumbnail": "https://picsum.photos/400/400?fruit=1",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 211,
          "title": "Oneal and Sons",
          "description": "Realigned explicit framework",
          "price": 1644.88,
          "discountPercentage": 46.86,
          "rating": 2.27,
          "stock": 26,
          "brand": "Whitehead PLC",
          "category": "east",
          "thumbnail": "https://picsum.photos/400/400?fruit=2",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 311,
          "title": "Ibarra-Farmer",
          "description": "Innovative analyzing framework",
          "price": 911.34,
          "discountPercentage": 15.88,
          "rating": 2.87,
          "stock": 75,
          "brand": "Rodriguez, Elliott and Mueller",
          "category": "rock",
          "thumbnail": "https://picsum.photos/400/400?fruit=3",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 4111,
          "title": "West and Sons",
          "description": "Mandatory regional approach",
          "price": 1659.16,
          "discountPercentage": 43.63,
          "rating": 4.08,
          "stock": 16,
          "brand": "Marks Inc",
          "category": "wrong",
          "thumbnail": "https://picsum.photos/400/400?fruit=4",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 511,
          "title": "Clark and Sons",
          "description": "Switchable stable solution",
          "price": 1068.87,
          "discountPercentage": 42.15,
          "rating": 4.68,
          "stock": 46,
          "brand": "Martin, King and Carr",
          "category": "some",
          "thumbnail": "https://picsum.photos/400/400?fruit=5",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 611,
          "title": "Morton PLC",
          "description": "Exclusive secondary data-warehouse",
          "price": 663.94,
          "discountPercentage": 39.74,
          "rating": 4.28,
          "stock": 10,
          "brand": "Ford-Kelly",
          "category": "early",
          "thumbnail": "https://picsum.photos/400/400?fruit=6",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 7,
          "title": "Curry Ltd",
          "description": "Synergized composite complexity",
          "price": 190.05,
          "discountPercentage": 0.7,
          "rating": 4.37,
          "stock": 96,
          "brand": "Boyle Ltd",
          "category": "word",
          "thumbnail": "https://picsum.photos/400/400?fruit=7",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 8,
          "title": "Carlson LLC",
          "description": "Synergized bifurcated leverage",
          "price": 1815.71,
          "discountPercentage": 29.63,
          "rating": 2.4,
          "stock": 70,
          "brand": "Taylor-Lawson",
          "category": "individual",
          "thumbnail": "https://picsum.photos/400/400?fruit=8",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 9,
          "title": "Turner-Allen",
          "description": "Fully-configurable fault-tolerant open system",
          "price": 1873.08,
          "discountPercentage": 1.25,
          "rating": 3.08,
          "stock": 32,
          "brand": "Cooper-Lawson",
          "category": "behavior",
          "thumbnail": "https://picsum.photos/400/400?fruit=9",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 10,
          "title": "Johnson PLC",
          "description": "Distributed real-time open system",
          "price": 192.96,
          "discountPercentage": 19.57,
          "rating": 4.51,
          "stock": 33,
          "brand": "Miller, Bartlett and Salas",
          "category": "trouble",
          "thumbnail": "https://picsum.photos/400/400?fruit=10",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 11,
          "title": "Chapman and Sons",
          "description": "Focused exuding implementation",
          "price": 203.99,
          "discountPercentage": 38.58,
          "rating": 2.36,
          "stock": 87,
          "brand": "Fox PLC",
          "category": "ability",
          "thumbnail": "https://picsum.photos/400/400?fruit=11",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 12,
          "title": "Turner, Hughes and Watson",
          "description": "Managed clear-thinking definition",
          "price": 474.57,
          "discountPercentage": 29.84,
          "rating": 4.82,
          "stock": 80,
          "brand": "Davis, Greer and Baker",
          "category": "yet",
          "thumbnail": "https://picsum.photos/400/400?fruit=12",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 13,
          "title": "Alexander-Moore",
          "description": "Diverse methodical knowledgebase",
          "price": 1214.94,
          "discountPercentage": 46.72,
          "rating": 4.63,
          "stock": 10,
          "brand": "Sandoval-Anderson",
          "category": "research",
          "thumbnail": "https://picsum.photos/400/400?fruit=13",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 14,
          "title": "Mcdonald PLC",
          "description": "Triple-buffered stable toolset",
          "price": 215.93,
          "discountPercentage": 18.27,
          "rating": 2.97,
          "stock": 26,
          "brand": "Burton Ltd",
          "category": "baby",
          "thumbnail": "https://picsum.photos/400/400?fruit=14",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 15,
          "title": "Smith, Hall and Morgan",
          "description": "Inverse coherent Graphic Interface",
          "price": 940.79,
          "discountPercentage": 28.5,
          "rating": 2.45,
          "stock": 88,
          "brand": "Becker, Smith and Cunningham",
          "category": "local",
          "thumbnail": "https://picsum.photos/400/400?fruit=15",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 16,
          "title": "Garza-Williams",
          "description": "Distributed empowering encryption",
          "price": 598.54,
          "discountPercentage": 24.93,
          "rating": 3.91,
          "stock": 95,
          "brand": "Williams, Torres and Swanson",
          "category": "TV",
          "thumbnail": "https://picsum.photos/400/400?fruit=16",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 17,
          "title": "Anderson Group",
          "description": "Exclusive directional encryption",
          "price": 232.71,
          "discountPercentage": 2.61,
          "rating": 4.2,
          "stock": 41,
          "brand": "Harrison and Sons",
          "category": "four",
          "thumbnail": "https://picsum.photos/400/400?fruit=17",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 18,
          "title": "Arnold Ltd",
          "description": "Networked needs-based website",
          "price": 694.75,
          "discountPercentage": 24.54,
          "rating": 2.73,
          "stock": 5,
          "brand": "Jordan, Ramos and Finley",
          "category": "enjoy",
          "thumbnail": "https://picsum.photos/400/400?fruit=18",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 19,
          "title": "Harrison Group",
          "description": "Multi-lateral coherent matrix",
          "price": 796.41,
          "discountPercentage": 22.32,
          "rating": 2.15,
          "stock": 50,
          "brand": "Brown Inc",
          "category": "policy",
          "thumbnail": "https://picsum.photos/400/400?fruit=19",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 20,
          "title": "Cantu and Sons",
          "description": "Customizable 24hour forecast",
          "price": 620.29,
          "discountPercentage": 43.34,
          "rating": 4.62,
          "stock": 92,
          "brand": "Rosario, Neal and Watkins",
          "category": "sometimes",
          "thumbnail": "https://picsum.photos/400/400?fruit=20",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 21,
          "title": "Kim-Campbell",
          "description": "Optimized background moratorium",
          "price": 126.81,
          "discountPercentage": 5.55,
          "rating": 2.39,
          "stock": 71,
          "brand": "Gomez-Perez",
          "category": "near",
          "thumbnail": "https://picsum.photos/400/400?fruit=21",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 22,
          "title": "Jones-Rivera",
          "description": "Public-key real-time attitude",
          "price": 715.51,
          "discountPercentage": 29.82,
          "rating": 1.79,
          "stock": 63,
          "brand": "Humphrey-Horton",
          "category": "result",
          "thumbnail": "https://picsum.photos/400/400?fruit=22",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 23,
          "title": "Boyle, Mason and Riggs",
          "description": "Synergized disintermediate extranet",
          "price": 598.17,
          "discountPercentage": 40.22,
          "rating": 2.09,
          "stock": 64,
          "brand": "Hughes, Turner and Lucas",
          "category": "I",
          "thumbnail": "https://picsum.photos/400/400?fruit=23",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 24,
          "title": "Hartman, Bell and Gonzalez",
          "description": "Multi-channeled eco-centric portal",
          "price": 1026.13,
          "discountPercentage": 24.92,
          "rating": 1.39,
          "stock": 10,
          "brand": "Newton, Morrow and Yang",
          "category": "both",
          "thumbnail": "https://picsum.photos/400/400?fruit=24",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 25,
          "title": "Delgado-Matthews",
          "description": "Cross-group context-sensitive task-force",
          "price": 1954.66,
          "discountPercentage": 32.12,
          "rating": 1.71,
          "stock": 17,
          "brand": "Robertson, Thompson and Aguilar",
          "category": "present",
          "thumbnail": "https://picsum.photos/400/400?fruit=25",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 26,
          "title": "Clark-Vazquez",
          "description": "Expanded user-facing Graphic Interface",
          "price": 667.32,
          "discountPercentage": 40.13,
          "rating": 3.61,
          "stock": 83,
          "brand": "Woods-White",
          "category": "fill",
          "thumbnail": "https://picsum.photos/400/400?fruit=26",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 27,
          "title": "Mayo Ltd",
          "description": "De-engineered local task-force",
          "price": 1562.07,
          "discountPercentage": 24.96,
          "rating": 2.46,
          "stock": 37,
          "brand": "Bruce-Rocha",
          "category": "whole",
          "thumbnail": "https://picsum.photos/400/400?fruit=27",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 28,
          "title": "Bell-King",
          "description": "Virtual regional neural-net",
          "price": 1587.16,
          "discountPercentage": 8.3,
          "rating": 1.52,
          "stock": 43,
          "brand": "Jones Ltd",
          "category": "fly",
          "thumbnail": "https://picsum.photos/400/400?fruit=28",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 29,
          "title": "Riggs-Benson",
          "description": "Synergized interactive function",
          "price": 839.42,
          "discountPercentage": 47.28,
          "rating": 3.17,
          "stock": 4,
          "brand": "Sharp-Villarreal",
          "category": "because",
          "thumbnail": "https://picsum.photos/400/400?fruit=29",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        },
        {
          "id": 30,
          "title": "Williams-Johnson",
          "description": "Pre-emptive directional projection",
          "price": 975.65,
          "discountPercentage": 5.89,
          "rating": 2.05,
          "stock": 36,
          "brand": "Tran, Bell and Schroeder",
          "category": "away",
          "thumbnail": "https://picsum.photos/400/400?fruit=30",
          "images": [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5"
          ]
        }
      ]
      setCardData([])
      setPrevNext(0)
      const responses = await fetch(`https://dummyjson.com/products${elem}`);
      const json = await responses.json();
      const result = shuffle(jsonData);
      elem !== "" ? setCardData(json.products.concat(result)):setCardData(json.products)
      setPagesDetails(true)
      setTotalNumber(json.total)
      setLimiit(json.limit)
      setPagesNumber(json.total/json.limit)
    }
    
    function shuffle(jsonData) {
      for (let i = jsonData.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = jsonData[i];
        jsonData[i] = jsonData[j];
        jsonData[j] = temp;
      }
      return jsonData;
    }

    const getListOfdataPages = async(elem)=>{
      setCardData([])
      const responses = await fetch(`https://dummyjson.com/products?limit=${limiit}&skip=${parseInt(limiit)*parseInt(elem)}`);
      const json = await responses.json();
      setPrevNext(elem)
      setCardData(json.products)
      console.log = function() {console.log(totalNumber)}
    // eslint-disable-next-line
    }

    return(
        <productContext.Provider value={{datas,getListOfCategory, getListOfdata, cardData, pagesNumber , getListOfdataPages,prevNext,pagesDetails, setPagesDetails,viewData, setViewData}}>
            {props.children}
        </productContext.Provider>
    )
}

export default NoteState