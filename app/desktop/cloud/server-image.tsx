"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { getThumbnail, driveFetch } from "./cloud-actions";
import Image from "next/image";
import { Suspense } from "react";
import Skeleton from '@mui/material/Skeleton';

const ServerImage = ({b64, size}) => {
  // const [ size, setSize ] = useState({width:0, height:0})

  return (
       <Image width={size.width} height={size.height} alt='thumbnail image' src={b64} />
  )
}

export default ServerImage;