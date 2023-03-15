import React, { Fragment, useState ,useContext, useRef,} from 'react';
import { FirebaseContext, AuthContext } from "../../store/Context"
import './Create.css';
import Header from '../Header/Header';
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"

const Create = () => {
  const navigate = useNavigate()
  const [name,setName] =useState('')
  const [category,setCaegory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] =useState(null)
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const storage = getStorage(firebase)
  const storageRef = ref(storage, `/image/${image?.name}`)
  const firestore = getFirestore(firebase)

  const handleSubmit = ()=>{
   const uploadTask= uploadBytesResumable(ref(storage, `/image/${image?.name}`), image)
   uploadTask.on(
    "state_changed",
    (snapshot) => {
      const percent = Math.round(
        snapshot.bytesTransferred / snapshot.totalBytes
      )
      console.log(percent)
    },
    (err) => {
      console.log(err)
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        addDoc(collection(firestore, "products"), {
          name,
          category,
          price,
          url,
          userId: user.uid,
          createdAt: new Date().toDateString(),
        }).then(() => {
          navigate("/")
        })
      })
    }
  )
       
   
  }


  
  return (
    <Fragment>
      <Header />
     <card>
     <div className="centerDiv">
        <div className='head'>
          <h2 >POST YOUR AD</h2>
          </div>
            <label htmlFor="fname" className='input_name'>NAME OF PRODUCT</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(event)=>setName(event.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname" className='input_name'>CATEGORY</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category} 
              onChange={(event)=>setCaegory(event.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname" className='input_name'>SET PRICE</label>
            <br />
            <input className="input" type="number"
             id="fname" 
             name="Price"
             value={price}
             onChange={(event)=>setPrice(event.target.value)}  />
            <br />
        
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):'Posts'}></img>
      
            <br />
            <input className='img_button' onChange={(event)=>setImage(event.target.files[0])} type="file" />
     
            <br />
            <button className="uploadBtn" onClick={handleSubmit}  >ADD Product</button>
      
        </div>
      </card>
    </Fragment>
  );
};


export default Create;


// uploadBytesResumable(ref(storage, `/image/${image?.name}`), image).then(({ref})=>{
//   ref.getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//      addDoc(collection(firestore, "products"), {
//        name,
//        category,
//        price,
//        url,
//        userId: user.uid,
//        createdAt: new Date().toDateString(),
//      }).then(() => {
//        navigate("/")
//      })
//    })
//  })
