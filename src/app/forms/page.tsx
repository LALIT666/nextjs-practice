export default function HomeForm() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;

    if (!name || !name.trim()) {
      console.log("Error: name is required");
      return;
    }

    console.log("name is: ", name);
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
