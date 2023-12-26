'use client';
import { useState } from "react";
import Drawer from "./drawer";
import AppBar from "./app-bar";

const UI = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer {...{ open, setOpen }} />
      <AppBar {...{ open, setOpen }} />
    </>
  )
}

export default UI;