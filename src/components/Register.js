import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (

        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-11 col-md-9 col-lg-8 col-xl-8 mr-auto ml-auto mb-3" style={{marginTop:"10vh",background: "#FFFFFFE6 0% 0% no-repeat padding-box",borderRadius: 10}}>
                        <div className="col-12 pt-5 pb-3" style={{color:"#00A8CC",fontFamily:"Girassol",textAlign:"center"}}>
                            <h1>Patrick Conboy</h1>
                        </div>                    
                        <div className="col-12 mt-3 mb-2"
                            style={{
                                fontFamily: "Libre Baskerville",
                                letterSpacing: "4.2px",
                                color: "#142850",
                                textAlign:"center",
                                }}>
                            <p>
                                REGISTRATION
                            </p>
                        </div>
                        <div style={{
                                fontFamily: "Poppins",
                                color: "#142850",
                                }}>
                            <div className="col-12" style={{textAlign:"center"}}>
                                <p>
                                    Aloha, welcome to Hawai'i Auction Services
                                </p>
                                <p>
                                    Create and account today and benefit with the best services.
                                </p>
                            </div>
                            <div className="col-12 mt-5" style={{textAlign:"center", marginBottom:40}}>
                                <h5>
                                    Personal details
                                </h5>
                            </div>
                            <div className="row">
                                <div className="col-md-5 m-auto">
                                        <b>
                                            First Name
                                        </b>
                                        <input className="underlined" type="text" placeholder="Enter your first name"></input>
                                </div>
                                <div className="col-md-5 m-auto">
                                        <b>
                                            Last Name
                                        </b>
                                        <input className="underlined" type="text" placeholder="Enter your last name"></input>
                                </div>
                                <div className="col-md-5 m-auto">
                                        <b>
                                            Business Name
                                        </b>
                                        <input className="underlined" type="text" placeholder="Enter your business name"></input>
                                </div>
                                <div className="col-md-5 m-auto">
                                        <b>
                                            Email Address
                                        </b>
                                        <input className="underlined" type="email" placeholder="Enter your email address"></input>
                                </div>
                                <div className="col-md-5 m-auto">
                                        <b>
                                            Phone Number
                                        </b>
                                        <input className="underlined" type="number" placeholder="Enter your phone number"></input>
                                </div>
                                <div className="col-md-5 m-auto">
                                        <b>
                                            Password
                                        </b>
                                        <input className="underlined" type="password" placeholder="Enter your password"></input>
                                </div>
                                <div className="col-md-5 m-auto">
                                        <b>
                                            Confirm Password
                                        </b>
                                        <input className="underlined" type="password" placeholder="Re-enter your password"></input>
                                </div>
                                <div className="col-md-5 m-auto form-group">
                                        <b for="country">Country</b>
                                        <select class="underlined" placeholder="Select your country" id="country">
                                            <option disabled selected>Select your country</option>
                                            <option>India</option>
                                            <option>USA</option>
                                            <option>Canada</option>
                                            <option>New Zealand</option>
                                        </select>
                                </div>
                                <div className="col-md-5 m-auto form-group">
                                        <b>State</b>
                                        <select class="underlined" placeholder="Select your state" id="state">
                                            <option disabled selected>Select your state</option>
                                            <option>ABC</option>
                                            <option>DEF</option>
                                            <option>GHI</option>
                                            <option>KLM</option>
                                        </select>
                                </div>
                                <div className="col-md-5 m-auto form-group">
                                        <b>City</b>
                                        <select class="underlined" placeholder="Select your state" id="city">
                                            <option disabled selected>Select your state</option>
                                            <option>ABC</option>
                                            <option>DEF</option>
                                            <option>GHI</option>
                                            <option>KLM</option>
                                        </select>
                                </div>
                                <div className="col-md-5 m-auto">
                                        <b>
                                            Address Line-1
                                        </b>
                                        <input className="underlined" type="text" placeholder="Enter your address line-1"></input>
                                </div>
                                <div className="col-md-5 m-auto">
                                        <b>
                                            Address Line-2
                                        </b>
                                        <input className="underlined" type="text" placeholder="Enter your address line-2"></input>
                                </div>
                                <div className="col-md-5 m-auto">
                                        <b>
                                            Zip Code
                                        </b><br/>
                                        
                                        <input className="underlined" type="number" placeholder="Enter your zip code"></input>
                                </div>
                                <div className="col-md-5 m-auto">
                                        <b className="m-auto">
                                            GE Tax-exempt form
                                        </b>
                                        <div style={{margin:5,display:"inline-block",color:"white", textAlign: "center",borderRadius:20,backgroundColor:"#142850",width:"23px"}}>i</div>
                                        <a className="btn m-auto" style={{backgroundColor:"#00A8CC", color:"white"}}>Download</a>
                                        <p style={{color: "#AFAFAF"}}>(Optional)</p>
                                </div>
                                <div className="col-11 pt-5 m-auto">
                                    <input type="checkbox" style={{backgroundColor:"#00A8CC"}}/> I agree to the <a style={{color:"#00A8CC",fontStyle:"none"}}>Terms & Conditions.</a>
                                </div>
                                <div className="m-auto col-12 pt-5" style={{textAlign:"center"}}>
                                    <Link to="/dashboard" className="btn pl-5 pr-5" style={{left:"50%",color:"white",backgroundColor:"#142850 ",boxShadow: "0px 4px 12px #1428504D"}}>REGISTER</Link>    
                                </div>
                                <div className="col-12 mt-3" style={{textAlign:"center", marginBottom:40}}>
                                    <p>
                                        Already have an account?
                                    </p>
                                    <p>
                                        Login <Link to="/login" style={{color:"#00A8CC",fontStyle:"none"}}>here</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-3" style={{textAlign:"center"}}>
                <p style={{color:"white"}}>© 2020 Patrick Conboy. All rights reserved.</p>
            </div>
        </main>
    )
}

export default Register
