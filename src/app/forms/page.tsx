export default function HomeForm() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const name = formData.get("name");
    console.log("name is: ", name);
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
