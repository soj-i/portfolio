"use client";
import Image from "next/image";
import { useState } from "react";
import { set } from "react-hook-form";


export default function UploadForm(){
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [inprogress, setInprogress] = useState<boolean>(false);


    const handleSubmit = async (e: React.FormEvent) => {
        setInprogress(true);
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file as Blob);

        const response = await fetch("api/file", {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        setPreview(data.url);
        setInprogress(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="file"
            onChange={(e) => setFile(e.target.files?.item(0) || null)}
            />
            <button type="submit">
                {inprogress ? 'Uploading...' : 'Upload'}
            </button>

            {preview && (
                <div>
                <Image src={preview} alt="test" width={1200} height={1200} />
                </div>
              )}
        </form>
    );
}