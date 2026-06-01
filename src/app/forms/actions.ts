"use server";

type formState = {
  error: string;
  success?: boolean;
};
export async function submitForms(prevState: formState, formData: FormData) {
  const name = formData.get("name")?.toString() || "";
  if (!name.trim()) {
    return { error: "Name is Required" };
  }

  console.log("name is : ", name);
  return { error: "", success: true };
}
