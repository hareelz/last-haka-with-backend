import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneFreelancer } from "../store/actions/freelancerActions";
import { useParams } from "react-router-dom";

export default function FreelancerDetail() {
  const { oneFreelancer } = useSelector((state) => state.freelancers);

  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneFreelancer(id));
  }, []);

  return (
    <div style={{ backgroundColor: "#171717", width: "100vw", height: "100%" }}>
      <div
        className="details-top"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "80px 60px 0 60px",
        }}
      >
        <div className="freelancer-name" style={{}}>
          <h4 style={{ color: "#fff", fontSize: "48px", fontWeight: "700" }}>
            Hi , I am
          </h4>
          <h4
            style={{
              color: "#fff",
              fontSize: "48px",
              fontWeight: "700",
              display: "inline",
              marginRight: "20px",
            }}
          >
            {oneFreelancer.last_name}
          </h4>
          <h4
            style={{
              color: "#fff",
              fontSize: "48px",
              fontWeight: "700",
              display: "inline",
            }}
          >
            {oneFreelancer.first_name}
          </h4>
          <div style={{ marginTop: "20px" }}>
            <h4
              style={{ color: "#27AE60", marginTop: "10px", display: "inline" }}
            >
              Location:
            </h4>
            <h4
              style={{
                color: "#fff",
                margin: "10px 0 0 5px",
                display: "inline",
              }}
            >
              {oneFreelancer.city}
            </h4>
          </div>
        </div>
        <div className="freelancer-photo">
          <img
            src="https://wallpapercosmos.com/w/full/9/9/c/409473-3840x2160-desktop-4k-jason-statham-background-image.jpg"
            alt="#"
            width={"600px"}
            height={"600px"}
            style={{
              borderRadius: "100%",
              borderWidth: "1px",
              borderColor: "#27AE60",
              borderStyle: "solid",
              padding: "30px",
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div
        className="details-center"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "80px 0 0 0 ",
        }}
      >
        <h4
          style={{
            color: "#fff",
            fontSize: "48px",
            fontWeight: "700",
          }}
        >
          What I can
        </h4>
        <p
          style={{
            color: "#fff",
            fontSize: "20px",
            lineHeight: "normal",
            textAlign: "center",
            padding: "30px 25rem 0 25rem",
          }}
        >
          {oneFreelancer.what_i_can}
        </p>
        <div
          className="contacts"
          style={{
            display: "flex",
            justifyContent: "center",
            justifyContent: "space-around",
            width: "100vw",
            padding: "80px, 50rem 0 50rem",
            marginTop: "80px",
          }}
        >
          <div
            className="contacts-item"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/27AE60/phone.png"
              alt="phone"
              style={{
                borderRadius: "100%",
                borderWidth: "1px",
                borderColor: "#27AE60",
                borderStyle: "solid",
                padding: "10px",
              }}
            />
            <p
              style={{
                color: "#fff",
                fontSize: "15px",
                lineHeight: "normal",
                textAlign: "center",
                marginTop: "15px",
                borderBottom: "1px solid #27AE60 ",
              }}
            >
              Phone number
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: "15px",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              {" "}
              {oneFreelancer.phone_number}
            </p>
          </div>

          <div
            className="contacts-item"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/27AE60/gmail.png"
              alt="gmail"
              style={{
                borderRadius: "100%",
                borderWidth: "1px",
                borderColor: "#27AE60",
                borderStyle: "solid",
                padding: "10px",
              }}
            />{" "}
            <p
              style={{
                color: "#fff",
                fontSize: "15px",
                lineHeight: "normal",
                textAlign: "center",
                marginTop: "15px",
                borderBottom: "1px solid #27AE60 ",
              }}
            >
              Email address
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: "15px",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              {" "}
              {oneFreelancer.email}
            </p>
          </div>
        </div>
        <div className="category">
          {" "}
          <h4
            style={{
              color: "#fff",
              fontSize: "48px",
              fontWeight: "700",
              marginTop: "80px",
            }}
          >
            Category
          </h4>
        </div>
        <div
          className="comments-block"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </div>
  );
}
