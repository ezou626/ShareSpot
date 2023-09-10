"use client";
import { useState } from "react";
import NavigationBar from "../components/navigationBar";
import UploadModal from "../components/uploadModal";

export default function Profile() {

    const [showModal, setShowModal] = useState(false);

    return <>
        <NavigationBar ></NavigationBar>
        {showModal ? <UploadModal unShowModal={() => setShowModal(false)} /> : <></>}
        <button>Add USB</button>
    </>
}