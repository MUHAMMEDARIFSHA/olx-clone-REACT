import React, {useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"

import './View.css';
function View() {
  const [userDetails,setUserDetails] = useState();
  console.log("hi");
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext);
  const firestore = getFirestore(firebase);
 
  useEffect(() => {
    const { userId } = postDetails
    console.log(userId + "id of user");
    const q = query(collection(firestore, 'users'), where('id', '==', userId))
    getDocs(q)
    .then((snapshot) => {
      snapshot.forEach(doc => {
        setUserDetails(doc.data())
      })
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img className='img_view'
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
        <h4>Product details</h4>
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
       
      
        <h4 className='sellerDetails'>Seller details</h4>
          <p>{userDetails?.username}</p>
          <p>{userDetails?.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
