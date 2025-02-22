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
import { busModelsCategory } from '@/utils/vehicles/buses/busBrands';
import { carBrandsCategory } from '@/utils/vehicles/models/fixedBrands';
import { conditionsCategory } from '@/utils/vehicles/models/fixedConditions';
import{fuelTypesCategory} from '@/utils/vehicles/models/fixedFuelTypes'
import { ashokLeylandBusModelsCategory } from '@/utils/vehicles/buses/ashokLeyland';
import { eicherBusModelsCategory } from '@/utils/vehicles/buses/eicher';
import { hinoBusModelsCategory } from '@/utils/vehicles/buses/hino';
import { isuzuBusModelsCategory } from '@/utils/vehicles/buses/isuzu';
import { kinglongBusModelsCategory } from '@/utils/vehicles/buses/kinglong';
import { mahindraBusModelsCategory } from '@/utils/vehicles/buses/mahindra';
import { microBusModelsCategory } from '@/utils/vehicles/buses/micro';
import { mitsubishiBusModelsCategory } from '@/utils/vehicles/buses/mitsubishi';
import { nissanBusModelsCategory } from '@/utils/vehicles/buses/nissan';
import { tataBusModelsCategory } from '@/utils/vehicles/buses/tata';
import { toyotaBusModelsCategory } from '@/utils/vehicles/buses/toyota';

import { districts } from '@/utils/districts/districts';


// import '../../css/allCategoryAccordion.css'
// import '../../css/vehiclesmaincomponent.css'
//import carImg from '../../images/car.png'
//import notFoundImg from '../../images/notfound.png'
import { prices } from '@/utils/prices/fixedPrices';
import ReactPaginate from "react-paginate";
// export default function ProductList() {

export default  function  BusComponent(){
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
    const defaultCategory=`${process.env.BUS_ID}`
    const [myFilters, setMyFilters] = useState({
        filters: { category: [defaultCategory], price: [],carBrand:[],district:[],localArea:[],busBrand:[] }
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
//bus models
const ashokModels=()=>(
    <div>
        <h4>select Ashok Leyland model</h4>
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={ashokLeylandBusModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "busModel")
                }
            />
        </ul>
        </div>
    </div>  
   )
   const eicherModels=()=>(
    <div>
        <h4>select Eicher model</h4>
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={eicherBusModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "busModel")
                }
            />
        </ul>
        </div>
    </div>  
   )
   const hinoModels=()=>(
    <div>
        <h4>select Hino model</h4>
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={hinoBusModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "busModel")
                }
            />
        </ul>
        </div>
    </div>  
   )
   const isuzuModels=()=>(
    <div>
        <h4>select Isuzu model</h4>
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={isuzuBusModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "busModel")
                }
            />
        </ul>
        </div>
    </div>  
   )
   const kinglongModels=()=>(
    <div>
        <h4>select Kinglong model</h4>
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={kinglongBusModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "busModel")
                }
            />
        </ul>
        </div>
    </div>  
   )
   const mahindraModels=()=>(
    <div>
        <h4>select Mahindra model</h4>
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={mahindraBusModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "busModel")
                }
            />
        </ul>
        </div>
    </div>  
   )
   const microModels=()=>(
    <div>
        <h4>select Micro model</h4>
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={microBusModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "busModel")
                }
            />
        </ul>
        </div>
    </div>  
   )
   const mitsubishiModels=()=>(
    <div>
        <h4>select Mitsubishi model</h4>
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={microBusModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "busModel")
                }
            />
        </ul>
        </div>
    </div>  
   )
   const nissanModels=()=>(
    <div>
        <h4>select Nissan model</h4>
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={nissanBusModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "busModel")
                }
            />
        </ul>
        </div>
    </div>  
   )
   const toyotaModels=()=>(
    <div>
        <h4>select Toyota model</h4>
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={toyotaBusModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "busModel")
                }
            />
        </ul>
        </div>
    </div>  
   )
   const tataModels=()=>(
    <div>
        <h4>select Tata model</h4>
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={tataBusModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "busModel")
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
                                categories={busModelsCategory}
                                handleFilters={filters =>
                                    handleFilters(filters, "busBrand")
                                }
                            />
                        </ul>
                        
                    </div>
                    
                    {
                        (myFilters.filters.busBrand.indexOf('ashok leyland')!=-1) ? ashokModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('eicher')!=-1) ? eicherModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('hino')!=-1) ? hinoModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('isuzu')!=-1) ? isuzuModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('kinglong')!=-1) ? kinglongModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('mahindra')!=-1) ? mahindraModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('micro')!=-1) ? microModels():(myFilters.filters.busModel=[])
                    }{
                        (myFilters.filters.busBrand.indexOf('mitsubishi')!=-1) ? mitsubishiModels():(myFilters.filters.busModel=[])
                    }{
                        (myFilters.filters.busBrand.indexOf('nissan')!=-1) ? nissanModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('tata')!=-1) ? tataModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('toyota')!=-1) ? toyotaModels():(myFilters.filters.busModel=[])
                    }
                    
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by Price Range</span></h4>
                    <div className="default-checkbox-div">
                        <CarRadio
                            prices={prices}
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
                   
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by Fuel Type</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={fuelTypesCategory}
                                handleFilters={filters =>
                                    handleFilters(filters, "fuelType")
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
                                                prices={prices}
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
                                      
                                        <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by Fuel Type</span></h4>
                                        <div className="default-checkbox-div">
                                            <ul>
                                                <CarCheckBox
                                                    categories={fuelTypesCategory}
                                                    handleFilters={filters =>
                                                        handleFilters(filters, "fuelType")
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
                            <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by Brand</span></h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={busModelsCategory}
                                handleFilters={filters =>
                                    handleFilters(filters, "busBrand")
                                }
                            />
                        </ul>
                        
                    </div>
                                {
                        (myFilters.filters.busBrand.indexOf('ashok leyland')!=-1) ? ashokModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('eicher')!=-1) ? eicherModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('hino')!=-1) ? hinoModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('isuzu')!=-1) ? isuzuModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('kinglong')!=-1) ? kinglongModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('mahindra')!=-1) ? mahindraModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('micro')!=-1) ? microModels():(myFilters.filters.busModel=[])
                    }{
                        (myFilters.filters.busBrand.indexOf('mitsubishi')!=-1) ? mitsubishiModels():(myFilters.filters.busModel=[])
                    }{
                        (myFilters.filters.busBrand.indexOf('nissan')!=-1) ? nissanModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('tata')!=-1) ? tataModels():(myFilters.filters.busModel=[])
                    }
                    {
                        (myFilters.filters.busBrand.indexOf('toyota')!=-1) ? toyotaModels():(myFilters.filters.busModel=[])
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
  