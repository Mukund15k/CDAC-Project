import { useEffect } from "react";
import AuthModal from "../../Auth/AuthModal";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

<AuthModal handleClose={handleClose} open={openAuthModal}/>

const handleClose=()=>{
    setOpenAuthModal(false);
};
useEffect(()=>{
    if(jwt){
        dispatch(getUser(jwt))
    }
},[jwt,auth.jwt])


useEffect(()=>{

    if(auth.user){
        handleClose()
    }
    if(location.pathname=="/login"|| location.pathname=="/register"){
        navigate(-1)
    }
},[auth.user])


const {auth}=useSelector(store=>store)
const dispatch=useDispatch();
const location=useLocation();