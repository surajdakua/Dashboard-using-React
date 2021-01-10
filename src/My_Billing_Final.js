import React, { Component } from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    NavLink
} from "reactstrap";
import {Progress} from "reactstrap";
import "./My_Billing.css";
import AdminNavbar from "./NavBar";


class My_Billing_Final extends Component {
render() {
    return (
        <div>
            <Container fluid style={{backgroundColor:"#11cdef",height:'700px'}} className="px-5">
                <Row>
                    {/* Left Side */}
                    <Col className="order-xl-1 pl-3" xl="9">
                        {/* Text */}
                        <Row>
                            <Col className="order-xl-1 pl-3" xl="9">
                                <div className="text-left pt-3">
                                <h3>You are almost ready to start selling!</h3>
                                <h4 className="text-dark pt-2">Please complete all steps below</h4>
                                </div>
                            </Col>
                        </Row>
                        {/* Text */}

                        {/* Boxes */}
                        <Row>                                        
                            {/* GST */}
                            <Col xl="4">
                                <Card className="card-stats mt-5 mb-5" style={{backgroundColor:"#5e72e4"}}>
                                    <CardBody>
                                        <div className="align-item-center">
                                            <img src="https://img.icons8.com/bubbles/64/000000/check.png" className="images"/>
                                            <h5><b>GSTIN</b></h5>
                                            <h6 className="">NOT PROVIDED</h6>
                                            <Button href="#Gst" className='text-white btn-dark btn-sm'>Upload Now</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* GST */}
                            {/* Signature */}
                            <Col xl="4">
                                <Card className="card-stats mt-5" style={{backgroundColor:"#5e72e4"}}>
                                    <CardBody>
                                        <div className="align-item-center">
                                        {/* <i class="fa fa-pencil fa-2x gst_icon" aria-hidden="true"></i> */}
                                        <img src="https://img.icons8.com/dusk/64/000000/hand-with-pen.png" className="images"/>
                                        <h5><b>Signature</b></h5>
                                        <h6 className="">NOT PROVIDED</h6>
                                        <Button href="#Signature" className='text-white btn-dark btn-sm'>Upload Now</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* Signature */}
                            {/* Cheque */}
                            <Col xl="4">
                                <Card className="card-stats mt-5" style={{backgroundColor:"#5e72e4"}}>
                                    <CardBody>
                                        <div className="align-item-center">
                                        {/* <i class="fa fa-wpforms fa-2x gst_icon" aria-hidden="true"></i> */}
                                        <img src="https://img.icons8.com/dusk/64/000000/paycheque.png" className="images"/>
                                        <h5><b>Cheque</b></h5>
                                        <h6 className="">NOT PROVIDED</h6>
                                        <Button href="#Cheque" className='text-white btn-dark btn-sm'>Upload Now</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* Cheque */}
                            {/* Bank */}
                            <Col xl="4">
                                <Card className="card-stats mt-2" style={{backgroundColor:"#5e72e4"}}>
                                    <CardBody>
                                        <div className="align-item-center">
                                        {/* <i class="fa fa-university fa-2x gst_icon" aria-hidden="true"></i> */}
                                        <img src="https://img.icons8.com/dusk/64/000000/bank-building.png" className="images"/>
                                        <h5><b>Bank</b></h5>
                                        <h6 className="">NOT PROVIDED</h6>
                                        <Button href="#Bank" className='text-white btn-dark btn-sm'>Upload Now</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* Bank */} 
                            {/* Email */}
                            <Col xl="4">
                                <Card className="card-stats mt-2" style={{backgroundColor:"#5e72e4"}}>
                                    <CardBody>
                                        <div className="align-item-center">
                                        {/* <i class="fa fa-envelope-o fa-2x gst_icon" aria-hidden="true"></i> */}
                                        <img src="https://img.icons8.com/dusk/64/000000/email.png" className="images"/>
                                        <h5><b>Email</b></h5>
                                        <h6 className="">NOT PROVIDED</h6>
                                        <Button href="#Email" className='text-white btn-dark btn-sm'>Upload Now</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col> 
                            {/*E-mail*/}
                        </Row>
                        {/* Boxes  */}

                        {/* Store Details */}
                        <Row className="mt-4">
                            <Col xl="1" className="pt-4 pl-5">
                                <img src="https://img.icons8.com/cute-clipart/64/000000/shop.png"/>
                            </Col>
                            <Col xl="11" className="pt-4">
                                <Card className="card-stats">
                                    <CardBody>
                                        <h5 className="text-left"><b>Store Details</b></h5>
                                        <p className="text-left">Your store details will be displayed to the buyers when they browse your products:</p>
                                        <Row>
                                            <Col xl="6">
                                                <Input type="text" placeholder="Enter Your Display Name" className="mt-2"></Input>
                                                <Input type="textarea" placeholder="Enter Your Store Description" className="mt-3" rows="8"></Input>
                                                <Button color="dark" href="#home" onClick={e => e.preventDefault()} size="lg" className="float-left mt-3" >
                                                    Save
                                                </Button>                                                    
                                            </Col>
                                            
                                            <Col xl="6">
                                                <p className="text-left">Here is an example of how Store details will be displayed to the buyers : </p>
                                                <img src={require("./store.png")} className="img-fluid"/>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* Store Details */}

                        {/* Business Details */}
                        <Row>
                            <Col xl="1" className="pt-5 pl-5">
                                <img src="https://img.icons8.com/bubbles/64/000000/check.png"/>
                            </Col>
                                <Col xl="11" className="pt-5  ">
                                    <Card className="card-stats">
                                        <CardBody>
                                            <h5 className="text-left"><b>Business Details</b></h5>
                                            <Row>
                                                <Col xl="6">
                                                    <Input type="text" className="mt-3" placeholder="GSTIN Number"></Input>
                                                    <Button color="dark" href="#home" onClick={e => e.preventDefault()} size="lg" className="float-left mt-3" >
                                                        Save
                                                    </Button>                                                   
                                                </Col>
                                                <Col xl="6" className="text-left">
                                                    <h6><b>Need to update your business details?</b></h6>
                                                    <p className="text-muted">
                                                    Your business details displayed here are fetched from your GSTIN. If you think something is wrong, please visit<a href="#"> government portal</a>  and update the details.
                                                    </p>
                                                    <h6 className="pt-2"><b>Where will this information be used?</b></h6>
                                                    <p className="text-muted">Your GSTIN and signature will be used to issue invoices to the buyer.</p>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                        </Row>
                        {/* Business Details */}

                        {/* Signature Details */}
                        <Row>
                            <Col xl="1" className="pt-4 pl-5">
                            <img src="https://img.icons8.com/dusk/64/000000/hand-with-pen.png"/>
                            </Col>
                            <Col xl="11" className="pt-4 ">
                                <Card className="card-stats">
                                    <CardBody>
                                        <h5 className="text-left"><b>Signature Details</b></h5> 
                                        <Row>
                                            <Col xl="6" className="text-left mt-3">
                                                <h6>Upload Here</h6>
                                                <Input type="file" className="mt-3"></Input>                                                
                                            </Col>
                                            <Col xl="6" className="text-left">
                                                <h6><b>Upload Instruction</b></h6>
                                                <p className="text-muted">1) Make sure that the image is clearly visible, and on a white background<br></br>
                                                2) Allowed file formats : png, jpg, jpeg, pdf<br></br>
                                                3) Image should not be larger than 20 MB<br></br>
                                                4) Seal on the signature is not a requirement
                                                </p>
                                                <h6 className="mt-3"><b>Example:</b></h6>
                                                <img src={require("./Signature.png")} className="img-fluid sign_img">
                                                </img>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* Signature Details */}

                        {/* Bank Details */}
                        <Row>
                            <Col xl="1" className="pt-4 pl-5">
                            <img src="https://img.icons8.com/dusk/64/000000/bank-building.png"/>
                            </Col>
                            <Col xl="11" className="pt-4 ">
                                <Card className="card-stats">
                                    <CardBody>
                                        <h5 className="text-left"><b>Bank Details</b></h5>
                                        <p className="text-left">This is where we will make your payments :</p>
                                        <Row>
                                            <Col xl="6" className="text-left mt-3">
                                                <Input type="text" placeholder="Enter account holder's name"></Input>
                                                <Input type="text" placeholder="Bank account number" className="mt-2"></Input>
                                                <p className="text-muted">Please make sure the bank account is in the same name as the GSTIN</p>
                                                <Input type="text" placeholder="IFSC Number" className="mt-3"></Input>
                                                <Button color="dark" href="#home" onClick={e => e.preventDefault()} size="lg" className="float-left mt-2" >
                                                    Save
                                                </Button>
                                            </Col>
                                            <Col xl="6" className="text-left">
                                                <h6><b>Don't have a bank account in the name of your business?</b></h6>
                                                <p className="text-muted">We can only transfer payments to accounts which are in the registered business name. Please open a new bank account with any bank in your registered business name</p>

                                                <h6><b>Don't have a verification document?</b></h6>
                                                <p className="text-muted">You can get a cheque book, or the statement of your account from your bank. If neither of these are available, you can also ask the bank to issue a letter with your account number, IFSC code and name mentioned on it. </p>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* Bank Details */}

                        {/* Cheque Details */}
                        <Row>
                            <Col xl="1" className="pt-4 pl-5">
                            <img src="https://img.icons8.com/dusk/64/000000/paycheque.png"/>
                            </Col>
                            <Col xl="11" className="pt-4 ">
                                <Card className="card-stats">
                                    <CardBody>
                                        <h5 className="text-left"><b>Cancelled Cheque</b></h5>
                                        <Row>
                                            <Col xl="6" className="text-left mt-3">
                                                <p>Please read the instructions and upload your document by clicking below:</p>
                                                <Input type="file" className="mt-3"></Input>                                             
                                            </Col>
                                            <Col xl="6" className="text-left">
                                                <h6><b>Upload Instruction</b></h6>
                                                <p className="text-muted">1) Make sure that the image is clearly visible, and on a white background<br></br>
                                                2) Allowed file formats : png, jpg, jpeg, pdf<br></br>
                                                3) Image should not be larger than 20 MB<br></br>
                                                </p>
                                                <h6 className="mt-3"><b>Example:</b></h6>
                                                <img src={require("./Check.png")} className="img-fluid ">
                                                </img>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* Cheque Details */}

                        {/* Email Details */}
                        <Row>
                            <Col xl="1" className="pt-4 pb-4 pl-5">
                            <img src="https://img.icons8.com/dusk/64/000000/email.png"/>
                            </Col>
                            <Col xl="11" className="pt-4 pb-4">
                                <Card className="card-stats">
                                    <CardBody>
                                        <h5 className="text-left"><b>Email Verification</b></h5>                                           
                                        <Row>
                                            <Col xl="12" className="text-left mt-2">
                                                <p>We have sent an email with subject line : "[Bookskart Marketplace] - Account verification" to your registered email address "ashishtaware851@gmail.com". Please open the email and click on the verification link.</p>
                                                
                                                <p>The verification link expires in 24 hrs. If it is exprired,<a href="#">Click Here</a> to resend the verification link. </p>                                                                                                       
                                            </Col>                                                
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* Email Details */}
                    </Col>
                    {/* Left Side */}

                    {/* Right Side */}
                    <Col className="order-xl-2" xl="3" style={{paddingTop:'124px'}}>
                        <Row>
                            {/* progress bar */}
                            <Col className=" pt-4 pr-2" >
                                <Card className=" bg-white mt-6">
                                    <CardHeader className="text-left text-dark" style={{backgroundColor:"#ffffff"}}>
                                    <div className="Account">
                                        <div className="completion-bar">
                                            <div>
                                                    <i className="fa fa-thumbs-o-up fa-4x  mt-2"></i>
                                            </div>
                                            <div className="pl-2 ml-1">
                                                <div className="h6">
                                                    Your Store Name will appear here
                                                </div>
                                                <Progress value={20} className="w-100 h-25"/>
                                                <small> Your Account is 20% complete</small>
                                            </div>
                                        </div>
                                    </div>
                                    </CardHeader>
                                    {/* progress bar */}

                                    {/* Account details  */}
                                    <CardBody className="text-left text-dark" style={{backgroundColor:"#ffffff"}}>
                                        <div className="detailspartone">
                                            <div className="title">
                                                <ul className="pl-0 ml-0">
                                                    <li><b>Account Details</b></li>
                                                </ul>
                                            </div>
                                            <ul>
                                                <li > 
                                                    <div className =" subdetails">
                                                    <div>
                                                    <img src={require("./check.svg")}style={{width:'30px', height:'40px'}}></img>
                                                    </div>
                                                    <div className="pt-1 pl-2">Email Verification </div>
                                                    </div>
                                                </li>
                                                <li >
                                                    <div className =" subdetails">
                                                    <div>
                                                    <img src={require("./check.svg")} style={{width:'30px', height:'40px'}}></img>
                                                    </div>
                                                        <div className="pt-1 pl-2">Phone Verification </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="detailspartone">
                                            <div className=" title">
                                                <ul className="pl-0 ml-0">
                                                    <li><b>Business Details</b></li>
                                                </ul>
                                            </div>
                                            <ul>
                                                <li >
                                                    <div className =" subdetails">
                                                    <div>
                                                    <img src={require("./check.svg")}style={{width:'30px', height:'40px'}}></img>
                                                    </div>
                                                    <div className="pt-1 pl-2"> GSTIN</div>
                                                    </div>
                                                </li>
                                                <li >
                                                    <div className =" subdetails">
                                                    <div>
                                                    <img src={require("./check.svg")}style={{width:'30px', height:'40px'}}></img>
                                                    </div>
                                                    <div className="pt-1 pl-2">Signature Verification </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="detailspartone">
                                        <div className=" title">
                                            <ul className="pl-0 ml-0">
                                                <li><b>Bank Account Details</b></li>
                                            </ul>
                                        </div>
                                        <ul>
                                            <li >
                                                <div className =" subdetails">
                                                <div>
                                                <img src={require("./check.svg")} style={{width:'30px', height:'40px'}}></img>
                                                    </div>
                                                    <div className="pt-1 pl-2">Bank Acc. Verification </div>
                                                    </div>
                                                    </li>
                                                    <li >
                                                <div className =" subdetails">
                                                <div>
                                                <img src={require("./check.svg")}style={{width:'30px', height:'40px'}}></img>
                                                </div>
                                                <div className="pt-1 pl-2">Cancelled Cheque </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="detailspartone">
                                        <div className=" title">
                                            <ul className="pl-0 ml-0">
                                                <li><b>Product Details</b></li>
                                            </ul>
                                        </div>
                                        <ul>
                                            <li >
                                                <div className =" subdetails">
                                                <div>
                                                <img src={require("./check.svg")} style={{width:'30px', height:'40px'}}></img>
                                                </div>
                                                <div className="pt-1 pl-2"> Listing Created </div>
                                                </div>
                                            </li>
                                            <li >
                                                <div className =" subdetails">
                                                <div>
                                                <img src={require("./check.svg")} style={{width:'30px', height:'40px'}}></img>
                                                </div>
                                                <div className="pt-1 pl-2">Stock Added </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                
                                    <div>
                                        <ul className="pl-0 ml-0">
                                        <li >
                                                <div className =" subdetails">
                                                <div>
                                                <img className="text-muted" src={require("./check.svg")} style={{width:'30px', height:'40px'}}></img>
                                                </div>
                                                <div className="store pl-2 pt-1">
                                                    <h4><b>Store Details</b></h4>
                                                </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                </CardBody>
                                {/* Account details  */}
                                </Card>
                                {/* learning details  */}
                                <Card className=" mt-4">
                                    <CardBody className="learncenter text-left">
                                        <div className="title pt-0 mt-0">
                                            <h5><b>Learning Center</b></h5>
                                        </div>
                                        <div className="title pt-2">
                                            <a href="#"  onClick={event => event.preventDefault()}>
                                                <div>What is Listing and why is it important to list your product on Bookskart?</div>
                                            </a>
                                        </div>
                                        <div className="title pt-3">
                                            <a href="#" onClick={event => event.preventDefault()}>
                                                <div>How to get approval to sell in a particular brand or vertical on Bookskart</div>
                                            </a>
                                        </div>
                                        <div className="title pt-3">
                                            <a  href="#"  onClick={event => event.preventDefault()}>
                                                <div>How to sell a product already being sold on Bookskart?</div>
                                            </a>
                                        </div>
                                        <div className="title pt-3" onClick={event => event.preventDefault()}>
                                            <a href="#" onClick={event => event.preventDefault()}>
                                                <div>What are the image guidelines to List a product on Bookskart?</div>
                                            </a>
                                        </div>
                                        <div className="title pt-3 pb-2">
                                            <a href="#"   onClick={event => event.preventDefault()} >
                                                <div>How to list a new product  on Bookskart ?</div>
                                            </a>
                                        </div>

                                    </CardBody>
                                </Card>
                                {/* learning details  */}
                    
                                {/* help details  */}
                                <Card className="mt-4">
                                    <CardBody className="text-left">
                                        <div>
                                            <h5 className="help">Help us know you better</h5>
                                            <div className="maska ">
                                                <div className="mt-2 mr-2 text">
                                                This information will help us build a personalised experience for you!
                                                </div>
                                                <div>
                                                    <i className="fa fa-handshake-o fa-5x handshake mt-4 text-dark"></i>
                                                </div>
                                            </div>
                                            <Button href="#" 
                                            color="dark"
                                            size="md"
                                            onClick={event => event.preventDefault()}
                                            className="mt-4 survey text-white">Provide Details</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                                {/* help details  */}

                                {/* help details  */}
                                <Card className="mt-4">
                                    <CardBody className=" text-left">
                                        <div>
                                            <h5 className="help"><b>Bookskart Samarth</b></h5>
                                            <div className="maska ">
                                                <div className="mt-2 mr-2 text">
                                                We have a special offering for artisans, specially abled people, NGOs, government bodies and rural women
                                                </div>
                                                <div>
                                                    <i className="fa fa-thumbs-o-up fa-5x handshake mt-4 text-dark"></i>
                                                </div>
                                            </div>
                                            <Button href="#" 
                                            color="dark"
                                            size="md"
                                            onClick={event => event.preventDefault()}
                                            className="mt-4 survey text-white">Provide Details</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                                {/* help details  */}
                            </Col>               
                        </Row>
                    </Col>
                    {/* Right Side */}
                </Row>
            </Container>
        </div>
        );
    }
}
export default My_Billing_Final;
