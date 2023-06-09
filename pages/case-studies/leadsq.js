
import Footer from "@/components/footer";

const leadsquared = () => {
  return (
    <>

      <div className="container d-flex overflow-hidden bg-white py-5 flex-column flex-md-row mb-5 align-items-center">
        <div className="row col-12 col-md-5 d-flex">
          <div className="container border border-5 border-dark rounded-1 px-4 py-2">
            <div className="mb-3">
              <img src="../img/leadsq.jpg"></img>
            </div>
            <span className="c-fs-3 c-fw-b c-col-grey">Industry</span>
            <div className="mb-4">
              <span className="c-fs-3 c-fw-b mb-1 c-col-grey">Services (CRM for businesses) </span>
            </div>
            <div className="mb-1">
              <span className="c-fs-3 c-fw-b mb-1 c-col-grey">Purpose</span>
            </div>
            <div className="mb-4">
              <span className="c-fs-4 mb-1 col-otp">Communication APIs</span>
            </div>
            <div className="mb-1">
              <span className="c-fs-3 c-fw-b mb-1 c-col-grey">Features in use</span>
            </div>
            <div className="mb-4">
              <span className="c-fs-4 mb-1 col-otp">Programmable SMS</span>
            </div>
          </div>
        </div>
        <div className="row col-md-8 col-sm-12 d-flex px-5 ms-3">
          <div className="container p-5">
            <div className="py-5">
              <h5 className="sub-heading py-5">LeadSquared updates the customers of their clients across industries via MSG91</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h1 className="c-fw-b mb-4">Case Studies - Lead Squared</h1>
        <span className="c-fs-3"><a target="_blank" href="https://www.leadsquared.com/">LeadSquared</a> is a lead conversion Marketing and CRM platform. With the vision to offer their customers with the best Marketing automated services, and to ensure the lead conversions happen efficiently, LeadSquared has been rigorously working on sending the various updates and information for their customer’s satisfaction.

</span>
      </div>

      <div className="container py-5">
        <h2 className="c-fw-b mb-4">Problem</h2>
        <span className="c-fs-3">A well-established communication channel with customers is a key requirement to ensure better operations. Setting up seamless operations while maintaining a wide range of customer base without a robust and secure communication channel is a challenge. Thus to convey important information like booking details, offers and updates for building a strong customer relationship, a communication channel targeting wide reach for mass audience (customers) is required.</span>
      </div>

      <div className="container py-5">
        <h2 className="c-fw-b mb-4">Solution</h2>
        <span className="c-fs-3">LeadSquared is managing their operations by its website https://www.leadsquared.com/ and customer communication efficiently with SMS communications via MSG91 API. With MSG91 APIs and real-time robust system, SMS is delivered to the customers to build communication at different events such as</span>
        <ul>
          <li className="c-fs-3 mt-3">Once the customer <a href="#">Signs up </a> they receive an <a href="#"> OTP verification SMS, Credentials and Onboarding details via SMS.</a></li>
          <li className="c-fs-3 mt-1">Upon every <a href="#">login </a> , the customer receives an <a href="#"> OTP SMS. </a></li>
          <li className="c-fs-3 mt-1">If the customer <a href="#"> forgets password </a> , they receive a <a href="#"> OTP Verification SMS for Password retrieval. </a></li>
          <li className="c-fs-3 mt-1">Customer receives SMS notifications upon <a href="#"> Generation of new leads. </a></li>
          <li className="c-fs-3 mt-1">Customer receives SMS notifications when the team contacted and were <a href="#"> Launch of any new offer/course/product </a> , via SMS.</li>
          <li className="c-fs-3 mt-1">Customers are notified about <a href="#"> Launch of any new offer/course/product </a> , via SMS.</li>
          <li className="c-fs-3 mt-1">Customers are notified about  <a href="#"> Scheduling of appointment/interview </a> , via SMS.</li>
          <li className="c-fs-3 mt-1">Customer receives SMS notifications regarding all the  <a href="#"> Ongoing Offers and Updates. </a></li>
          <li className="c-fs-3 mt-1">Customers are sent <a href="#"> Acknowledgement/Reply of their Enquiries </a> , via SMS.</li>
          <li className="c-fs-3 mt-1">Customers are notified about <a href="#"> Results announcements </a> , via SMS.</li>
          <li className="c-fs-3 mt-1">Customers are sent  <a href="#"> Call to actions </a> , via SMS.</li>
          <li className="c-fs-3 mt-1">Customers are <a href="#"> Shared Locations/address </a> , via SMS.</li>
          <li className="c-fs-3 mt-1">Customers are sent various <a href="#"> Promotions </a> , via SMS.</li>
        </ul>
        <span className="c-fs-3">This way LeadSquared has been able to establish and maintain an effective communication with Customers via SMS using MSG91 API.</span>
      </div>

      <div className="container py-5">
        <h2 className="c-fw-b mb-4">Benefit</h2>
        <span className="c-fs-3">As a result, the customer gets regular updates, information and notifications of ongoing offers via a secured channel, making the operations reliable and seamless, which results in a better rapport with the customer and increase in sales by more lead conversions.</span>     
      </div>
    <div className="container py-5">
<a href="/case-studies">Back</a>
</div>
</>
  );
};

export default leadsquared;
