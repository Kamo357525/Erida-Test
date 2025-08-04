"use client";
import React from 'react';
import carData from "@/data/data";
import {useParams} from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ItemBody from "@/components/itemBody";

function Page(props) {
  const router = useParams();
  const { id } = router;
  const car = carData.find((car) => car.id === id);

    return (
        <div>
            <ItemBody car={car}/>
        </div>
    );
}

export default Page;