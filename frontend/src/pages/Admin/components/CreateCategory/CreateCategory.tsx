import React, { useState } from "react";
import { getTokenFromLocalStorage } from "@/utilities/localstorage";
import { createNewCategory } from "../../services/category.services";

export const CreateCategory = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file.type.match("image.*")) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setImagePreviewUrl(reader.result as string);
        };

        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const token = getTokenFromLocalStorage()!;
    await createNewCategory(formData, token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new Category</h2>

      <input type="text" name="name" placeholder="My Super Category" />
      <input type="text" name="description" placeholder="This is super category from super medias" />
      {imagePreviewUrl && (
        <div>
          <img
            src={imagePreviewUrl}
            alt="Imagen Previa"
            style={{ width: "300px" }}
          />
        </div>
      )}
      <input
        type="file"
        name="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button type="submit">Create</button>
      <button type="button">Cancel</button>
    </form>
  );
};
