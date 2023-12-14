import React, { useEffect } from "react";
import FreeLancerCard from "./FreeLancerCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getFreelancers,
  getOneFreelancer,
} from "../store/actions/freelancerActions";

export default function FreeLancerList() {
  const { freelancerList, loading } = useSelector((state) => state.freelancers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFreelancers());
    dispatch(getOneFreelancer(1));
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#171717",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingTop: "5rem",
      }}
    >
      {loading ? (
        <h2>Please wait data is loading</h2>
      ) : (
        freelancerList.map((item) => (
          <FreeLancerCard key={item.id} item={item} />
        ))
      )}
    </div>
  );
}
