import React from "react";
import { useDecode } from "@decode/client";

export default function MyTable() {
  let { data } = useDecode("getEnv");
  return (
    <div>
      <p>Data: {data && data.env}</p>
    </div>
  );
}
