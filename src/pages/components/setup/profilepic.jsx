import { useRef, useState } from "react";

function Pic({setPic}){
    const uploadedImg = useRef(null);
    const imageUploader = useRef(null);
    const [uploaded, setUploaded] = useState(false);

    const handleImageUpload = (e) => {
        const [file] = e.target.files;
        setUploaded(true);
        if(file){
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImg.current.src = e.target.result;
            }

            reader.readAsDataURL(file);
            setPic(true);
        }
    }

    return (

        <div className="pic">
            {uploaded ? (
                <div style={{ height:"150px", width:"150px", border:"20%" }}>
                    <img ref={uploadedImg} style={{ width: "100%", height: "100%", objectFit:"scale-down", borderRadius:"50%" }} />
                </div>
            ) : (
                <div style={{ aspectRatio: 1/1, height: "150px", borderRadius: "50%", borderStyle: "dashed" }} />
            )}
            <input type="file" accept="image/*" ref={imageUploader} onChange={handleImageUpload} style={{display:"none"}}/>
            <button type="submit"
            onClick={() => {imageUploader.current.click()}}>
                
                <b>Choose image</b>

            </button>
        </div>

    )
}

export default Pic;