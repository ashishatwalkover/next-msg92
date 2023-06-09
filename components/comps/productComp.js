// Child Component
import React from 'react';
import PreFooter from '../preFooter';
import TrustedBy from '../trustedby';
import Seo from '../seoComp';


const ProductComponent = ({pageData, path }) => {
  // console.log(pageData.pagename,"ss")
  // console.log('ProductComponent',pageData);  
  var i = 0;
  return (
    <div>
      <div className="product-banner-wrp">
        <div className="container text-center overflow-hidden">
          <div className=" mx-auto text-center justify-content-center py-2 py-md-5 col-12 col-sm-8">
            <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
              <img src={pageData.icon} className="product-page-logo me-2" />
              <h1 className={`heading page-title ${pageData.pagename}-heading`}>{pageData.pagetag}</h1>
            </div>

            <p className={`c-fs-4 text-uppercase col-otp c-ls-20 mx-auto mt-3 ${pageData.pagename}-dark`}>
              {pageData.tagline}
            </p>
            <div className="p-3">
              <h2 className="small-heading w-md-75 w-100 mx-auto fw-normal">
                {pageData.heading}
              </h2>
              <p className="small-heading w-md-75 w-100 mx-auto fw-normal">
                {pageData.subheading}
              </p>
            </div>
            <a href="https://control.msg91.com/signup/" className="btn btn-dark btn-lg c-fs-2 mt-3" >
              Get started
            </a>
          </div>
            <TrustedBy />
          <img
            src={pageData.pageimg}
            className="img-fluid product-page-img mx-auto"
            alt="#"
          />
        </div>
      </div>

      <div className={`px-sm-0 d-flex flex-column justify-content-center justify-content-sm-start section mt-5`}>
        <span className="container sub-heading c-head   pt-4 pt-md-0">Features</span>
        {pageData?.features?.map((item, index) => {
          if(item?.content){
            i++;       
            return (
              <div key={`f-${index}`} className={`container flex-column d-flex my-5 align-items-center justify-content-md-between justify-content-center  ${i%2 ? 'flex-md-row-reverse' : 'flex-md-row'}`}>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                {item?.img &&
                  <img
                  src={item?.img}
                  className="feature-img "
                />
                }                
                </div>
                <div className="col-12 col-md-5 d-flex flex-column ">
                  <span className="c-fs-2 c-fw-b ">
                    {item?.heading}
                  </span>
                  <span className="c-fs-3  mt-3">
                    <span className='c-fw-b'>{item?.subheading}</span> {item?.content}
                  </span>
                </div>
              </div> 
            );            
          }
        })}
      </div>
      <Seo path={path} pageData={pageData.pagename} />
      <PreFooter />
    </div>
  );
};

export default ProductComponent;

