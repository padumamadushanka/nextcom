//"use client";
import  {useState,useEffect }from 'react';
import Link from "next/link";
//import { getFilteredAds,getSubCategory} from '../../core/apiCore';
//import Layout from '../../core/Layout'
import ProductCard from  '@/components/product/ProductCard'
//import AdCard from '../../core/AdCard';
import CarCheckBox from '@/utils/checkboxes/CarCheckBox';
import CarRadio from '@/utils/radios/carRadio';
import Skeleton ,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

//import AllCategoryAccordion from '../../core/AllCategoriesAccordion';
import { useProduct } from "@/context/product";
import { carBrandsCategory } from '@/utils/vehicles/models/fixedBrands';
import { conditionsCategory } from '@/utils/vehicles/models/fixedConditions';
import{fuelTypesCategory} from '@/utils/vehicles/models/fixedFuelTypes'
import { toyotaModelsCategory } from '@/utils/vehicles/models/toyota';
import { audiModelsCategory } from '@/utils/vehicles/models/audi';
import { austinModelsCategory } from '@/utils/vehicles/models/austin';
import { benzModelsCategory } from '@/utils/vehicles/models/benz';
import { bmwModelsCategory } from '@/utils/vehicles/models/bmw';
import { cheryModelsCategory } from '@/utils/vehicles/models/chery';
import { chevroletModelsCategory } from '@/utils/vehicles/models/chevrolet';
import { chryslerModelsCategory } from '@/utils/vehicles/models/chrysler';
import { daewooModelsCategory } from '@/utils/vehicles/models/daewoo';
import { daihatsuModelsCategory } from '@/utils/vehicles/models/daihatsu';
import { datsunModelsCategory } from '@/utils/vehicles/models/datsun';
import { dfskModelsCategory } from '@/utils/vehicles/models/dfsk';
import { fiatModelsCategory } from '@/utils/vehicles/models/fiat';
import { fordModelsCategory } from '@/utils/vehicles/models/ford';
import { gmcModelsCategory } from '@/utils/vehicles/models/gmc';
import { hondaModelsCategory } from '@/utils/vehicles/models/honda';
import { hummerModelsCategory } from '@/utils/vehicles/models/hummer';
import { hyundaiModelsCategory } from '@/utils/vehicles/models/hyundai';
import { isuzuModelsCategory } from '@/utils/vehicles/models/isuzu';
import { jaguarModelsCategory } from '@/utils/vehicles/models/jaguar';
import { jeepModelsCategory } from '@/utils/vehicles/models/jeep';
import { kiaModelsCategory } from '@/utils/vehicles/models/kia';
import { landroverModelsCategory } from '@/utils/vehicles/models/landrover';
import { lexusModelsCategory } from '@/utils/vehicles/models/lexus';
import { mahindraModelsCategory } from '@/utils/vehicles/models/mahindra';
import { marutisuzukiModelsCategory } from '@/utils/vehicles/models/marutisuzuki';
import { mazdaModelsCategory } from '@/utils/vehicles/models/mazda';
import { mgModelsCategory } from '@/utils/vehicles/models/mg';
import { microModelsCategory } from '@/utils/vehicles/models/micro';
import { miniModelsCategory } from '@/utils/vehicles/models/mini';
import { mitsubishiModelsCategory } from '@/utils/vehicles/models/mitsubishi';
import { morrisModelsCategory } from '@/utils/vehicles/models/morris';
import { opelModelsCategory } from '@/utils/vehicles/models/opel';
import { nissanModelsCategory } from '@/utils/vehicles/models/nissan';
import { peroduaModelsCategory } from '@/utils/vehicles/models/perodua';
import { peugeotModelsCategory } from '@/utils/vehicles/models/peugeot';
import { porscheModelsCategory } from '@/utils/vehicles/models/porsche';
import { protonModelsCategory } from '@/utils/vehicles/models/proton';
import { renaultModelsCategory } from '@/utils/vehicles/models/renault';
import { seatModelsCategory } from '@/utils/vehicles/models/seat';
import { skodaModelsCategory } from '@/utils/vehicles/models/skoda';
import { smartModelsCategory } from '@/utils/vehicles/models/smart';
import { ssangyongModelsCategory } from '@/utils/vehicles/models/ssangyong';
import { subaruModelsCategory } from '@/utils/vehicles/models/subaru';
import { suzukiModelsCategory } from '@/utils/vehicles/models/suzuki';
import { tataModelsCategory } from '@/utils/vehicles/models/tata';
import { teslaModelsCategory } from '@/utils/vehicles/models/tesla';
import { vauxhallModelsCategory } from '@/utils/vehicles/models/vauxhall';
import { volkswagenModelsCategory } from '@/utils/vehicles/models/volkswagen';
import { volvoModelsCategory } from '@/utils/vehicles/models/volvo';
import { zotyeModelsCategory } from '@/utils/vehicles/models/zotye';
import { suspensionTypes,bodyPartsTypes,hvacPartsTypes,enginePartsTypes ,transmissionPartsTypes,brakePartsTypes,electricalPartsTypes,accessoriesPartsTypes} from '@/utils/vehicles/spares/carSpareTypes'
import { districts } from '@/utils/districts/districts';
import { carSparePrices } from '@/utils/vehicles/spares/sparePrices';


// import '../../css/allCategoryAccordion.css'
// import '../../css/vehiclesmaincomponent.css'
//import carImg from '../../images/car.png'
//import notFoundImg from '../../images/notfound.png'
import { prices } from '@/utils/prices/fixedPrices';
import ReactPaginate from "react-paginate";
import { carBodyTypes } from '@/utils/vehicles/bodyTypes/carBodyTypes';

// export default function ProductList() {

export default  function  CarSparesComponent(){
    const[loading,setLoading]=useState(false)
    const [pageNumber, setPageNumber] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);

    const [vehicleAds, setVehicleAds] = useState([]);
    const [checked, setCheked] = useState([]);
    const [filterBy, setFilterBy] = useState('');
    const [value, setValue] = useState(0);
    const [limit, setLimit] = useState(10);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);
    const defaultCategory=`${process.env.CARPARTS_ID}`
    const [myFilters, setMyFilters] = useState({
        filters: { category: [defaultCategory], price: [],carBrand:[],district:[],localArea:[] }
    });
    const [error, setError] = useState(false);
    const removeModel=()=>{
        // console.log('executed..')
      
    }
      async function getFilteredAds  (pageNumber, filters = {}) {
        console.log("before req send to server filters "+JSON.stringify(filters))
        const data = {
            pageNumber,
            filters
        };
        console.log("filtered data >>>"+JSON.stringify(data))

        return fetch(`${process.env.API}/vehicles/by/search`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };

     const getSubCategory = (subCategory,pageNumber) => {
        return fetch(`${process.env.API}/vehicles/?subCategory=${subCategory}&page=${pageNumber}`, {
            method: 'GET'
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };
    const loadAdsByCategory = () => {
        getSubCategory('679bcfc6ab51ea31fd0d123f',pageNumber).then(data => {
            // console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.ads);
                setNumberOfPages(data.totalPages)
            }
        });
    };
    
     async function loadFilteredResults (newFilters) {
        setLoading(true)
         console.log("new filters >>"+JSON.stringify(newFilters));
       const data= await getFilteredAds( pageNumber,newFilters)
      // console.log("filtered data response >> "+data.data)
        // getFilteredAds( pageNumber,newFilters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                console.log(data)
                setLoading(false)
                setNumberOfPages(data.totalPages)
                setFilteredResults(data.data);
            }
        // });
    };
    const handleFilters = (filters, filterBy) => {
         console.log("SHOP", filters, filterBy);
        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;
        if (filterBy === "price") {
            let priceValues = handlePrice(filters);
            newFilters.filters[filterBy] = priceValues;
        }
        loadFilteredResults(myFilters.filters);
        //console.log("newfilters"+newFilters)
        setMyFilters(newFilters);
    };
    
    const handlePrice = value => {
        const data = prices;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array;
            }
        }
        return array;
    };
   
    const showError = () => (
        <div className="alert alert-danger " style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );
   
        async function fetchPaginate  (currentPage,filters={})  {
        const data = {
            currentPage,
            filters
        };
        const res = await fetch(`${process.env.API}/vehicles/by/search`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const jsondata = await res.json();
        return jsondata;
      };
    const handlePageClick =  async(data) => {
        // console.log(data.selected);
        let currentPage = data.selected ;
        const adsFromServer = await fetchPaginate(currentPage,myFilters.filters);
        setFilteredResults(adsFromServer.data)
        setNumberOfPages(adsFromServer.totalPages)
        window.scrollTo(0, 0)
      };
    useEffect(() => {
        // loadAdsBySubCategory();
        //loadAdsByCategory();
        loadFilteredResults(myFilters.filters)
    }, [pageNumber]);
    function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
//car models
    const toyotaModels=()=>(
        <div>
            <h4>select toyota model</h4>
            
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={toyotaModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>
        
    
       )
    const audiModels=()=>(
        <div>
            <h4>select audi model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={audiModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const austinModels=()=>(
        <div>
            <h4>select austin model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={austinModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const benzModels=()=>(
        <div>
            <h4>select benz model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={benzModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const bmwModels=()=>(
        <div>
            <h4>select BMW model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={bmwModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const cheryModels=()=>(
        <div>
            <h4>select chery model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={cheryModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const chevroletModels=()=>(
        <div>
            <h4>select chevrolet model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={chevroletModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const chryslerModels=()=>(
        <div>
            <h4>select chrysler model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={chryslerModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const daewooModels=()=>(
        <div>
            <h4>select daewoo model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={daewooModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const daihatsuModels=()=>(
        <div>
            <h4>select daihatsu model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={daihatsuModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const datsunModels=()=>(
        <div>
            <h4>select datsun model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={datsunModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const dfskModels=()=>(
        <div>
            <h4>select dfsk model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={dfskModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const fiatModels=()=>(
        <div>
            <h4>select fiat model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={fiatModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const fordModels=()=>(
        <div>
            <h4>select ford model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={fordModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const gmcModels=()=>(
        <div>
            <h4>select gmc model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={gmcModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const hondaModels=()=>(
        <div>
            <h4>select honda model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={hondaModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const hummerModels=()=>(
        <div>
            <h4>select hummer model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={hummerModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const hyundaiModels=()=>(
        <div>
            <h4>select hyundai model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={hyundaiModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const isuzuModels=()=>(
        <div>
            <h4>select isuzu model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={isuzuModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const jaguarModels=()=>(
        <div>
            <h4>select jaguar model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={jaguarModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const jeepModels=()=>(
        <div>
            <h4>select jeep model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={jeepModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const kiaModels=()=>(
        <div>
            <h4>select kia model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={kiaModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const landroverModels=()=>(
        <div>
            <h4>select land rover model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={landroverModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const lexusModels=()=>(
        <div>
            <h4>select lexus model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={lexusModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const mahindraModels=()=>(
        <div>
            <h4>select mahindra model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={mahindraModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const marutisuzukiModels=()=>(
        <div>
            <h4>select maruti suzuki model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={marutisuzukiModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const mazdaModels=()=>(
        <div>
            <h4>select mazda model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={mazdaModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const mgModels=()=>(
        <div>
            <h4>select mg model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={mgModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const microModels=()=>(
        <div>
            <h4>select micro model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={microModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const miniModels=()=>(
        <div>
            <h4>select mini model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={miniModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const mitsubishiModels=()=>(
        <div>
            <h4>select mitsubishi model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={mitsubishiModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const morrisModels=()=>(
        <div>
            <h4>select morris model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={morrisModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const nissanModels=()=>(
        <div>
            <h4>select nissan model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={nissanModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const opelModels=()=>(
        <div>
            <h4>select opel model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={opelModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const peroduaModels=()=>(
        <div>
            <h4>select perodua model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={peroduaModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const peugeotModels=()=>(
        <div>
            <h4>select peugeot model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={peugeotModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const porscheModels=()=>(
        <div>
            <h4>select porsche model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={porscheModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const protonModels=()=>(
        <div>
            <h4>select proton model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={protonModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const renaultModels=()=>(
        <div>
            <h4>select renault model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={renaultModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const seatModels=()=>(
        <div>
            <h4>select seat model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={seatModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const skodaModels=()=>(
        <div>
            <h4>select skoda model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={skodaModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const smartModels=()=>(
        <div>
            <h4>select smart model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={smartModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const ssangyongModels=()=>(
        <div>
            <h4>select ssangyong model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={ssangyongModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const subaruModels=()=>(
        <div>
            <h4>select subaru model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={subaruModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const suzukiModels=()=>(
        <div>
            <h4>select suzuki model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={suzukiModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const tataModels=()=>(
        <div>
            <h4>select tata model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={tataModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const teslaModels=()=>(
        <div>
            <h4>select tesla model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={teslaModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const vauxhallModels=()=>(
        <div>
            <h4>select vauxhall model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={vauxhallModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const volkswagenModels=()=>(
        <div>
            <h4>select volkswagen model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={volkswagenModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const volvoModels=()=>(
        <div>
            <h4>select volvo model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={volvoModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
    const zotyeModels=()=>(
        <div>
            <h4>select zotye model</h4>
            <div className="default-checkbox-div">
            <ul>
                <CarCheckBox
                    categories={zotyeModelsCategory}
                    handleFilters={filters =>
                    handleFilters(filters, "carModel")
                    }
                />
            </ul>
            </div>
        </div>  
       )
   
    return(
      <div>
              <div className="container">
              <div className="row">
                <div className="col-md-3 vehicle-left-row-div">
                <div className="category-sidemenu-div">
                        {/* <Link to="/vehicles"  > 
                            <button type="button" class="btn category-side-btn-link  btn-link-body"><img src={carImg} alt="" className="vehicle-category-img"/>back to vehicles</button>
                        </Link> */}
                    </div>
                <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by District</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={districts}
                                handleFilters={filters =>
                                    handleFilters(filters,"district")
                                }
                            />
                        </ul>
                        
                    </div>
  
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by Brand</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={carBrandsCategory}
                                handleFilters={filters =>
                                    handleFilters(filters, "carBrand")
                                }
                            />
                        </ul>
                        
                    </div>
                    
                    {
                        (myFilters.filters.carBrand.indexOf('toyota')!=-1) ? toyotaModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('Audi')!=-1) ? audiModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('austin')!=-1) ? austinModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('mercedes benz')!=-1) ? benzModels():(myFilters.filters.carModel=[])
                    }
                     {
                        (myFilters.filters.carBrand.indexOf('bmw')!=-1) ? bmwModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('chery')!=-1) ? cheryModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('chevrolet')!=-1) ? chevroletModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('chrysler')!=-1) ? chryslerModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('daewoo')!=-1) ? daewooModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('daihatsu')!=-1) ? daihatsuModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('datsun')!=-1) ? datsunModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('dfsk')!=-1) ? dfskModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('fiat')!=-1) ? fiatModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('ford')!=-1) ? fordModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('gmc')!=-1) ? gmcModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('honda')!=-1) ? hondaModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('hummer')!=-1) ? hummerModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('hyundai')!=-1) ? hyundaiModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('isuzu')!=-1) ? isuzuModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('jaguar')!=-1) ? jaguarModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('jeep')!=-1) ? jeepModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('kia')!=-1) ? kiaModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('land rover')!=-1) ? landroverModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('lexus')!=-1) ? lexusModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('mahindra')!=-1) ? mahindraModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('maruti suzuki')!=-1) ? marutisuzukiModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('mazda')!=-1) ? mazdaModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('mg')!=-1) ? mgModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('micro')!=-1) ? microModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('mini')!=-1) ? miniModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('mitsubishi')!=-1) ? mitsubishiModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('morris')!=-1) ? morrisModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('nissan')!=-1) ? nissanModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('opel')!=-1) ? opelModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('perodua')!=-1) ? peroduaModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('peugeot')!=-1) ? peugeotModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('porsche')!=-1) ? porscheModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('proton')!=-1) ? protonModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('renault')!=-1) ? renaultModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('seat')!=-1) ? seatModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('skoda')!=-1) ? skodaModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('smart')!=-1) ? smartModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('ssang yong')!=-1) ? ssangyongModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('subaru')!=-1) ? subaruModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('suzuki')!=-1) ? suzukiModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('tata')!=-1) ? tataModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('tesla')!=-1) ? teslaModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('vauxhall')!=-1) ? vauxhallModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('volkswagen')!=-1) ? volkswagenModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('volvo')!=-1) ? volvoModels():(myFilters.filters.carModel=[])
                    }
                    {
                        (myFilters.filters.carBrand.indexOf('zotye')!=-1) ? zotyeModels():(myFilters.filters.carModel=[])
                    }
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by Price Range</span></h4>
                    <div className="default-checkbox-div">
                        <CarRadio
                            prices={carSparePrices}
                            handleFilters={filters =>
                                handleFilters(filters, "price")
                            }
                        />
                    </div>  
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by Condition</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={conditionsCategory}
                                handleFilters={filters =>
                                    handleFilters(filters, "condition")
                                }
                            />
                        </ul>
                        
                    </div>  
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by suspension part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={suspensionTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>  
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by body part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={bodyPartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>  
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by HVAC part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={hvacPartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div> 
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by engine part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={enginePartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by transmission part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={transmissionPartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by brake part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={brakePartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by electrical part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={electricalPartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by accessory part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={accessoriesPartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>
                </div>
                
                <div className="col-md-6 col-sm-12 middle-div">
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn btn-primary vehicles-main-component-hidden-model hidden-modal-filter-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        filters
                        </button>
                        <button type="button" class="btn btn-primary vehicles-main-component-hidden-model hidden-modal-filter-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        location
                        </button>
                        <button type="button" class="btn btn-primary vehicles-main-component-hidden-model hidden-modal-filter-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                        brand
                        </button>
                    </div>
                    
                    <div class="modal " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog ">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Filters</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by Price Range</span></h4>
                    <div className="default-checkbox-div">
                        <CarRadio
                            prices={carSparePrices}
                            handleFilters={filters =>
                                handleFilters(filters, "price")
                            }
                        />
                    </div>  
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by Condition</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={conditionsCategory}
                                handleFilters={filters =>
                                    handleFilters(filters, "condition")
                                }
                            />
                        </ul>
                        
                    </div>  
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by suspension part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={suspensionTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>  
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by body part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={bodyPartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>  
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by HVAC part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={hvacPartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div> 
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by engine part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={enginePartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by transmission part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={transmissionPartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by brake part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={brakePartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by electrical part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={electricalPartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by accessory part type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={accessoriesPartsTypes}
                                handleFilters={filters =>
                                    handleFilters(filters, "partOrAccessoryType")
                                }
                            />
                        </ul>
                        
                    </div>  
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog ">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Filters</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <h5 className="my-3">Filter by District</h5 >
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={districts}
                                handleFilters={filters =>
                                    handleFilters(filters,"district")
                                }
                            />
                        </ul>
                        
                    </div>
                    {/* {
                        (myFilters.filters.district.indexOf('colombo')!=-1) ? colomboLocals():(myFilters.filters.localArea=[])
                    }   
                     {
                        (myFilters.filters.district.indexOf('ampara')!=-1) ? amparaLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('anuradhapura')!=-1) ? anuradhapuraLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('badulla')!=-1) ? badullaLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('batticaloa')!=-1) ? batticaloaLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('galle')!=-1) ? galleLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('gampaha')!=-1) ? gampahaLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('hambanthota')!=-1) ? hambanthotaLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('jaffna')!=-1) ? jaffnaLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('kalutara')!=-1) ? kalutaraLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('kandy')!=-1) ? kandyLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('kegalle')!=-1) ? kegalleLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('kurunegala')!=-1) ? kurunegalaLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('mannar')!=-1) ? mannarLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('matale')!=-1) ? mataleLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('matara')!=-1) ? mataraLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('monaragala')!=-1) ? monaragalaLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('mullativu')!=-1) ? mullativuLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('nuwaraeliya')!=-1) ? nuwaraeliyaLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('polonnaruwa')!=-1) ? polonnaruwaLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('puttalam')!=-1) ? puttalamLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('rathnapura')!=-1) ? rathnapuraLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('trincomalee')!=-1) ? trincomaleeLocals():(myFilters.filters.localArea=[])
                    }  
                      {
                        (myFilters.filters.district.indexOf('vavunia')!=-1) ? vavuniaLocals():(myFilters.filters.localArea=[])
                    }    */}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal " id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog ">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">brand</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h4>Filter by Brand</h4>
                                <div className="default-checkbox-div">
                                    <ul>
                                        <CarCheckBox
                                            categories={carBrandsCategory}
                                            handleFilters={filters =>
                                                handleFilters(filters, "carBrand")
                                            }
                                        />
                                    </ul>
                                    
                                </div>
                                {
                                    (myFilters.filters.carBrand.indexOf('toyota')!=-1) ? toyotaModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('Audi')!=-1) ? audiModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('austin')!=-1) ? austinModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('mercedes benz')!=-1) ? benzModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('bmw')!=-1) ? bmwModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('chery')!=-1) ? cheryModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('chevrolet')!=-1) ? chevroletModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('chrysler')!=-1) ? chryslerModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('daewoo')!=-1) ? daewooModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('daihatsu')!=-1) ? daihatsuModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('datsun')!=-1) ? datsunModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('dfsk')!=-1) ? dfskModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('fiat')!=-1) ? fiatModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('ford')!=-1) ? fordModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('gmc')!=-1) ? gmcModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('honda')!=-1) ? hondaModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('hummer')!=-1) ? hummerModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('hyundai')!=-1) ? hyundaiModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('isuzu')!=-1) ? isuzuModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('jaguar')!=-1) ? jaguarModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('jeep')!=-1) ? jeepModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('kia')!=-1) ? kiaModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('land rover')!=-1) ? landroverModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('lexus')!=-1) ? lexusModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('mahindra')!=-1) ? mahindraModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('maruti suzuki')!=-1) ? marutisuzukiModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('mazda')!=-1) ? mazdaModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('mg')!=-1) ? mgModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('micro')!=-1) ? microModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('mini')!=-1) ? miniModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('mitsubishi')!=-1) ? mitsubishiModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('morris')!=-1) ? morrisModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('nissan')!=-1) ? nissanModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('opel')!=-1) ? opelModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('perodua')!=-1) ? peroduaModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('peugeot')!=-1) ? peugeotModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('porsche')!=-1) ? porscheModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('proton')!=-1) ? protonModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('renault')!=-1) ? renaultModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('seat')!=-1) ? seatModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('skoda')!=-1) ? skodaModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('smart')!=-1) ? smartModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('ssang yong')!=-1) ? ssangyongModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('subaru')!=-1) ? subaruModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('suzuki')!=-1) ? suzukiModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('tata')!=-1) ? tataModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('tesla')!=-1) ? teslaModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('vauxhall')!=-1) ? vauxhallModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('volkswagen')!=-1) ? volkswagenModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('volvo')!=-1) ? volvoModels():(myFilters.filters.carModel=[])
                                }
                                {
                                    (myFilters.filters.carBrand.indexOf('zotye')!=-1) ? zotyeModels():(myFilters.filters.carModel=[])
                                }
                    </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* ================================ */}
                    {
                    (() => {
                        if (filteredResults.length==0)
                            return <div className="not-found-div">
                                <h2 className="not-found-title">Oops... we didn't find anything that matches this search  <i class="far fa-frown"></i></h2>
                                <p>Try search for something more general, change the filters </p>
                                {/* <img src={notFoundImg} alt="" className="not-found-div-img"/>  */}
                        </div>
                    })()
                    }
                    {loading ? (
                         <div>
                         <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <Skeleton height={155} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title"><Skeleton  /></h5>
                                    <p className="card-text"><Skeleton count={5} /></p>
                                    <p className="card-text"><small className="text-body-secondary"><Skeleton count={2} /></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <Skeleton height={155} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title"><Skeleton  /></h5>
                                    <p className="card-text"><Skeleton count={5} /></p>
                                    <p className="card-text"><small className="text-body-secondary"><Skeleton count={2} /></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <Skeleton height={155} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title"><Skeleton  /></h5>
                                    <p className="card-text"><Skeleton count={5} /></p>
                                    <p className="card-text"><small className="text-body-secondary"><Skeleton count={2} /></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <Skeleton height={155} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title"><Skeleton  /></h5>
                                    <p className="card-text"><Skeleton count={5} /></p>
                                    <p className="card-text"><small className="text-body-secondary"><Skeleton count={2} /></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <Skeleton height={155} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title"><Skeleton  /></h5>
                                    <p className="card-text"><Skeleton count={5} /></p>
                                    <p className="card-text"><small className="text-body-secondary"><Skeleton count={2} /></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <Skeleton height={155} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title"><Skeleton  /></h5>
                                    <p className="card-text"><Skeleton count={5} /></p>
                                    <p className="card-text"><small className="text-body-secondary"><Skeleton count={2} /></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <Skeleton height={155} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title"><Skeleton  /></h5>
                                    <p className="card-text"><Skeleton count={5} /></p>
                                    <p className="card-text"><small className="text-body-secondary"><Skeleton count={2} /></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <Skeleton height={155} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title"><Skeleton  /></h5>
                                    <p className="card-text"><Skeleton count={5} /></p>
                                    <p className="card-text"><small className="text-body-secondary"><Skeleton count={2} /></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <Skeleton height={155} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title"><Skeleton  /></h5>
                                    <p className="card-text"><Skeleton count={5} /></p>
                                    <p className="card-text"><small className="text-body-secondary"><Skeleton count={2} /></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    ) : (
                        ""
                    )}
                    {filteredResults.map((ad, i) => (
                                <div key={i}>
                                    <ProductCard product={ad} />
                                </div>
                            ))}
                    {showError()}
                    <ReactPaginate
                            previousLabel={"previous"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            pageCount={numberOfPages}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                             onPageChange={handlePageClick}
                             containerClassName={"pagination justify-content-center"}
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName={"active"}
                            />
                           
                </div>
                <div className="col-md-3 right-row-div">
                    
                </div>
            </div>
              </div>
           
      </div>
    
    )
  }
  