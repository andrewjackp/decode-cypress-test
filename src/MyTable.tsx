import React from "react";
import { useDecode } from "@decode/client";

export default function MyTable() {
  let { data } = useDecode("listUsers");
  return (
    <div>
      <p>Data: TODO</p>
    </div>
  );
}
