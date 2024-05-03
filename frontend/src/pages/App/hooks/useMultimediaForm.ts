import { Category } from "@/model/Category";
import { Thematic } from "@/model/Thematic";
import React, { useEffect, useState } from "react";
import { createMultimedia } from "../services/multimedia.service";
import { getTokenFromLocalStorage } from "@/utilities/localstorage";
import { getAllCategories } from "@/pages/Admin/services/category.services";

export default function useMultimediaForm () {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategorie, setSelectedCategorie] = useState<Category | null>(
    null
  );
  const [selectedThematic, setSelectedThematic] = useState<Thematic | null>(
    null
  );

  const handleSelectCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = categories.find(
      (category) => category.id === event.target.value
    );
    setSelectedCategorie(selectedCategory ?? null);
  };

  const handleSelectedThematic = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedThematic = selectedCategorie?.thematics.find(
      (thematic) => thematic.id === event.target.value
    );

    console.log(selectedThematic);
    setSelectedThematic(selectedThematic ?? null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const title = formData.get("title");
    const category = formData.get("category");
    const thematic = formData.get("thematic");

    console.log(title, category, thematic);

    if (!title || !category || !thematic) {
      return;
    }

    const token = getTokenFromLocalStorage()!;

    await createMultimedia(
      formData,
      token,
      !!(selectedThematic?.usingFiles || selectedThematic?.usingImage)
    );
  };

  useEffect(() => {
    getAllCategories().then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategorie) {
      setSelectedThematic(selectedCategorie?.thematics[0]);
      return;
    }

    if (categories.length > 0) {
      setSelectedCategorie(categories[0]);
    }
  }, [categories, selectedCategorie]);

  return {
    handleSubmit,
    handleSelectCategory,
    categories,
    selectedCategorie,
    handleSelectedThematic,
    selectedThematic
  };
}
