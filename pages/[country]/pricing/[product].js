import { useRouter } from "next/router";
import PricingComp from "@/components/pricingComp";

const pricingmain =()=>{
  const router = useRouter();
  // const { slug } = router.query; 
  var  brawserPath = router.asPath;
  var path = brawserPath.split("/")[1];
  var product = brawserPath.split("/")[3];

  const getCountryCode = () => {
    var countryCode = path?.toUpperCase();
    path = path.length == 2 ? "/" + path : "";
    if(countryCode ==='[COUNTRY]'){
      return getCountryCode();
    }
    return countryCode;
  } 
  const data=getCountryCode();
  //console.log(678, data);
  if(data!=='[COUNTRY]' && data.length!==0 && product!== "product"){
    return (
      <PricingComp countryCode={data} product={product}/>
  );
}
else{
  return (<>LOADING</>)
}

};
export default pricingmain;