import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";

export default function Formtwo() {
  const { handleSubmit, register } = useForm();

  const inputref = useRef(null);

  // const handledata = (data) => {
  //   console.log(data);
  // };

  // const handledata = useMemo((data) => {
  //   return data;
  // }, []);

  useEffect(() => {
    inputref.current.focus();
  }, []);

  return (
    <div>
      <form>
        <label>name : </label>
        <input ref={inputref} placeholder="enter" />

        <br />
        <br />

        <label>age : </label>

        <input {...register("age")} placeholder="enter" />

        <br />
        <br />

        {/* <button onClick={handleSubmit(handledata)}>Submit</button> */}
      </form>
    </div>
  );
}
