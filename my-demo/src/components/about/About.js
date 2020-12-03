import React from "react";
import card1 from '../../assets/img/card_1.jpg'; 
import card2 from '../../assets/img/card_2.jpg';
import card3 from '../../assets/img/card_3.jpg';



class About extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>


<section>
        <div className="bd-example">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">  
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active animated jello">
                        {/* <img src="img/6.jpg" className="d-block w-100" alt="..."> */}
                        <img src={card1} width="100%" height="500px"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-black font-weight-bold">Welcome to Rajkumar</h2>
                                {/* <a className="btn btn-success big-btn android-btn" href="https://play.google.com/store/apps/details?id=com.vita.f2h">
                                    <img width="80px" className="pull-left" src="http://www.userlogos.org/files/logos/jumpordie/google_play_04.png">
                                    <div className="btn-text"><small>Available on</small><br><strong>Google Play</strong></div>
                                </a> */}
                            <h2 className="text-black font-weight-bold">Full Stack Developer</h2>
                        </div>
                    </div>
                    <div className="carousel-item animated rotateIn">
                        {/* <img src="img/12.jpg" className="d-block w-100" alt="..."> */}
                        <img src={card2} width="100%" height="500px"></img>

                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-black font-weight-bold">Welcome to Rajkumar</h2>
                                {/* <a className="btn btn-success big-btn android-btn" href="https://play.google.com/store/apps/details?id=com.vita.f2h">
                                    <img width="80px" className="pull-left" src="http://www.userlogos.org/files/logos/jumpordie/google_play_04.png">
                                    <div className="btn-text"><small>Available on</small><br><strong>Google Play</strong></div>
                                </a>                                <h2 className="text-black font-weight-bold">Fresh Vegitables From Farmer to Delivery</h2> */}
                        </div>
                    </div>
                    <div className="carousel-item animated jackInTheBox">
                        {/* <img src="img/15.jpg" className="d-block w-100" alt="..."> */}
                        <img src={card3} width="100%" height="500px"></img>

                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-black font-weight-bold">Welcome to Rajkumar</h2>
                                                           
                                
                                <h2 className="text-black font-weight-bold">Welcome to Rajkumar</h2>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </section>
      
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3">About App</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloribus esse, itaque laboriosam nesciunt reprehenderit unde. A amet, asperiores, cum enim eos facere ipsa libero magnam mollitia quam quidem quod temporibus voluptatibus! Amet eius nostrum praesentium repellat, sequi vitae voluptates?</p>
                            <p className="h4">Version : 1.0.1</p>
                            <p className="h4">Author : ANAVENI RAJKUMAR</p>
                        </div>
                    </div>
                </div>

             <div style={{marginTop : '200px'}}>

             </div>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
         
<section className="p-3">
        <div className="container animated slideInLeft">
            <div className="row align-items-center">
    
                <div className="col-md-6">
                    <h4 className="text-black font-weight-bold">Fresh Vegitables From Farmer to Delivery</h4>
                            <p><i className="fa fa-map-marker fa-fw pull-left fa-2x"></i> &nbsp; District: Karimnagar</p>
                    <p><i className="fa fa-phone fa-fw pull-left fa-2x"></i> &nbsp; 8328369027</p>
                    
                    <img src={card2} width="100%" height="500px"></img>

                    {/* <a class="btn btn-success big-btn android-btn" href="https://play.google.com/store/apps/details?id=com.vita.f2h">
                        <img width="80px" class="pull-left" src="http://www.userlogos.org/files/logos/jumpordie/google_play_04.png">
                        <div class="btn-text"><small>Available on</small><br><strong>Google Play</strong></div>
                        <img src={card1} class="img-fluid img-thumbnail course-img">
                    </a> */}
                </div>
                <div className="col-md-4">
                    <h2 className="font-weight-bold text-teal">Contact Information</h2>
        <p className="lead"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60561.20714144148!2d79.09812849010395!3d18.434883267368686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd910bcf48931%3A0x4889b0398ed69f07!2sKarimnagar%2C+Telangana!5e0!3m2!1sen!2sin!4v1560607370200!5m2!1sen!2sin" width="450" height="450" frameborder="0"  allowfullscreen></iframe></p>
                </div>
            </div>
        </div>
    </section>
 

         
            </React.Fragment>
        );
    }
}
export default About;
