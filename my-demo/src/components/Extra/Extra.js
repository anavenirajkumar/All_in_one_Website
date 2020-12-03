import React from "react";
import card1 from '../../assets/img/card_1.jpg';
import card2 from '../../assets/img/Google.jpg';



class Extra extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <section className="p-3">
    <div className="container animated slideInRight">
        <div className="row text-center">
            <div className="col-md-4">
                <i className="fa fa-users text-teal fa-5x"></i>
                <h2 className="text-teal font-weight-bold">Best Faculty Members</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam asperiores consequatur culpa dolor doloremque eum facere, impedit maiores necessitatibus nisi obcaecati, odit placeat qui quisquam reprehenderit ut vel! Magnam.</p>
            </div>
            <div className="col-md-4">
                <i className="fa fa-code text-teal fa-5x"></i>
                <h2 className="text-teal font-weight-bold">Best Coding Skills</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam asperiores consequatur culpa dolor doloremque eum facere, impedit maiores necessitatibus nisi obcaecati, odit placeat qui quisquam reprehenderit ut vel! Magnam.</p>
            </div>
            <div className="col-md-4">
                <i className="fa fa-book text-teal fa-5x"></i>
                <h2 className="text-teal font-weight-bold">Best Course Material</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam asperiores consequatur culpa dolor doloremque eum facere, impedit maiores necessitatibus nisi obcaecati, odit placeat qui quisquam reprehenderit ut vel! Magnam.</p>
            </div>
        </div>
    </div>
</section>


<section className="p-3 bg-info text-white text-center">
    <div className="container animated slideInLeft">
        <div className="row">
            <div className="col">
                <h6 className="display-4">We Provide Best Training for UI Technologies and MEAN Stack</h6>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur enim est inventore laboriosam maiores natus numquam perspiciatis quaerat quasi.</p>
            </div>
        </div>
    </div>
</section>


<section className="p-3 text-teal text-center">
    <div className="container">
        <div className="row">
            <div className="col">
                <h2 className="font-weight-bold">Please find the Courses we Offer as Below</h2>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, consectetur!</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                    <img src={card1} className="img-fluid img-thumbnail course-img"></img>
               
            </div>
            <div className="col-md-4">
                <img src={card1} className="img-fluid img-thumbnail course-img"></img>
          
            </div>
            <div className="col-md-4">
            <img src={card1} className="img-fluid img-thumbnail course-img"></img>
            </div>
        </div>
    </div>
</section>

<section className="p-3 bg-success text-white text-center">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-8">
                <h2>Learn More about India's No.1 Institute</h2>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="col-md-4">
                <a href="about.html" className="btn btn-outline-white btn-block">Learn More</a>
            </div>
        </div>
    </div>
</section>




<section className="p-4 bg-dark text-white">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
            <img src={card1} className="img-fluid img-thumbnail course-img"></img>

            </div>
            <div className="col-md-6">
                <h3 className="text-teal font-weight-bold">The Angular Course</h3>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda autem deserunt doloremque error ex, excepturi fuga illum iste minima modi nemo, quos voluptatibus. Accusamus accusantium aspernatur dolore illo, non quia velit voluptatibus! Alias animi dolorum ex excepturi laudantium nam numquam odio quasi quisquam vero. Ad adipisci ipsum nemo ut.</p>
            </div>
        </div>
    </div>
</section>



<section className="p-4">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <h3 className="text-teal font-weight-bold">The Complete Java Course</h3>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda autem deserunt doloremque error ex, excepturi fuga illum iste minima modi nemo, quos voluptatibus. Accusamus accusantium aspernatur dolore illo, non quia velit voluptatibus! Alias animi dolorum ex excepturi laudantium nam numquam odio quasi quisquam vero. Ad adipisci ipsum nemo ut.</p>
            </div>
            <div className="col-md-6">
            <img src={card1} className="img-fluid img-thumbnail course-img"></img>
            </div>
        </div>
    </div>
</section>



<section className="p-3">
    <div className="container">
        <div className="row">
            <div className="col-md-6 animated slideInLeft">
                <h2 className="text-teal font-weight-bold">About Us
                    <small>It's Nice to Meet You!</small>
                </h2>
             
            </div>
        </div>
    </div>
</section>









<section className="p-5 text-teal text-center">
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Meet The Trainers</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-3">
                <div className="card t_card">
                    <div className="card-body">
                    <img src={card1} className="img-fluid img-thumbnail course-img"></img>
                        <h3 className="text-teal mt-2">Laura Williams</h3>
                        <p className="lead">Trainer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolore, ducimus eos esse eum explicabo ipsum nihil recusandae reiciendis soluta.</p>
                        <div className="d-flex justify-content-between">
                            <div className="p-3">
                                <i className="fab fa-facebook-f fa-2x text-teal"></i>
                            </div>
                            <div className="p-3">
                                <i className="fab fa-twitter fa-2x text-teal"></i>
                            </div>
                            <div className="p-3">
                                <i className="fab fa-github fa-2x text-teal"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card t_card">
                    <div className="card-body">
                    <img src={card1} className="img-fluid img-thumbnail course-img"></img>
                        <h3 className="text-teal mt-2">Laura Williams</h3>
                        <p className="lead">Trainer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolore, ducimus eos esse eum explicabo ipsum nihil recusandae reiciendis soluta.</p>
                        <div className="d-flex justify-content-between">
                            <div className="p-3">
                                <i className="fab fa-facebook-f fa-2x text-teal"></i>
                            </div>
                            <div className="p-3">
                                <i className="fab fa-twitter fa-2x text-teal"></i>
                            </div>
                            <div className="p-3">
                                <i className="fab fa-github fa-2x text-teal"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card t_card">
                    <div className="card-body">
                    <img src={card1} className="img-fluid img-thumbnail course-img"></img>
                        <h3 className="text-teal mt-2">Laura Williams</h3>
                        <p className="lead">Trainer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolore, ducimus eos esse eum explicabo ipsum nihil recusandae reiciendis soluta.</p>
                        <div className="d-flex justify-content-between">
                            <div className="p-3">
                                <i className="fab fa-facebook-f fa-2x text-teal"></i>
                            </div>
                            <div className="p-3">
                                <i className="fab fa-twitter fa-2x text-teal"></i>
                            </div>
                            <div className="p-3">
                                <i className="fab fa-github fa-2x text-teal"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card t_card">
                    <div className="card-body">
                    <img src={card1} className="img-fluid img-thumbnail course-img"></img>
                        <h3 className="text-teal mt-2">Laura Williams</h3>
                        <p className="lead">Trainer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolore, ducimus eos esse eum explicabo ipsum nihil recusandae reiciendis soluta.</p>
                        <div className="d-flex justify-content-between">
                            <div className="p-3">
                                <i className="fab fa-facebook-f fa-2x text-teal"></i>
                            </div>
                            <div className="p-3">
                                <i className="fab fa-twitter fa-2x text-teal"></i>
                            </div>
                            <div className="p-3">
                                <i className="fab fa-github fa-2x text-teal"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>





<section className="p-3 text-teal">
    <div className="container animated slideInLeft">
        <div className="row">
            <div className="col">
                <h2>Course Details</h2>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-md-3">
                <div className="card c_card">
                    <div className="card-body">
                        <i className="fa fa-coffee fa-4x"></i>
                        <h3>Java Training</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque cum cumque facere voluptate?</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card c_card">
                    <div className="card-body">
                        <i className="fa fa-image fa-4x"></i>
                        <h3>UI Technologies</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque cum cumque facere voluptate?</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card c_card">
                    <div className="card-body">
                        <i className="fa fa-code fa-4x"></i>
                        <h3>Angular JS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque cum cumque facere voluptate?</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card c_card">
                    <div className="card-body">
                        <i className="fa fa-database fa-4x"></i>
                        <h3>Mongo DB</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque cum cumque facere voluptate?</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row text-center mt-4">
            <div className="col-md-3">
                <div className="card text-center c_card">
                    <div className="card-body">
                        <i className="fa fa-leaf fa-4x"></i>
                        <h3>MEAN Stack</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque cum cumque facere voluptate?</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card text-center c_card">
                    <div className="card-body">
                        <i className="fa fa-brain fa-4x"></i>
                        <h3>Data Science</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque cum cumque facere voluptate?</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card text-center c_card">
                    <div className="card-body">
                        <i className="fab fa-windows fa-4x"></i>
                        <h3>Bootstrap</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque cum cumque facere voluptate?</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card text-center c_card">
                    <div className="card-body">
                        <i className="fab fa-node-js fa-4x"></i>
                        <h3>Node JS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque cum cumque facere voluptate?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>




<section className="p-3 text-teal text-center">
        <div className="row">
            <div className="col-md-6">
            <img src={card1} className="img-fluid img-thumbnail course-img" height="20px"></img>
            </div>
            <div className="col-md-1">

            </div>
            
            <div className="col-md-5 text-center">
                <h3 className="h3">Download Android Application</h3>
                <a className="btn btn-success big-btn android-btn" href="https://play.google.com/store/apps/details?id=com.vita.f2h">
                <img src={card2} className="img-fluid img-thumbnail course-img" width="50px" height="20px"></img>
                    <div className="btn-text"><small>Available on</small><strong>Google Play</strong></div>
                    <img src={card1} className="img-fluid img-thumbnail course-img"></img>
                </a>
                
            </div>
           
        </div>

</section>

               
            </React.Fragment>
        );
    }
}
export default Extra;
