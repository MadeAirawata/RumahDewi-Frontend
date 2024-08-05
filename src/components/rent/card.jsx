import { Card } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import rumah4 from "../../assets/images/rumah4.jpg";
import "../../styles/rent/rent.css";
import { formatRupiah } from "../../Functions/libs/formatRupiah";
import { rentRoom } from "../../Functions/API/fetchPayment";

export const RentCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const [month, setMonth] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleClose = () => {
    setShow(false);
    setError("");
    setSuccess("");
  };
  const handleShow = () => setShow(true);

  const submit = async (e) => {
    e.preventDefault();

    const data = {
      total_month: month,
      room_id: item?.id,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await rentRoom(token, data);
      setSuccess(response?.data?.message);
      setTimeout(() => {
        setSuccess("");
        window.location.href = "/payments";
      }, 3000);
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message);
    }
  };

  return (
    <>
      <Card className="shadow mx-4" style={{ minWidth: "18rem" }}>
        <Card.Img src={rumah4} className="" />
        <Card.Body className="d-flex flex-column justify-content-between align-items-center">
          <Card.Title className="fs-4 fw-bold">Kamar Nomor {item?.no_room}</Card.Title>
          <Card.Text className="fs-5 my-4">{formatRupiah(item?.monthly_price)}/Bulan</Card.Text>
          <button className="btn btn-success fw-bold" disabled={item?.status !== "TERSEDIA"} onClick={handleShow}>
            {item?.status !== "TERSEDIA" ? "TIDAK TERSEDIA" : "SEWA KAMAR"}
          </button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} size="md" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Sewa Kamar</Modal.Title>
        </Modal.Header>
        <form onSubmit={submit}>
          <Modal.Body>
            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row m-0 p-0">
              <div className="row m-0 p-0">
                <div class="mb-3 col-md-6 ">
                  <label for="no_room" class="form-label">
                    Nomor Kamar
                  </label>
                  <input type="text" class="form-control" id="no_room" value={item?.no_room} disabled></input>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">
                    Sewa Bulanan
                  </label>
                  <input type="text" class="form-control" id="no_room" value={formatRupiah(item?.monthly_price)} disabled></input>
                </div>
              </div>
              <div className="row m-0 p-0">
                <div class="mb-3">
                  <label for="month" class="form-label">
                    Sewa untuk berapa bulan ?
                  </label>
                  <input
                    type="number"
                    min="1"
                    class="form-control"
                    id="month"
                    value={month}
                    onChange={(e) => {
                      setMonth(e.target.value);
                      setError("");
                      setSuccess("");
                    }}
                    required
                  ></input>
                </div>
              </div>

              <div className="d-flex flex-column align-items-end">
                <p className="fs-4 fw-semibold">Total Bayar</p>
                <p className="fs-4 fw-semibold">{formatRupiah(month * item?.monthly_price)}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit" disabled={isLoading}>
              {isLoading ? "Menunggu..." : "Sewa Kamar"}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
