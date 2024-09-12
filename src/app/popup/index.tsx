"use client";

import { ReactElement, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Popup() {
  const [progress, setProgress] = useState(75);
  const MySwal = withReactContent(Swal);

  return MySwal.fire({
    title: (
      <Image
        width={266}
        height={195}
        src={"/assets/media/popup-loader.svg"}
        alt={"Loader Image"}
        priority={true}
      />
    ),
    text: "Entering the system...",
    html: (
      <ProgressBar
        completed={progress}
        className="progressBar"
        bgColor="linear-gradient(90deg, #006838 0%, #96CF24 100%)"
        // labelAlignment="outside"
        labelColor="white"
        labelSize="16px"
        // width="50%"
      />
    ),
    // timer: 3000,
    // timerProgressBar: true,
    showConfirmButton: false,
  });
}
