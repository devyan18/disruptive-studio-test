import styles from "./CategoryAccordion.module.css";
import { FaRegFolderOpen } from "react-icons/fa6";
import { LuFolderTree } from "react-icons/lu";

import { Category } from "@/model/Category";
import { useState } from "react";
import { useThematic } from "@/context/view/ThematicProvider";

type Props = {
  category: Category;
};

export default function CategoryAccordion (props: Props) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const { setThematic } = useThematic();

  return (
    <div className={styles.CategoryAccordionContainer}>
      <div onClick={() => setOpen((prev) => !prev)}>
        <p>
          <FaRegFolderOpen /> {props.category.name}
        </p>
      </div>
      <div style={{ marginLeft: "20px", display: isOpen ? "block" : "none" }}>
        {props.category.thematics.map((thematic) => {
          return (
            <ul key={thematic.id}>
              <li className={styles.offInfo} onClick={() => {
                setThematic(thematic);
              }}>
                <span>
                  <LuFolderTree /> {thematic.thematic}
                </span>
                <span>
                  {thematic.usingImage && (
                    <small className={styles.badgeYellow}>{"Images"}</small>
                  )}
                  {thematic.usingFiles && (
                    <small className={styles.badgePurple}>{"Files"}</small>
                  )}
                  {thematic.usingUrl && (
                    <small className={styles.badgeGreen}>{"URL"}</small>
                  )}
                </span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
