import React from "react";

class Footer extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
               <footer className="p-3 bg-dark text-white text-center">
<div className="container">
    <div className="row align-items-center">
        <div className="col-md-9">
            <h3>Copyright © 2020 , AnaveniRajkumar</h3>
            <h6>All Rights Reserved</h6>
            <h6>Developed & Maintained by
                <a className="text-warning" href="https://www.facebook.com/anavenirajkumarprince" target="_blank">
                    <i className="fa fa-users"></i> AnaveniRajkumar.
                </a>
            </h6>
        </div>
        <div className="col-md-3">
            <a href="https://www.youtube.com/channel/UCU_gK1CvOR-HFB2ydk01QdA"><button className="btn btn-danger" >Subscribe</button></a>                
        </div>
    </div>
</div>
</footer>


            </React.Fragment>
        );
    }
}
export default Footer;
