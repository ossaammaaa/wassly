import React from 'react'
import styles from "./Card.module.css"
import { Link } from 'react-router-dom'

export default function Card({title,image,description,offer,id,status}) {
  return  <>

    <Link to={`/shopsDetails/${id}`} className={` ${styles.card}`}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className={styles.cardBody}>
    <div className={styles.title}>{title}</div>
    <div className={styles.description}>{description}</div>
    {status && (
  <div style={{ color: status === "Online" ? "green" : "red", fontWeight: "bold" }}>
    {status}
  </div>
)}
    {/* {offer&&<p className={styles.offer}>{offer}</p>} */}
    </div>
     </Link>
     </>
  
}