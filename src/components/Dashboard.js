import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <div style={{fontFamily:"Poppins !important"}}>
        
                <div style={{ width: "calc(100%)", height: 10, backgroundColor: "#F26522" }} />
                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="row" style={{width:"100%"}}>
                        <a class="navbar-brand col-3" style={{display:"inline-block" ,height: 70 }}>
                            <img src="/assets/img/LOGO.PNG" style={{ height: "inherit" }}></img>
                        </a>
                        <div className="col-9">
                            <button class="navbar-toggler" style={{float:"right"}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" >Auctions <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Services
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" >Action</a>
                                            <a class="dropdown-item" >Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" >Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" >Sell Now</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            About
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" >Action</a>
                                            <a class="dropdown-item" >Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" >Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" >Contact Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/login" class="nav-link" >Login</Link>
                                    </li>
                                </ul>
                                <div className="form-inline my-2 my-lg-0" style={{float:"right"}}>
                                    <input class="mr-auto form-control" style={{width: 200 }} type="search" placeholder="Search" aria-label="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand">
                        <img src="/assets/img/LOGO.PNG" alt="Logo" style={{height:70}}/>
                    </a>
                    <button class="navbar-toggler" style={{float:"right"}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" >Auctions <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Services
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" >Action</a>
                                            <a class="dropdown-item" >Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" >Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" >Sell Now</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            About
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" >Action</a>
                                            <a class="dropdown-item" >Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" >Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" >Contact Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/login" class="nav-link" >Login</Link>
                                    </li>
                                </ul>
                                <div className="form-inline my-2 my-lg-0">
                                    <input class="mr-auto form-control" style={{width: 200 }} type="search" placeholder="Search" aria-label="Search" />
                                </div>
                            </div>
                </nav>
                <div className="container">
                    <div className="row mt-5">
                        <h5 className="col-md-8 m-auto" style={{textAlign:"center"}}>
                            <i class="fa fa-search"></i> You've searched for <i><b>Antique Products</b></i>
                        </h5>
                        
                        <div className="col-md-6 m-auto pt-3">
                            <input className="underlined" type="text" placeholder="Search for products"></input>
                            <p style={{color:"#AFAFAF"}}>Showing 110 results for "Antique Products"</p>
                
                        </div>
                    </div>

                </div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div class="dropdown m-2">
                            <button class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown">Category 
                            <span class="caret"></span></button>
                            <div className="dropdown-menu">
                                <ul class="navbar-nav ml-auto">
                                    <li><a class="dropdown-item" >HTML</a></li>
                                    <li><a class="dropdown-item" >CSS</a></li>
                                    <li><a class="dropdown-item" >JavaScript</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="dropdown m-2">
                            <button class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown">Sub-Category 
                            <span class="caret"></span></button>
                            <div className="dropdown-menu">
                                <ul class="navbar-nav ml-auto">
                                    <li><a class="dropdown-item" >HTML</a></li>
                                    <li><a class="dropdown-item" >CSS</a></li>
                                    <li><a class="dropdown-item" >JavaScript</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="dropdown m-2">
                            <button class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown">Location 
                            <span class="caret"></span></button>
                            <div className="dropdown-menu">
                                <ul class="navbar-nav ml-auto">
                                    <li><a class="dropdown-item" >HTML</a></li>
                                    <li><a class="dropdown-item" >CSS</a></li>
                                    <li><a class="dropdown-item" >JavaScript</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="dropdown m-2">
                            <button class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown">Budget 
                            <span class="caret"></span></button>
                            <div className="dropdown-menu">
                                <ul class="navbar-nav ml-auto">
                                    <li><a class="dropdown-item" >HTML</a></li>
                                    <li><a class="dropdown-item" >CSS</a></li>
                                    <li><a class="dropdown-item" >JavaScript</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ml-auto pt-3">
                            {/* <img src="/assets/img/grid.svg"></img>     */}
                            <span >
                                <i class="fa fa-th m-auto" style={{color:"orange"}} aria-hidden="true"></i>
                                <i class="fa fa-list m-auto pl-5" aria-hidden="true"></i>
                                    <a className="pl-5 pt-2 pb-1 m-auto">
                                        Sort By:
                                    </a>
                                <button class="btn dropdown-toggle pl-1" style={{marginTop:0,paddingTop:0}} type="button" data-toggle="dropdown"> Sort By
                                <span class="caret"></span></button>
                                <div className="dropdown-menu">
                                    <ul class="navbar-nav ml-auto">
                                        <li><a class="dropdown-item" >HTML</a></li>
                                        <li><a class="dropdown-item" >CSS</a></li>
                                        <li><a class="dropdown-item" >JavaScript</a></li>
                                    </ul>
                                </div> 
                            </span>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        {
                            [1,2,3,4,5,6,7,8].map(e => 
                            (<div className="col-md-3">
                                <div class="card" style={{border:"none", height:"50px !important"}}>
                                    <div>
                                        <img src="/assets/img/1.png" class="card-img-top" alt="..."/>
                                        <div style={{backgroundColor:"rgba(1,1,1,0.6)",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",transform:"translate(0,-60px)", width:"100%", height:"60px"}}>
                                            <i class="fa fa-clock-o ml-3 mt-3" style={{color:"white",fontSize:"1.5rem"}} aria-hidden="true"></i>
                                            <a class="ml-3" style={{color:"white"}}>04 Days 12 Hours 24 Mins</a>
                                        </div>
                                        <div style={{transform:"translate(0,-50px)"}}>
                                            <b>Gramophone Merchandise</b><br></br>
                                            <i style={{color:"#142850"}}><b>Start Price:</b><b className="ml-3">$25000</b></i>
                                            <br></br>
                                            <a className="btn btn-light mt-3">View Auction <i class="fa fa-arrow-right ml-2" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>))
                        }
                    </div>
                </div>
                {/*  */}
                <footer class="car">
                    <div class="wrapper m-auto p-auto">
                        <div class="container-fluid">
                            <h2 style={{color:"#F26522", fontFamily:"Libre Baskerville"}}>Hawai'i Auction Services</h2>
                            <div class="input-group mb-3 col-md-7">
                                <input type="text" class="p-2 form-control" placeholder="Subscribe to our mailing list"
                                    aria-label="Recipient's username" style={{borderColor:"#F26522", background:"none"}} aria-describedby="basic-addon2"/>
                                <div class="input-group-append">
                                    <span class="input-group-text" style={{borderColor:"#F26522", background:"#F26522", color:"white"}}  id="basic-addon2">SUBSCRIBE</span>
                                </div>
                                <img src="/assets/img/surface1.svg" className="ml-2" style={{height:38}}></img>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8">
                                    <h3>Information</h3>
                                    <ul class="navbar-nav  navbar-expand-lg ml-auto">
                                        <li>
                                            <a class="nav-link ml-3">Auctions <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="dropdown ml-3">
                                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Services
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item">Action</a>
                                                <a class="dropdown-item">Another action</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item">Something else here</a>
                                            </div>
                                        </li>
                                        <li class=" ml-3">
                                            <a class="nav-link">Sell Now</a>
                                        </li>
                                        <li class=" dropdown ml-3">
                                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                About
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item">Action</a>
                                                <a class="dropdown-item">Another action</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item">Something else here</a>
                                            </div>
                                        </li>
                                        <li class=" ml-3">
                                            <a class="nav-link">Contact Us</a>
                                        </li>
                                        <li class=" ml-3">
                                            <Link to="/login" style={{color:"white"}} class="nav-link">Login</Link>
                                        </li>
                                    </ul>
                                    <h3>My Account</h3>
                                    <ul class="navbar-nav  navbar-expand-lg ml-auto" >
                                        <li class="nav-item active  ml-3">
                                            <Link to="/" class="nav-link" style={{color:"white"}}>Register <span class="sr-only">(current)</span></Link>
                                        </li>
                                        <li class="nav-item active  ml-3">
                                            <Link to="/login" class="nav-link" style={{color:"white"}}>Login</Link>
                                        </li>
                                        <li class="nav-item active  ml-3">
                                            <a class="nav-link">MyDashboard</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-3">
                                    <h3>Contact Us</h3>
                                    <p>1423 Mokolea drive</p>
                                    <p>Kailua, HI 96734</p>
                                    <p>Phone Number: 808-797-7328</p>
                                    <br/>
                                </div>
                                {/* <div className="container"> */}
                                    <div class="col-md-1 col-ld-1 p-auto m-auto">
                                        <center>
                                            {/* <ul class="social-icons"> */}
                                                <img className="xicon m-auto p-auto" src="/assets/img/f.svg"/>
                                                <img className="xicon m-auto p-auto" src="/assets/img/2.svg"/>
                                                <img className="xicon m-auto p-auto" src="/assets/img/3.svg"/>
                                                {/* <a class="mb-2 icon col-1" style={{background:"none", border:"solid 2px", borderColor:"#F26522"}}><img  src="/assets/img/3.svg"/></a>
                                                <a class="mb-2 icon col-1" style={{background:"none", border:"solid 2px", borderColor:"#F26522"}}><img  src="/assets/img/2.svg"/></a> */}
                                            {/* </ul> */}

                                        </center>
                                    </div>
                                {/* </div> */}
                                    <div className="container-fluid mt-3">
                                        <center>
                                            <p>© 2020 HAS All Rights reserved</p>
                                        </center>
                                    </div>
                            </div>
                        </div>
                    </div>
            </footer>

        </div>
    )
}

export default Dashboard
