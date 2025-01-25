import MenuIcon from '@mui/icons-material/Menu';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {openSideBar} from "../Utils/configSlice";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../Utils/firebase-config";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {addUser, removeUser} from "../Utils/userSlice";

const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const userId=useSelector((state)=>state.user);

    const handleSignOut=()=>{
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe=onAuthStateChanged(auth,(user)=>{
            if(user){
                const {uid} = auth.currentUser;
                dispatch(addUser(uid));
                navigate('/welcome')
            }
            else {
                dispatch(removeUser());
                navigate('/')
            }
        });
        return ()=> unSubscribe()
    },[])

    return (
        <div className={'w-screen bg-gradient-to-tl from-zinc-900/80 via-zinc-900 to-zinc-950 fixed px-4 py-5 flex items-center justify-between'}>
            <div className={'flex items-center'}>
                {userId && <button onClick={() => dispatch(openSideBar())}><MenuIcon className={'text-white  cursor-pointer'}/>
                </button>}
                <Link to={userId?("/welcome"):("/")}>
                    <h1
                        className={'text-xl px-2 mx-2 font-bold text-white'}
                    >Template Forge <WhatshotIcon className={'text-amber-500'}/></h1>
                </Link>
            </div>
            {userId && <button className={'bg-red-600 p-2 text-white rounded-lg'} onClick={handleSignOut}>
                Sign Out
            </button>}
        </div>
    )
}
export default Header