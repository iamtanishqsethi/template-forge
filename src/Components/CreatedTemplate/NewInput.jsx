import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import useFetchTemplates from "../../Hooks/useFetchTemplates";
import useTemplateRender from "../../Hooks/useTemplateRender";


const NewInput = ({ data ,AST}) => {
    const [updatedData, setUpdatedData] = useState(null);
    const { id } = useParams();
    const compileTemplate = useTemplateRender(id);

    const navigate = useNavigate();

    useFetchTemplates()


    const handleInput = (key, value) => {
        setUpdatedData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const handleRender = () => {

        console.log(updatedData)
        try{
            const promptId=compileTemplate(updatedData)
            if(promptId){
                navigate(`/template/created/${id}/${promptId}`)
            }
            else{
                alert("Failed to process the template. Please try again.")
            }
        }catch(error){
            console.log('error rendering template')
            throw error;
        }
    };

    return (
        <div className={"flex flex-col justify-center items-center h-1/2 w-full"}>
            <div
                className={
                    "bg-gradient-to-br from-zinc-950/10 to-zinc-800/10 border-2 border-red-700 backdrop-blur-xl  rounded-lg shadow-lg w-full h-2/3 "
                }
            >
                <div className="flex justify-between items-center px-2">
                    <div className="flex items-center">
                        <h1 className="text-white text-lg font-medium flex items-center p-2 mx-2 my-1">
                            <DoubleArrowIcon
                                sx={{ fontSize: 30 }}
                                className={"text-red-700 mr-1"}
                            />
                            Input
                        </h1>
                    </div>

                    <button
                        className="text-white  bg-red-700 rounded px-5 py-2 text-sm font-medium m-2"
                        onClick={handleRender}
                    >
                        Render
                    </button>
                </div>
                <div className={"h-1 w-1/2 rounded-lg px-2 mx-2 bg-red-700"}></div>
                <div
                    className={
                        "flex flex-col items-center overflow-y-auto justify-normal"
                    }
                >
                    {data?.length === 0 ? (
                        <p>No variables found</p>
                    ) : (
                        Object.keys(data).map((key) => (
                            <div key={key} className={"m-2 p-2 text-lg"}>
                                <label className={"p-2 uppercase"}>{key} :</label>
                                <input
                                    type="text"
                                    value={updatedData?.[key] || ""}
                                    placeholder={`Enter value for ${key}`}
                                    className={
                                        "p-2 bg-transparent border-2 border-zinc-600 outline-none rounded-lg"
                                    }
                                    onChange={(e) => handleInput(key, e.target.value)}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
export default NewInput;
