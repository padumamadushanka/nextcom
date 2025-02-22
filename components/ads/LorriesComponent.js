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
import { lorryBrandsCategory } from '@/utils/vehicles/lorries/fixedLorryBrands';
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

import { districts } from '@/utils/districts/districts';


// import '../../css/allCategoryAccordion.css'
// import '../../css/vehiclesmaincomponent.css'
//import carImg from '../../images/car.png'
//import notFoundImg from '../../images/notfound.png'
import { prices } from '@/utils/prices/fixedPrices';
import ReactPaginate from "react-paginate";
import { carBodyTypes } from '@/utils/vehicles/bodyTypes/carBodyTypes';

// export default function ProductList() {

export default  function  LorriesComponent(){
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
    const defaultCategory=`${process.env.LORRY_ID}`
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
                                categories={lorryBrandsCategory}
                                handleFilters={filters =>
                                    handleFilters(filters, "lorryBrand")
                                }
                            />
                        </ul>
                        
                    </div>
                    
                   
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
                                        <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by Body Type</span></h4>
                                        <div className="default-checkbox-div">
                                            <ul>
                                                <CarCheckBox
                                                    categories={carBodyTypes}
                                                    handleFilters={filters =>
                                                        handleFilters(filters, "bodyType")
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
                                categories={lorryBrandsCategory}
                                handleFilters={filters =>
                                    handleFilters(filters, "lorryBrand")
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
  