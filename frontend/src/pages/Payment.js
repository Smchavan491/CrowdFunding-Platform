import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentProcess = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Payment of ₹${amount} via ${paymentMethod} is processing...`);
  };

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "url('/images/img7 (1).png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "20px",
    },
    card: {
      width: "600px",
      height: "550px",
      background: "#333333", // Dark grey background
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      color: "lightgrey",
    },
    input: {
      marginBottom: "10px",
      backgroundColor: "transparent",
      color: "lightgrey",
      border: "1px solid lightgrey",
    },
    select: {
      marginBottom: "10px",
      backgroundColor: "transparent",
      color: "lightgrey",
      border: "1px solid lightgrey",
    },
    button: {
      marginTop: "10px",
      width: "100%",
      color: "lightgrey",
    },
    cardDetails: {
      border: "1px solid lightgrey",
      borderRadius: "8px",
      padding: "10px",
      color: "lightgrey",
    },
  };

  return (
    <>
      <style>
        {`
          .payment-card:hover {
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
            transform: scale(1.02);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
        `}
      </style>
      <div style={styles.container}>
        <div style={styles.card} className="payment-card">
          <h3 className="text-center mb-3" style={{ color: "lightgrey" }}>
            Complete Your Payment
          </h3>

          <form onSubmit={handlePayment}>
            <div className="mb-3">
              <label className="form-label" style={{ color: "lightgrey" }}>
                Enter Amount (₹)
              </label>
              <input
                type="number"
                className="form-control"
                style={styles.input}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="10"
                placeholder="Amount"
              />
            </div>

            <div className="mb-3">
              <label className="form-label" style={{ color: "lightgrey" }}>
                Select Payment Method
              </label>
              <select
                className="form-select"
                style={styles.select}
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="netbanking">Net Banking</option>
              </select>
            </div>

            {paymentMethod === "card" && (
              <div style={styles.cardDetails}>
                <h5 style={{ color: "lightgrey" }}>Card Details</h5>
                <input
                  type="text"
                  className="form-control"
                  style={styles.input}
                  placeholder="Cardholder Name"
                  value={cardDetails.name}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, name: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  style={styles.input}
                  placeholder="Card Number"
                  maxLength="16"
                  value={cardDetails.cardNumber}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, cardNumber: e.target.value })
                  }
                  required
                />
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      style={styles.input}
                      placeholder="MM/YY"
                      value={cardDetails.expiry}
                      onChange={(e) =>
                        setCardDetails({ ...cardDetails, expiry: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="password"
                      className="form-control"
                      style={styles.input}
                      placeholder="CVV"
                      maxLength="3"
                      value={cardDetails.cvv}
                      onChange={(e) =>
                        setCardDetails({ ...cardDetails, cvv: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            <button type="submit" className="btn btn-primary" style={styles.button}>
              Pay ₹{amount || "0"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentProcess;
