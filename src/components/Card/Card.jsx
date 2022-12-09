import React from "react";
// import { DivCard } from "../styles";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./Card.module.css";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  }

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line
  }, [props.myFavorites]);

  return (
    <div className={styles.card}>
      <Link to={`/detail/${props.id}`}>
      <img src={props.image} alt="" />
      </Link>
      <div className={styles.options}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={props.onClose}>X</button>
      </div>
      <div className={styles.data}>
        <Link to={`/detail/${props.id}`}>
          <h1>Name: {props.name}</h1>
        </Link>
        <h2>Specie: {props.species}</h2>
        <h2>Gender: {props.gender}</h2>
      </div>
      <hr />
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (id) => dispatch(addFavorite(id)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
