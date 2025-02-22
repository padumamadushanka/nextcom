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
import { bikeBrandsCategory } from '@/utils/vehicles/bikeModels/fixedBikeBrands';
import { prices } from '@/utils/prices/fixedPrices';
import { conditionsCategory } from '@/utils/vehicles/models/fixedConditions';
import { apriliaModelsCategory } from '@/utils/vehicles/bikeModels/aprilia';
import { bajajModelsCategory } from '@/utils/vehicles/bikeModels/bajaj';
import { bmwModelsCategory } from '@/utils/vehicles/bikeModels/bmw';
import { demakModelsCategory } from '@/utils/vehicles/bikeModels/demak';
import { dukatiModelsCategory } from '@/utils/vehicles/bikeModels/dukati';
import { electraModelsCategory } from '@/utils/vehicles/bikeModels/electra';
import { harleyDavidsonModelsCategory } from '@/utils/vehicles/bikeModels/harleydavidson';
import { heroModelsCategory } from '@/utils/vehicles/bikeModels/hero';
import { hondaModelsCategory } from '@/utils/vehicles/bikeModels/honda';
import { kawasakiModelsCategory } from '@/utils/vehicles/bikeModels/kawasaki';
import { kineticModelsCategory } from '@/utils/vehicles/bikeModels/kinetic';
import { ktmModelsCategory } from '@/utils/vehicles/bikeModels/ktm';
import { kymcoModelsCategory } from '@/utils/vehicles/bikeModels/kymco';
import { loncinModelsCategory } from '@/utils/vehicles/bikeModels/loncin';
import { mahindraModelsCategory } from '@/utils/vehicles/bikeModels/mahindra';
import { royalEnfieldModelsCategory } from '@/utils/vehicles/bikeModels/royalEnfield';
import { suzukiModelsCategory } from '@/utils/vehicles/bikeModels/suzuki';
import { tvsModelsCategory } from '@/utils/vehicles/bikeModels/tvs';
import { vespaModelsCategory } from '@/utils/vehicles/bikeModels/vespa';
import { yamahaModelsCategory } from '@/utils/vehicles/bikeModels/yamaha';
import { suspensionTypes,bodyPartsTypes,hvacPartsTypes,enginePartsTypes ,transmissionPartsTypes,brakePartsTypes,electricalPartsTypes,accessoriesPartsTypes} from '@/utils/vehicles/spares/carSpareTypes'
import { districts } from '@/utils/districts/districts';
import { carSparePrices } from '@/utils/vehicles/spares/sparePrices';
import { bikePartsTypes } from '@/utils/vehicles/spares/bikeSpareTypes';


// import '../../css/allCategoryAccordion.css'
// import '../../css/vehiclesmaincomponent.css'
//import carImg from '../../images/car.png'
//import notFoundImg from '../../images/notfound.png'
import ReactPaginate from "react-paginate";
import { carBodyTypes } from '@/utils/vehicles/bodyTypes/carBodyTypes';

// export default function ProductList() {

export default  function  BikesparesComponent(){
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
    const defaultCategory=`${process.env.BIKEPARTS_ID}`
    const [myFilters, setMyFilters] = useState({
        filters: { category: [defaultCategory], price: [],carBrand:[],district:[],localArea:[],bikeBrand:[] }
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
//bike models
const apriliaModels=()=>(
    <div>
        <h4>select aprilia model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={apriliaModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const bajajModels=()=>(
    <div>
        <h4 className="checkbox-title">select bajaj model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={bajajModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const bmwModels=()=>(
    <div>
        <h4 className="checkbox-title">select bmw model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={bmwModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const demakModels=()=>(
    <div>
        <h4 className="checkbox-title">select demak model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={demakModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const dukatiModels=()=>(
    <div>
        <h4 className="checkbox-title">select dukati model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={dukatiModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const electraModels=()=>(
    <div>
        <h4 className="checkbox-title">select electra model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={electraModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const harleydavidsonModels=()=>(
    <div>
        <h4 className="checkbox-title">select harley davidson model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={harleyDavidsonModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const heroModels=()=>(
    <div>
        <h4 className="checkbox-title">select hero model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={heroModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const hondaModels=()=>(
    <div>
        <h4 className="checkbox-title">select honda model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={hondaModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const kawasakiModels=()=>(
    <div>
        <h4 className="checkbox-title">select kawasaki model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={kawasakiModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const kineticModels=()=>(
    <div>
        <h4 className="checkbox-title">select kinetic model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={kineticModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const ktmModels=()=>(
    <div>
        <h4 className="checkbox-title">select ktm model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={ktmModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const kymcoModels=()=>(
    <div>
        <h4 className="checkbox-title">select kymco model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={kymcoModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const loncinModels=()=>(
    <div>
        <h4 className="checkbox-title">select loncin model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={loncinModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const mahindraModels=()=>(
    <div>
        <h4 className="checkbox-title">select mahindra model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={mahindraModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const royalEnfieldModels=()=>(
    <div>
        <h4 className="checkbox-title">select royal enfield model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={royalEnfieldModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const suzukiModels=()=>(
    <div>
        <h4 className="checkbox-title">select suzuki model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={suzukiModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const tvsModels=()=>(
    <div>
        <h4 className="checkbox-title">select tvs model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={tvsModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const vespaModels=()=>(
    <div>
        <h4 className="checkbox-title">select vespa model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={vespaModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
                }
            />
        </ul>
        </div>
    </div>
    

   )
   const yamahaModels=()=>(
    <div>
        <h4 className="checkbox-title">select yamaha model</h4>
        
        <div className="default-checkbox-div">
        <ul>
            <CarCheckBox
                categories={yamahaModelsCategory}
                handleFilters={filters =>
                handleFilters(filters, "bikeModel")
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
  
                    <h4 className="checkbox-title">Filter by Brand</h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={bikeBrandsCategory}
                                handleFilters={filters =>
                                    handleFilters(filters, "bikeBrand")
                                }
                            />
                        </ul> 
                    </div>
                    {
                        (myFilters.filters.bikeBrand.indexOf('aprilia')!=-1) ? apriliaModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('bajaj')!=-1) ? bajajModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('bmw')!=-1) ? bmwModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('demak')!=-1) ? demakModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('ducati')!=-1) ? dukatiModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('electra')!=-1) ? electraModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('harley davidson')!=-1) ? harleydavidsonModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('hero')!=-1) ? heroModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('honda')!=-1) ? hondaModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('kawasaki')!=-1) ? kawasakiModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('kinetic')!=-1) ? kineticModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('ktm')!=-1) ? ktmModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('kymco')!=-1) ? kymcoModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('loncin')!=-1) ? loncinModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('mahindra')!=-1) ? mahindraModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('royal enfield')!=-1) ? royalEnfieldModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('suzuki')!=-1) ? suzukiModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('tvs')!=-1) ? tvsModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('vespa')!=-1) ? vespaModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('yamaha')!=-1) ? yamahaModels():(myFilters.filters.bikeModel=[])
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
                    <h4 className="checkbox-title">Filter by Part Type</h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={bikePartsTypes}
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
                    <h4 className="my-3 "><span class="badge text-bg-secondary">Filter by Price Range</span></h4>
                    <div className="default-checkbox-div">
                        <CarRadio
                            prices={carSparePrices}
                            handleFilters={filters =>
                                handleFilters(filters, "price")
                            }
                        />
                    </div>  
                    <h4 className="checkbox-title">Filter by Part Type</h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={bikePartsTypes}
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
                            <h4 className="checkbox-title">Filter by Brand</h4>
                    <div className="default-checkbox-div">
                        <ul>
                            <CarCheckBox
                                categories={bikeBrandsCategory}
                                handleFilters={filters =>
                                    handleFilters(filters, "bikeBrand")
                                }
                            />
                        </ul> 
                    </div>
                    {
                        (myFilters.filters.bikeBrand.indexOf('aprilia')!=-1) ? apriliaModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('bajaj')!=-1) ? bajajModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('bmw')!=-1) ? bmwModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('demak')!=-1) ? demakModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('ducati')!=-1) ? dukatiModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('electra')!=-1) ? electraModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('harley davidson')!=-1) ? harleydavidsonModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('hero')!=-1) ? heroModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('honda')!=-1) ? hondaModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('kawasaki')!=-1) ? kawasakiModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('kinetic')!=-1) ? kineticModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('ktm')!=-1) ? ktmModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('kymco')!=-1) ? kymcoModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('loncin')!=-1) ? loncinModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('mahindra')!=-1) ? mahindraModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('royal enfield')!=-1) ? royalEnfieldModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('suzuki')!=-1) ? suzukiModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('tvs')!=-1) ? tvsModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('vespa')!=-1) ? vespaModels():(myFilters.filters.bikeModel=[])
                    }
                    {
                        (myFilters.filters.bikeBrand.indexOf('yamaha')!=-1) ? yamahaModels():(myFilters.filters.bikeModel=[])
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
  