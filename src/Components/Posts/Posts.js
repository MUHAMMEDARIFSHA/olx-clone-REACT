import React,{useState,useContext,useEffect} from 'react';
import {AuthContext, FirebaseContext} from '../../store/Context'
import Heart from '../../assets/Heart';
import { getFirestore, doc, getDocs, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { PostContext } from '../../store/PostContext';
import './Post.css';


function Posts() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const [products,setProducts] = useState([])
  const firestore = getFirestore(firebase)
  const {setPostDetails} = useContext(PostContext)
  const navigate = useNavigate()

  useEffect(() => {
    getDocs(collection(firestore, 'products'))
    .then((docRef) => {
      const allPost = docRef.docs.map((products) => {
        return {
          ...products.data(),
          id: products.id
        }
      })
      console.log(allPost);
      setProducts(allPost)
    })
  },[])
  const postClickHandler = (product) => {
    if(user){
      setPostDetails(product)
      console.log(product.name + "name");
      console.log(setPostDetails + "post details");
      navigate('/view')
    }else{
      
    }
  }
  // const postClickHandler = (product)=>{
  //   if(user){
  //     setPostDetails(product)
  //     navigate('/view')
  //   }
  //   else{
  //     navigate('/login')
  //   }
   

  // }
  return (
    <div className="postParentDiv">
      
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">

          {products.map(product=>{

         return <div key={product.url} className="card" onClick={() => postClickHandler(product)}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer"> {product.name}</span>
              <p className="name">{product.category}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
           })}
        </div>
      </div>
      
    </div>
  );
}

export default Posts;
