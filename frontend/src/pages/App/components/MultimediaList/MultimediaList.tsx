import { useEffect, useState } from "react";
import styles from "./MultimediaList.module.css";
import { Category } from "@/model/Category";
import { getAllCategories } from "@/pages/Admin/services/category.services";
import { CategoryAccordion } from "../CategoryAccordion";

export default function MultimediaList () {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories()
      .then(response => {
        setCategories(response.data);
      });
  }, []);

  return (
    <div className={styles.MultimediaListContainer}>
      {
        categories?.length > 0 && categories.map((el: Category) => {
          return <CategoryAccordion key={el.id} category={el} />;
        })
      }
    </div>
  );
}
