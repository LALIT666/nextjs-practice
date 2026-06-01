"use server";

type FormState = {
  error: string;
  success?: boolean;
};
export async function creatingUser(prevState: FormState, formData: FormData) {
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";

  if (!name.trim()) {
    return { error: "Name is Required" };
  }

  if (!email.includes("@")) {
    return { error: "Invalid email" };
  }

  console.log(`name: ${name} and email: ${email}`);
  return { error: "", success: true, name, email };
}
