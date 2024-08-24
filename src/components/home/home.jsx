import { Carousel, Card, Button } from "react-bootstrap";
import rumah from "../../assets/images/rumah.jpg";
import rumah1 from "../../assets/images/rumah1.jpg";
import rumah2 from "../../assets/images/rumah2.jpg";
import rumah3 from "../../assets/images/rumah3.jpg";
import rumah4 from "../../assets/images/rumah4.jpg";
import "../../styles/home/home.css";
import { useEffect, useState } from "react";
import ModalAturan from "./modal-aturan";
export const Home = ({ user }) => {
  return (
    <div className="bg-success-subtle">
      {/* HEADER SECTION */}
      <div className="w-100 m-0 p-0">
        <div className="row m-0 p-3 p-lg-5 align-items-center">
          <div className="col-lg-6">
            <img src={rumah} alt="Foto kost rumahdewi" className="img-fluid fit-img rounded border border-success" />
          </div>
          <div className="col-lg-6">
            <div className="text-start">
              <h2 className="fw-bold">Kost Rumah Dewi</h2>
              <p className="fw-semibold">Jl. Bukit Dharma Raya No.3, Jimbaran, Bali.</p>

              <hr className="text-success w-50" />
              <p className="aturan text-justify">
                Kost Rumah Dewi merupakan sebuah rumah kos campur (untuk laki-laki dan perempuan) dengan total sebanyak 11 kamar. Kost Rumah Dewi memiliki fasilitas WI-FI, tempat tidur, lemari, kamar mandi dalam, serta tempat parkir untuk
                kendaraan anda. Kost Rumah Dewi berlokasi di Jimbaran, Bali, berdekatan dengan:
              </p>
              <ul className="">
                <li>1 menit menuju Rektorat Universitas Udayana.</li>
                <li>5 menit menuju Bandara Internasional I Gusti Ngurah Rai.</li>
                <li>15 menit menuju Kuta Beach.</li>
                <li>30 menit menuju kota Denpasar.</li>
              </ul>
              <a href="https://maps.app.goo.gl/gEos84YsTZEUzmff9" target="_blank" className="text-decoration-none fw-bold text-right">
                Lihat di GoogleMaps &raquo;
              </a>
              <hr className="text-success w-50" />
              <a className="btn btn-success fw-bold fs-4" href="/rent">
                Pesan Kamar
              </a>
              <ModalAturan />
            </div>
          </div>
        </div>
      </div>
      {/* CAROUSEL */}
      <div className="mt-5">
        <h1 className="text-center fs-1 fw-bold">Galeri Kost</h1>
        <div className="p-0 p-lg-5 d-flex justify-content-center">
          <Carousel className="carousel shadow">
            <Carousel.Item>
              <img className="d-block w-100 fit-img carousel-img rounded" src={rumah} alt="First slide" />
              <Carousel.Caption>
                <h3 className="fw-bold text-dark bg-success-subtle rounded">Rumah Kost Bagian Luar</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 fit-img carousel-img rounded" src={rumah1} alt="Second slide" />
              <Carousel.Caption>
                <h3 className="fw-bold text-dark bg-success-subtle rounded">Kamar Bagian Luar</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 fit-img carousel-img rounded" src={rumah2} alt="Third slide" />
              <Carousel.Caption>
                <h3 className="fw-bold text-dark bg-success-subtle rounded">Halaman Rumah Kost</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 fit-img carousel-img rounded" src={rumah3} alt="Third slide" />
              <Carousel.Caption>
                <h3 className="fw-bold text-dark bg-success-subtle rounded">Kamar Mandi Dalam</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 fit-img carousel-img rounded" src={rumah4} alt="Third slide" />
              <Carousel.Caption>
                <h3 className="fw-bold text-dark bg-success-subtle rounded">Kamar Bagian Dalam</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/* CARD */}
      <h1 className="mt-5 fs-1 fw-bold text-center">Fitur Website</h1>
      <div className="w-100  p-2 p-lg-5">
        <div className={`w-100 text-center d-flex align-items-center overflow-x-auto bg-success-subtle pb-3 ${user ? "" : "card-home"}`}>
          {user && (
            <>
              <Card className="shadow mx-4 card-style">
                <div style={{ height: "200px" }}>
                  <svg width="200px" height="200px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M589.3 260.9v30H371.4v-30H268.9v513h117.2v-304l109.7-99.1h202.1V260.9z" fill="#e1ffe2" />
                    <path d="M516.1 371.1l-122.9 99.8v346.8h370.4V371.1z" fill="#e1ffe2" />
                    <path d="M752.7 370.8h21.8v435.8h-21.8z" fill="#44b156" />
                    <path d="M495.8 370.8h277.3v21.8H495.8z" fill="#44b156" />
                    <path d="M495.8 370.8h21.8v124.3h-21.8z" fill="#44b156" />
                    <path d="M397.7 488.7l-15.4-15.4 113.5-102.5 15.4 15.4z" fill="#44b156" />
                    <path d="M382.3 473.3h135.3v21.8H382.3z" fill="#44b156" />
                    <path d="M382.3 479.7h21.8v348.6h-21.8zM404.1 806.6h370.4v21.8H404.1z" fill="#44b156" />
                    <path d="M447.7 545.1h261.5v21.8H447.7zM447.7 610.5h261.5v21.8H447.7zM447.7 675.8h261.5v21.8H447.7z" fill="#6de87b" />
                    <path d="M251.6 763h130.7v21.8H251.6z" fill="#44b156" />
                    <path d="M251.6 240.1h21.8v544.7h-21.8zM687.3 240.1h21.8v130.7h-21.8zM273.4 240.1h108.9v21.8H273.4z" fill="#44b156" />
                    <path d="M578.4 240.1h130.7v21.8H578.4zM360.5 196.5h21.8v108.9h-21.8zM382.3 283.7h196.1v21.8H382.3zM534.8 196.5h65.4v21.8h-65.4z" fill="#44b156" />
                    <path d="M360.5 196.5h65.4v21.8h-65.4zM404.1 174.7h152.5v21.8H404.1zM578.4 196.5h21.8v108.9h-21.8z" fill="#44b156" />
                  </svg>
                </div>
                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                  <Card.Title className="fs-3 fw-bold">Pelaporan Masalah</Card.Title>
                  <Card.Text>Pelaporan untuk penghuni kos jika ada kendala yang perlu disampaikan kepada pemilik rumah kos.</Card.Text>
                  <a href={user ? (user?.role === "USER" ? "https://forms.gle/JEL88wRmr75YEt959" : "") : "/login"} className={`btn btn-success fw-bold ${user?.role === "ADMIN" ? "invisible" : ""}`}>
                    Klik Disini
                  </a>
                </Card.Body>
              </Card>
              <Card className="shadow mx-4 card-style">
                <div style={{ height: "200px" }}>
                  <svg width="150px" height="150px" viewBox="-1.5 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" className="mt-4">
                    <title>wallet</title>
                    <desc>Created with Sketch Beta.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                      <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-257.000000, -774.000000)" fill="#44b156">
                        <path
                          d="M285,793 L280,793 C279.448,793 279,793.448 279,794 L279,798 C279,798.553 279.448,799 280,799 L285,799 L285,804 C285,804.553 284.552,805 284,805 L260,805 C259.448,805 259,804.553 259,804 L259,785 L284,785 C284.552,785 285,785.447 285,786 L285,793 L285,793 Z M285,796 L285,797 L281,797 L281,796 L281,795 L285,795 L285,796 L285,796 Z M283,777 L283,783 L263.5,783 L283,777 L283,777 Z M285,783 L285,776 C285,775.447 284.764,775.141 284.25,774.938 C283.854,774.781 283.469,774.875 283,775 L257,783 L257,805 C257,806.104 257.896,807 259,807 L285,807 C286.104,807 287,806.104 287,805 L287,785 C287,783.896 286.104,783 285,783 L285,783 Z"
                          id="wallet"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                  <Card.Title className="fs-3 fw-bold">Bayar Sewa Bulanan</Card.Title>
                  <Card.Text>Untuk penghuni rumah kost, silahkan bayarkan sewa bulanan anda disini.</Card.Text>
                  <a href={user ? (user?.role === "USER" ? "/payments" : "") : "/login"} className={`btn btn-success fw-bold ${user?.role === "ADMIN" ? "invisible" : ""}`}>
                    Klik Disini
                  </a>
                </Card.Body>
              </Card>
            </>
          )}
          <Card className="shadow mx-4 card-style">
            <div style={{ height: "200px" }}>
              <svg width="140px" height="140px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4">
                <path
                  d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                  fill="#44b156"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                  fill="#44b156"
                />
              </svg>
            </div>
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
              <Card.Title className="fs-3 fw-bold">Nomor CS</Card.Title>
              <Card.Text>Nomor CS Rumah Dewi untuk calon penyewa yang ingin menanyakan informasi lebih lanjut mengenai kos Rumah Dewi.</Card.Text>
              <button
                className={`btn btn-success fw-bold ${user?.role === "ADMIN" ? "invisible" : ""}`}
                onClick={() => {
                  window.location.href = "https://wa.me/+6287759744555";
                }}
              >
                Klik Disini
              </button>
            </Card.Body>
          </Card>
          <Card className="shadow mx-4 card-style">
            <div style={{ height: "200px" }}>
              <svg width="150px" height="150px" viewBox="0 -2 1028 1028" fill="#44b156" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" className="mt-5">
                <path
                  d="M91.448447 896c-50.086957 0-91.428571-40.546584-91.428571-91.428571V91.428571C0.019876 41.341615 40.56646 0 91.448447 0h671.006211c50.086957 0 91.428571 40.546584 91.428572 91.428571v337.093168l-3.180124-0.795031c-13.515528-3.975155-26.236025-5.565217-40.546584-5.565217h-0.795031l-0.795031-2.385093h-2.385094V91.428571c0-23.055901-20.670807-43.726708-43.726708-43.726708H91.448447c-23.055901 0-43.726708 20.670807-43.726708 43.726708v713.142858c0 23.055901 20.670807 43.726708 43.726708 43.726708h352.198758l0.795031 0.795031c8.745342 11.925466 3.975155 20.670807 0.795031 27.031056-3.180124 5.565217-4.770186 9.540373 0.795031 15.10559l4.770186 4.770186H91.448447z"
                  fill=""
                />
                <path
                  d="M143.125466 174.906832c-8.745342 0-15.900621-11.130435-15.900621-24.645962 0-13.515528 7.15528-24.645963 15.900621-24.645963h270.310559c8.745342 0 15.900621 11.130435 15.900621 24.645963 0 13.515528-7.15528 24.645963-15.900621 24.645962h-270.310559z"
                  fill=""
                />
                <path
                  d="M413.436025 128h-270.310559c-7.15528 0-13.515528 9.540373-13.515528 22.26087s6.360248 22.26087 13.515528 22.260869h270.310559c7.15528 0 13.515528-9.540373 13.515528-22.260869s-5.565217-22.26087-13.515528-22.26087zM139.945342 302.111801c-7.15528 0-12.720497-10.335404-12.720497-24.645962s5.565217-24.645963 12.720497-24.645963h193.987577c7.15528 0 12.720497 10.335404 12.720497 24.645963s-5.565217 24.645963-12.720497 24.645962H139.945342z"
                  fill=""
                />
                <path
                  d="M333.932919 255.204969H139.945342c-5.565217 0-9.540373 9.540373-9.540373 22.26087s3.975155 22.26087 9.540373 22.260869h193.987577c5.565217 0 9.540373-9.540373 9.540373-22.260869s-4.770186-22.26087-9.540373-22.26087zM734.628571 1024c-27.826087 0-58.037267-1.590062-96.993788-4.770186-56.447205-4.770186-108.124224-31.006211-158.211181-79.503106L253.634783 718.708075c-52.47205-50.881988-54.857143-117.664596-7.950311-168.546584 19.875776-20.670807 50.881988-33.391304 84.273292-33.391305 33.391304 0 63.602484 12.720497 82.68323 34.981367 0.795031 0.795031 2.385093 2.385093 5.565217 3.975155 0.795031 0.795031 2.385093 1.590062 3.180124 2.385093V451.57764v-52.47205c0-40.546584 0-81.888199 0.795031-122.434783 0.795031-60.42236 47.701863-106.534161 109.714286-106.534161h0.795031c59.627329 0 104.944099 43.726708 108.124224 103.354037 0.795031 13.515528 0.795031 27.826087 0 42.136646v18.285714h11.925466c41.341615 0 73.142857 14.310559 96.198757 44.52174 0.795031 1.590062 5.565217 3.180124 11.925466 3.180124 2.385093 0 4.770186 0 6.360249-0.795031 7.15528-0.795031 14.310559-1.590062 20.670807-1.590062 31.801242 0 59.627329 12.720497 83.478261 38.956521 3.975155 3.975155 12.720497 7.15528 20.670807 7.15528h3.180125c5.565217-0.795031 11.925466-1.590062 17.490683-1.590062 59.627329 0 107.329193 42.136646 108.124224 96.993789 2.385093 100.968944 3.975155 200.347826-7.15528 298.931677-13.515528 119.254658-77.118012 182.857143-201.142857 198.757764-23.055901 3.975155-49.291925 5.565217-77.913044 5.565217zM325.982609 562.086957c-16.695652 0-32.596273 6.360248-44.521739 17.490683-14.310559 14.310559-22.26087 31.006211-22.26087 49.291925 0 19.080745 8.745342 38.161491 24.645963 54.062112l30.21118 30.21118c65.987578 65.192547 134.360248 131.975155 202.732919 197.962733 33.391304 31.801242 71.552795 52.47205 113.689441 60.42236 32.596273 6.360248 65.192547 9.540373 96.993789 9.540373 28.621118 0 57.242236-2.385093 85.068323-7.950311 100.968944-18.285714 147.080745-66.782609 156.621118-160.596273 8.745342-89.838509 7.950311-182.062112 6.360248-271.10559v-14.310559c-0.795031-32.596273-23.850932-54.857143-56.447205-54.857143-8.745342 0-16.695652 1.590062-25.440993 4.770187V601.043478c0 11.130435 0 32.596273-22.26087 32.596274h-0.795031c-7.15528 0-12.720497-1.590062-15.900621-5.565218-6.360248-6.360248-7.15528-18.285714-7.15528-27.826087v-4.770186c0-36.571429 0.795031-73.937888 0-111.304348-0.795031-32.596273-23.850932-55.652174-55.652174-55.652174-7.950311 0-15.900621 1.590062-23.0559 3.975155v128.795031c0 11.130435-2.385093 19.875776-7.950311 25.440994-3.975155 3.975155-9.540373 6.360248-16.695652 6.360249h-0.795031c-21.465839-0.795031-21.465839-23.055901-21.465838-31.006211v-52.47205-66.782609c0-15.10559-6.360248-31.006211-18.285715-42.931677-11.130435-11.130435-26.236025-17.490683-41.341615-17.490683-6.360248 0-13.515528 0.795031-19.875776 3.180124V442.832298c0 27.031056 0 55.652174-1.590062 83.478261-0.795031 7.15528-7.15528 12.720497-13.515528 18.285714-2.385093 2.385093-5.565217 4.770186-7.950311 7.15528l-2.385093 2.385093-1.590062-3.975155c-1.590062-2.385093-3.975155-4.770186-6.360248-6.360249-4.770186-5.565217-10.335404-11.130435-13.515528-17.490683-2.385093-4.770186-1.590062-10.335404-1.590062-15.10559v-6.360249-69.167701c0-50.881988 0-103.354037-0.795032-155.031056 0-38.161491-24.645963-63.602484-60.42236-64.397516-38.956522 0-65.192547 27.826087-65.192546 68.372671v374.459627l-10.335404 6.360249-0.795031-1.590062c-7.15528-7.950311-15.10559-15.900621-22.26087-23.850932-16.695652-17.490683-34.186335-36.571429-51.677018-54.062112-15.900621-15.10559-35.776398-23.850932-56.447205-23.850931z"
                  fill=""
                />
              </svg>
            </div>
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
              <Card.Title className="fs-3 fw-bold">Pemesanan Kamar</Card.Title>
              <Card.Text>Fitur ini berisikan kumpulan kamar yang tersedia untuk dipesan.</Card.Text>
              <a href={"/rent"} className={`btn btn-success fw-bold ${user?.role === "ADMIN" ? "invisible" : ""}`}>
                Klik Disini
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
