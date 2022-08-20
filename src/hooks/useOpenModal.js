import { useState } from "react";

export default function useOpenModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

//   function handleOpen() {
//     setOpen(!open);
//   }

  return { open, handleOpen };
}
