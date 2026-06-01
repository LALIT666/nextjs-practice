"use client";

import { useActionState } from "react";
import { submitForms } from "./actions";

export default function HomeForm() {
  const [state, actionFun, pending] = useActionState(submitForms, {
    error: "",
  });

  return (
    <form action={actionFun}>
      <input type="text" name="name" />
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.success && <p style={{ color: "green" }}>Form submitted!</p>}

      <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
    </form>
  );
}
