import React from 'react';
import interior1 from '../image/interior1.jpg';
import interior2 from '../image/interior2.jpg';
import interior3 from '../image/interior3.jpg';
import '../style.css';



const Card = () => {
    return (
        <section className="py-5 ">
            <div className="container">
                <div class="row row-cols-1 row-cols-md-3 g-4 center">

                    <div class="col">

                        <div class="card">

                            <div className="mt-3 mx-4">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <div className="py-2 px-3 border bg-light rounded">
                                            <span className="fw-bold text-muted">New</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>
                                            <i className="fas fa-list-ul me-2 text-muted"></i>
                                            <i className="fas fa-heart text-muted"></i>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <img src={interior1} class="card-img" alt="interior" />

                            <div class="card-body">
                                <div className="text-center">
                                    <h5 class="card-title">Wooden Chair</h5>
                                </div>
                                <div className="d-flex justify-content-center mb-3">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <div class="py-1 pe-5 ps-5 border rounded-start">
                                        <span className="fw-bolder text-muted">$50.00</span>
                                    </div>
                                    <button><i class='fas fa-cart-plus'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <div className="mt-3 mx-4">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <div className="py-2 px-3 border bg-light rounded">
                                            <span className="fw-bold text-muted">New</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>
                                            <i className="fas fa-list-ul me-2 text-muted"></i>
                                            <i className="fas fa-heart text-muted"></i>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <img src={interior2} class="card-img" alt="interior" />
                            <div class="card-body">
                                <div className="text-center">
                                    <h5 class="card-title">Wooden Chair</h5>
                                </div>
                                <div className="d-flex justify-content-center mb-3">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <div class="py-1 pe-5 ps-5 border rounded-start">
                                        <span className="fw-bolder text-muted">$49.00</span>
                                    </div>
                                    <button><i class='fas fa-cart-plus'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <div className="mt-3 mx-4">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <div className="py-2 px-3 border bg-light rounded">
                                            <span className="fw-bold text-muted">New</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>
                                            <i className="fas fa-list-ul me-2 text-muted"></i>
                                            <i className="fas fa-heart text-muted"></i>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <img src={interior3} class="card-img" alt="interior" />
                            <div class="card-body">
                                <div className="text-center">
                                    <h5 class="card-title">Wooden Chair</h5>
                                </div>
                                <div className="d-flex justify-content-center mb-3">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <div class="py-1 pe-5 ps-5 border rounded-start">
                                        <span className="fw-bolder text-muted">$55.00</span>
                                    </div>
                                    <button><i class='fas fa-cart-plus'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;