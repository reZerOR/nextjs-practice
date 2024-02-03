import ReCAPTCHA from "react-google-recaptcha";

const page = () => {
  const handleSubmit = async (FormData: FormData) => {
    "use server";
    const name = FormData.get("name");
    console.log(name);
  };
  return (
    <div className="w-96 mx-auto my-48 h-screen">
      <form action={handleSubmit} className="flex flex-col">
        <label htmlFor="name">name</label>
        <input
          className="w-full border-gray-800 px-2 py-2 mb-3 rounded-lg border"
          type="text"
          placeholder="name"
          name="name"
          required
        />
        <ReCAPTCHA
          size="normal"
          sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        />
        <div>
          <button className="bg-orange-400 inline-block py-2 px-8">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
