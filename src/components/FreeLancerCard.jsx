import React from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getOneFreelancer } from "../store/actions/freelancerActions";
import { useDispatch } from "react-redux";

export default function FreeLancerCard(props) {
  const { item } = props;

  const styles_text = {
    color: "#fff",
    fontSize: "15px",
    display: "inline",
    margin: "0 0 0 5px",
  };

  const styles_text3 = {
    color: "#fff",
    fontSize: "12px",
    display: "inline",
    margin: "6px 0 0 5px ",
  };

  const styles_button = {
    color: "#fff",
    backgroundColor: "#27AE60",
    border: "none ",
    borderRadius: "5px",
    width: "auto",
    fontSize: "15px",
    fontWeight: "500",
    padding: "5px",
    margin: "0 0 0 60px",
  };

  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "15rem",
        height: "220px",
        backgroundColor: "#212121",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "space-around",
        border: "#27AE60 solid 1px",
        margin: "1rem",
        padding: "0 0 0 15px",
      }}
    >
      <div className="freelancer-photo" style={{ position: "relative" }}>
        <img
          width={"80px"}
          src="https://pbs.twimg.com/profile_images/1478358634992181248/z18Bm6U0_400x400.jpg"
          alt=""
          style={{
            borderRadius: "100%",
            borderWidth: "1px",
            borderColor: "#27AE60",
            borderStyle: "solid",
            zIndex: "2",
            position: "absolute",
            top: "-65px",
            left: "65px",
            padding: "5px",
            backgroundColor: "#212121",
          }}
        />
      </div>
      <div className="freelancer-desc">
        <div className="desc-item">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency-systems-regular/48/27AE60/employee-card.png"
            alt="employee-card"
            style={{ display: "inline" }}
          />

          <h5 style={styles_text}>{item.first_name}</h5>
        </div>
        <div className="desc-item">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency-systems-regular/48/27AE60/employee-card.png"
            alt="employee-card"
            style={{ display: "inline", textAlign: "center" }}
          />
          <h5 style={styles_text}>{item.last_name}</h5>
        </div>
        <div className="desc-item">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/windows/32/27AE60/dev.png"
            alt="dev"
            style={{ display: "inline" }}
          />

          <h5 style={styles_text3}>{item.profession}</h5>
        </div>
      </div>
      <div>
        <Link to={`/detail/${item.id}/`}>
          <button style={styles_button}>Learn more</button>
        </Link>
      </div>
    </div>
  );
}
