"use client";

import { useActionState } from "react";
import { creatingUser } from "./actions";

export default function HomeForm() {
  const [state, actionFunc, pending] = useActionState(creatingUser, {
    error: "",
  });

  return (
    <form action={actionFunc}>
      <input type="text" name="name" placeholder="write you name here" />
      <input type="text" name="email" placeholder="email" />
      <p>
        {state.name} : {state.email}
      </p>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.success && <p style={{ color: "green" }}>User Created</p>}

      <button disabled={pending}>
        {pending ? "Creating User..." : "Create User"}
      </button>
    </form>
  );
}
