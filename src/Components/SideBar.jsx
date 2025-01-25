import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from "react-redux";
import {closeSideBar} from "../Utils/configSlice";
import SideBarTemplate from "./SideBarTemplate";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import useFetchTemplates from "../Hooks/useFetchTemplates";
import {collection, deleteDoc, doc} from "firebase/firestore";
import {database} from "../Utils/firebase-config";
import {setTemplates} from "../Utils/templateSlice";




const SideBar=()=>{
    const isSideBarOpen=useSelector(store=>store.config.isSidebarOpen)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    const templatesArr=useSelector((store)=>store.templates.templatesArr)
    useFetchTemplates()

    console.log(templatesArr)

    const handleDelete = async (id)=>{
        await deleteDoc(doc(database,user,id))
        dispatch(setTemplates(templatesArr.filter((temp)=>temp.id!==id)))
    }
    return (
        <div
            className={`z-20 p-5 fixed top-0 left-0 h-full w-72 border-r rounded-lg shadow-xl border-gray-300 bg-gradient-to-r from-zinc-800/60 to-zinc-900/60 backdrop-blur-2xl text-white transform ${isSideBarOpen?'translate-x-0':'-translate-x-full'} transition-transform duration-300 ease-in-out`}
        >
            <div className={'flex items-center justify-between my-2'}>
                <h1 className={'p-2 m-1'}><WhatshotIcon className={'text-amber-500'} sx={{fontSize:40}}/> </h1>
                <button onClick={() => dispatch(closeSideBar())} className={'p-2 m-1'}><CloseIcon sx={{fontSize:30}}/></button>
            </div>
            <div className={'flex flex-col items-center  overflow-y-auto h-2/3'}>
                {
                    templatesArr.length>0?(
                        templatesArr.map((item,index)=>(<div>
                                <Link to={`/template/created/${item.id}/new`}><SideBarTemplate key={index} templateData={item} /></Link>
                                <button className={'bg-red-600 text-white p-1'} onClick={()=>handleDelete(item.id)}>Delete</button>
                        </div>

                        ))
                    ):(
                        <div>No templates available</div>
                    )
                }


            </div>

            <div className={'flex items-center justify-end m-4'}>
                <button className={'bg-blue-700 px-6 py-2 rounded-lg font-medium '}
                        onClick={()=>{
                            navigate("/template/new")
                            dispatch(closeSideBar())
                        }}
                >New</button>
            </div>

        </div>
    )
}
export default SideBar;