"use client";
import { useEffect ,useState} from "react";
import { useSession, signOut } from "next-auth/react";
import { useProduct } from "@/context/product";
import { useCategory } from "@/context/category";
import { useTag } from "@/context/tag";
import Resizer from 'react-image-file-resizer'

export default function ProductCreate() {
    const { data, status, loading } = useSession();
    
    const [values, setValues] = useState({
        
        categoryVal:'',
        carBrandVal:'',
        bikeBrandVal:'',
        vanBrandVal:'',
        busBrandVal:'',
        threeWheelBrandVal:'',
        lorryBrandVal:'',
        
    });
    const [file, setFile] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);
    const [file4, setFile4] = useState(null);
    const [file5, setFile5] = useState(null);


    const [imageUrl, setImageUrl] = useState("");
    const [imageName, setImageName] = useState("");
    const [imageUrl1, setImageUrl1] = useState("");
    const [imageUrl2, setImageUrl2] = useState("");
    const [imageUrl3, setImageUrl3] = useState("");
    const [imageUrl4, setImageUrl4] = useState("");
    const [imageUrl5, setImageUrl5] = useState("");


    const [imageName1, setImageName1] = useState("");
    const [imageName2, setImageName2] = useState("");
    const [imageName3, setImageName3] = useState("");
    const [imageName4, setImageName4] = useState("");
    const [imageName5, setImageName5] = useState("");



  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
    const handleFileChange2 = (e) => {
        setFile2(e.target.files[0]);
      };
      const handleFileChange3 = (e) => {
        setFile3(e.target.files[0]);
      };
      const handleFileChange4 = (e) => {
        setFile4(e.target.files[0]);
      };
      const handleFileChange5 = (e) => {
        setFile5(e.target.files[0]);
      };

    // const createProduct = async () => {
    //     try {
    //       const response = await fetch(`${process.env.API}/ad/user`, {
    //         method: "POST",
    //         body: JSON.stringify(product),
    // });
    //       const data = await response.json();
    //       if (!response.ok) {
    //         toast.error(data.err);
    //       } else {
    //         toast.success(`Product "${data?.title}" created`);
    //         // router.push("/dashboard/admin/products");
    //         window.location.reload();
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    // };
    
//main image upload
    const uploadImage = async () => {
        if (!file) return alert("Please select a file");
        const resizeFile = (file) =>
            new Promise((resolve) => {
              Resizer.imageFileResizer(
                file,
                550,
                450,
                "JPEG",
                40,
                0,
                (uri) => {
                  resolve(uri);
                },
                "file"
              );
            });
       
          const image = await resizeFile(file);

    
        setUploading(true);
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = async () => {
          const base64Data = reader.result.split(",")[1]; // Extract base64 content
          const fileName = `${Date.now()}-${file.name}`;
         

          const response = await fetch("/api/ad/uploadImages", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ file: base64Data, fileName })
          });
        

          const data = await response.json();
          console.log(data)
          setUploading(false);
          if (response.ok) {
            setImageUrl(data.url);
            setImageName(data.fileName)
            setImageUrl1(data.url)
            setImageName1(data.fileName)
            setProduct({ ...product, imageUrl1:data.url,imageName1:data.fileName })
            alert("Upload successful!");
          } else {
            alert("Upload failed: " + data.message);
          }
        };
      };

// 2nd image upload

const uploadImage2 = async () => {
    if (!file2) return alert("Please select a file");
    const resizeFile = (file) =>
        new Promise((resolve) => {
          Resizer.imageFileResizer(
            file,
            550,
            450,
            "JPEG",
            40,
            0,
            (uri) => {
              resolve(uri);
            },
            "file"
          );
        });
   
      const image = await resizeFile(file2);


    setUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const base64Data = reader.result.split(",")[1]; // Extract base64 content
      const fileName = `${Date.now()}-${file2.name}`;
     

      const response = await fetch("/api/ad/uploadImages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file: base64Data, fileName })
      });
    

      const data = await response.json();
      console.log(data)
      setUploading(false);
      if (response.ok) {
        
        setImageUrl2(data.url)
        setImageName2(data.fileName)
        setProduct({ ...product, imageUrl2:data.url,imageName2:data.fileName })
        alert("Upload successful!");
      } else {
        alert("Upload failed: " + data.message);
      }
    };
  };

  //3rd image upload
  const uploadImage3 = async () => {
    if (!file3) return alert("Please select a file");
    const resizeFile = (file) =>
        new Promise((resolve) => {
          Resizer.imageFileResizer(
            file,
            550,
            450,
            "JPEG",
            40,
            0,
            (uri) => {
              resolve(uri);
            },
            "file"
          );
        });
   
      const image = await resizeFile(file3);


    setUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const base64Data = reader.result.split(",")[1]; // Extract base64 content
      const fileName = `${Date.now()}-${file3.name}`;
     

      const response = await fetch("/api/ad/uploadImages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file: base64Data, fileName })
      });
    

      const data = await response.json();
      console.log(data)
      setUploading(false);
      if (response.ok) {
        
        setImageUrl3(data.url)
        setImageName3(data.fileName)
        setProduct({ ...product, imageUrl3:data.url,imageName3:data.fileName })
        alert("Upload successful!");
      } else {
        alert("Upload failed: " + data.message);
      }
    };
  };

   //4th image upload
   const uploadImage4 = async () => {
    if (!file4) return alert("Please select a file");
    const resizeFile = (file) =>
        new Promise((resolve) => {
          Resizer.imageFileResizer(
            file,
            550,
            450,
            "JPEG",
            40,
            0,
            (uri) => {
              resolve(uri);
            },
            "file"
          );
        });
   
      const image = await resizeFile(file4);


    setUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const base64Data = reader.result.split(",")[1]; // Extract base64 content
      const fileName = `${Date.now()}-${file4.name}`;
     

      const response = await fetch("/api/ad/uploadImages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file: base64Data, fileName })
      });
    

      const data = await response.json();
      console.log(data)
      setUploading(false);
      if (response.ok) {
        
        setImageUrl4(data.url)
        setImageName4(data.fileName)
        setProduct({ ...product, imageUrl4:data.url,imageName4:data.fileName })
        alert("Upload successful!");
      } else {
        alert("Upload failed: " + data.message);
      }
    };
  };

   //5th image upload
   const uploadImage5 = async () => {
    if (!file5) return alert("Please select a file");
    const resizeFile = (file) =>
        new Promise((resolve) => {
          Resizer.imageFileResizer(
            file,
            550,
            450,
            "JPEG",
            40,
            0,
            (uri) => {
              resolve(uri);
            },
            "file"
          );
        });
   
      const image = await resizeFile(file5);


    setUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const base64Data = reader.result.split(",")[1]; // Extract base64 content
      const fileName = `${Date.now()}-${file5.name}`;
     

      const response = await fetch("/api/ad/uploadImages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file: base64Data, fileName })
      });
    

      const data = await response.json();
      console.log(data)
      setUploading(false);
      if (response.ok) {
        
        setImageUrl5(data.url)
        setImageName5(data.fileName)
        setProduct({ ...product, imageUrl5:data.url,imageName5:data.fileName })
        alert("Upload successful!");
      } else {
        alert("Upload failed: " + data.message);
      }
    };
  };
    //   const uploadImage = async () => {
    //     if (!file) return alert("Please select a file");
    
    //     setUploading(true);
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = async () => {
    //       const base64Data = reader.result.split(",")[1]; // Extract base64 content
    //       const fileName = `${Date.now()}-${file.name}`;
         

    //       const response = await fetch("/api/ad/uploadImages", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ file: base64Data, fileName })
    //       });
        

    //       const data = await response.json();
    //       console.log(data)
    //       setUploading(false);
    //       if (response.ok) {
    //         setImageUrl(data.url);
    //         setImageName(data.fileName)
    //         setProduct({ ...product, images:data })
    //         alert("Upload successful!");
    //       } else {
    //         alert("Upload failed: " + data.message);
    //       }
    //     };
    //   };

      const deletebunnyImage = async (imageName) => {
        // if (!file) return alert("Please select a file");
    
        setUploading(true);
        
         

          const response = await fetch("/api/ad/deleteImage", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ fileName: imageName })
          });
        

          const data = await response.json();
          console.log(data)
          setUploading(false);
          if (response.ok) {
            setImageUrl1(null)
            setImageName1(null)
            setImageUrl(null)
            setImageName(null)
            setProduct({ ...product, imageUrl1:null ,imageName1:null})
            // setProduct({ ...product, images:data })
            alert("delete successful!");
          } else {
            alert("Upload failed: " + data.message);
          }
        
      };

      //delete image 2
      const deletebunnyImage2 = async (imageName2) => {
        // if (!file) return alert("Please select a file");
    
        setUploading(true);
        
         

          const response = await fetch("/api/ad/deleteImage", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ fileName: imageName2 })
          });
        

          const data = await response.json();
          console.log(data)
          setUploading(false);
          if (response.ok) {
            setImageUrl2(null)
            setImageName2(null)
            setProduct({ ...product, imageUrl2:null ,imageName2:null})
            // setProduct({ ...product, images:data })
            alert("delete successful!");
          } else {
            alert("Upload failed: " + data.message);
          }
        
      };

        //delete image 3
        const deletebunnyImage3 = async (imageName3) => {
            // if (!file) return alert("Please select a file");
        
            setUploading(true);
            
             
    
              const response = await fetch("/api/ad/deleteImage", {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ fileName: imageName3 })
              });
            
    
              const data = await response.json();
              console.log(data)
              setUploading(false);
              if (response.ok) {
                setImageUrl3(null)
                setImageName3(null)
                setProduct({ ...product, imageUrl3:null ,imageName3:null})
                // setProduct({ ...product, images:data })
                alert("delete successful!");
              } else {
                alert("Upload failed: " + data.message);
              }
            
          };

            //delete image 4
        const deletebunnyImage4 = async (imageName4) => {
            // if (!file) return alert("Please select a file");
        
            setUploading(true);
            
             
    
              const response = await fetch("/api/ad/deleteImage", {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ fileName: imageName4 })
              });
            
    
              const data = await response.json();
              console.log(data)
              setUploading(false);
              if (response.ok) {
                setImageUrl4(null)
                setImageName4(null)
                setProduct({ ...product, imageUrl4:null ,imageName4:null})
                // setProduct({ ...product, images:data })
                alert("delete successful!");
              } else {
                alert("Upload failed: " + data.message);
              }
            
          };

                     //delete image 5
        const deletebunnyImage5 = async (imageName5) => {
            // if (!file) return alert("Please select a file");
        
            setUploading(true);
            
             
    
              const response = await fetch("/api/ad/deleteImage", {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ fileName: imageName5 })
              });
            
    
              const data = await response.json();
              console.log(data)
              setUploading(false);
              if (response.ok) {
                setImageUrl5(null)
                setImageName5(null)
                setProduct({ ...product, imageUrl5:null ,imageName5:null})
                // setProduct({ ...product, images:data })
                alert("delete successful!");
              } else {
                alert("Upload failed: " + data.message);
              }
            
          };

    const {
      product,
      setProduct,
      updatingProduct,
      setUpdatingProduct,
      createProduct,
      updateProduct,
      deleteProduct,
      uploading,
      setUploading,
      uploadImages,
      deleteImage,
    } = useProduct();
//     if (typeof data != "undefined"&& typeof product != "undefined") {
// product.author=data.user._id
// }
   
    const { categories,fetchCategoriesForUser } = useCategory();
    const { tags, fetchTags } = useTag();
    const imagePreviews = updatingProduct
  ? updatingProduct?.images ?? []
  : product?.images ?? [];
    useEffect(() => {
        fetchCategoriesForUser();
      fetchTags();
  }, []);

//   FORM COMPONENTS
const carForm=()=>(
    <div>
        
        <div className="form-group">
            <label className="text-muted">condition</label>
            <select   onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          condition: e.target.value,
                        })
                        : setProduct({ ...product, condition: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="reconditioned">Reconditioned</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">body type</label>
            <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bodyType: e.target.value,
                        })
                        : setProduct({ ...product, bodyType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="SEDAN">SEDAN</option>
                    <option value="COUPE">COUPE</option>
                    <option value="SPORTS CAR">SPORTS CAR</option>
                    <option value="STATION WAGON">STATION WAGON</option>
                    <option value="HATCHBACK">HATCHBACK</option>
                    <option value="CONVERTIBLE">CONVERTIBLE</option>
                    <option value="SUV">SUV</option>
                    <option value="SALOON">SALOON</option>
                    <option value="MINIVAN">MINIVAN</option>
                    <option value="other type">other type</option>

            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Brand</label>
            <select    onChange={(e) =>{
                values.carBrandVal=e.target.value;
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carBrand: e.target.value,
                        })
                        : setProduct({ ...product, carBrand: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="alfa romio">Alfa Romio</option>
                    <option value="used">Aston martin</option>
                    <option value="Audi">Audi</option>
                    <option value="austin">Austin</option>
                    <option value="bmw">BMW</option>
                    <option value="buick">Buick</option>
                    <option value="cadillac">Cadillac</option>
                    <option value="changan">Changan</option>
                    <option value="chery">Chery</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="chrysler">Chrysler</option>
                    <option value="citron">Citron</option>
                    <option value="daewoo">Daewoo</option>
                    <option value="daihatsu">Daihatsu</option>
                    <option value="dfsk">DFSK</option>
                    <option value="dodge">Dodge</option>
                    <option value="ferrari">Ferrari</option>
                    <option value="fiat">Fiat</option>
                    <option value="ford">Ford</option>
                    <option value="geely">Geely</option>
                    <option value="gmc">GMC</option>
                    <option value="hino">Hino</option>
                    <option value="honda">Honda</option>
                    <option value="hummer">Hummer</option>
                    <option value="hyundai">Hyundai</option>
                    <option value="isuzu">Isuzu</option>
                    <option value="jaguar">Jaguar</option>
                    <option value="jeep">Jeep</option>
                    <option value="kia">Kia</option>
                    <option value="lamborghini">Lamborghini</option>
                    <option value="land rover">Land Rover</option>
                    <option value="lexus">Lexus</option>
                    <option value="lincoln">Lincoln</option>
                    <option value="mahindra">Mahindra</option>
                    <option value="maruti suzuki">Maruti Suzuki</option>
                    <option value="maruti">Maruti</option>
                    <option value="mazda">Mazda</option>
                    <option value="mercedes benz">Mercedes Benz</option>
                    <option value="mg">MG</option>
                    <option value="micro">Micro</option>
                    <option value="mini">Mini</option>
                    <option value="mitsubishi">Mitsubishi</option>
                    <option value="morris">Morris</option>
                    <option value="moto guzzi">Moto Guzzi</option>
                    <option value="nissan">Nissan</option>
                    <option value="oldsmobile">Oldsmobile</option>
                    <option value="opel">Opel</option>
                    <option value="perodua">Perodua</option>
                    <option value="peugeot">Peugeot</option>
                    <option value="plymoth">Plymoth</option>
                    <option value="pontiac">Pontiac</option>
                    <option value="porsche">Porsche</option>
                    <option value="proton">Proton</option>
                    <option value="renault">Renault</option>
                    <option value="rover">Rover</option>
                    <option value="royal enfield">Royal Enfield</option>
                    <option value="saab">Saab</option>
                    <option value="scion">Scion</option>
                    <option value="seat">SEAT</option>
                    <option value="skoda">Skoda</option>
                    <option value="smart">Smart</option>
                    <option value="ssang yong">Ssang yong</option>
                    <option value="subaru">Subaru</option>
                    <option value="suzuki">Suzuki</option>
                    <option value="tata">Tata</option>
                    <option value="tesla">Tesla</option>
                    <option value="toyota">Toyota</option>
                    <option value="vauxhall">Vauxhall</option>
                    <option value="volkswagen">Volkswagen</option>
                    <option value="volvo">Volvo</option>
                    <option value="Zotye">Zotye</option>
                    <option value="other brand">Other Brand</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Fuel type</label>
            <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          fuelType: e.target.value,
                        })
                        : setProduct({ ...product, fuelType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="diesel">Diesel</option>
                    <option value="petrol">Petrol</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="electric">Electric</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Transmission</label>
            <select     onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          gear: e.target.value,
                        })
                        : setProduct({ ...product, gear: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                    <option value="tiptronic">Tiptronic</option>
                    <option value="other">other Transmission</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Year of Manufacture</label>
            <input  class="form-control p-2 mb-2"
            value={updatingProduct ? updatingProduct?.year : product?.year}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    year: e.target.value,
                  })
                : setProduct({ ...product, year: e.target.value })
            } type="number" className="form-control" placeholder="add manufactured year"  required/>
        </div>
        <div className="form-group">
            <label className="text-muted">Mileage</label>
            <input   class="form-control p-2 mb-2"
            value={updatingProduct ? updatingProduct?.mileage : product?.mileage}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    mileage: e.target.value,
                  })
                : setProduct({ ...product, mileage: e.target.value })
            }type="number" className="form-control"placeholder="add mileage"  required/>
        </div>
        <div className="form-group">
            <label className="text-muted">Engine capacity</label>
            <input  class="form-control p-2 mb-2"
            value={updatingProduct ? updatingProduct?.engine : product?.engine}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    engine: e.target.value,
                  })
                : setProduct({ ...product, engine: e.target.value })
            }type="number" className="form-control" placeholder="add engine capacity" required/>
        </div>
    </div>   
)
const bikeForm=()=>(
    <div>
        
        <div className="form-group">
            <label className="text-muted">condition</label>
            <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          condition: e.target.value,
                        })
                        : setProduct({ ...product, condition: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="reconditioned">Reconditioned</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Brand</label>
            <select   onChange={(e) =>{
                values.bikeBrandVal=e.target.value;
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeBrand: e.target.value,
                        })
                        : setProduct({ ...product, bikeBrand: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="aprilia">Aprilia</option>
                    <option value="bajaj">Bajaj</option>
                    <option value="chopper">Chopper</option>
                    <option value="demak">Demak</option>
                    <option value="ducati">Ducati</option>
                    <option value="electra">Electra</option>
                    <option value="falcon">Falcon</option>
                    <option value="harley davidson">Harley Davidson</option>
                    <option value="hero">Hero</option>
                    <option value="honda">Honda</option>
                    <option value="kawasaki">Kawasaki</option>
                    <option value="kinetic">Kinetic</option>
                    <option value="ktm">KTM</option>
                    <option value="kymco">KYMCO</option>
                    <option value="loncin">Loncin</option>
                    <option value="mahindra">Mahindra</option>
                    <option value="minnelli">Minnelli</option>
                    <option value="piaggio">Piaggio</option>
                    <option value="ranomoto">Ranomoto</option>
                    <option value="royal enfield">Royal Enfield</option>
                    <option value="scooty">Scooty</option>
                    <option value="suzuki">Suzuki</option>
                    <option value="triumph">Triumph</option>
                    <option value="tvs">Tvs</option>
                    <option value="vespa">Vespa</option>
                    <option value="yamaha">Yamaha</option>
                    <option value="other brand">Other Brand</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Type of Bike</label>
            <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bodyType: e.target.value,
                        })
                        : setProduct({ ...product, bodyType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="scooter">Scooter</option>
                    <option value="motorbike">MotorBike</option>
                    <option value="quadricycle">Quadricycle</option>
                    <option value="electric">Electric</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Year of Manufacture</label>
            <input  value={updatingProduct ? updatingProduct?.year : product?.year}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    year: e.target.value,
                  })
                : setProduct({ ...product, year: e.target.value })
            } type="number" className="form-control"  required/>
        </div>
        <div className="form-group">
            <label className="text-muted">Mileage</label>
            <input value={updatingProduct ? updatingProduct?.mileage : product?.mileage}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    mileage: e.target.value,
                  })
                : setProduct({ ...product, mileage: e.target.value })
            }  type="number" className="form-control"  required/>
        </div>
        <div className="form-group">
            <label className="text-muted">Engine capacity</label>
            <input  onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    engine: e.target.value,
                  })
                : setProduct({ ...product, engine: e.target.value })
            }type="number" className="form-control"  required/>
        </div>
    </div>   
)
const vanForm=()=>(
    <div>
        
        <div className="form-group">
            <label className="text-muted">condition</label>
            <select   onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          condition: e.target.value,
                        })
                        : setProduct({ ...product, condition: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="reconditioned">Reconditioned</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Brand</label>
            <select   onChange={(e) =>{
                values.vanBrandVal=e.target.value;
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanBrand: e.target.value,
                        })
                        : setProduct({ ...product, vanBrand: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="daihatsu">Daihatsu</option>
                    <option value="honda">Honda</option>
                    <option value="hyundai">Hyundai</option>
                    <option value="isuzu">Isuzu</option>
                    <option value="mahindra">Mahindra</option>
                    <option value="mazda">Mazda</option>
                    <option value="mercedes benz">Mercedes Benz</option>
                    <option value="micro">Micro</option>
                    <option value="mitsubishi">Mitsubishi</option>
                    <option value="nissan">Nissan</option>
                    <option value="subaru">Subaru</option>
                    <option value="suzuki">Suzuki</option>
                    <option value="tata">Tata</option>
                    <option value="toyota">Toyota</option>
                    <option value="volkswagen">Volkswagen</option>
                    <option value="other model">Other model</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Fuel type</label>
            <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          fuelType: e.target.value,
                        })
                        : setProduct({ ...product, fuelType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="diesel">Diesel</option>
                    <option value="petrol">Petrol</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="electric">Electric</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Transmission</label>
            <select   onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          gear: e.target.value,
                        })
                        : setProduct({ ...product, gear: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                    <option value="tiptronic">Tiptronic</option>
                    <option value="other">other Transmission</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Year of Manufacture</label>
            <input  value={updatingProduct ? updatingProduct?.year : product?.year}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    year: e.target.value,
                  })
                : setProduct({ ...product, year: e.target.value })
            }  type="number" className="form-control"  required/>
        </div>
        <div className="form-group">
            <label className="text-muted">Mileage</label>
            <input value={updatingProduct ? updatingProduct?.mileage : product?.mileage}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    mileage: e.target.value,
                  })
                : setProduct({ ...product, mileage: e.target.value })
            } type="number" className="form-control"  required/>
        </div>
        <div className="form-group">
            <label className="text-muted">Engine capacity</label>
            <input value={updatingProduct ? updatingProduct?.engine : product?.engine}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    engine: e.target.value,
                  })
                : setProduct({ ...product, engine: e.target.value })
            } type="number" className="form-control"  required/>
        </div>
    </div>   
)
const busForm=()=>(
    <div>
        
        <div className="form-group">
            <label className="text-muted">condition</label>
            <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          condition: e.target.value,
                        })
                        : setProduct({ ...product, condition: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="reconditioned">Reconditioned</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Brand</label>
            <select onChange={(e) =>{
                values.busBrandVal=e.target.value;
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          busBrand: e.target.value,
                        })
                        : setProduct({ ...product, busBrand: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="ashok leyland">Ashok Leyland</option>
                    <option value="eicher">Eicher</option>
                    <option value="golden dragon">Golden Dragon</option>
                    <option value="hino">Hino</option>
                    <option value="isuzu">Isuzu</option>
                    <option value="kinglong">Kinglong</option>
                    <option value="mahindra">Mahindra</option>
                    <option value="micro">Micro</option>
                    <option value="mitsubishi">Mitsubishi</option>
                    <option value="nissan">Nissan</option>
                    <option value="tata">Tata</option>
                    <option value="toyota">Toyota</option>
                    <option value="volvo">Volvo</option>
                    <option value="other model">Other model</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Fuel type</label>
            <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          fuelType: e.target.value,
                        })
                        : setProduct({ ...product, fuelType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="diesel">Diesel</option>
                    <option value="petrol">Petrol</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="electric">Electric</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Transmission</label>
            <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          gear: e.target.value,
                        })
                        : setProduct({ ...product, gear: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                    <option value="tiptronic">Tiptronic</option>
                    <option value="other">other Transmission</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Year of Manufacture</label>
            <input value={updatingProduct ? updatingProduct?.year : product?.year}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    year: e.target.value,
                  })
                : setProduct({ ...product, year: e.target.value })
            }  type="number" className="form-control"  required/>
        </div>
        <div className="form-group">
            <label className="text-muted">Mileage</label>
            <input value={updatingProduct ? updatingProduct?.mileage : product?.mileage}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    mileage: e.target.value,
                  })
                : setProduct({ ...product, mileage: e.target.value })
            }  type="number" className="form-control"  required/>
        </div>
        <div className="form-group">
            <label className="text-muted">Engine capacity</label>
            <input  value={updatingProduct ? updatingProduct?.engine : product?.engine}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    engine: e.target.value,
                  })
                : setProduct({ ...product, engine: e.target.value })
            } type="number" className="form-control"  required/>
        </div>
    </div>   
)
const threeWheelForm=()=>(
    <div>
        
        <div className="form-group">
            <label className="text-muted">condition</label>
            <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          condition: e.target.value,
                        })
                        : setProduct({ ...product, condition: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="reconditioned">Reconditioned</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Brand</label>
            <select onChange={(e) =>{
                values.threeWheelBrandVal=e.target.value;
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          threeWheelBrand: e.target.value,
                        })
                        : setProduct({ ...product, threeWheelBrand: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="bajaj">Bajaj</option>
                    <option value="mahindra">Mahindra</option>
                    <option value="piaggio">Piaggio</option>
                    <option value="tvs">Tvs</option>
                    <option value="other brand">Other Brand</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Year of Manufacture</label>
            <input value={updatingProduct ? updatingProduct?.year : product?.year}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    year: e.target.value,
                  })
                : setProduct({ ...product, year: e.target.value })
            }  type="number" className="form-control"  required/>
        </div>
        <div className="form-group">
            <label className="text-muted">Mileage</label>
            <input value={updatingProduct ? updatingProduct?.mileage : product?.mileage}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    mileage: e.target.value,
                  })
                : setProduct({ ...product, mileage: e.target.value })
            }   type="number" className="form-control"  required/>
        </div>
    </div>   
)
const lorriesAndTrucksForm=()=>(
    <div>
        <div className="form-group">
            <label className="text-muted">condition</label>
            <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          condition: e.target.value,
                        })
                        : setProduct({ ...product, condition: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="reconditioned">Reconditioned</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Brand</label>
            <select onChange={(e) =>{
                values.lorryBrandVal=e.target.value;
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryBrand: e.target.value,
                        })
                        : setProduct({ ...product, lorryBrand: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="ashok leyland">Ashok leyland</option>
                    <option value="atco">Atco</option>
                    <option value="daihatsu">Daihatsu</option>
                    <option value="dfsk">DFSK</option>
                    <option value="eicher">Eicher</option>
                    <option value="faw">Faw</option>
                    <option value="foton">Foton</option>
                    <option value="hino">Hino</option>
                    <option value="honda">Honda</option>
                    <option value="hyundai">Hyundai</option>
                    <option value="isuzu">Isuzu</option>
                    <option value="jac">JAC</option>
                    <option value="jmc">JMC</option>
                    <option value="mahindra">Mahindra</option>
                    <option value="mazda">Mazda</option>
                    <option value="mercedes benz">Mercedes Benz</option>
                    <option value="mitsubishi">Mitsubishi</option>
                    <option value="nissan">Nissan</option>
                    <option value="renault">Renault</option>
                    <option value="sojen">Sojen</option>
                    <option value="suzuki">Suzuki</option>
                    <option value="tata">Tata</option>
                    <option value="toyota">Toyota</option>
                    <option value="ud">UD</option>
                    <option value="yujien">Yujien</option>
                    <option value="other model">Other Brand</option>

            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Fuel type</label>
            <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          fuelType: e.target.value,
                        })
                        : setProduct({ ...product, fuelType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="diesel">Diesel</option>
                    <option value="petrol">Petrol</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="electric">Electric</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Transmission</label>
            <select   onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          gear: e.target.value,
                        })
                        : setProduct({ ...product, gear: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                    <option value="tiptronic">Tiptronic</option>
                    <option value="other">other Transmission</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Year of Manufacture</label>
            <input  value={updatingProduct ? updatingProduct?.year : product?.year}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    year: e.target.value,
                  })
                : setProduct({ ...product, year: e.target.value })
            }  type="number" className="form-control"  required/>
        </div>
        <div className="form-group">
            <label className="text-muted">Mileage</label>
            <input value={updatingProduct ? updatingProduct?.mileage : product?.mileage}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    mileage: e.target.value,
                  })
                : setProduct({ ...product, mileage: e.target.value })
            } type="number" className="form-control"  required/>
        </div>
        <div className="form-group">
            <label className="text-muted">Engine capacity</label>
            <input value={updatingProduct ? updatingProduct?.engine : product?.engine}
            onChange={(e) =>
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    engine: e.target.value,
                  })
                : setProduct({ ...product, engine: e.target.value })
            } type="number" className="form-control"  required/>
        </div>
    </div>   
)

// spare parts forms
const VehiclePartsForm=()=>(
    <div>
        <div className="form-group">
     <label className="text-muted">condition</label>
                 <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          condition: e.target.value,
                        })
                        : setProduct({ ...product, condition: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                         <option value="">Please select</option>
                         <option value="new">New</option>
                         <option value="used">Used</option>
                 </select>
     </div>
         <div className="form-group">
             <label className="text-muted">Part type</label>
             <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          partOrAccessoryType: e.target.value,
                        })
                        : setProduct({ ...product, partOrAccessoryType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                     <option>Please select</option>
                     <optgroup label="Suspension and Steering">
                         <option value="Struts and Shock absorbers">Struts and Shock absorbers</option>
                         <option value="Bushes, Strut mount and Kits">Bushes, Strut mount and Kits</option>
                         <option value="Coil Springs">Coil Springs</option>
                         <option value="Tie Rod End / Outer Ball Joint">Tie Rod End / Outer Ball Joint</option>
                         <option value="Rack End / Steering Ball Joint">Rack End / Steering Ball Joint</option>
                         <option value="Stabilizer Link">Stabilizer Link</option>
                         <option value="Control Arm">Control Arm</option>
                         <option value="Suspension ball joint">Suspension ball joint</option>
                         <option value="Steering Box Assembly / Rack assembly">Steering Box Assembly / Rack assembly</option>
                         <option value="Gas Spring / Dicky Shocks">Gas Spring / Dicky Shocks</option>
                         <option value="Other suspension and Steering parts">Other suspension and Steering parts</option>
                     </optgroup>
                     <optgroup label="Body Parts">
                         <option value="Head Lights">Head Lights</option>
                         <option value="Tail Lights">Tail Lights</option>
                         <option value="Mirrors">Mirrors</option>
                         <option value="Fog Lights and indicator Lights">Fog Lights and indicator Lights</option>
                         <option value="Bumpers">Bumpers</option>
                         <option value="Doors">Doors</option>
                         <option value="Other Body Parts">Other Body Parts</option>

                     </optgroup>
                     <optgroup label="HVAC">
                         <option value="Radiator">Radiator</option>
                         <option value="Intercooler">Intercooler</option>
                         <option value="AC Compressor">AC Compressor</option>
                         <option value="Condensor">Condensor</option>
                         <option value="Evaporator/Cooling Coil">Evaporator/Cooling Coil</option>
                         <option value="Other HVAC Parts">Other HVAC Parts</option>

                     </optgroup>
                     <optgroup label="Engine Parts">
                         <option value="Filters – Air, Oil, Fuel">Filters – Air, Oil, Fuel</option>
                         <option value="Piston, Rings, Liners">Piston, Rings, Liners</option>
                         <option value="Main Bearing">Main Bearing</option>
                         <option value="Connecting Rod Bearing">Connecting Rod Bearing</option>
                         <option value="Oil Cooler and Assembly">Oil Cooler and Assembly</option>
                         <option value="Other Engine Parts">Other Engine Parts</option>

                     </optgroup>
                     <optgroup label="Transmission">
                         <option value="Clutch Set">Clutch Set</option>
                         <option value="Drive Shafts  / Propeller Shafts and Parts">Drive Shafts  / Propeller Shafts and Parts</option>
                         <option value="Flywheel">Flywheel</option>
                         <option value="Clutch Bearing / Clutch Slave Cylinder (CSC)">Clutch Bearing / Clutch Slave Cylinder (CSC)</option>
                         <option value="Clutch Master Cylinder/CMCy">Clutch Master Cylinder/CMC</option>
                         <option value="Other Transmission Parts">Other Transmission Parts</option>

                     </optgroup>
                     <optgroup label="Brake">
                         <option value="Brake Pads">Brake Pads</option>
                         <option value="Disc Rotors">Disc Rotors</option>
                         <option value="Brake Shoes">Brake Shoes</option>
                         <option value="Brake Drums">Brake Drums</option>
                         <option value="Brake Master Cylinder">Brake Master Cylinder</option>
                         <option value="Other Brake Parts">Other Brake Parts</option>

                     </optgroup>
                     <optgroup label="Electrical">
                         <option value="Alternator">Alternator</option>
                         <option value="Starter Mortor">Starter Mortor</option>
                         <option value="Horns">Horns</option>
                         <option value="Clock Springs">Clock Springs</option>
                         <option value="Bulbs">Bulbs</option>
                         <option value="Sensors">Sensors</option>
                         <option value="Other Electrical Parts">Other Electrical Parts</option>

                     </optgroup>
                     <optgroup label="Accessories">
                         <option value="Seat Covers">Seat Covers</option>
                         <option value="Car Body Covers">Car Body Covers</option>
                         <option value="Wiper Blade">Wiper Blade</option>
                         <option value="Perfumes">Perfumes</option>
                         <option value="Tyres">Tyres</option>
                         <option value="Alloy wheels">Alloy wheels</option>
                         <option value="Other Accessories">Other Accessories</option>

                     </optgroup>
             </select>
         </div>
         <div className="form-group">
             <label className="text-muted">Brand</label>
             <select   onChange={(e) =>{
                values.carBrandVal=e.target.value;
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carBrand: e.target.value,
                        })
                        : setProduct({ ...product, carBrand: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
             <option value="">Please select</option>
             <option value="all brands">all brands</option>
                     <option value="alfa romio">Alfa Romio</option>
                     <option value="used">Aston martin</option>
                     <option value="Audi">Audi</option>
                     <option value="austin">Austin</option>
                     <option value="bmw">BMW</option>
                     <option value="buick">Buick</option>
                     <option value="cadillac">Cadillac</option>
                     <option value="changan">Changan</option>
                     <option value="chery">Chery</option>
                     <option value="chevrolet">Chevrolet</option>
                     <option value="chrysler">Chrysler</option>
                     <option value="citron">Citron</option>
                     <option value="daewoo">Daewoo</option>
                     <option value="daihatsu">Daihatsu</option>
                     <option value="dfsk">DFSK</option>
                     <option value="dodge">Dodge</option>
                     <option value="ferrari">Ferrari</option>
                     <option value="fiat">Fiat</option>
                     <option value="ford">Ford</option>
                     <option value="geely">Geely</option>
                     <option value="gmc">GMC</option>
                     <option value="hino">Hino</option>
                     <option value="honda">Honda</option>
                     <option value="hummer">Hummer</option>
                     <option value="hyundai">Hyundai</option>
                     <option value="isuzu">Isuzu</option>
                     <option value="jaguar">Jaguar</option>
                     <option value="jeep">Jeep</option>
                     <option value="kia">Kia</option>
                     <option value="lamborghini">Lamborghini</option>
                     <option value="land rover">Land Rover</option>
                     <option value="lexus">Lexus</option>
                     <option value="lincoln">Lincoln</option>
                     <option value="mahindra">Mahindra</option>
                     <option value="maruti suzuki">Maruti Suzuki</option>
                     <option value="maruti">Maruti</option>
                     <option value="mazda">Mazda</option>
                     <option value="mercedes benz">Mercedes Benz</option>
                     <option value="mg">MG</option>
                     <option value="micro">Micro</option>
                     <option value="mini">Mini</option>
                     <option value="mitsubishi">Mitsubishi</option>
                     <option value="morris">Morris</option>
                     <option value="moto guzzi">Moto Guzzi</option>
                     <option value="nissan">Nissan</option>
                     <option value="oldsmobile">Oldsmobile</option>
                     <option value="opel">Opel</option>
                     <option value="perodua">Perodua</option>
                     <option value="peugeot">Peugeot</option>
                     <option value="plymoth">Plymoth</option>
                     <option value="pontiac">Pontiac</option>
                     <option value="porsche">Porsche</option>
                     <option value="proton">Proton</option>
                     <option value="renault">Renault</option>
                     <option value="rover">Rover</option>
                     <option value="royal enfield">Royal Enfield</option>
                     <option value="saab">Saab</option>
                     <option value="scion">Scion</option>
                     <option value="seat">SEAT</option>
                     <option value="skoda">Skoda</option>
                     <option value="smart">Smart</option>
                     <option value="ssang yong">Ssang yong</option>
                     <option value="subaru">Subaru</option>
                     <option value="suzuki">Suzuki</option>
                     <option value="tata">Tata</option>
                     <option value="tesla">Tesla</option>
                     <option value="toyota">Toyota</option>
                     <option value="vauxhall">Vauxhall</option>
                     <option value="volkswagen">Volkswagen</option>
                     <option value="volvo">Volvo</option>
                     <option value="Zotye">Zotye</option>
                     <option value="other brand">Other Brand</option>
             </select>
         </div>
    </div>
)
const VanPartsForm=()=>(
    <div>
        <div className="form-group">
     <label className="text-muted">condition</label>
                 <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          condition: e.target.value,
                        })
                        : setProduct({ ...product, condition: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                         <option value="">Please select</option>
                         <option value="new">New</option>
                         <option value="used">Used</option>
                 </select>
     </div>
         <div className="form-group">
             <label className="text-muted">Part type</label>
             <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          partOrAccessoryType: e.target.value,
                        })
                        : setProduct({ ...product, partOrAccessoryType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                     <option>Please select</option>
                     <optgroup label="Suspension and Steering">
                         <option value="Struts and Shock absorbers">Struts and Shock absorbers</option>
                         <option value="Bushes, Strut mount and Kits">Bushes, Strut mount and Kits</option>
                         <option value="Coil Springs">Coil Springs</option>
                         <option value="Tie Rod End / Outer Ball Joint">Tie Rod End / Outer Ball Joint</option>
                         <option value="Rack End / Steering Ball Joint">Rack End / Steering Ball Joint</option>
                         <option value="Stabilizer Link">Stabilizer Link</option>
                         <option value="Control Arm">Control Arm</option>
                         <option value="Suspension ball joint">Suspension ball joint</option>
                         <option value="Steering Box Assembly / Rack assembly">Steering Box Assembly / Rack assembly</option>
                         <option value="Gas Spring / Dicky Shocks">Gas Spring / Dicky Shocks</option>
                         <option value="Other suspension and Steering parts">Other suspension and Steering parts</option>
                     </optgroup>
                     <optgroup label="Body Parts">
                         <option value="Head Lights">Head Lights</option>
                         <option value="Tail Lights">Tail Lights</option>
                         <option value="Mirrors">Mirrors</option>
                         <option value="Fog Lights and indicator Lights">Fog Lights and indicator Lights</option>
                         <option value="Blackberry">Bumpers</option>
                     </optgroup>
                     <optgroup label="HVAC">
                         <option value="Radiator">Radiator</option>
                         <option value="Intercooler">Intercooler</option>
                         <option value="AC Compressor">AC Compressor</option>
                         <option value="Condensor">Condensor</option>
                         <option value="Evaporator/Cooling Coil">Evaporator/Cooling Coil</option>
                     </optgroup>
                     <optgroup label="Engine Parts">
                         <option value="Filters – Air, Oil, Fuel">Filters – Air, Oil, Fuel</option>
                         <option value="Piston, Rings, Liners">Piston, Rings, Liners</option>
                         <option value="Main Bearing">Main Bearing</option>
                         <option value="Connecting Rod Bearing">Connecting Rod Bearing</option>
                         <option value="Oil Cooler and Assembly">Oil Cooler and Assembly</option>
                     </optgroup>
                     <optgroup label="Transmission">
                         <option value="Clutch Set">Clutch Set</option>
                         <option value="Drive Shafts  / Propeller Shafts and Parts">Drive Shafts  / Propeller Shafts and Parts</option>
                         <option value="Flywheel">Flywheel</option>
                         <option value="Clutch Bearing / Clutch Slave Cylinder (CSC)">Clutch Bearing / Clutch Slave Cylinder (CSC)</option>
                         <option value="Clutch Master Cylinder/CMCy">Clutch Master Cylinder/CMC</option>
                     </optgroup>
                     <optgroup label="Brake">
                         <option value="Brake Pads">Brake Pads</option>
                         <option value="Disc Rotors">Disc Rotors</option>
                         <option value="Brake Shoes">Brake Shoes</option>
                         <option value="Brake Drums">Brake Drums</option>
                         <option value="Brake Master Cylinder">Brake Master Cylinder</option>
                     </optgroup>
                     <optgroup label="Electrical">
                         <option value="Alternator">Alternator</option>
                         <option value="Starter Mortor">Starter Mortor</option>
                         <option value="Horns">Horns</option>
                         <option value="Clock Springs">Clock Springs</option>
                         <option value="Bulbs">Bulbs</option>
                     </optgroup>
                     <optgroup label="Accessories">
                         <option value="Seat Covers">Seat Covers</option>
                         <option value="Car Body Covers">Car Body Covers</option>
                         <option value="Wiper Blade">Wiper Blade</option>
                         <option value="Clock Springs">Perfumes</option>
                         <option value="Bulbs">Mobile Holder</option>
                     </optgroup>
             </select>
         </div>
         <div className="form-group">
                <label className="text-muted">Brand</label>
                <select  onChange={(e) =>{
                values.vanBrandVal=e.target.value;
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanBrand: e.target.value,
                        })
                        : setProduct({ ...product, vanBrand: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                        <option value="">Please select</option>
                        <option value="daihatsu">Daihatsu</option>
                        <option value="honda">Honda</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="isuzu">Isuzu</option>
                        <option value="mahindra">Mahindra</option>
                        <option value="mazda">Mazda</option>
                        <option value="mercedes benz">Mercedes Benz</option>
                        <option value="micro">Micro</option>
                        <option value="mitsubishi">Mitsubishi</option>
                        <option value="nissan">Nissan</option>
                        <option value="subaru">Subaru</option>
                        <option value="suzuki">Suzuki</option>
                        <option value="tata">Tata</option>
                        <option value="toyota">Toyota</option>
                        <option value="volkswagen">Volkswagen</option>
                        <option value="other model">Other model</option>
                </select>
            </div>
    </div>
)
const BikePartsForm=()=>(
    <div>
        <div className="form-group">
     <label className="text-muted">condition</label>
                 <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          condition: e.target.value,
                        })
                        : setProduct({ ...product, condition: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm" required>
                         <option value="">Please select</option>
                         <option value="new">New</option>
                         <option value="used">Used</option>
                 </select>
     </div>
         <div className="form-group">
             <label className="text-muted">Part type</label>
             <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          partOrAccessoryType: e.target.value,
                        })
                        : setProduct({ ...product, partOrAccessoryType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
             <option value="">Please select</option>
                         <option value="Foot Controls & Pegs">Foot Controls & Pegs</option>
                         <option value="Drive Belts & Pulleys">Drive Belts & Pulleys</option>
                         <option value="Chain Sprocket Kit">Chain Sprocket Kit</option>
                         <option value="Gaskets & Seals">Gaskets & Seals</option>
                         <option value="Cables & Hoses">Cables & Hoses</option>
                         <option value="Lights">Lights</option>
                         <option value="Ignition System Parts">Ignition System Parts</option>
                         <option value="Frame & Body">Frame & Body</option>
                         <option value="Air Intake & Filters">Air Intake & Filters</option>
                         <option value="Electronic Parts">Electronic Parts</option>
                         <option value="Handlebars & Controls">Handlebars & Controls</option>
                         <option value="Tires and wheels">Tires and wheels</option>
                         <option value="Engine parts">Engine parts</option>
                         <option value="Suspension">Suspension</option>
                         <option value="Brake discs and pads">Brake discs and pads</option>
                         <option value="Service Kits">Service Kits</option>
                         <option value="Other Bike Parts">Other Bike Parts</option>
                     
             </select>
         </div>
         <div className="form-group">
            <label className="text-muted">Brand</label>
            <select onChange={(e) =>{
                 values.bikeBrandVal=e.target.value;
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeBrand: e.target.value,
                        })
                        : setProduct({ ...product, bikeBrand: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="aprilia">Aprilia</option>
                    <option value="bajaj">Bajaj</option>
                    <option value="chopper">Chopper</option>
                    <option value="demak">Demak</option>
                    <option value="ducati">Ducati</option>
                    <option value="electra">Electra</option>
                    <option value="falcon">Falcon</option>
                    <option value="harley davidson">Harley Davidson</option>
                    <option value="hero">Hero</option>
                    <option value="honda">Honda</option>
                    <option value="kawasaki">Kawasaki</option>
                    <option value="kinetic">Kinetic</option>
                    <option value="ktm">KTM</option>
                    <option value="kymco">KYMCO</option>
                    <option value="loncin">Loncin</option>
                    <option value="mahindra">Mahindra</option>
                    <option value="minnelli">Minnelli</option>
                    <option value="piaggio">Piaggio</option>
                    <option value="ranomoto">Ranomoto</option>
                    <option value="royal enfield">Royal Enfield</option>
                    <option value="scooty">Scooty</option>
                    <option value="suzuki">Suzuki</option>
                    <option value="triumph">Triumph</option>
                    <option value="tvs">Tvs</option>
                    <option value="vespa">Vespa</option>
                    <option value="yamaha">Yamaha</option>
                    <option value="other brand">Other Brand</option>
            </select>
            </div>
            <div className="form-group">
            <label className="text-muted">Type of Bike</label>
            <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeType: e.target.value,
                        })
                        : setProduct({ ...product, bikeType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="scooter">Scooter</option>
                    <option value="motorbike">MotorBike</option>
                    <option value="quadricycle">Quadricycle</option>
                    <option value="electric">Electric</option>
            </select>
            </div>
    </div>
)
const ThreeWheelPartsForm=()=>(
    <div>
        <div className="form-group">
     <label className="text-muted">condition</label>
                 <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          condition: e.target.value,
                        })
                        : setProduct({ ...product, condition: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}   className="form-select form-select-sm" required>
                         <option value="">Please select</option>
                         <option value="new">New</option>
                         <option value="used">Used</option>
                 </select>
     </div>
     <div className="form-group">
             <label className="text-muted">Part type</label>
             <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          partOrAccessoryType: e.target.value,
                        })
                        : setProduct({ ...product, partOrAccessoryType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
             <option value="">Please select</option>
                         <option value="Foot Controls & Pegs">Foot Controls & Pegs</option>
                         <option value="Drive Belts & Pulleys">Drive Belts & Pulleys</option>
                         <option value="Chain Sprocket Kit">Chain Sprocket Kit</option>
                         <option value="Gaskets & Seals">Gaskets & Seals</option>
                         <option value="Cables & Hoses">Cables & Hoses</option>
                         <option value="Lights">Lights</option>
                         <option value="Ignition System Parts">Ignition System Parts</option>
                         <option value="Frame & Body">Frame & Body</option>
                         <option value="Air Intake & Filters">Air Intake & Filters</option>
                         <option value="Electronic Parts">Electronic Parts</option>
                         <option value="Handlebars & Controls">Handlebars & Controls</option>
                         <option value="Tires and wheels">Tires and wheels</option>
                         <option value="Engine parts">Engine parts</option>
                         <option value="Suspension">Suspension</option>
                         <option value="Brake discs and pads">Brake discs and pads</option>
                         <option value="Service Kits">Service Kits</option>
                         <option value="Other ThreeWheel Parts">Other ThreeWheel Parts</option>
                     
             </select>
         </div>
         <div className="form-group">
                <label className="text-muted">Brand</label>
                <select onChange={(e) =>{
                 values.threeWheelBrandVal=e.target.value;
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          threeWheelBrand: e.target.value,
                        })
                        : setProduct({ ...product, threeWheelBrand: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                        <option value="">Please select</option>
                        <option value="bajaj">Bajaj</option>
                        <option value="mahindra">Mahindra</option>
                        <option value="piaggio">Piaggio</option>
                        <option value="tvs">Tvs</option>
                        <option value="other brand">Other Brand</option>
                </select>
            </div>
    </div>
)
const vehicalRentalForm=()=>(
    <div>
        <div className="form-group">
            <label className="text-muted">Type of vehicle</label>
            <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          rentalVType: e.target.value,
                        })
                        : setProduct({ ...product, rentalVType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="Mini car"> Mini car</option>
                    <option value="Sedan/Normal car"> Sedan/Normal car</option>
                    <option value="SUV car"> SUV car</option>
                    <option value="van">van</option>
                    <option value="bike">bike</option>
                    <option value="three wheel">three wheel</option>
                    <option value="bus">bus</option>
                    <option value="lorry">lorry</option>
                    <option value="truck">truck</option>
                    <option value="bicycle">bicycle</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Rental unit</label>
            <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          rentalVUnit: e.target.value,
                        })
                        : setProduct({ ...product, rentalVUnit: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="per day">per day</option>
                    <option value="per month">per month</option>
                    <option value="per kilometer">per kilometer</option>
            </select>
        </div>
    </div>   
)
const heavyDutyForm=()=>(
    <div>
        
        <div className="form-group">
            <label className="text-muted">condition</label>
            <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          condition: e.target.value,
                        })
                        : setProduct({ ...product, condition: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="reconditioned">Reconditioned</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Fuel type</label>
            <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          fuelType: e.target.value,
                        })
                        : setProduct({ ...product, fuelType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="diesel">Diesel</option>
                    <option value="petrol">Petrol</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="electric">Electric</option>
            </select>
        </div>
        <div className="form-group">
            <label className="text-muted">Vehicle Type</label>
            <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          heavyType: e.target.value,
                        })
                        : setProduct({ ...product, heavyType: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm" required>
                    <option value="">Please select</option>
                    <option value="trailer">trailer</option>
                    <option value="bowser">bowser</option>
                    <option value="backhoes">backhoes</option>
                    <option value="grader">grader</option>
                    <option value="trencher">trencher</option>
                    <option value="backhoes">crawler dozer</option>
                    <option value="conveyor">conveyor</option>
                    <option value="concrete mixer truck">concrete mixer truck</option>
                    <option value="front loader">front loader</option>
                    <option value="buldozer">buldozer</option>
                    <option value="crane">crane</option>
                    <option value="dump truck">dump truck</option>
                    <option value="excavator">excavator</option>
                    <option value="forklift">forklift</option>
                    <option value="harvestor">harvestor</option>
                    <option value="tractor">tractor</option>
                    <option value="loader">loader</option>
                    <option value="prime mover">prime mover</option>
                    <option value="road roller">road roller</option>
                    <option value="other type">other type</option>

            </select>
        </div>
    </div>   
)
//car models
const audiCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Audi Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}   className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="100">100</option>
                        <option value="80">80</option>
                        <option value="A1">A1</option>
                        <option value="A3">A3</option>
                        <option value="A4">A4</option>
                        <option value="A5">A5</option>
                        <option value="A6">A6</option>
                        <option value="A7">A7</option>
                        <option value="A8">A8</option>
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q5">Q5</option>
                        <option value="Q7">Q7</option>
                        <option value="A3">R8</option>
                        <option value="RS3">RS3</option>
                        <option value="RS4">RS4</option>
                        <option value="RS5">RS5</option>
                        <option value="RS6">RS6</option>
                        <option value="S1">S1</option>
                        <option value="S3">S3</option>
                        <option value="S4">S4</option>
                        <option value="S5">S5</option>
                        <option value="S6">S6</option>
                        <option value="S7">S7</option>
                        <option value="S8">S8</option>
                        <option value="SQ5">SQ5</option>
                        <option value="SQ7">SQ7</option>
                        <option value="TT">TT</option>
                        <option value="TTS">TTS</option>
                        <option value="V8">V8</option>
                </select>
            </div>
    </div>
)
const austinCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Austin Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="7">7</option>
                        <option value="cambridge">Cambridge</option>
                        <option value="mini cooper">Mini Cooper</option>
                        <option value="mini">Mini</option>
                        <option value="standard">Standard</option>
                        <option value="other model">Other model</option>
                </select>
            </div>
    </div>
)
const bmwCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select BMW Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="116i">116i</option>
                        <option value="118d">118d</option>
                        <option value="118i">118i</option>
                        <option value="120d">120d</option>
                        <option value="120i">120i</option>
                        <option value="123d">123d</option>
                        <option value="125i">125i</option>
                        <option value="130i">130i</option>
                        <option value="135i">135i</option>
                        <option value="218d">218d</option>
                        <option value="218i">218i</option>
                        <option value="220d">220d</option>
                        <option value="220i">220i</option>
                        <option value="225XE">225XE</option>
                        <option value="225i">225i</option>
                        <option value="228i">228i</option>
                        <option value="230i">230i</option>
                        <option value="252i">252i</option>
                        <option value="316i">316i</option>
                        <option value="316ti">316ti</option>
                        <option value="318d">318d</option>
                        <option value="318i">318i</option>
                        <option value="318is">318is</option>
                        <option value="318ti">318ti</option>
                        <option value="320Ci">320Ci</option>
                        <option value="320d">320d</option>
                        <option value="320i">320i</option>
                        <option value="323Ci">323Ci</option>
                        <option value="323i">323i</option>
                        <option value="325Ci">325Ci</option>
                        <option value="325d">325d</option>
                        <option value="325e">325e</option>
                        <option value="325i">325i</option>
                        <option value="328Ci">328Ci</option>
                        <option value="328d">328d</option>
                        <option value="328i">328i</option>
                        <option value="330GT">330GT</option>
                        <option value="330Ci">330Ci</option>
                        <option value="330d">330d</option>
                        <option value="330e">330e</option>
                        <option value="330i">330i</option>
                        <option value="335GT">335GT</option>
                        <option value="335d">335d</option>
                        <option value="335i">335i</option>
                        <option value="340GT">340GT</option>
                        <option value="340i">340i</option>
                        <option value="420d">420d</option>
                        <option value="420i">420i</option>
                        <option value="428 Gran Coupe">428 Gran Coupe</option>
                        <option value="430i">430i</option>
                        <option value="435 Gran Coupe">435 Gran Coupe</option>
                        <option value="440i">440i</option>
                        <option value="520d">520d</option>
                        <option value="520i">520i</option>
                        <option value="523i">523i</option>
                        <option value="525e">525e</option>
                        <option value="525i">525i</option>
                        <option value="528i">528i</option>
                        <option value="530e">530e</option>
                        <option value="530d">530d</option>
                        <option value="530i">530i</option>
                        <option value="535GT">535GT</option>
                        <option value="535d">535d</option>
                        <option value="535i">535i</option>
                        <option value="540d">540d</option>
                        <option value="540i">540i</option>
                        <option value="545i">545i</option>
                        <option value="550GT">550GT</option>
                        <option value="550i">550i</option>
                        <option value="630i">630i</option>
                        <option value="633CSi">633CSi</option>
                        <option value="635CSi">635CSi</option>
                        <option value="635d">635d</option>
                        <option value="640GT">640GT</option>
                        <option value="640 Gran Coupe">640 Gran Coupe</option>
                        <option value="640d">640d</option>
                        <option value="640i">640i</option>
                        <option value="645Ci">645Ci</option>
                        <option value="650 Gran Coupe">650 Gran Coupe</option>
                        <option value="650i">650i</option>
                        <option value="730d">730d</option>
                        <option value="730iL">730iL</option>
                        <option value="730Ld">730Ld</option>
                        <option value="733i">733i</option>
                        <option value="735Li">735Li</option>
                        <option value="735i">735i</option>
                        <option value="735iL">735iL</option>
                        <option value="740Le">740Le</option>
                        <option value="740Li">740Li</option>
                        <option value="740d">740d</option>
                        <option value="740e">740e</option>
                        <option value="740i">740i</option>
                        <option value="740iL">740iL</option>
                        <option value="745Li">745Li</option>
                        <option value="745i">745i</option>
                        <option value="750Ld">750Ld</option>
                        <option value="750Li">750Li</option>
                        <option value="750i">750i</option>
                        <option value="750iL">750iL</option>
                        <option value="760Li">760Li</option>
                        <option value="840Ci">840Ci</option>
                        <option value="850ci">850ci</option>
                        <option value="850i">850i</option>
                        <option value="Active Hybrid 3">Active Hybrid 3</option>
                        <option value="Active Hybrid 5">Active Hybrid 5</option>
                        <option value="Active Hybrid 7">Active Hybrid 7</option>
                        <option value="Active Hybrid 740">Active Hybrid 740</option>
                        <option value="Active Hybrid 750">Active Hybrid 750</option>
                        <option value="Active Hybrid X6">Active Hybrid X6</option>
                        <option value="Alpina B7">Alpina B7</option>
                        <option value="Coupe">Coupe</option>
                        <option value="E46">E46</option>
                        <option value="E60">E60</option>
                        <option value="E90">E90</option>
                        <option value="GT">GT</option>
                        <option value="L7">L7</option>
                        <option value="M">M</option>
                        <option value="M135i">M135i</option>
                        <option value="M140i">M140i</option>
                        <option value="M2">M2</option>
                        <option value="M235">M235</option>
                        <option value="M235i">M235i</option>
                        <option value="M240">M240</option>
                        <option value="M240i">M240i</option>
                        <option value="M3">M3</option>
                        <option value="M4">M4</option>
                        <option value="M5">M5</option>
                        <option value="M535i">M535i</option>
                        <option value="M550">M550</option>
                        <option value="M6">M6</option>
                        <option value="M6 Gran Coupe">M6 Gran Coupe</option>
                        <option value="M635 CSi">M635 CSi</option>
                        <option value="M760">M760</option>
                        <option value="M760Li">M760Li</option>
                        <option value="Mini Cooper">Mini Cooper</option>
                        <option value="Model">Model</option>
                        <option value="X1">X1</option>
                        <option value="X2">X2</option>
                        <option value="X3">X3</option>
                        <option value="X4">X4</option>
                        <option value="X5">X5</option>
                        <option value="X5M">X5M</option>
                        <option value="X5 eDrive">X5 eDrive</option>
                        <option value="X6">X6</option>
                        <option value="X6 M">X6 M</option>
                        <option value="X7">X7</option>
                        <option value="Z3">Z3</option>
                        <option value="Z4">Z4</option>
                        <option value="Z4M">Z4M</option>
                        <option value="Z8">Z8</option>
                        <option value="i3">i3</option>
                        <option value="i5">i5</option>
                        <option value="i8">i8</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const cheryCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Chery Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="A3">A3</option>
                        <option value="Arrizo">Arrizo</option>
                        <option value="E3">E3</option>
                        <option value="E5">E5</option>
                        <option value="Fulwin">Fulwin</option>
                        <option value="QQ">QQ</option>
                        <option value="QQ3">QQ3</option>
                        <option value="Tiggo">Tiggo</option>
                        <option value="X1">X1</option>
                        <option value="EQ">EQ</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const chevroletCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Chevrolet Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Aveo">Aveo</option>
                        <option value="Beat">Beat</option>
                        <option value="Bolt">Bolt</option>
                        <option value="Camaro">Camaro</option>
                        <option value="Captiva">Captiva</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Corvette">Corvette</option>
                        <option value="Cruze">Cruze</option>
                        <option value="Silverado">Silverado</option>
                        <option value="Sonic">Sonic</option>
                        <option value="Spark">Spark</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const chryslerCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Chrysler Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const daewooCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Daewoo Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Espero">Espero</option>
                        <option value="Lanos">Lanos</option>
                        <option value="Leganza">Leganza</option>
                        <option value="Magnus">Magnus</option>
                        <option value="Nubira">Nubira</option>
                        <option value="Tacuma">Tacuma</option>
                        <option value="Tico">Tico</option>
                        <option value="Tosca">Tosca</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const daihatsuCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Daihatsu Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Altis">Altis</option>
                        <option value="Atrai wagon">Atrai wagon</option>
                        <option value="Boon">Boon</option>
                        <option value="Canbus">Canbus</option>
                        <option value="Cast activa">Cast activa</option>
                        <option value="Charade">Charade</option>
                        <option value="Charmant">Charmant</option>
                        <option value="Copen">Copen</option>
                        <option value="Cuore">Cuore</option>
                        <option value="Esse">Esse</option>
                        <option value="F50">F50</option>
                        <option value="Hijet">Hijet</option>
                        <option value="Leeza">Leeza</option>
                        <option value="Mebius">Mebius</option>
                        <option value="Mira">Mira</option>
                        <option value="Move">Move</option>
                        <option value="Redigo">Redigo</option>
                        <option value="Rocky">Rocky</option>
                        <option value="Tanto">Tanto</option>
                        <option value="Terios">Terios</option>
                        <option value="Thor">Thor</option>
                        <option value="Wake">Wake</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const datsunCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Datsun Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Cross">Cross</option>
                        <option value="Go">Go</option>
                        <option value="Go Plus">Go Plus</option>
                        <option value="Mi-Do">Mi-Do</option>
                        <option value="On-Do">On-Do</option>
                        <option value="Redi-Go">Redi-Go</option>
                        <option value="Tanto">Tanto</option>
                        <option value="Terios">Terios</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const dfskCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select DFSK Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Glory">Glory</option>
                        <option value="V27">V27</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const fiatCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Fiat Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="1100">1100</option>
                        <option value="500">500</option>
                        <option value="Bravo">Bravo</option>
                        <option value="Fullback">Fullback</option>
                        <option value="Linea">Linea</option>
                        <option value="Palio">Palio</option>
                        <option value="Panda">Panda</option>
                        <option value="Pundo">Pundo</option>
                        <option value="Sedici">Sedici</option>
                        <option value="Tipo">Tipo</option>
                        <option value="Uno">Uno</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const fordCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Ford Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="c-max">c-max</option>
                        <option value="Ecosport">Ecosport</option>
                        <option value="Edge">Edge</option>
                        <option value="Escape">Escape</option>
                        <option value="Everest">Everest</option>
                        <option value="Expedition">Expedition</option>
                        <option value="Explorer">Explorer</option>
                        <option value="F-150">F-150</option>
                        <option value="Festiva">Festiva</option>
                        <option value="Fiesta">Fiesta</option>
                        <option value="Flex">Flex</option>
                        <option value="Focus">Focus</option>
                        <option value="Fusion">Fusion</option>
                        <option value="Gt">Gt</option>
                        <option value="Ka+">Ka+</option>
                        <option value="Kuga">Kuga</option>
                        <option value="Laser">Laser</option>
                        <option value="Mondeo">Mondeo</option>
                        <option value="Mustang">Mustang</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Raptor ranger">Raptor ranger</option>
                        <option value="Super Duty">Super Duty</option>
                        <option value="Taurus">Taurus</option>
                        <option value="Transit">Transit</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const gmcCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select GMC Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Acadia">Acadia</option>
                        <option value="Envoy">Envoy</option>
                        <option value="Canyou">Canyou</option>
                        <option value="Sierra">Sierra</option>
                        <option value="Terrain">Terrain</option>
                        <option value="Yukon">Yukon</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const hondaCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Honda Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Accord">Accord</option>
                        <option value="Airwave">Airwave</option>
                        <option value="Amaze">Amaze</option>
                        <option value="Ballade">Ballade</option>
                        <option value="Beat">Beat</option>
                        <option value="CRV">CRV</option>
                        <option value="CRZ">CRZ</option>
                        <option value="City">City</option>
                        <option value="Civic">Civic</option>
                        <option value="Clarity">Clarity</option>
                        <option value="Crossroad">Crossroad</option>
                        <option value="RR-v">RR-v</option>
                        <option value="Fit">Fit</option>
                        <option value="Fit Aria">Fit Aria</option>
                        <option value="Fit She's">Fit She's</option>
                        <option value="Fit Shuttle">Fit Shuttle</option>
                        <option value="Freed">Freed</option>
                        <option value="Grace">Grace</option>
                        <option value="HR-v">HR-v</option>
                        <option value="Insight">Insight</option>
                        <option value="Inspire">Inspire</option>
                        <option value="Integra">Integra</option>
                        <option value="Jade">Jade</option>
                        <option value="Legend">Legend</option>
                        <option value="Logo">Logo</option>
                        <option value="N-box">N-box</option>
                        <option value="N-one">N-one</option>
                        <option value="N-wgn">N-wgn</option>
                        <option value="NSX">NSX</option>
                        <option value="Odyssey">Odyssey</option>
                        <option value="Pilot">Pilot</option>
                        <option value="Ridgeline">Ridgeline</option>
                        <option value="S2000">S2000</option>
                        <option value="S660">S660</option>
                        <option value="Spike">Spike</option>
                        <option value="Step wagon">Step wagon</option>
                        <option value="Vezel">Vezel</option>
                        <option value="WR-v">WR-v</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const hummerCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Hummer Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="H1">H1</option>
                        <option value="H2">H2</option>
                        <option value="H3">H3</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const hyundaiCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select hyundai Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Accent">Accent</option>
                        <option value="Atos">Atos</option>
                        <option value="Azera">Azera</option>
                        <option value="Coupe">Coupe</option>
                        <option value="Elantra">Elantra</option>
                        <option value="Eon">Eon</option>
                        <option value="Excel">Excel</option>
                        <option value="Genesis">Genesis</option>
                        <option value="Getz">Getz</option>
                        <option value="Grand i10">Grand i10</option>
                        <option value="Ioniq">Ioniq</option>
                        <option value="Kona">Kona</option>
                        <option value="Lantra">Lantra</option>
                        <option value="Matrix">Matrix</option>
                        <option value="Nexo">Nexo</option>
                        <option value="Santa fe">Santa fe</option>
                        <option value="Santro">Santro</option>
                        <option value="Sanata">Sanata</option>
                        <option value="Stellar">Stellar</option>
                        <option value="Terracan">Terracan</option>
                        <option value="Trajet">Trajet</option>
                        <option value="Tucson">Tucson</option>
                        <option value="Veloster">Veloster</option>
                        <option value="Venue">Venue</option>
                        <option value="i 20">i 20</option>
                        <option value="i 30">i 30</option>
                        <option value="i 40">i 40</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const isuzuCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Isuzu Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Bighorn">Bighorn</option>
                        <option value="D-max">D-max</option>
                        <option value="Gemini">Gemini</option>
                        <option value="MU-7">MU-7</option>
                        <option value="MU-X">MU-X</option>
                        <option value="Panther">Panther</option>
                        <option value="Rodeo">Rodeo</option>
                        <option value="Smart cab">Smart cab</option>
                        <option value="Trooper">Trooper</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const jaguarCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Jaguar Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="E-pace">E-pace</option>
                        <option value="F-pace">F-pace</option>
                        <option value="F-type">F-type</option>
                        <option value="I-pace">I-pace</option>
                        <option value="S-type">S-type</option>
                        <option value="X-type">X-type</option>
                        <option value="XE">XE</option>
                        <option value="XF">XF</option>
                        <option value="XJ">XJ</option>
                        <option value="XK">XK</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const jeepCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Jeep Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Cherokee">Cherokee</option>
                        <option value="Compass">Compass</option>
                        <option value="Grand Cherokee">Grand Cherokee</option>
                        <option value="Renegade">Renegade</option>
                        <option value="Wrangler">Wrangler</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const kiaCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Kia Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Cadenza">Cadenza</option>
                        <option value="Carens">Carens</option>
                        <option value="Carnival">Carnival</option>
                        <option value="Ceed">Ceed</option>
                        <option value="Cerato">Cerato</option>
                        <option value="Clarus">Clarus</option>
                        <option value="Forte">Forte</option>
                        <option value="K7">K7</option>
                        <option value="K9">K9</option>
                        <option value="K900">K900</option>
                        <option value="Mentor">Mentor</option>
                        <option value="Niro">Niro</option>
                        <option value="Optima">Optima</option>
                        <option value="Picanto">Picanto</option>
                        <option value="Rio">Rio</option>
                        <option value="Rondo">Rondo</option>
                        <option value="Sedona">Sedona</option>
                        <option value="Sephia">Sephia</option>
                        <option value="Sorento">Sorento</option>
                        <option value="Spectra">Spectra</option>
                        <option value="Sportage">Sportage</option>
                        <option value="Stinger">Stinger</option>
                        <option value="Stonic">Stonic</option>
                        <option value="Soul">Soul</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const landRoverCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select LandRover Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Defender">Defender</option>
                        <option value="Discovery">Discovery</option>
                        <option value="Discovery Sport">Discovery Sport</option>
                        <option value="Freelander">Freelander</option>
                        <option value="Range rover">Range rover</option>
                        <option value="Range rover evoque">Range rover evoque</option>
                        <option value="Range rover PHEV">Range rover PHEV</option>
                        <option value="Range rover sport">Range rover Sport</option>
                        <option value="Range rover velar">Range rover velar</option>
                        <option value="SV coupe">SV coupe</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const LexusCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Lexus Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="CT-200H">CT-200H</option>
                        <option value="ES">ES</option>
                        <option value="HS250H">HS250H</option>
                        <option value="LS400">LS400</option>
                        <option value="LX450">LX450</option>
                        <option value="Land Cruiser">Land Cruiser</option>
                        <option value="NX">NX</option>
                        <option value="NX300H">NX300H</option>
                        <option value="RX350">RX350</option>
                        <option value="RX400">RX400</option>
                        <option value="UX">UX</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const mahindraCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mahindra Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Bolero">Bolero</option>
                        <option value="KUV 100">KUV 100</option>
                        <option value="Legend">Legend</option>
                        <option value="Nurosport">Nurosport</option>
                        <option value="Quanto">Quanto</option>
                        <option value="Scorpio">Scorpio</option>
                        <option value="TUV300">TUV300</option>
                        <option value="Thar">Thar</option>
                        <option value="Verito">Verito</option>
                        <option value="XUV500">XUV500</option>
                        <option value="Xylo">Xylo</option>
                        <option value="e2o">e2o</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const marutiSuzukiCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Maruti Suzuki Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="800">800</option>
                        <option value="Alto">Alto</option>
                        <option value="Baleno">Baleno</option>
                        <option value="Esteem">Esteem</option>
                        <option value="Gypsy">Gypsy</option>
                        <option value="Omni">Omni</option>
                        <option value="WagonR">WagonR</option>
                        <option value="Zen">Zen</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const mazdaCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mazda Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="2">2</option>
                        <option value="2 Skyactive">2 Skyactive</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="Astina">Astina</option>
                        <option value="Axela">Axela</option>
                        <option value="BT-50">BT-50</option>
                        <option value="Butterfly">Butterfly</option>
                        <option value="CX-3">CX-3</option>
                        <option value="CX-5">CX-5</option>
                        <option value="CX-6">CX-6</option>
                        <option value="CX-7">CX-7</option>
                        <option value="CX-8">CX-8</option>
                        <option value="CX-9">CX-9</option>
                        <option value="Carol">Carol</option>
                        <option value="Demio">Demio</option>
                        <option value="Funos">Funos</option>
                        <option value="FA4TS">FA4TS</option>
                        <option value="Familia">Familia</option>
                        <option value="Flair">Flair</option>
                        <option value="MX-5">MX-5</option>
                        <option value="Millenia">Millenia</option>
                        <option value="RX">RX</option>
                        <option value="Roadster">Roadster</option>
                        <option value="Tribute">Tribute</option>
                        <option value="SouVerisal">Verisa</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const benzCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mercedes Benz Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="190D">190D</option>
                        <option value="A140">A140</option>
                        <option value="A150">A150</option>
                        <option value="A160">A160</option>
                        <option value="A170">A170</option>
                        <option value="A180">A180</option>
                        <option value="A190">A190</option>
                        <option value="A200">A200</option>
                        <option value="A210">A210</option>
                        <option value="A220">A220</option>
                        <option value="A250">A250</option>
                        <option value="A45">A45</option>
                        <option value="B150">B150</option>
                        <option value="B160">B160</option>
                        <option value="B170">B170</option>
                        <option value="B180">B180</option>
                        <option value="B200">B200</option>
                        <option value="B220">B220</option>
                        <option value="B250e">B250e</option>
                        <option value="C160">C160</option>
                        <option value="C180">C180</option>
                        <option value="C200">C200</option>
                        <option value="C230">C230</option>
                        <option value="C220">C220</option>
                        <option value="C250">C250</option>
                        <option value="C300">C300</option>
                        <option value="C350">C350</option>
                        <option value="CLA 180">CLA 180</option>
                        <option value="CLA 200">CLA 200</option>
                        <option value="CLA 250">CLA 250</option>
                        <option value="CLS">CLS</option>
                        <option value="E180">E180</option>
                        <option value="E200">E200</option>
                        <option value="E220">E220</option>
                        <option value="E240">E240</option>
                        <option value="E250">E250</option>
                        <option value="E300">E300</option>
                        <option value="E350">E350</option>
                        <option value="E400">E400</option>
                        <option value="GLA 180">GLA 180</option>
                        <option value="GLA 200">GLA 200</option>
                        <option value="GLA 250">GLA 250</option>
                        <option value="GLB">GLB</option>
                        <option value="GLC 300">GLC 300</option>
                        <option value="GLE 300D">GLE 300D</option>
                        <option value="GLE 320">GLE 320</option>
                        <option value="GLE 400">GLE 400</option>
                        <option value="GLE 500">GLE 500</option>
                        <option value="ML 250">ML 250</option>
                        <option value="ML 270">ML 270</option>
                        <option value="ML 280">ML 280</option>
                        <option value="ML 300">ML 300</option>
                        <option value="ML 320">ML 320</option>
                        <option value="ML 350">ML 350</option>
                        <option value="ML 420">ML 420</option>
                        <option value="ML 430">ML 430</option>
                        <option value="ML 500">ML 500</option>
                        <option value="ML 55">ML 55</option>
                        <option value="ML 63">ML 63</option>
                        <option value="S 300">S 300</option>
                        <option value="S 320">S 320</option>
                        <option value="S 350">S 350</option>
                        <option value="S 400">S 400</option>
                        <option value="S 500">S 500</option>
                        <option value="S 560">S 560</option>
                        <option value="X 250d">X 250d</option>
                        <option value="SL 400">SL 400</option>
                        <option value="SL 500">SL 500</option>
                        <option value="SLC 180">SLC 180</option>
                        <option value="SLC 200">SLC 200</option>
                        <option value="SLC 300">SLC 300</option>
                        <option value="SLK 200">SLK 200</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const mgCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select MG Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="GS">GS</option>
                        <option value="ZS">ZS</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const microCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Micro Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Actyon">Actyon</option>
                        <option value="BAIC">BAIC</option>
                        <option value="D20 HACH">D20 HACH</option>
                        <option value="Emgrand">Emgrand</option>
                        <option value="Greely">Greely</option>
                        <option value="Glory">Glory</option>
                        <option value="Junior">Junior</option>
                        <option value="Korondo">Korondo</option>
                        <option value="Kyron">Kyron</option>
                        <option value="Lifan">Lifan</option>
                        <option value="MX7">MX7</option>
                        <option value="Panda">Panda</option>
                        <option value="Panda Cross">Panda Cross</option>
                        <option value="Privilage">Privilage</option>
                        <option value="Rexton">Rexton</option>
                        <option value="Rhino">Rhino</option>
                        <option value="Tivoli">Tivoli</option>
                        <option value="Trend">Trend</option>
                        <option value="Voleex">Voleex</option>
                        <option value="X25">X25</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const miniCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mini Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Clubman">Clubman</option>
                        <option value="Cooper">Cooper</option>
                        <option value="Countryman">Countryman</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const mitsubishiCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mitsubishi Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="4DR">4DR</option>
                        <option value="ASX">ASX</option>
                        <option value="Carnival">Carnival</option>
                        <option value="Attrage">Attrage</option>
                        <option value="Cedia">Cedia</option>
                        <option value="Celeste">Celeste</option>
                        <option value="Chariot">Chariot</option>
                        <option value="Colt">Colt</option>
                        <option value="Delica">Delica</option>
                        <option value="Eclipse Cross">Eclipse Cross</option>
                        <option value="EK Custom">EK Custom</option>
                        <option value="FTO">FTO</option>
                        <option value="Galant">Galant</option>
                        <option value="J20">J20</option>
                        <option value="J24">J24</option>
                        <option value="Jonway">Jonway</option>
                        <option value="L200">L200</option>
                        <option value="Lancer">Lancer</option>
                        <option value="Libero">Libero</option>
                        <option value="Mirage">Mirage</option>
                        <option value="Montero">Montero</option>
                        <option value="Outlander">Outlander</option>
                        <option value="Pajero">Pajero</option>
                        <option value="RVR">RVR</option>
                        <option value="Raider">Raider</option>
                        <option value="Shogun">Shogun</option>
                        <option value="Sportero">Sportero</option>
                        <option value="Strada">Strada</option>
                        <option value="Towny">Towny</option>
                        <option value="Xpander">Xpander</option>
                        <option value="EK Space">EK Space</option>
                        <option value="EK Wagon">EK Wagon</option>
                        <option value="i-MIEV">i-MIEV</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const morrisCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Morris Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="8">8</option>
                        <option value="Mini">Mini</option>
                        <option value="minor">minor</option>
                        <option value="Oxford">Oxford</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const nissanCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Nissan Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="370Z">370Z</option>
                        <option value="AD Wagon">AD Wagon</option>
                        <option value="Almera">Almera</option>
                        <option value="Aventura">Aventura</option>
                        <option value="Bluebird">Bluebird</option>
                        <option value="Cefiro">Cefiro</option>
                        <option value="Dayz">Dayz</option>
                        <option value="Dualis">Dualis</option>
                        <option value="Dutsun">Dutsun</option>
                        <option value="Failady z">Failady z</option>
                        <option value="Fuga">Fuga</option>
                        <option value="GT-R">GT-R</option>
                        <option value="Gloria">Gloria</option>
                        <option value="J10">J10</option>
                        <option value="Juke">Juke</option>
                        <option value="Leaf">Leaf</option>
                        <option value="March">March</option>
                        <option value="Micra">Micra</option>
                        <option value="Moco">Moco</option>
                        <option value="Navara">Navara</option>
                        <option value="Note">Note</option>
                        <option value="Pathfinder">Pathfinder</option>
                        <option value="Patrol">Patrol</option>
                        <option value="Presea">Presea</option>
                        <option value="Primera">Primera</option>
                        <option value="Pulsar">Pulsar</option>
                        <option value="Qashqai">Qashqai</option>
                        <option value="Serena">Serena</option>
                        <option value="Sima">Sima</option>
                        <option value="Skyline">Skyline</option>
                        <option value="Sunny">Sunny</option>
                        <option value="Sylphy">Sylphy</option>
                        <option value="Teana">Teana</option>
                        <option value="Terrano">Terrano</option>
                        <option value="Tiida">Tiida</option>
                        <option value="Wingroad">Wingroad</option>
                        <option value="X-Trail">X-Trail</option>
                        <option value="e-NV200">e-NV200</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const opelCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Opel Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Astra">Astra</option>
                        <option value="Combo">Combo</option>
                        <option value="Cresent">Cresent</option>
                        <option value="Crossland">Crossland</option>
                        <option value="Frontera">Frontera</option>
                        <option value="Grandland">Grandland</option>
                        <option value="Insignia">Insignia</option>
                        <option value="Karl">Karl</option>
                        <option value="Mokka">Mokka</option>
                        <option value="Omega">Omega</option>
                        <option value="Vectra">Vectra</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const peroduaCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Perodua Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Alza">Alza</option>
                        <option value="Axia">Axia</option>
                        <option value="Bezza">Bezza</option>
                        <option value="Kancil">Kancil</option>
                        <option value="Kelisa">Kelisa</option>
                        <option value="Kembara">Kembara</option>
                        <option value="Kenari">Kenari</option>
                        <option value="Myvi">Myvi</option>
                        <option value="viva elite">viva elite</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const peugeotCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Peugeot Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="104">104</option>
                        <option value="108">108</option>
                        <option value="2008">2008</option>
                        <option value="206">206</option>
                        <option value="208">208</option>
                        <option value="3008">3008</option>
                        <option value="305">305</option>
                        <option value="307">307</option>
                        <option value="308">308</option>
                        <option value="404">404</option>
                        <option value="405">405</option>
                        <option value="406">406</option>
                        <option value="407">407</option>
                        <option value="408">408</option>
                        <option value="5008">5008</option>
                        <option value="505">505</option>
                        <option value="508">508</option>
                        <option value="607">607</option>
                        <option value="iOn">iOn</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const porscheCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Porsche Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="718">718</option>
                        <option value="718 Boxter">718 Boxter</option>
                        <option value="718 Cayman">718 Cayman</option>
                        <option value="718 GTS">718 GTS</option>
                        <option value="911">911</option>
                        <option value="911 Carrera">911 Carrera</option>
                        <option value="911 GT2">911 GT2</option>
                        <option value="911 GT3">911 GT3</option>
                        <option value="911 GT5">911 GT5</option>
                        <option value="911 Targa">911 Targa</option>
                        <option value="911 Turbo">911 Turbo</option>
                        <option value="918 Spyder">918 Spyder</option>
                        <option value="Carrera GT">Carrera GT</option>
                        <option value="Cayenne">Cayenne</option>
                        <option value="Macan">Macan</option>
                        <option value="Panamera">Panamera</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const protonCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Protona Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Exora">Exora</option>
                        <option value="Gen-2">Gen-2</option>
                        <option value="Perdana">Perdana</option>
                        <option value="Persona">Persona</option>
                        <option value="Saga">Saga</option>
                        <option value="Savvy">Savvy</option>
                        <option value="Waja">Waja</option>
                        <option value="Wira">Wira</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const renaultCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Renault Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Capture">Capture</option>
                        <option value="Duster">Duster</option>
                        <option value="Fluence">Fluence</option>
                        <option value="KEWID">KEWID</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const seatCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select SEAT Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Arona">Arona</option>
                        <option value="Ateca">Ateca</option>
                        <option value="Ibiza">Ibiza</option>
                        <option value="Leon">Leon</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const skodaCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Skoda Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Citigo">Citigo</option>
                        <option value="Fabia">Fabia</option>
                        <option value="Karoq">Karoq</option>
                        <option value="Kodiaq">Kodiaq</option>
                        <option value="Laura">Laura</option>
                        <option value="Octavia">Octavia</option>
                        <option value="Rapid">Rapid</option>
                        <option value="Superb">Superb</option>
                        <option value="Yeti">Yeti</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const smartCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Smart Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Electric">Electric</option>
                        <option value="Forfour">Forfour</option>
                        <option value="Fortwo">Fortwo</option>
                        <option value="Roadster">Roadster</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const ssangyongCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Ssang Yong Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Actyon">Actyon</option>
                        <option value="Chairman">Chairman</option>
                        <option value="Korando">Korando</option>
                        <option value="Kyron">Kyron</option>
                        <option value="Musso">Musso</option>
                        <option value="Rexton">Rexton</option>
                        <option value="Rodius">Rodius</option>
                        <option value="Tivoli">Tivoli</option>
                        <option value="XLV">XLV</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const subaruCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Subaru Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Ascent">Ascent</option>
                        <option value="BRZ">BRZ</option>
                        <option value="Crostreck">Crostreck</option>
                        <option value="Forester">Forester</option>
                        <option value="Impreza">Impreza</option>
                        <option value="Legazy">Legazy</option>
                        <option value="R2">R2</option>
                        <option value="STI">STI</option>
                        <option value="Stella">Stella</option>
                        <option value="Trezia">Trezia</option>
                        <option value="XV">XV</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const suzukiCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Suzuki Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="A-star">A-star</option>
                        <option value="Alto">Alto</option>
                        <option value="Baleno">Baleno</option>
                        <option value="Celerio">Celerio</option>
                        <option value="Ciaz">Ciaz</option>
                        <option value="Cultus">Cultus</option>
                        <option value="Dzire">Dzire</option>
                        <option value="Ertiga">Ertiga</option>
                        <option value="Escudo">Escudo</option>
                        <option value="Esteem">Esteem</option>
                        <option value="Estilo">Estilo</option>
                        <option value="Grand Vitara">Grand Vitara</option>
                        <option value="Hustler">Hustler</option>
                        <option value="Ignis">Ignis</option>
                        <option value="Jimny">Jimny</option>
                        <option value="Kizashi">Kizashi</option>
                        <option value="Liana">Liana</option>
                        <option value="Maruti">Maruti</option>
                        <option value="S-Cross">S-Cross</option>
                        <option value="SX4">SX4</option>
                        <option value="Solio">Solio</option>
                        <option value="Solis">Solis</option>
                        <option value="Spacia">Spacia</option>
                        <option value="Splash">Splash</option>
                        <option value="Swift">Swift</option>
                        <option value="Twin">Twin</option>
                        <option value="Vitara">Vitara</option>
                        <option value="Wagon R">Wagon R</option>
                        <option value="Wagon R FX">Wagon R FX</option>
                        <option value="Wagon R FZ">Wagon R FZ</option>
                        <option value="Wagon R Stingray">Wagon R Stingray</option>
                        <option value="XBee">XBee</option>
                        <option value="Zen">Zen</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const tataCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Tata Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Aria">Aria</option>
                        <option value="Bolt">Bolt</option>
                        <option value="GenX nano">GenX nano</option>
                        <option value="Hexa">Hexa</option>
                        <option value="Indica">Indica</option>
                        <option value="Indigo">Indigo</option>
                        <option value="Nano">Nano</option>
                        <option value="Nexon">Nexon</option>
                        <option value="Safari">Safari</option>
                        <option value="Sumo">Sumo</option>
                        <option value="Telcolin">Telcolin</option>
                        <option value="Tiago">Tiago</option>
                        <option value="Tigor">Tigor</option>
                        <option value="Vista">Vista</option>
                        <option value="Xenon">Xenon</option>
                        <option value="Zest">Zest</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const teslaCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Tesla Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Model 3">Model 3</option>
                        <option value="Model S">Model S</option>
                        <option value="Model X">Model X</option>
                        <option value="Roadster">Roadster</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const toyotaCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Toyota Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="4 Runner">4 Runner</option>
                        <option value="AE 100">AE 100</option>
                        <option value="Allex">Allex</option>
                        <option value="Allion">Allion</option>
                        <option value="Alphard">Alphard</option>
                        <option value="Altezza">Altezza</option>
                        <option value="Aqua">Aqua</option>
                        <option value="Aristo">Aristo</option>
                        <option value="Auris">Auris</option>
                        <option value="Avalon">Avalon</option>
                        <option value="Avanza">Avanza</option>
                        <option value="Avensis">Avensis</option>
                        <option value="Axio">Axio</option>
                        <option value="Aygo">Aygo</option>
                        <option value="BB">BB</option>
                        <option value="Belta">Belta</option>
                        <option value="Blizzard">Blizzard</option>
                        <option value="Brebis">Brebis</option>
                        <option value="CHR">CHR</option>
                        <option value="Caldina">Caldina</option>
                        <option value="Cami">Cami</option>
                        <option value="Camry">Camry</option>
                        <option value="Carib">Carib</option>
                        <option value="Carina">Carina</option>
                        <option value="Cast">Cast</option>
                        <option value="Celica">Celica</option>
                        <option value="Century">Century</option>
                        <option value="Ceres">Ceres</option>
                        <option value="Chaser">Chaser</option>
                        <option value="Classic">Classic</option>
                        <option value="Comfort">Comfort</option>
                        <option value="Corolla">Corolla</option>
                        <option value="Corona">Corona</option>
                        <option value="Corsa">Corsa</option>
                        <option value="Crown">Crown</option>
                        <option value="Cynos">Cynos</option>
                        <option value="Duet">Duet</option>
                        <option value="Esquire">Esquire</option>
                        <option value="Etios">Etios</option>
                        <option value="FJ Cruiser">FJ Cruiser</option>
                        <option value="Fielder">Fielder</option>
                        <option value="Fortuner">Fortuner</option>
                        <option value="GT 86">GT 86</option>
                        <option value="Harrier">Harrier</option>
                        <option value="Highlander">Highlander</option>
                        <option value="Hilux">Hilux</option>
                        <option value="IST">IST</option>
                        <option value="Land Cruiser Prado">Land Cruiser Prado</option>
                        <option value="Land Cruiser sahara">Land Cruiser sahara</option>
                        <option value="MR-S">MR-S</option>
                        <option value="Mirai">Mirai</option>
                        <option value="Passo">Passo</option>
                        <option value="Pixis">Pixis</option>
                        <option value="Platz">Platz</option>
                        <option value="Premio">Premio</option>
                        <option value="Prius">Prius</option>
                        <option value="Ractis">Ractis</option>
                        <option value="Raize">Raize</option>
                        <option value="RAV 4">RAV 4</option>
                        <option value="Roomy">Roomy</option>
                        <option value="Rush">Rush</option>
                        <option value="Runx">Runx</option>
                        <option value="Marino">Marino</option>
                        <option value="Mark">Mark</option>
                        <option value="SAI">SAI</option>
                        <option value="Sequoia">Sequoia</option>
                        <option value="Sienta">Sienta</option>
                        <option value="Soluna">Soluna</option>
                        <option value="Sprinter">Sprinter</option>
                        <option value="Starlet">Starlet</option>
                        <option value="Supra">Supra</option>
                        <option value="Tank">Tank</option>
                        <option value="Tarcel">Tarcel</option>
                        <option value="Vangaurd">Vangaurd</option>
                        <option value="Vellfire">Vellfire</option>
                        <option value="Verossa">Verossa</option>
                        <option value="Vios">Vios</option>
                        <option value="Vios">Vits</option>
                        <option value="Voxy">Voxy</option>
                        <option value="Welfare">Welfare</option>
                        <option value="Wigo">Wigo</option>
                        <option value="Wish">Wish</option>
                        <option value="Yaris">Yaris</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const vauxhallCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Vauxhaul Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Astra">Astra</option>
                        <option value="Corsa">Corsa</option>
                        <option value="Crossland">Crossland</option>
                        <option value="Insignia">Insignia</option>
                        <option value="VXR8">VXR8</option>
                        <option value="Vectra">Vectra</option>
                        <option value="Viva">Viva</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const volksWagenCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Volkswagen Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Atlas">Atlas</option>
                        <option value="Beetle">Beetle</option>
                        <option value="Bora">Bora</option>
                        <option value="Golf">Golf</option>
                        <option value="Jetta">Jetta</option>
                        <option value="Passat">Passat</option>
                        <option value="Polo">Polo</option>
                        <option value="T-Cross">T-Cross</option>
                        <option value="T-Roc">T-Roc</option>
                        <option value="Tiguan">Tiguan</option>
                        <option value="UP">UP</option>
                        <option value="e-Golf">e-Golf</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const volvoCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Volvo Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="850">850</option>
                        <option value="940">940</option>
                        <option value="S40">S40</option>
                        <option value="S60">S60</option>
                        <option value="S80">S80</option>
                        <option value="S90">S90</option>
                        <option value="V40">V40</option>
                        <option value="V50">V50</option>
                        <option value="V60">V60</option>
                        <option value="V70">V70</option>
                        <option value="V90">V90</option>
                        <option value="XC40">XC40</option>
                        <option value="XC60">XC60</option>
                        <option value="XC70">XC70</option>
                        <option value="XC90">XC90</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
const zotyeCarModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Zotye Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          carModel: e.target.value,
                        })
                        : setProduct({ ...product, carModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Xtreme">Xtreme</option>
                        <option value="Nomad">Nomad</option>
                        <option value="Z100">Z100</option>
                        <option value="Other model">Other model</option>
                </select>
            </div>
    </div>
)
//bike models
const apriliaBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Aprilia Model</label>
                <select   onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Dorsoduro">Dorsoduro</option>
                        <option value="RS">RS</option>
                        <option value="SR">SR</option>
                        <option value="SXV">SXV</option>
                        <option value="Shiver">Shiver</option>
                        <option value="Storm">Storm</option>
                        <option value="Tuono">Tuono</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const bajajBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Bajaj Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Aspire">Aspire</option>
                        <option value="Avenger">Avenger</option>
                        <option value="Avenger Cruise">Avenger Cruise</option>
                        <option value="Avenger Street">Avenger Street</option>
                        <option value="Boxer">Boxer</option>
                        <option value="Byk">Byk</option>
                        <option value="CT 100">CT 100</option>
                        <option value="Caliber">Caliber</option>
                        <option value="Discover">Discover</option>
                        <option value="Discover 110">Discover 110</option>
                        <option value="Discover 125">Discover 125</option>
                        <option value="Dominar">Dominar</option>
                        <option value="Kristal">Kristal</option>
                        <option value="Platina">Platina</option>
                        <option value="Pulsar 135">Pulsar 135</option>
                        <option value="Pulsar 150">Pulsar 150</option>
                        <option value="Pulsar 180">Pulsar 180</option>
                        <option value="Pulsar 220F">Pulsar 220F</option>
                        <option value="Pulsar NS160">Pulsar NS160</option>
                        <option value="Pulsar NS200">Pulsar NS200</option>
                        <option value="Pulsar RS200">Pulsar RS200</option>
                        <option value="V12">V12</option>
                        <option value="V15">V15</option>
                        <option value="XCD">XCD</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const bmwBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select BMW Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="DorsodurC600 sporto">C600 sport</option>
                        <option value="C650 GT">C650 GT</option>
                        <option value="F650">F650</option>
                        <option value="F700">F700</option>
                        <option value="F800">F800</option>
                        <option value="G450">G450</option>
                        <option value="G650">G650</option>
                        <option value="K1200">K1200</option>
                        <option value="K1300">K1300</option>
                        <option value="K1600">K1600</option>
                        <option value="R nineT">R nineT</option>
                        <option value="R 1200">R 1200</option>
                        <option value="S1000">S1000</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const demakBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Demak Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="ATM">ATM</option>
                        <option value="Civic">Civic</option>
                        <option value="D7">D7</option>
                        <option value="DTM">DTM</option>
                        <option value="DXT Dart">DXT Dart</option>
                        <option value="DZM">DZM</option>
                        <option value="DZR">DZR</option>
                        <option value="Explorer">Explorer</option>
                        <option value="Rio">Rio</option>
                        <option value="Rino">Rino</option>
                        <option value="Savage Supra">Savage Supra</option>
                        <option value="Spark">Spark</option>
                        <option value="Skyborn">Skyborn</option>
                        <option value="Skyline">Skyline</option>
                        <option value="Transler">Transler</option>
                        <option value="Transtar">Transtar</option>
                        <option value="Tropica">Tropica</option>
                        <option value="Warrior">Warrior</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const dukatiBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Ducati Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Diavel">Diavel</option>
                        <option value="Hypermotard">Hypermotard</option>
                        <option value="Monster">Monster</option>
                        <option value="Multistrada">Multistrada</option>
                        <option value="ST">ST</option>
                        <option value="Scrambler">Scrambler</option>
                        <option value="SportClassics">SportClassics</option>
                        <option value="Superbike">Superbike</option>
                        <option value="Supersport">Supersport</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const electraBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Electra Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Alpha">Alpha</option>
                        <option value="Bravo">Bravo</option>
                        <option value="City">City</option>
                        <option value="Classic">Classic</option>
                        <option value="ERS 3000">ERS 3000</option>
                        <option value="KITO">KITO</option>
                        <option value="Runner">Runner</option>
                        <option value="Traveller">Traveller</option>
                        <option value="VIZ">VIZ</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const harleyDavidsonBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Harley Davidson Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Dyna Super Glide">Dyna Super Glide</option>
                        <option value="FL">FL</option>
                        <option value="Softail">Softail</option>
                        <option value="Sportster">Sportster</option>
                        <option value="Street">Street</option>
                        <option value="VRSC">VRSC</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const heroBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Hero Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Achiever">Achiever</option>
                        <option value="CBZ">CBZ</option>
                        <option value="Dare">Dare</option>
                        <option value="Dash">Dash</option>
                        <option value="Dawn">Dawn</option>
                        <option value="Duet">Duet</option>
                        <option value="Glamour">Glamour</option>
                        <option value="HF Dawn">HF Dawn</option>
                        <option value="HF Dulux">HF Dulux</option>
                        <option value="Hunk">Hunk</option>
                        <option value="Ignitor">Ignitor</option>
                        <option value="Karizma">Karizma</option>
                        <option value="Maestro Edge">Maestro Edge</option>
                        <option value="Passion Plus">Passion Plus</option>
                        <option value="Passion Pro">Passion Pro</option>
                        <option value="Splender Plus">Splender Plus</option>
                        <option value="Splender i smart">Splender i smart</option>
                        <option value="Super Splender">Super Splender</option>
                        <option value="X Pulse">X Pulse</option>
                        <option value="X F3R">X F3R</option>
                        <option value="Xtream">Xtream</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const hondaBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Honda Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="AX1">AX1</option>
                        <option value="Activa">Activa</option>
                        <option value="APE">APE</option>
                        <option value="Aviator">Aviator</option>
                        <option value="Benly">Benly</option>
                        <option value="CB 125">CB 125</option>
                        <option value="CB Hornet">CB Hornet</option>
                        <option value="CB Shine">CB Shine</option>
                        <option value="CB Trigger">CB Trigger</option>
                        <option value="CB Unicorn">CB Unicorn</option>
                        <option value="CB4">CB4</option>
                        <option value="CBR">CBR</option>
                        <option value="CD 110">CD 110</option>
                        <option value="CD 125">CD 125</option>
                        <option value="CD 200">CD 200</option>
                        <option value="CD 70">CD 70</option>
                        <option value="CD Down">CD Down</option>
                        <option value="CD 90">CD 90</option>
                        <option value="CM Custom">CM Custom</option>
                        <option value="CRF">CRF</option>
                        <option value="Cliq">Cliq</option>
                        <option value="Dio">Dio</option>
                        <option value="Dream">Dream</option>
                        <option value="FTR">FTR</option>
                        <option value="Gold wing">Gold wing</option>
                        <option value="Forza">Forza</option>
                        <option value="Grazia">Grazia</option>
                        <option value="Hornet">Hornet</option>
                        <option value="Jade">Jade</option>
                        <option value="Little Cub">Little Cub</option>
                        <option value="Livo">Livo</option>
                        <option value="MD">MD</option>
                        <option value="Magna">Magna</option>
                        <option value="NV400">NV400</option>
                        <option value="Navi">Navi</option>
                        <option value="PCX">PCX</option>
                        <option value="Rebel">Rebel</option>
                        <option value="Passion">Passion</option>
                        <option value="Roadmaster">Roadmaster</option>
                        <option value="SL">SL</option>
                        <option value="Stunner">Stunner</option>
                        <option value="Super club">Super club</option>
                        <option value="Today">Today</option>
                        <option value="Twister">Twister</option>
                        <option value="X blade">X blade</option>
                        <option value="XLR">XLR</option>
                        <option value="XR">XR</option>
                        <option value="VTR">VTR</option>
                        <option value="Zoomer">Zoomer</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const kawasakiBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Kawasaki Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Balius">Balius</option>
                        <option value="D Tracker">D Tracker</option>
                        <option value="Eliminator">Eliminator</option>
                        <option value="Estrella">Estrella</option>
                        <option value="GPZ">GPZ</option>
                        <option value="KDX">KDX</option>
                        <option value="KLX">KLX</option>
                        <option value="KX">KX</option>
                        <option value="Ninja">Ninja</option>
                        <option value="Versys">Versys</option>
                        <option value="Vulcan S">Vulcan S</option>
                        <option value="Z">Z</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const kineticBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Kinetic Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="4S">4S</option>
                        <option value="Blaze">Blaze</option>
                        <option value="Boxer">Boxer</option>
                        <option value="GF">GF</option>
                        <option value="Safari">Safari</option>
                        <option value="Stryker">Stryker</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const ktmBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select KTM Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="250">250</option>
                        <option value="390">390</option>
                        <option value="690">690</option>
                        <option value="790">790</option>
                        <option value="Duke">Duke</option>
                        <option value="Duke 200">Duke 200</option>
                        <option value="RC">RC</option>
                        <option value="RC 200">RC 200</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const kymcoBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select KYMCO Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Downtown 125i">Downtown 125i</option>
                        <option value="Downtown 350i">Downtown 350i</option>
                        <option value="Like 125 ABS">Like 125 ABS</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const loncinBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Loncin Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="90">90</option>
                        <option value="CD">CD</option>
                        <option value="LD">LD</option>
                        <option value="LX">LX</option>
                        <option value="Super">Super</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const mahindraBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mahindra Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Centuro">Centuro</option>
                        <option value="Duro">Duro</option>
                        <option value="Gusto">Gusto</option>
                        <option value="Mojo">Mojo</option>
                        <option value="UZO 125">UZO 125</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const royalEnfieldBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Royal Enfield Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Bullet">Bullet</option>
                        <option value="Classic">Classic</option>
                        <option value="Himalayan">Himalayan</option>
                        <option value="Interceptor">Interceptor</option>
                        <option value="Machismo">Machismo</option>
                        <option value="Thunderbird">Thunderbird</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const suzukiBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Suzuki Model</label>
                <select   onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="AX100">AX100</option>
                        <option value="Access">Access</option>
                        <option value="Bandit">Bandit</option>
                        <option value="Burgman">Burgman</option>
                        <option value="DRZ">DRZ</option>
                        <option value="Djebel">Djebel</option>
                        <option value="GN 125">GN 125</option>
                        <option value="GN 250">GN 250</option>
                        <option value="Gixxer">Gixxer</option>
                        <option value="Grass Tracker">Grass Tracker</option>
                        <option value="Intruder">Intruder</option>
                        <option value="Lets">Lets</option>
                        <option value="SX">SX</option>
                        <option value="Volty">Volty</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const tvsBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select TVS Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Apache">Apache</option>
                        <option value="Centra">Centra</option>
                        <option value="Creon">Creon</option>
                        <option value="Flame">Flame</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Metro">Metro</option>
                        <option value="Ntorq">Ntorq</option>
                        <option value="Scooty pep">Scooty pep</option>
                        <option value="Scooty pep+">Scooty pep+</option>
                        <option value="Scooty pept">Scooty pept</option>
                        <option value="Scooty Zest">Scooty Zest</option>
                        <option value="Sport">Sport</option>
                        <option value="Star City Plus">Star City Plus</option>
                        <option value="Star Sport">Star Sport</option>
                        <option value="Streak">Streak</option>
                        <option value="Stryker">Stryker</option>
                        <option value="Victor">Victor</option>
                        <option value="Wego">Wego</option>
                        <option value="XL 100">XL 100</option>
                        <option value="XL Super">XL Super</option>
                        <option value="Zest">Zest</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const vespaBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Vespa Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Elegante">Elegante</option>
                        <option value="LX">LX</option>
                        <option value="SXL">SXL</option>
                        <option value="VXL">VXL</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const yamahaBikeModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Yamaha Model</label>
                <select    onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          bikeModel: e.target.value,
                        })
                        : setProduct({ ...product, bikeModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Alpha">Alpha</option>
                        <option value="DT">DT</option>
                        <option value="Enticer">Enticer</option>
                        <option value="FZ">FZ</option>
                        <option value="FZ S">FZ S</option>
                        <option value="FZ 25">FZ 25</option>
                        <option value="Facino">Facino</option>
                        <option value="Fascino">Fascino</option>
                        <option value="Fazer">Fazer</option>
                        <option value="Gladiator">Gladiator</option>
                        <option value="JGR">JGR</option>
                        <option value="Libero">Libero</option>
                        <option value="Mate">Mate</option>
                        <option value="MT 06">MT 06</option>
                        <option value="MT 09">MT 09</option>
                        <option value="MT 15">MT 15</option>
                        <option value="Majesty">Majesty</option>
                        <option value="N Max">N Max</option>
                        <option value="R1">R1</option>
                        <option value="R15">R15</option>
                        <option value="Ray">Ray</option>
                        <option value="Ray ZR">Ray ZR</option>
                        <option value="SZ RR">SZ RR</option>
                        <option value="Saluto">Saluto</option>
                        <option value="TTR">TTR</option>
                        <option value="TW">TW</option>
                        <option value="T2R">T2R</option>
                        <option value="Virago">Virago</option>
                        <option value="Vox">Vox</option>
                        <option value="WR">WR</option>
                        <option value="WRF">WRF</option>
                        <option value="WRZ">WRZ</option>
                        <option value="YZ">YZ</option>
                        <option value="YZF">YZF</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
//van models
const daihatsuVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Daihatsu Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Attrai">Attrai</option>
                        <option value="Hijet">Hijet</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const hondaVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Daihatsu Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Acty">Acty</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const hyundaiVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Hyundai Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="H100">H100</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const isuzuVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Isuzu Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="EIF">EIF</option>
                        <option value="Fargo">Fargo</option>
                        <option value="WFR">WFR</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const mahindraVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mahindra Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Supro">Supro</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const mazdaVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mazda Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Supro">Bongo</option>
                        <option value="Supro">Brawny</option>
                        <option value="Supro">Scrum</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const mercedesBenzVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mercedes Benz Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Sprinter">Sprinter</option>
                        <option value="Vito">Vito</option>
                        <option value="Valente">Valente</option>
                        <option value="V-class">V-class</option>
                        <option value="Marcoplo">Marcoplo</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const microVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Micro Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="MPV">MPV</option>
                        <option value="Tourer">Tourer</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const mitsubishiVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mitsubishi Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Delica">Delica</option>
                        <option value="Minicab">Minicab</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const nissanVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Nissan Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Caravan">Caravan</option>
                        <option value="Clipper">Clipper</option>
                        <option value="Homy">Homy</option>
                        <option value="Largo">Largo</option>
                        <option value="NV200">NV200</option>
                        <option value="Serena">Serena</option>
                        <option value="Urvan">Urvan</option>
                        <option value="Vanette">Vanette</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const subaruVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Subaru Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Sambar">Sambar</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const suzukiVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Suzuki Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Every">Every</option>
                        <option value="Omni">Omni</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const toyotaVanModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Toyota Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          vanModel: e.target.value,
                        })
                        : setProduct({ ...product, vanModel: e.target.value })
                        // districtVal=e.target.value
                        // console.log("this is dist val   "+districtVal)
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Hiace">Hiace</option>
                        <option value="KDH">KDH</option>
                        <option value="Liteace">Liteace</option>
                        <option value="Noah">Noah</option>
                        <option value="Regius">Regius</option>
                        <option value="Townace">Townace</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
//bus models
const ashokLeylandBusModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Ashok Leyland Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          busModel: e.target.value,
                        })
                        : setProduct({ ...product, busModel: e.target.value })
                        
                
                  }} className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Eagle">Eagle</option>
                        <option value="Luxura">Luxura</option>
                        <option value="Lynx">Lynx</option>
                        <option value="MITR">MITR</option>
                        <option value="Sunshine">Sunshine</option>
                        <option value="ULE">ULE</option>
                        <option value="Viking">Viking</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const eicherBusModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Eicher Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          busModel: e.target.value,
                        })
                        : setProduct({ ...product, busModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Skyline">Skyline</option>
                        <option value="Starline">Starline</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const hinoBusModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Hino Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          busModel: e.target.value,
                        })
                        : setProduct({ ...product, busModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Rainbow">Rainbow</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const isuzuBusModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Isuzu Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          busModel: e.target.value,
                        })
                        : setProduct({ ...product, busModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Elf">Elf</option>
                        <option value="Journey">Journey</option>
                        <option value="Super Cruiser">Super Cruiser</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const mahindraBusModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mahindra Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          busModel: e.target.value,
                        })
                        : setProduct({ ...product, busModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Tourister">Tourister</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const microBusModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Micro Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          busModel: e.target.value,
                        })
                        : setProduct({ ...product, busModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Higer">Higer</option>
                        <option value="Yutong">Yutong</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const mitsubishiBusModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mitsubishi Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          busModel: e.target.value,
                        })
                        : setProduct({ ...product, busModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Aero">Aero</option>
                        <option value="Rosa">Rosa</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const nissanBusModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Nissan Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          busModel: e.target.value,
                        })
                        : setProduct({ ...product, busModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Civilian">Civilian</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const tataBusModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Tata Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          busModel: e.target.value,
                        })
                        : setProduct({ ...product, busModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Marcopolo">Marcopolo</option>
                        <option value="Starbus">Starbus</option>
                        <option value="Ultra">Ultra</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const toyotaBusModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Toyota Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          busModel: e.target.value,
                        })
                        : setProduct({ ...product, busModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Coaster">Coaster</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)

//heavyduty models
const ashokLeylandHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Ashok Leyland Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Boss">Boss</option>
                        <option value="Comet">Comet</option>
                        <option value="Ecomet">Ecomet</option>
                        <option value="Taurus">Taurus</option>
                        <option value="Tusker">Tusker</option>
                        <option value="Cargo">Cargo</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const atcoHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Atco Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Unimo">Unimo</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)

const dfskHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select DFSK Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Unimo">Unimo</option>

                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const daihatsuHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Daihatsu Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Hijet">Hijet</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const eicherHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Eicher Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Pro">Pro</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const fawHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select FAW Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const fotonHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Foton Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Auman">Auman</option>
                        <option value="Aumark">Aumark</option>
                        <option value="Forland">Forland</option>
                        <option value="Ollin">Ollin</option>
                        <option value="Canter">Canter</option>
                        <option value="Double bj">Double bj</option>
                        <option value="FL">FL</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const hinoHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Hino Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Dutro">Dutro</option>
                        <option value="EX">EX</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const hitachiHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Hitachi Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="EX">EX</option>
                        <option value="Landi">Landi</option>
                        <option value="UH">UH</option>
                        <option value="2X">2X</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const  hondaHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Honda Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Acty">Acty</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const  hyundaiHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Hyundai Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Mega">Mega</option>
                        <option value="Xient">Xient</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const isuzuHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Isuzu Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="150">150</option>
                        <option value="250">250</option>
                        <option value="350">350</option>
                        <option value="Elf">Elf</option>
                        <option value="Forward">Forward</option>
                        <option value="Juston">Juston</option>

                        <option value="CYH">CYH</option>
                        <option value="CYZ">CYZ</option>
                        <option value="Giga">Giga</option>
                        <option value="NMR">NMR</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const jacHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select JAC Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const jmcHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select JMC Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const mazdaHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mazda Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}   className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Bongo">Bongo</option>
                        <option value="Titan">Titan</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const mahindraHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mahindra Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}   className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Blazo">Blazo</option>
                        <option value="Bolero">Bolero</option>
                        <option value="Jeeto">Jeeto</option>
                        <option value="Maxximo">Maxximo</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const mitsubishiHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mitsubishi Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}   className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="ME">Canter</option>
                        <option value="ME">Fuso</option>

                        <option value="ME">ME</option>
                        <option value="MG">MG</option>
                        <option value="MM">MM</option>
                        <option value="WS">WS</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const mercedesBenzHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Mercedes Bens Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}   className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Actros">Actros</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const nissanHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Nissan Model</label>
                <select  onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}   className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Atlas">Atlas</option>
                        <option value="Cabstar">Cabstar</option>
                        <option value="Vanette">Vanette</option>

                        <option value="SB">SB</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const sojenHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Sojen Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Carry">Carry</option>
                        <option value="Every">Every</option>

                        <option value="Sakai Role">Sakai Role</option>

                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const suzukiHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Suzuki Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Carry">Carry</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const tataHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Tata Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Ace">Ace</option>
                        <option value="Dimo batta">Dimo batta</option>
                        <option value="Dimo batti">Dimo batti</option>
                        <option value="Dimo lokka">Dimo lokka</option>
                        <option value="LPT">LPT</option>
                        <option value="xenon">xenon</option>
                        <option value="207">207</option>
                        <option value="Yodha">Yodha</option>
                        <option value="Prima">Prima</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const toyotaHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Toyota Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Dyna">Dyna</option>
                        <option value="Liteace">Liteace </option>
                        <option value="Townace">Townace</option>
                        <option value="Toyoace">Toyoace</option>

                        <option value="Prima">Prima</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const udHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select UD Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Quester">Quester</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const renaultHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select renault Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const yujienHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Yujien Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
const yanmarHeavyModels=()=>(
    <div>
        <div className="form-group">
                <label className="text-muted">Select Yanmar Model</label>
                <select onChange={(e) =>{
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          lorryModel: e.target.value,
                        })
                        : setProduct({ ...product, lorryModel: e.target.value })
                        
                
                  }}  className="form-select form-select-sm">
                        <option>Please select</option>
                        <option value="YB">YB</option>
                        <option value="Other model">Other model</option>
                </select>
        </div>
    </div>
)
    return (
      <div className="form-wrap">
        <p className="lead">{updatingProduct ? "Update" : "Create"}
  Ad</p>

  {/* title */}
    <div class="form-group">
			<label id="name-label" htmlFor="name">Title</label>
            <input
          type="text"
          placeholder="Title"
          value={updatingProduct ? updatingProduct?.title : product?.title}
          onChange={(e) =>
            updatingProduct
              ? setUpdatingProduct({ ...updatingProduct, title:e.target.value })
              : setProduct({ ...product, title: e.target.value ,author:data.user._id})
  }
          className="form-control " required
        />
	</div>
        
        {/* discription */}
        <div class="form-group">
			<label id="name-label" htmlFor="name">Description</label>
            <textarea
          rows="5"
          className="form-control p-2 mb-2"
          placeholder="Description"
          value={
            updatingProduct ? updatingProduct?.description :
  product?.description
          }
          onChange={(e) =>
            updatingProduct
              ? setUpdatingProduct({
                  ...updatingProduct,
                  description: e.target.value,
                })
                : setProduct({ ...product, description: e.target.value })
            }
          ></textarea>
        </div>
       

      {/* ====== district ====== */}
          <div className="form-group">
                <label className="text-muted">District</label>
                <select name="district"  className="form-control p-2 mb-2" 
                  onChange={(e) =>{
                    values.districtVal=e.target.value
                    updatingProduct
                      ? setUpdatingProduct({
                          ...updatingProduct,
                          district: e.target.value,
                        })
                        : setProduct({ ...product, district: e.target.value })
                        // districtVal=e.target.value
                        console.log("this is dist val   "+values.districtVal)
                
                  }}
                required>
                        <option value="">Please select</option>
                        <option value="ampara">Ampara</option>
                        <option value="anuradhapura">Anuradhapura</option>
                        <option value="badulla">Badulla</option>
                        <option value="batticaloa">Batticaloa</option>
                        <option value="colombo">Colombo</option>
                        <option value="galle">Galle</option>
                        <option value="gampaha">Gampaha</option>
                        <option value="hambanthota">Hambanthota</option>
                        <option value="jaffna">Jaffna</option>
                        <option value="kalutara">Kalutara</option>
                        <option value="kandy">Kandy</option>
                        <option value="kegalle">kegalle</option>
                        <option value="kilinochchi">Kilinochchi</option>
                        <option value="kurunegala">Kurunegala</option>
                        <option value="mannar">Mannar</option>
                        <option value="matale">Matale</option>
                        <option value="matara">Matara</option>
                        <option value="monaragala">Monaragala</option>
                        <option value="mullativu">Mullativu</option>
                        <option value="nuwaraeliya">Nuwaraeliya</option>
                        <option value="polonnaruwa">Polonnaruwa</option>
                        <option value="puttalam">Puttalam</option>
                        <option value="rathnapura">Rathnapura</option>
                        <option value="trincomalee">Trincomalee</option>
                        <option value="vavuniya">Vavuniya</option>
                </select>
            </div>
           


      {/* price       */}
      <div className="form-group">
                <label className="text-muted">Price</label>
                <input
                        type="number"
                        placeholder="Price"
                        min="1"
                        class="form-control p-2 mb-2"
                        value={updatingProduct ? updatingProduct?.price : product?.price}
                        onChange={(e) =>
                        updatingProduct
                            ? setUpdatingProduct({
                                ...updatingProduct,
                                price: e.target.value,
                            })
                            : setProduct({ ...product, price: e.target.value })
                        }
                />
        </div>

        {/* phone1       */}
      <div className="form-group">
                <label className="text-muted">Phone number
                <p class="text-danger required-text">required</p>

                </label>
                <input
                        type="number"
                        placeholder="type your phone number"
                        class="form-control p-2 mb-2"
                        value={updatingProduct ? updatingProduct?.tpOne : product?.tpOne}
                        onChange={(e) =>
                        updatingProduct
                            ? setUpdatingProduct({
                                ...updatingProduct,
                                tpOne: e.target.value,
                            })
                            : setProduct({ ...product, tpOne: e.target.value })
                        }
                />
        </div>

         {/* phone2       */}
      <div className="form-group">
                <label className="text-muted">Phone number 2

                </label>
                <input
                        type="number"
                        placeholder="type your second phone number"
                        class="form-control p-2 mb-2"
                        value={updatingProduct ? updatingProduct?.tpTwo : product?.tpTwo}
                        onChange={(e) =>
                        updatingProduct
                            ? setUpdatingProduct({
                                ...updatingProduct,
                                tpTwo: e.target.value,
                            })
                            : setProduct({ ...product, tpTwo: e.target.value })
                        }
                />
        </div>
    



   {/* ===== category =====     */}

      <div className="form-group">
      <label id="name-label" htmlFor="name">Category</label>

        <select
          name="category"
          className="form-control p-2 mb-2"
          onClick={(e)=>{

            //Object.keys(product).forEach(key => delete product[key]);
            values.carBrandVal=""
            values.bikeBrandVal=""
            values.vanBrandVal=""
            values.busBrandVal=""
            values.lorryBrandVal=''
          }}
          onChange={(e) => {
            values.categoryVal=e.target.value;
            console.log(values.categoryVal)
            const categoryId = e.target.value;
            const categoryName =e.target.options[e.target.selectedIndex].getAttribute("name");
            const category = categoryId? { _id: categoryId, name: categoryName }: null;
            if (updatingProduct) {
              setUpdatingProduct({
                ...updatingProduct,
                category,
              });
            } else {
              setProduct({ ...product, category });
} }}
          value={
            updatingProduct
              ? updatingProduct?.category?._id
              : product?.category?._id
          }
        >
          <option value="">Select Category</option>
          {categories?.map((c) => (
            <option key={c._id} value={c._id} name={c?.name}>
              {c.name}
</option>
))}
        </select>
      </div>

     
        {
            (values.categoryVal===`${process.env.CAR_ID}`) ? carForm():(<div></div>)
        }
        {
            (values.categoryVal===`${process.env.BIKE_ID}`) ? bikeForm():(<div></div>)
        }
        {
            (values.categoryVal===`${process.env.VAN_ID}`) ? vanForm():(<div></div>)
        }
        {
            (values.categoryVal===`${process.env.BUS_ID}`) ? busForm():(<div></div>)
        }
         {
            (values.categoryVal===`${process.env.WHEEL_ID}`) ? threeWheelForm():(<div></div>)
        }
        {
            (values.categoryVal===`${process.env.LORRY_ID}`) ? lorriesAndTrucksForm():(<div></div>)
        }
        {
            (values.categoryVal===`${process.env.RENT_ID}`) ? vehicalRentalForm():(<div></div>)
        }
        {
            (values.categoryVal===`${process.env.CARPARTS_ID}`) ? VehiclePartsForm():(<div></div>)
        }
        {
            (values.categoryVal===`${process.env.BIKEPARTS_ID}`) ? BikePartsForm():(<div></div>)
        }
        {
            (values.categoryVal===`${process.env.WHEELPARTS_ID}`) ? ThreeWheelPartsForm():(<div></div>)
        }
        {
            (values.categoryVal===`${process.env.VANPARTS_ID}`) ? VanPartsForm():(<div></div>)
        }
        {
            (values.categoryVal===`${process.env.HEAVY_ID}`) ? heavyDutyForm():(<div></div>)
        }





        {
            (values.carBrandVal==="Audi") ? audiCarModels():(<div></div>)
        }
          {
            (values.carBrandVal==="austin") ? austinCarModels():(<div></div>)
        } {
            (values.carBrandVal==="bmw") ? bmwCarModels():(<div></div>)
        }   {
            (values.carBrandVal==="chery") ? cheryCarModels():(<div></div>)
        } {
            (values.carBrandVal==="chevrolet") ? chevroletCarModels():(<div></div>)
        } {
            (values.carBrandVal==="chrysler") ? chryslerCarModels():(<div></div>)
        }  {
            (values.carBrandVal==="daewoo") ? daewooCarModels():(<div></div>)
        }
        {
            (values.carBrandVal==="daihatsu") ? daihatsuCarModels():(<div></div>)
        }{
            (values.carBrandVal==="dfsk") ? dfskCarModels():(<div></div>)
        }{
            (values.carBrandVal==="fiat") ? fiatCarModels():(<div></div>)
        }{
            (values.carBrandVal==="ford") ? fordCarModels():(<div></div>)
        }{
            (values.carBrandVal==="gmc") ? gmcCarModels():(<div></div>)
        }{
            (values.carBrandVal==="honda") ? hondaCarModels():(<div></div>)
        }{
            (values.carBrandVal==="hummer") ? hummerCarModels():(<div></div>)
        }{
            (values.carBrandVal==="hyundai") ? hyundaiCarModels():(<div></div>)
        }{
            (values.carBrandVal==="isuzu") ? isuzuCarModels():(<div></div>)
        }{
            (values.carBrandVal==="jaguar") ? jaguarCarModels():(<div></div>)
        }{
            (values.carBrandVal==="jeep") ? jeepCarModels():(<div></div>)
        }{
            (values.carBrandVal==="kia") ? kiaCarModels():(<div></div>)
        }{
            (values.carBrandVal==="land rover") ? landRoverCarModels():(<div></div>)
        }{
            (values.carBrandVal==="lexus") ? LexusCarModels():(<div></div>)
        }{
            (values.carBrandVal==="maruti suzuki") ? marutiSuzukiCarModels():(<div></div>)
        }{
            (values.carBrandVal==="Mercedes Benz") ? benzCarModels():(<div></div>)
        }
        {
            (values.carBrandVal==="mg") ? mgCarModels():(<div></div>)
        }{
            (values.carBrandVal==="micro") ? microCarModels():(<div></div>)
        }{
            (values.carBrandVal==="mini") ? miniCarModels():(<div></div>)
        }{
            (values.carBrandVal==="Mitsubishi") ? mitsubishiCarModels():(<div></div>)
        }{
            (values.carBrandVal==="morris") ? morrisCarModels():(<div></div>)
        }{
            (values.carBrandVal==="nissan") ? nissanCarModels():(<div></div>)
        }{
            (values.carBrandVal==="oldsmobile") ? oldsmobileca():(<div></div>)
        }{
            (values.carBrandVal==="opel") ? opelCarModels():(<div></div>)
        }{
            (values.carBrandVal==="perodua") ? peroduaCarModels():(<div></div>)
        }{
            (values.carBrandVal==="Peugeot") ? peugeotCarModels():(<div></div>)
        }{
            (values.carBrandVal==="porsche") ? porscheCarModels():(<div></div>)
        }{
            (values.carBrandVal==="proton") ? protonCarModels():(<div></div>)
        }{
            (values.carBrandVal==="renault") ? renaultCarModels():(<div></div>)
        }{
            (values.carBrandVal==="ssang yong") ? ssangyongCarModels():(<div></div>)
        }{
            (values.carBrandVal==="skoda") ? skodaCarModels():(<div></div>)
        }{
            (values.carBrandVal==="seat") ? seatCarModels():(<div></div>)
        }{
            (values.carBrandVal==="smart") ? smartCarModels():(<div></div>)
        }{
            (values.carBrandVal==="suzuki") ? suzukiCarModels():(<div></div>)
        }{
            (values.carBrandVal==="subaru") ? subaruCarModels():(<div></div>)
        }
        {
            (values.carBrandVal==="toyota") ? toyotaCarModels():(<div></div>)
        }{
            (values.carBrandVal==="tata") ? tataCarModels():(<div></div>)
        }{
            (values.carBrandVal==="tesla") ? teslaCarModels():(<div></div>)
        }{
            (values.carBrandVal==="vauxhall") ? vauxhallCarModels():(<div></div>)
        }{
            (values.carBrandVal==="volkswagen") ? volksWagenCarModels():(<div></div>)
        }{
            (values.carBrandVal==="volvo") ? volvoCarModels():(<div></div>)
        }{
            (values.carBrandVal==="Zotye") ? zotyeCarModels():(<div></div>)
        }
                    
         {/* bike brands            */}
        {
            (values.bikeBrandVal==="bajaj") ? bajajBikeModels():(<div></div>)
        }
        {
            (values.bikeBrandVal==="aprilia") ? apriliaBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="demak") ? demakBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="ducati") ? dukatiBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="electra") ? electraBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="harley davidson") ? harleyDavidsonBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="hero") ? heroBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="kawasaki") ? kawasakiBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="honda") ? hondaBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="kinetic") ? kineticBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="ktm") ? ktmBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="kymco") ? kymcoBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="loncin") ? loncinBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="mahindra") ? mahindraBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="Royal Enfield") ? royalEnfieldBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="suzuki") ? suzukiBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="yamaha") ? yamahaBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="tvs") ? tvsBikeModels():(<div></div>)
        }{
            (values.bikeBrandVal==="vespa") ? vespaBikeModels():(<div></div>)
        }

        {
            (values.vanBrandVal==="honda") ? hondaVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="hyundai") ? hyundaiVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="isuzu") ? isuzuVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="mercedes benz") ? mercedesBenzVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="mahindra") ? mahindraVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="mazda") ? mazdaVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="mitsubishi") ? mitsubishiVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="micro") ? microVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="nissan") ? nissanVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="suzuki") ? suzukiVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="subaru") ? subaruVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="toyota") ? toyotaVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="honda") ? hondaVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="honda") ? hondaVanModels():(<div></div>)
        }{
            (values.vanBrandVal==="honda") ? hondaVanModels():(<div></div>)
        }
            {/* bus modelsa */}
        {
            (values.busBrandVal==="ashok leyland") ? ashokLeylandBusModels():(<div></div>)
        }
        {
            (values.busBrandVal==="eicher") ? eicherBusModels():(<div></div>)
        }{
            (values.busBrandVal==="hino") ? hinoBusModels():(<div></div>)
        }{
            (values.busBrandVal==="isuzu") ? isuzuBusModels():(<div></div>)
        }{
            (values.busBrandVal==="mahindra") ? mahindraBusModels():(<div></div>)
        }{
            (values.busBrandVal==="micro") ? microBusModels():(<div></div>)
        }{
            (values.busBrandVal==="mitsubishi") ? mitsubishiBusModels():(<div></div>)
        }{
            (values.busBrandVal==="nissan") ? nissanBusModels():(<div></div>)
        }{
            (values.busBrandVal==="tata") ? tataBusModels():(<div></div>)
        }{
            (values.busBrandVal==="toyota") ? toyotaBusModels():(<div></div>)
        }

        {
            (values.lorryBrandVal==="ashok leyland") ? ashokLeylandHeavyModels():(<div></div>)
        }
        {
            (values.lorryBrandVal==="atco") ? atcoHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="daihatsu") ? daihatsuHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="eicher") ? eicherHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="dfsk") ? dfskHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="faw") ? fawHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="foton") ? fotonHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="hino") ? hinoHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="hyundai") ? hyundaiHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="honda") ? hondaHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="isuzu") ? isuzuHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="mahindra") ? mahindraHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="jac") ? jacHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="jmc") ? jmcHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="mercedes benz") ? mercedesBenzHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="mazda") ? mazdaHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="mitsubishi") ? mitsubishiHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="nissan") ? nissanHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="sojen") ? sojenHeavyModels():(<div></div>)
        }
        {
            (values.lorryBrandVal==="renault") ? renaultHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="suzuki") ? suzukiHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="toyota") ? toyotaHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="tata") ? tataHeavyModels():(<div></div>)
        }{
            (values.lorryBrandVal==="yujien") ? yujienHeavyModels():(<div></div>)
        }
<div className="image-div">
        {/* img upload 1 */}
        <label id="img-label1" htmlFor="name" className="form-label fw-bold">
  Upload Main Image <small className="text-muted">(This image will be used as the ad's main display)</small>
</label>
    <div className="form-group mb-3 image-upload-div">
      <input type="file" accept="image/*" onChange={handleFileChange} required class="form-control image-upload-input"  />
      <button onClick={uploadImage} disabled={uploading} className="btn btn-primary">
        {uploading ? "Uploading..." : "Upload 🔼 "}
      </button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" className="img-thumbnail mx-1 shadow" style={{ width: "100px", height: "100px", objectFit: "cover" }} />}
      <div>
      {imageName ? (
         <div
         className="text-center pointer"
         onClick={() => deletebunnyImage(imageName)}
       >❌
       </div>
      ) : (
        <p></p>
      )}
    </div>
     
    </div>

    <label id="img-label1" htmlFor="name">upload image 2</label>
    <div className="form-group mb-3 image-upload-div">
      <input type="file" accept="image/*" onChange={handleFileChange2} required class="form-control image-upload-input"  />
      <button onClick={uploadImage2}  disabled={uploading} className="btn btn-primary">
      {uploading ? "Uploading..." : "Upload 🔼 "}
      </button>
      {imageUrl2 && <img src={imageUrl2} alt="Uploaded" className="img-thumbnail mx-1 shadow" style={{ width: "100px", height: "100px", objectFit: "cover" }} />}
      <div>
      {imageName2 ? (
         <div
         className="text-center pointer"
         onClick={() => deletebunnyImage2(imageName2)}
       >❌
       </div>
      ) : (
        <p></p>
      )}
    </div>
     
    </div>


    <label id="img-label1" htmlFor="name">upload image 3</label>
    <div className="form-group mb-3 image-upload-div">
      <input type="file" accept="image/*" onChange={handleFileChange3} required class="form-control image-upload-input"  />
      <button onClick={uploadImage3}  disabled={uploading} className="btn btn-primary">
      {uploading ? "Uploading..." : "Upload 🔼 "}
      </button>
      {imageUrl3 && <img src={imageUrl3} alt="Uploaded" className="img-thumbnail mx-1 shadow" style={{ width: "100px", height: "100px", objectFit: "cover" }} />}
      <div>
      {imageName3 ? (
         <div
         className="text-center pointer"
         onClick={() => deletebunnyImage3(imageName3)}
       >❌
       </div>
      ) : (
        <p></p>
      )}
    </div>
     
    </div>

    <label id="img-label1" htmlFor="name">upload image 4</label>
    <div className="form-group mb-3 image-upload-div">
      <input type="file" accept="image/*" onChange={handleFileChange4} required class="form-control image-upload-input"  />
      <button onClick={uploadImage4}  disabled={uploading} className="btn btn-primary">
      {uploading ? "Uploading..." : "Upload 🔼 "}
      </button>
      {imageUrl4 && <img src={imageUrl4} alt="Uploaded" className="img-thumbnail mx-1 shadow" style={{ width: "100px", height: "100px", objectFit: "cover" }} />}
      <div>
      {imageName4 ? (
         <div
         className="text-center pointer"
         onClick={() => deletebunnyImage4(imageName4)}
       >❌
       </div>
      ) : (
        <p></p>
      )}
    </div>
     
    </div>

    <label id="img-label1" htmlFor="name">upload image 5</label>
    <div className="form-group mb-3 image-upload-div">
      <input type="file" accept="image/*" onChange={handleFileChange5} required class="form-control image-upload-input"  />
      <button onClick={uploadImage5} disabled={uploading} className="btn btn-primary">
      {uploading ? "Uploading..." : "Upload 🔼 "}
      </button>
      {imageUrl5 && <img src={imageUrl5} alt="Uploaded" className="img-thumbnail mx-1 shadow" style={{ width: "100px", height: "100px", objectFit: "cover" }} />}
      <div>
      {imageName5 ? (
         <div
         className="text-center pointer"
         onClick={() => deletebunnyImage5(imageName5)}
       >❌
       </div>
      ) : (
        <p></p>
      )}
    </div>
     
    </div>
    </div>
        
        {/* <div className="form-group mb-3">
          <label
            className={`btn btn-primary btn-block col-12 ${uploading ? "disabled" :""}`}
            >
    {uploading ? "Processing" : "Upload Images"}
    <input
      type="file"
      multiple
      hidden
      accept="images/*"
      onChange={uploadImages}
      disabled={uploading}
/> </label>
</div> */}
{/* img upload 1 */}

{/* <div className="d-flex justify-content-center">
  {
  imagePreviews?.map((img) => (
    <div key={img?.public_id}>
        <div>{console.log(img)}</div>
      <img
        src={img?.secure_url}
        className="img-thumbnail mx-1 shadow"
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
/> <br /> <div
        className="text-center pointer"
        onClick={() => deleteImage(img?.public_id)}
      >❌
      </div>
    </div>
))} </div>; */}
<div className="d-flex justify-content-between mt-3 ad-btn-div">
  <button
    className={`btn btn-primary create-btn btn-raised btn-${updatingProduct ? "info" :
"primary"}`}
    onClick={() => (updatingProduct ? updateProduct() : createProduct())}
  >
    {updatingProduct ? "Update" : "Create"}
</button>
  {updatingProduct && (
    <>
      <button onClick={() => deleteProduct()} className="btn btn-danger">
Delete
      </button>
      <button  onClick={() => window.location.reload()}
        className="btn btn-danger"
      >
Clear
      </button>
    </>
)} </div>
{/* <pre>{JSON.stringify(product, null, 4)}</pre> */}


</div>
); }