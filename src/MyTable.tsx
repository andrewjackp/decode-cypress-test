import React from "react";
import { useDecode, ShowDecodeError, useLogout } from "@decode/client";

export default function MyTable() {
  let { data, error } = useDecode("getTest");
  let logout = useLogout();
  if (error) return <ShowDecodeError error={error} />;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <p>Data: {data && data.env}</p>
      <button onClick={() => logout()}> Logout</button>
    </div>
  );
}
