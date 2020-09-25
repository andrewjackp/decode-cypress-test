import React from "react";
import { useDecode, ShowDecodeError, useLogout } from "@decode/client";
import { Button } from "antd";

export default function MyTable() {
  let { data, error } = useDecode("getTest");
  let logout = useLogout();
  if (error) return <ShowDecodeError error={error} />;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <p>Data: {data && data.env}</p>
      <>
        <Button type="primary" onClick={() => logout}>
          {" "}
          Logout
        </Button>
      </>
    </div>
  );
}
