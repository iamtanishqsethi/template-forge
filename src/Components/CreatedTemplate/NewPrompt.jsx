import CurrentTemplate from "./CurrentTemplate";
import NewInput from "./NewInput";
import EmptyOutput from "./EmptyOutput";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import React from "react";


const NewPrompt=()=>{
    const navigate = useNavigate();
    const {id} = useParams();
    const templatesArr=useSelector((store)=>store.templates.templatesArr)
    if(!templatesArr){
        navigate("/error")
        return;
    }

    const currentTemplate=templatesArr.find((item)=>item.id==id)

    if(!currentTemplate){
        navigate("/error")
        return;
    }
    return (
        <div className={'w-[65%] h-full  flex flex-col items-center justify-center p-4'}>
            <div className={' mb-5 mt-12 w-full h-[30%]'}>
                <h1 className={'text-7xl font-light text-black '}>
                    T<svg className={'inline'} width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.5" cy="21.5" r="20" stroke="black" stroke-width="3" stroke-dasharray="6 6"/>
                </svg> get the <svg className={'inline'} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="30.5" stroke="black" stroke-width="3" stroke-dasharray="6 6"/>
                </svg><span className={'font-bold'}>UTPUT</span> <svg className={'inline'} width="70" height="72" viewBox="0 0 70 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.2 71.8L29.6 44.2L5.8 58.8L1.49012e-07 49.8L24.8 35.2L0.8 20.8L6.6 12L29.4 26.2L29.2 -9.53674e-06H40L39.8 26L62.4 12L68.4 20.8L44.4 35.2L69.4 49.8L63.2 58.8L39.6 44.2L40 71.8H29.2Z" fill="black"/>
                </svg>
                </h1>
                <div className={'flex items-center justify-between'}>
                    <div className={'bg-lightGreen rounded-full w-[6%] h-28 mr-2 p-2 flex flex-col space-y-2 items-center justify-center'}>
                        <svg width="42" height="42" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="24.299" y="-2" width="37.1923" height="37.1923" rx="5" transform="rotate(45 24.299 -2)" fill="white"/>
                        </svg>
                        <svg width="42" height="42" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="24.299" y="-2" width="37.1923" height="37.1923" rx="5" transform="rotate(45 24.299 -2)" fill="white"/>
                        </svg>


                    </div>
                    <div className={'w-[94%] text-7xl font-light text-black'}>
                        <svg className={'inline'} width="55" height="57" viewBox="0 0 55 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M54.9986 7.11625C55.0628 4.35557 52.8769 2.06555 50.1162 2.00135L5.12841 0.955123C2.36773 0.890921 0.0777162 3.07685 0.0135145 5.83752C-0.0506873 8.5982 2.13524 10.8882 4.89592 10.9524L44.8851 11.8824L43.9551 51.8716C43.8909 54.6323 46.0768 56.9223 48.8375 56.9865C51.5982 57.0507 53.8882 54.8648 53.9524 52.1041L54.9986 7.11625ZM9.45238 52.6168L53.4524 10.6168L46.5476 3.38322L2.54762 45.3832L9.45238 52.6168Z" fill="black"/>
                        </svg> ENTER <svg className={'inline border-2 border-black rounded-full p-2'} width="337" height="67" viewBox="0 0 137 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.05 30H12.95C12.9833 30 13 30 13 30C13 30 13 30.0167 13 30.05V32.95C13 32.95 13 32.9667 13 33C13 33 12.9833 33 12.95 33H10.05C10.05 33 10.0333 33 10 33C10 32.9667 10 32.95 10 32.95V30.05C10 30.0167 10 30 10 30C10.0333 30 10.05 30 10.05 30ZM5.05 30H7.95C7.98333 30 8 30 8 30C8 30 8 30.0167 8 30.05V32.95C8 32.95 8 32.9667 8 33C8 33 7.98333 33 7.95 33H5.05C5.05 33 5.03333 33 5 33C5 32.9667 5 32.95 5 32.95V30.05C5 30.0167 5 30 5 30C5.03333 30 5.05 30 5.05 30ZM0.0500003 30H2.95C2.98333 30 3 30 3 30C3 30 3 30.0167 3 30.05V32.95C3 32.95 3 32.9667 3 33C3 33 2.98333 33 2.95 33H0.0500003C0.0500003 33 0.0333336 33 2.38419e-07 33C2.38419e-07 32.9667 2.38419e-07 32.95 2.38419e-07 32.95V30.05C2.38419e-07 30.0167 2.38419e-07 30 2.38419e-07 30C0.0333336 30 0.0500003 30 0.0500003 30ZM5.05 25H7.95C7.98333 25 8 25 8 25C8 25 8 25.0167 8 25.05V27.95C8 27.95 8 27.9667 8 28C8 28 7.98333 28 7.95 28H5.05C5.05 28 5.03333 28 5 28C5 27.9667 5 27.95 5 27.95V25.05C5 25.0167 5 25 5 25C5.03333 25 5.05 25 5.05 25ZM5.05 20H7.95C7.98333 20 8 20 8 20C8 20 8 20.0167 8 20.05V22.95C8 22.95 8 22.9667 8 23C8 23 7.98333 23 7.95 23H5.05C5.05 23 5.03333 23 5 23C5 22.9667 5 22.95 5 22.95V20.05C5 20.0167 5 20 5 20C5.03333 20 5.05 20 5.05 20ZM5.05 15H7.95C7.98333 15 8 15 8 15C8 15 8 15.0167 8 15.05V17.95C8 17.95 8 17.9667 8 18C8 18 7.98333 18 7.95 18H5.05C5.05 18 5.03333 18 5 18C5 17.9667 5 17.95 5 17.95V15.05C5 15.0167 5 15 5 15C5.03333 15 5.05 15 5.05 15ZM5.05 10H7.95C7.98333 10 8 10 8 10C8 10 8 10.0167 8 10.05V12.95C8 12.95 8 12.9667 8 13C8 13 7.98333 13 7.95 13H5.05C5.05 13 5.03333 13 5 13C5 12.9667 5 12.95 5 12.95V10.05C5 10.0167 5 10 5 10C5.03333 10 5.05 10 5.05 10ZM5.05 5H7.95C7.98333 5 8 5 8 5C8 5 8 5.01666 8 5.05V7.95C8 7.95 8 7.96667 8 8C8 8 7.98333 8 7.95 8H5.05C5.05 8 5.03333 8 5 8C5 7.96667 5 7.95 5 7.95V5.05C5 5.01666 5 5 5 5C5.03333 5 5.05 5 5.05 5ZM10.05 -3.57628e-07H12.95C12.9833 -3.57628e-07 13 -3.57628e-07 13 -3.57628e-07C13 -3.57628e-07 13 0.0166661 13 0.049999V2.95C13 2.95 13 2.96666 13 3C13 3 12.9833 3 12.95 3H10.05C10.05 3 10.0333 3 10 3C10 2.96666 10 2.95 10 2.95V0.049999C10 0.0166661 10 -3.57628e-07 10 -3.57628e-07C10.0333 -3.57628e-07 10.05 -3.57628e-07 10.05 -3.57628e-07ZM5.05 -3.57628e-07H7.95C7.98333 -3.57628e-07 8 -3.57628e-07 8 -3.57628e-07C8 -3.57628e-07 8 0.0166661 8 0.049999V2.95C8 2.95 8 2.96666 8 3C8 3 7.98333 3 7.95 3H5.05C5.05 3 5.03333 3 5 3C5 2.96666 5 2.95 5 2.95V0.049999C5 0.0166661 5 -3.57628e-07 5 -3.57628e-07C5.03333 -3.57628e-07 5.05 -3.57628e-07 5.05 -3.57628e-07ZM0.0500003 -3.57628e-07H2.95C2.98333 -3.57628e-07 3 -3.57628e-07 3 -3.57628e-07C3 -3.57628e-07 3 0.0166661 3 0.049999V2.95C3 2.95 3 2.96666 3 3C3 3 2.98333 3 2.95 3H0.0500003C0.0500003 3 0.0333336 3 2.38419e-07 3C2.38419e-07 2.96666 2.38419e-07 2.95 2.38419e-07 2.95V0.049999C2.38419e-07 0.0166661 2.38419e-07 -3.57628e-07 2.38419e-07 -3.57628e-07C0.0333336 -3.57628e-07 0.0500003 -3.57628e-07 0.0500003 -3.57628e-07ZM44.7805 30H47.6805C47.7138 30 47.7305 30 47.7305 30C47.7305 30 47.7305 30.0167 47.7305 30.05V32.95C47.7305 32.95 47.7305 32.9667 47.7305 33C47.7305 33 47.7138 33 47.6805 33H44.7805C44.7805 33 44.7638 33 44.7305 33C44.7305 32.9667 44.7305 32.95 44.7305 32.95V30.05C44.7305 30.0167 44.7305 30 44.7305 30C44.7638 30 44.7805 30 44.7805 30ZM24.7805 30H27.6805C27.7138 30 27.7305 30 27.7305 30C27.7305 30 27.7305 30.0167 27.7305 30.05V32.95C27.7305 32.95 27.7305 32.9667 27.7305 33C27.7305 33 27.7138 33 27.6805 33H24.7805C24.7805 33 24.7638 33 24.7305 33C24.7305 32.9667 24.7305 32.95 24.7305 32.95V30.05C24.7305 30.0167 24.7305 30 24.7305 30C24.7638 30 24.7805 30 24.7805 30ZM44.7805 25H47.6805C47.7138 25 47.7305 25 47.7305 25C47.7305 25 47.7305 25.0167 47.7305 25.05V27.95C47.7305 27.95 47.7305 27.9667 47.7305 28C47.7305 28 47.7138 28 47.6805 28H44.7805C44.7805 28 44.7638 28 44.7305 28C44.7305 27.9667 44.7305 27.95 44.7305 27.95V25.05C44.7305 25.0167 44.7305 25 44.7305 25C44.7638 25 44.7805 25 44.7805 25ZM24.7805 25H27.6805C27.7138 25 27.7305 25 27.7305 25C27.7305 25 27.7305 25.0167 27.7305 25.05V27.95C27.7305 27.95 27.7305 27.9667 27.7305 28C27.7305 28 27.7138 28 27.6805 28H24.7805C24.7805 28 24.7638 28 24.7305 28C24.7305 27.9667 24.7305 27.95 24.7305 27.95V25.05C24.7305 25.0167 24.7305 25 24.7305 25C24.7638 25 24.7805 25 24.7805 25ZM44.7805 20H47.6805C47.7138 20 47.7305 20 47.7305 20C47.7305 20 47.7305 20.0167 47.7305 20.05V22.95C47.7305 22.95 47.7305 22.9667 47.7305 23C47.7305 23 47.7138 23 47.6805 23H44.7805C44.7805 23 44.7638 23 44.7305 23C44.7305 22.9667 44.7305 22.95 44.7305 22.95V20.05C44.7305 20.0167 44.7305 20 44.7305 20C44.7638 20 44.7805 20 44.7805 20ZM39.7805 20H42.6805C42.7138 20 42.7305 20 42.7305 20C42.7305 20 42.7305 20.0167 42.7305 20.05V22.95C42.7305 22.95 42.7305 22.9667 42.7305 23C42.7305 23 42.7138 23 42.6805 23H39.7805C39.7805 23 39.7638 23 39.7305 23C39.7305 22.9667 39.7305 22.95 39.7305 22.95V20.05C39.7305 20.0167 39.7305 20 39.7305 20C39.7638 20 39.7805 20 39.7805 20ZM24.7805 20H27.6805C27.7138 20 27.7305 20 27.7305 20C27.7305 20 27.7305 20.0167 27.7305 20.05V22.95C27.7305 22.95 27.7305 22.9667 27.7305 23C27.7305 23 27.7138 23 27.6805 23H24.7805C24.7805 23 24.7638 23 24.7305 23C24.7305 22.9667 24.7305 22.95 24.7305 22.95V20.05C24.7305 20.0167 24.7305 20 24.7305 20C24.7638 20 24.7805 20 24.7805 20ZM44.7805 15H47.6805C47.7138 15 47.7305 15 47.7305 15C47.7305 15 47.7305 15.0167 47.7305 15.05V17.95C47.7305 17.95 47.7305 17.9667 47.7305 18C47.7305 18 47.7138 18 47.6805 18H44.7805C44.7805 18 44.7638 18 44.7305 18C44.7305 17.9667 44.7305 17.95 44.7305 17.95V15.05C44.7305 15.0167 44.7305 15 44.7305 15C44.7638 15 44.7805 15 44.7805 15ZM34.7805 15H37.6805C37.7138 15 37.7305 15 37.7305 15C37.7305 15 37.7305 15.0167 37.7305 15.05V17.95C37.7305 17.95 37.7305 17.9667 37.7305 18C37.7305 18 37.7138 18 37.6805 18H34.7805C34.7805 18 34.7638 18 34.7305 18C34.7305 17.9667 34.7305 17.95 34.7305 17.95V15.05C34.7305 15.0167 34.7305 15 34.7305 15C34.7638 15 34.7805 15 34.7805 15ZM24.7805 15H27.6805C27.7138 15 27.7305 15 27.7305 15C27.7305 15 27.7305 15.0167 27.7305 15.05V17.95C27.7305 17.95 27.7305 17.9667 27.7305 18C27.7305 18 27.7138 18 27.6805 18H24.7805C24.7805 18 24.7638 18 24.7305 18C24.7305 17.9667 24.7305 17.95 24.7305 17.95V15.05C24.7305 15.0167 24.7305 15 24.7305 15C24.7638 15 24.7805 15 24.7805 15ZM44.7805 10H47.6805C47.7138 10 47.7305 10 47.7305 10C47.7305 10 47.7305 10.0167 47.7305 10.05V12.95C47.7305 12.95 47.7305 12.9667 47.7305 13C47.7305 13 47.7138 13 47.6805 13H44.7805C44.7805 13 44.7638 13 44.7305 13C44.7305 12.9667 44.7305 12.95 44.7305 12.95V10.05C44.7305 10.0167 44.7305 10 44.7305 10C44.7638 10 44.7805 10 44.7805 10ZM29.7805 10H32.6805C32.7138 10 32.7305 10 32.7305 10C32.7305 10 32.7305 10.0167 32.7305 10.05V12.95C32.7305 12.95 32.7305 12.9667 32.7305 13C32.7305 13 32.7138 13 32.6805 13H29.7805C29.7805 13 29.7638 13 29.7305 13C29.7305 12.9667 29.7305 12.95 29.7305 12.95V10.05C29.7305 10.0167 29.7305 10 29.7305 10C29.7638 10 29.7805 10 29.7805 10ZM24.7805 10H27.6805C27.7138 10 27.7305 10 27.7305 10C27.7305 10 27.7305 10.0167 27.7305 10.05V12.95C27.7305 12.95 27.7305 12.9667 27.7305 13C27.7305 13 27.7138 13 27.6805 13H24.7805C24.7805 13 24.7638 13 24.7305 13C24.7305 12.9667 24.7305 12.95 24.7305 12.95V10.05C24.7305 10.0167 24.7305 10 24.7305 10C24.7638 10 24.7805 10 24.7805 10ZM44.7805 5H47.6805C47.7138 5 47.7305 5 47.7305 5C47.7305 5 47.7305 5.01666 47.7305 5.05V7.95C47.7305 7.95 47.7305 7.96667 47.7305 8C47.7305 8 47.7138 8 47.6805 8H44.7805C44.7805 8 44.7638 8 44.7305 8C44.7305 7.96667 44.7305 7.95 44.7305 7.95V5.05C44.7305 5.01666 44.7305 5 44.7305 5C44.7638 5 44.7805 5 44.7805 5ZM24.7805 5H27.6805C27.7138 5 27.7305 5 27.7305 5C27.7305 5 27.7305 5.01666 27.7305 5.05V7.95C27.7305 7.95 27.7305 7.96667 27.7305 8C27.7305 8 27.7138 8 27.6805 8H24.7805C24.7805 8 24.7638 8 24.7305 8C24.7305 7.96667 24.7305 7.95 24.7305 7.95V5.05C24.7305 5.01666 24.7305 5 24.7305 5C24.7638 5 24.7805 5 24.7805 5ZM44.7805 -3.57628e-07H47.6805C47.7138 -3.57628e-07 47.7305 -3.57628e-07 47.7305 -3.57628e-07C47.7305 -3.57628e-07 47.7305 0.0166661 47.7305 0.049999V2.95C47.7305 2.95 47.7305 2.96666 47.7305 3C47.7305 3 47.7138 3 47.6805 3H44.7805C44.7805 3 44.7638 3 44.7305 3C44.7305 2.96666 44.7305 2.95 44.7305 2.95V0.049999C44.7305 0.0166661 44.7305 -3.57628e-07 44.7305 -3.57628e-07C44.7638 -3.57628e-07 44.7805 -3.57628e-07 44.7805 -3.57628e-07ZM24.7805 -3.57628e-07H27.6805C27.7138 -3.57628e-07 27.7305 -3.57628e-07 27.7305 -3.57628e-07C27.7305 -3.57628e-07 27.7305 0.0166661 27.7305 0.049999V2.95C27.7305 2.95 27.7305 2.96666 27.7305 3C27.7305 3 27.7138 3 27.6805 3H24.7805C24.7805 3 24.7638 3 24.7305 3C24.7305 2.96666 24.7305 2.95 24.7305 2.95V0.049999C24.7305 0.0166661 24.7305 -3.57628e-07 24.7305 -3.57628e-07C24.7638 -3.57628e-07 24.7805 -3.57628e-07 24.7805 -3.57628e-07ZM54.5109 30H57.4109C57.4443 30 57.4609 30 57.4609 30C57.4609 30 57.4609 30.0167 57.4609 30.05V32.95C57.4609 32.95 57.4609 32.9667 57.4609 33C57.4609 33 57.4443 33 57.4109 33H54.5109C54.5109 33 54.4943 33 54.4609 33C54.4609 32.9667 54.4609 32.95 54.4609 32.95V30.05C54.4609 30.0167 54.4609 30 54.4609 30C54.4943 30 54.5109 30 54.5109 30ZM54.5109 25H57.4109C57.4443 25 57.4609 25 57.4609 25C57.4609 25 57.4609 25.0167 57.4609 25.05V27.95C57.4609 27.95 57.4609 27.9667 57.4609 28C57.4609 28 57.4443 28 57.4109 28H54.5109C54.5109 28 54.4943 28 54.4609 28C54.4609 27.9667 54.4609 27.95 54.4609 27.95V25.05C54.4609 25.0167 54.4609 25 54.4609 25C54.4943 25 54.5109 25 54.5109 25ZM54.5109 20H57.4109C57.4443 20 57.4609 20 57.4609 20C57.4609 20 57.4609 20.0167 57.4609 20.05V22.95C57.4609 22.95 57.4609 22.9667 57.4609 23C57.4609 23 57.4443 23 57.4109 23H54.5109C54.5109 23 54.4943 23 54.4609 23C54.4609 22.9667 54.4609 22.95 54.4609 22.95V20.05C54.4609 20.0167 54.4609 20 54.4609 20C54.4943 20 54.5109 20 54.5109 20ZM69.5109 15H72.4109C72.4443 15 72.4609 15 72.4609 15C72.4609 15 72.4609 15.0167 72.4609 15.05V17.95C72.4609 17.95 72.4609 17.9667 72.4609 18C72.4609 18 72.4443 18 72.4109 18H69.5109C69.5109 18 69.4943 18 69.4609 18C69.4609 17.9667 69.4609 17.95 69.4609 17.95V15.05C69.4609 15.0167 69.4609 15 69.4609 15C69.4943 15 69.5109 15 69.5109 15ZM64.5109 15H67.4109C67.4443 15 67.4609 15 67.4609 15C67.4609 15 67.4609 15.0167 67.4609 15.05V17.95C67.4609 17.95 67.4609 17.9667 67.4609 18C67.4609 18 67.4443 18 67.4109 18H64.5109C64.5109 18 64.4943 18 64.4609 18C64.4609 17.9667 64.4609 17.95 64.4609 17.95V15.05C64.4609 15.0167 64.4609 15 64.4609 15C64.4943 15 64.5109 15 64.5109 15ZM59.5109 15H62.4109C62.4443 15 62.4609 15 62.4609 15C62.4609 15 62.4609 15.0167 62.4609 15.05V17.95C62.4609 17.95 62.4609 17.9667 62.4609 18C62.4609 18 62.4443 18 62.4109 18H59.5109C59.5109 18 59.4943 18 59.4609 18C59.4609 17.9667 59.4609 17.95 59.4609 17.95V15.05C59.4609 15.0167 59.4609 15 59.4609 15C59.4943 15 59.5109 15 59.5109 15ZM54.5109 15H57.4109C57.4443 15 57.4609 15 57.4609 15C57.4609 15 57.4609 15.0167 57.4609 15.05V17.95C57.4609 17.95 57.4609 17.9667 57.4609 18C57.4609 18 57.4443 18 57.4109 18H54.5109C54.5109 18 54.4943 18 54.4609 18C54.4609 17.9667 54.4609 17.95 54.4609 17.95V15.05C54.4609 15.0167 54.4609 15 54.4609 15C54.4943 15 54.5109 15 54.5109 15ZM74.5109 10H77.4109C77.4443 10 77.4609 10 77.4609 10C77.4609 10 77.4609 10.0167 77.4609 10.05V12.95C77.4609 12.95 77.4609 12.9667 77.4609 13C77.4609 13 77.4443 13 77.4109 13H74.5109C74.5109 13 74.4943 13 74.4609 13C74.4609 12.9667 74.4609 12.95 74.4609 12.95V10.05C74.4609 10.0167 74.4609 10 74.4609 10C74.4943 10 74.5109 10 74.5109 10ZM54.5109 10H57.4109C57.4443 10 57.4609 10 57.4609 10C57.4609 10 57.4609 10.0167 57.4609 10.05V12.95C57.4609 12.95 57.4609 12.9667 57.4609 13C57.4609 13 57.4443 13 57.4109 13H54.5109C54.5109 13 54.4943 13 54.4609 13C54.4609 12.9667 54.4609 12.95 54.4609 12.95V10.05C54.4609 10.0167 54.4609 10 54.4609 10C54.4943 10 54.5109 10 54.5109 10ZM74.5109 5H77.4109C77.4443 5 77.4609 5 77.4609 5C77.4609 5 77.4609 5.01666 77.4609 5.05V7.95C77.4609 7.95 77.4609 7.96667 77.4609 8C77.4609 8 77.4443 8 77.4109 8H74.5109C74.5109 8 74.4943 8 74.4609 8C74.4609 7.96667 74.4609 7.95 74.4609 7.95V5.05C74.4609 5.01666 74.4609 5 74.4609 5C74.4943 5 74.5109 5 74.5109 5ZM54.5109 5H57.4109C57.4443 5 57.4609 5 57.4609 5C57.4609 5 57.4609 5.01666 57.4609 5.05V7.95C57.4609 7.95 57.4609 7.96667 57.4609 8C57.4609 8 57.4443 8 57.4109 8H54.5109C54.5109 8 54.4943 8 54.4609 8C54.4609 7.96667 54.4609 7.95 54.4609 7.95V5.05C54.4609 5.01666 54.4609 5 54.4609 5C54.4943 5 54.5109 5 54.5109 5ZM69.5109 -3.57628e-07H72.4109C72.4443 -3.57628e-07 72.4609 -3.57628e-07 72.4609 -3.57628e-07C72.4609 -3.57628e-07 72.4609 0.0166661 72.4609 0.049999V2.95C72.4609 2.95 72.4609 2.96666 72.4609 3C72.4609 3 72.4443 3 72.4109 3H69.5109C69.5109 3 69.4943 3 69.4609 3C69.4609 2.96666 69.4609 2.95 69.4609 2.95V0.049999C69.4609 0.0166661 69.4609 -3.57628e-07 69.4609 -3.57628e-07C69.4943 -3.57628e-07 69.5109 -3.57628e-07 69.5109 -3.57628e-07ZM64.5109 -3.57628e-07H67.4109C67.4443 -3.57628e-07 67.4609 -3.57628e-07 67.4609 -3.57628e-07C67.4609 -3.57628e-07 67.4609 0.0166661 67.4609 0.049999V2.95C67.4609 2.95 67.4609 2.96666 67.4609 3C67.4609 3 67.4443 3 67.4109 3H64.5109C64.5109 3 64.4943 3 64.4609 3C64.4609 2.96666 64.4609 2.95 64.4609 2.95V0.049999C64.4609 0.0166661 64.4609 -3.57628e-07 64.4609 -3.57628e-07C64.4943 -3.57628e-07 64.5109 -3.57628e-07 64.5109 -3.57628e-07ZM59.5109 -3.57628e-07H62.4109C62.4443 -3.57628e-07 62.4609 -3.57628e-07 62.4609 -3.57628e-07C62.4609 -3.57628e-07 62.4609 0.0166661 62.4609 0.049999V2.95C62.4609 2.95 62.4609 2.96666 62.4609 3C62.4609 3 62.4443 3 62.4109 3H59.5109C59.5109 3 59.4943 3 59.4609 3C59.4609 2.96666 59.4609 2.95 59.4609 2.95V0.049999C59.4609 0.0166661 59.4609 -3.57628e-07 59.4609 -3.57628e-07C59.4943 -3.57628e-07 59.5109 -3.57628e-07 59.5109 -3.57628e-07ZM54.5109 -3.57628e-07H57.4109C57.4443 -3.57628e-07 57.4609 -3.57628e-07 57.4609 -3.57628e-07C57.4609 -3.57628e-07 57.4609 0.0166661 57.4609 0.049999V2.95C57.4609 2.95 57.4609 2.96666 57.4609 3C57.4609 3 57.4443 3 57.4109 3H54.5109C54.5109 3 54.4943 3 54.4609 3C54.4609 2.96666 54.4609 2.95 54.4609 2.95V0.049999C54.4609 0.0166661 54.4609 -3.57628e-07 54.4609 -3.57628e-07C54.4943 -3.57628e-07 54.5109 -3.57628e-07 54.5109 -3.57628e-07ZM99.2414 30H102.141C102.175 30 102.191 30 102.191 30C102.191 30 102.191 30.0167 102.191 30.05V32.95C102.191 32.95 102.191 32.9667 102.191 33C102.191 33 102.175 33 102.141 33H99.2414C99.2414 33 99.2247 33 99.1914 33C99.1914 32.9667 99.1914 32.95 99.1914 32.95V30.05C99.1914 30.0167 99.1914 30 99.1914 30C99.2247 30 99.2414 30 99.2414 30ZM94.2414 30H97.1414C97.1747 30 97.1914 30 97.1914 30C97.1914 30 97.1914 30.0167 97.1914 30.05V32.95C97.1914 32.95 97.1914 32.9667 97.1914 33C97.1914 33 97.1747 33 97.1414 33H94.2414C94.2414 33 94.2247 33 94.1914 33C94.1914 32.9667 94.1914 32.95 94.1914 32.95V30.05C94.1914 30.0167 94.1914 30 94.1914 30C94.2247 30 94.2414 30 94.2414 30ZM89.2414 30H92.1414C92.1747 30 92.1914 30 92.1914 30C92.1914 30 92.1914 30.0167 92.1914 30.05V32.95C92.1914 32.95 92.1914 32.9667 92.1914 33C92.1914 33 92.1747 33 92.1414 33H89.2414C89.2414 33 89.2247 33 89.1914 33C89.1914 32.9667 89.1914 32.95 89.1914 32.95V30.05C89.1914 30.0167 89.1914 30 89.1914 30C89.2247 30 89.2414 30 89.2414 30ZM104.241 25H107.141C107.175 25 107.191 25 107.191 25C107.191 25 107.191 25.0167 107.191 25.05V27.95C107.191 27.95 107.191 27.9667 107.191 28C107.191 28 107.175 28 107.141 28H104.241C104.241 28 104.225 28 104.191 28C104.191 27.9667 104.191 27.95 104.191 27.95V25.05C104.191 25.0167 104.191 25 104.191 25C104.225 25 104.241 25 104.241 25ZM84.2414 25H87.1414C87.1747 25 87.1914 25 87.1914 25C87.1914 25 87.1914 25.0167 87.1914 25.05V27.95C87.1914 27.95 87.1914 27.9667 87.1914 28C87.1914 28 87.1747 28 87.1414 28H84.2414C84.2414 28 84.2247 28 84.1914 28C84.1914 27.9667 84.1914 27.95 84.1914 27.95V25.05C84.1914 25.0167 84.1914 25 84.1914 25C84.2247 25 84.2414 25 84.2414 25ZM104.241 20H107.141C107.175 20 107.191 20 107.191 20C107.191 20 107.191 20.0167 107.191 20.05V22.95C107.191 22.95 107.191 22.9667 107.191 23C107.191 23 107.175 23 107.141 23H104.241C104.241 23 104.225 23 104.191 23C104.191 22.9667 104.191 22.95 104.191 22.95V20.05C104.191 20.0167 104.191 20 104.191 20C104.225 20 104.241 20 104.241 20ZM84.2414 20H87.1414C87.1747 20 87.1914 20 87.1914 20C87.1914 20 87.1914 20.0167 87.1914 20.05V22.95C87.1914 22.95 87.1914 22.9667 87.1914 23C87.1914 23 87.1747 23 87.1414 23H84.2414C84.2414 23 84.2247 23 84.1914 23C84.1914 22.9667 84.1914 22.95 84.1914 22.95V20.05C84.1914 20.0167 84.1914 20 84.1914 20C84.2247 20 84.2414 20 84.2414 20ZM104.241 15H107.141C107.175 15 107.191 15 107.191 15C107.191 15 107.191 15.0167 107.191 15.05V17.95C107.191 17.95 107.191 17.9667 107.191 18C107.191 18 107.175 18 107.141 18H104.241C104.241 18 104.225 18 104.191 18C104.191 17.9667 104.191 17.95 104.191 17.95V15.05C104.191 15.0167 104.191 15 104.191 15C104.225 15 104.241 15 104.241 15ZM84.2414 15H87.1414C87.1747 15 87.1914 15 87.1914 15C87.1914 15 87.1914 15.0167 87.1914 15.05V17.95C87.1914 17.95 87.1914 17.9667 87.1914 18C87.1914 18 87.1747 18 87.1414 18H84.2414C84.2414 18 84.2247 18 84.1914 18C84.1914 17.9667 84.1914 17.95 84.1914 17.95V15.05C84.1914 15.0167 84.1914 15 84.1914 15C84.2247 15 84.2414 15 84.2414 15ZM104.241 10H107.141C107.175 10 107.191 10 107.191 10C107.191 10 107.191 10.0167 107.191 10.05V12.95C107.191 12.95 107.191 12.9667 107.191 13C107.191 13 107.175 13 107.141 13H104.241C104.241 13 104.225 13 104.191 13C104.191 12.9667 104.191 12.95 104.191 12.95V10.05C104.191 10.0167 104.191 10 104.191 10C104.225 10 104.241 10 104.241 10ZM84.2414 10H87.1414C87.1747 10 87.1914 10 87.1914 10C87.1914 10 87.1914 10.0167 87.1914 10.05V12.95C87.1914 12.95 87.1914 12.9667 87.1914 13C87.1914 13 87.1747 13 87.1414 13H84.2414C84.2414 13 84.2247 13 84.1914 13C84.1914 12.9667 84.1914 12.95 84.1914 12.95V10.05C84.1914 10.0167 84.1914 10 84.1914 10C84.2247 10 84.2414 10 84.2414 10ZM104.241 5H107.141C107.175 5 107.191 5 107.191 5C107.191 5 107.191 5.01666 107.191 5.05V7.95C107.191 7.95 107.191 7.96667 107.191 8C107.191 8 107.175 8 107.141 8H104.241C104.241 8 104.225 8 104.191 8C104.191 7.96667 104.191 7.95 104.191 7.95V5.05C104.191 5.01666 104.191 5 104.191 5C104.225 5 104.241 5 104.241 5ZM84.2414 5H87.1414C87.1747 5 87.1914 5 87.1914 5C87.1914 5 87.1914 5.01666 87.1914 5.05V7.95C87.1914 7.95 87.1914 7.96667 87.1914 8C87.1914 8 87.1747 8 87.1414 8H84.2414C84.2414 8 84.2247 8 84.1914 8C84.1914 7.96667 84.1914 7.95 84.1914 7.95V5.05C84.1914 5.01666 84.1914 5 84.1914 5C84.2247 5 84.2414 5 84.2414 5ZM104.241 -3.57628e-07H107.141C107.175 -3.57628e-07 107.191 -3.57628e-07 107.191 -3.57628e-07C107.191 -3.57628e-07 107.191 0.0166661 107.191 0.049999V2.95C107.191 2.95 107.191 2.96666 107.191 3C107.191 3 107.175 3 107.141 3H104.241C104.241 3 104.225 3 104.191 3C104.191 2.96666 104.191 2.95 104.191 2.95V0.049999C104.191 0.0166661 104.191 -3.57628e-07 104.191 -3.57628e-07C104.225 -3.57628e-07 104.241 -3.57628e-07 104.241 -3.57628e-07ZM84.2414 -3.57628e-07H87.1414C87.1747 -3.57628e-07 87.1914 -3.57628e-07 87.1914 -3.57628e-07C87.1914 -3.57628e-07 87.1914 0.0166661 87.1914 0.049999V2.95C87.1914 2.95 87.1914 2.96666 87.1914 3C87.1914 3 87.1747 3 87.1414 3H84.2414C84.2414 3 84.2247 3 84.1914 3C84.1914 2.96666 84.1914 2.95 84.1914 2.95V0.049999C84.1914 0.0166661 84.1914 -3.57628e-07 84.1914 -3.57628e-07C84.2247 -3.57628e-07 84.2414 -3.57628e-07 84.2414 -3.57628e-07ZM123.972 30H126.872C126.905 30 126.922 30 126.922 30C126.922 30 126.922 30.0167 126.922 30.05V32.95C126.922 32.95 126.922 32.9667 126.922 33C126.922 33 126.905 33 126.872 33H123.972C123.972 33 123.955 33 123.922 33C123.922 32.9667 123.922 32.95 123.922 32.95V30.05C123.922 30.0167 123.922 30 123.922 30C123.955 30 123.972 30 123.972 30ZM123.972 25H126.872C126.905 25 126.922 25 126.922 25C126.922 25 126.922 25.0167 126.922 25.05V27.95C126.922 27.95 126.922 27.9667 126.922 28C126.922 28 126.905 28 126.872 28H123.972C123.972 28 123.955 28 123.922 28C123.922 27.9667 123.922 27.95 123.922 27.95V25.05C123.922 25.0167 123.922 25 123.922 25C123.955 25 123.972 25 123.972 25ZM123.972 20H126.872C126.905 20 126.922 20 126.922 20C126.922 20 126.922 20.0167 126.922 20.05V22.95C126.922 22.95 126.922 22.9667 126.922 23C126.922 23 126.905 23 126.872 23H123.972C123.972 23 123.955 23 123.922 23C123.922 22.9667 123.922 22.95 123.922 22.95V20.05C123.922 20.0167 123.922 20 123.922 20C123.955 20 123.972 20 123.972 20ZM123.972 15H126.872C126.905 15 126.922 15 126.922 15C126.922 15 126.922 15.0167 126.922 15.05V17.95C126.922 17.95 126.922 17.9667 126.922 18C126.922 18 126.905 18 126.872 18H123.972C123.972 18 123.955 18 123.922 18C123.922 17.9667 123.922 17.95 123.922 17.95V15.05C123.922 15.0167 123.922 15 123.922 15C123.955 15 123.972 15 123.972 15ZM123.972 10H126.872C126.905 10 126.922 10 126.922 10C126.922 10 126.922 10.0167 126.922 10.05V12.95C126.922 12.95 126.922 12.9667 126.922 13C126.922 13 126.905 13 126.872 13H123.972C123.972 13 123.955 13 123.922 13C123.922 12.9667 123.922 12.95 123.922 12.95V10.05C123.922 10.0167 123.922 10 123.922 10C123.955 10 123.972 10 123.972 10ZM123.972 5H126.872C126.905 5 126.922 5 126.922 5C126.922 5 126.922 5.01666 126.922 5.05V7.95C126.922 7.95 126.922 7.96667 126.922 8C126.922 8 126.905 8 126.872 8H123.972C123.972 8 123.955 8 123.922 8C123.922 7.96667 123.922 7.95 123.922 7.95V5.05C123.922 5.01666 123.922 5 123.922 5C123.955 5 123.972 5 123.972 5ZM133.972 -3.57628e-07H136.872C136.905 -3.57628e-07 136.922 -3.57628e-07 136.922 -3.57628e-07C136.922 -3.57628e-07 136.922 0.0166661 136.922 0.049999V2.95C136.922 2.95 136.922 2.96666 136.922 3C136.922 3 136.905 3 136.872 3H133.972C133.972 3 133.955 3 133.922 3C133.922 2.96666 133.922 2.95 133.922 2.95V0.049999C133.922 0.0166661 133.922 -3.57628e-07 133.922 -3.57628e-07C133.955 -3.57628e-07 133.972 -3.57628e-07 133.972 -3.57628e-07ZM128.972 -3.57628e-07H131.872C131.905 -3.57628e-07 131.922 -3.57628e-07 131.922 -3.57628e-07C131.922 -3.57628e-07 131.922 0.0166661 131.922 0.049999V2.95C131.922 2.95 131.922 2.96666 131.922 3C131.922 3 131.905 3 131.872 3H128.972C128.972 3 128.955 3 128.922 3C128.922 2.96666 128.922 2.95 128.922 2.95V0.049999C128.922 0.0166661 128.922 -3.57628e-07 128.922 -3.57628e-07C128.955 -3.57628e-07 128.972 -3.57628e-07 128.972 -3.57628e-07ZM123.972 -3.57628e-07H126.872C126.905 -3.57628e-07 126.922 -3.57628e-07 126.922 -3.57628e-07C126.922 -3.57628e-07 126.922 0.0166661 126.922 0.049999V2.95C126.922 2.95 126.922 2.96666 126.922 3C126.922 3 126.905 3 126.872 3H123.972C123.972 3 123.955 3 123.922 3C123.922 2.96666 123.922 2.95 123.922 2.95V0.049999C123.922 0.0166661 123.922 -3.57628e-07 123.922 -3.57628e-07C123.955 -3.57628e-07 123.972 -3.57628e-07 123.972 -3.57628e-07ZM118.972 -3.57628e-07H121.872C121.905 -3.57628e-07 121.922 -3.57628e-07 121.922 -3.57628e-07C121.922 -3.57628e-07 121.922 0.0166661 121.922 0.049999V2.95C121.922 2.95 121.922 2.96666 121.922 3C121.922 3 121.905 3 121.872 3H118.972C118.972 3 118.955 3 118.922 3C118.922 2.96666 118.922 2.95 118.922 2.95V0.049999C118.922 0.0166661 118.922 -3.57628e-07 118.922 -3.57628e-07C118.955 -3.57628e-07 118.972 -3.57628e-07 118.972 -3.57628e-07ZM113.972 -3.57628e-07H116.872C116.905 -3.57628e-07 116.922 -3.57628e-07 116.922 -3.57628e-07C116.922 -3.57628e-07 116.922 0.0166661 116.922 0.049999V2.95C116.922 2.95 116.922 2.96666 116.922 3C116.922 3 116.905 3 116.872 3H113.972C113.972 3 113.955 3 113.922 3C113.922 2.96666 113.922 2.95 113.922 2.95V0.049999C113.922 0.0166661 113.922 -3.57628e-07 113.922 -3.57628e-07C113.955 -3.57628e-07 113.972 -3.57628e-07 113.972 -3.57628e-07Z" fill="black"/>
                    </svg>


                        <p className={'m-1 p-2 text-lg'}><span className={'font-bold'}>FOLLOW</span> the given steps to create your  <span className={'font-bold'}>TEMPLATE</span>  </p>
                    </div>

                </div>


            </div>
            <div className={'   flex justify-between w-full h-[58%] '}>
                <div className={'w-[49%] h-full  flex flex-col items-center justify-between'}>
                    <NewInput data={currentTemplate?.data}/>
                    <CurrentTemplate template={currentTemplate?.templateStr} title={currentTemplate?.templateTitle}/>
                </div>
                <EmptyOutput/>
            </div>

        </div>
    )
}
export default NewPrompt;