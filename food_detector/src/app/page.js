import ImageUpload from "./ImageUpload";
export default function Home() {
  return (
    <div className="flex items-center justify-center flex-wrap py-20 px-10 space-y-8">
      <h1 className="font-bold sm:text-4xl text-2xl w-full text-center">
        Fridge Ingredient Detection with AI
      </h1>
      <ImageUpload></ImageUpload>
    </div>
  );
}
