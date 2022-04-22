import React from "react";
import { Link } from "react-router-dom";

const MenuOrganism = () => {
    return (
        <section className="container text-center mt-5">
            <h2 className="fw-bold">Fokus Pengembangan</h2>
            <h2 className="fw-bold">Desa Percontohan</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div class="card bg-gray border-0">
                    <div class="card-body text-center">
                        <img src="https://desa.gides.id/assets/templates/images/penyelengaraan.png" style={{marginTop:'-5rem'}} alt="Penyelengaraan Pemerintahan Desa"/>
                        <h3 className="w-75 mx-auto mt-3 text-dark fw-bold">
                            Penyelengaraan Pemerintahan Desa
                        </h3>
                        <p className="text-secondary mt-3">Masyarakat yang adil dan sejahtera</p>
                        <div class="d-grid gap-1 mt-5">
                            <Link to="/" className="btn btn-green py-4 rounded">Selengkapnya</Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div class="card bg-gray border-0">
                    <div class="card-body text-center">
                        <img src="https://desa.gides.id/assets/templates/images/pembangunan.png" style={{marginTop:'-5rem'}} alt=" Pelaksanaan Pembangunan Desa"/>
                        <h3 className="w-75 mx-auto mt-3 text-dark fw-bold">
                        Pelaksanaan Pembangunan Desa
                        </h3>
                        <p className="text-secondary mt-3">Masyarakat yang adil dan sejahtera</p>
                        <div class="d-grid gap-1 mt-5">
                            <Link to="/" className="btn btn-green py-4 rounded">Selengkapnya</Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div class="card bg-gray border-0">
                    <div class="card-body text-center">
                        <img src="https://desa.gides.id/assets/templates/images/pembinaan.png" style={{marginTop:'-5rem'}} alt="Pembinaan Kemasyarakatan Desa"/>
                        <h3 className="w-75 mx-auto mt-3 text-dark fw-bold">
                            Pembinaan Kemasyarakatan Desa
                        </h3>
                        <p className="text-secondary mt-3">Masyarakat yang adil dan sejahtera</p>
                        <div class="d-grid gap-1 mt-5">
                            <Link to="/" className="btn btn-green py-4 rounded">Selengkapnya</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MenuOrganism;