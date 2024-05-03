import useMultimediaForm from "../../hooks/useMultimediaForm";
import styles from "./CreateMultimedia.module.css";

export default function CreateMultimedia () {
  const {
    handleSubmit,
    handleSelectCategory,
    categories,
    selectedCategorie,
    handleSelectedThematic,
    selectedThematic
  } = useMultimediaForm();

  return (
    <div className={styles.CreateMultimediaContainer}>
      <form className={styles.CreateMultimediaForm} onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <select name="category" onChange={handleSelectCategory}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {categories.length > 0 && selectedCategorie && (
            <select name="thematic" onChange={handleSelectedThematic}>
              {selectedCategorie.thematics.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.thematic}
                </option>
              ))}
            </select>
          )}
        </div>

        {selectedThematic && selectedThematic.usingImage && (
          <div>
            <label htmlFor="image">Upload Image: </label>
            <input type="file" name="image" accept="image/*" />
          </div>
        )}

        {selectedThematic && selectedThematic.usingFiles && (
          <div>
            <label htmlFor="files">Upload Files: </label>
            <input type="file" name="files" accept="file/*" />
          </div>
        )}

        {selectedThematic && selectedThematic.usingText && (
          <div>
            <label htmlFor="text">Text: </label>
            <textarea name="text" placeholder="Text" />
          </div>
        )}

        {selectedThematic && selectedThematic.usingUrl && (
          <div>
            <label htmlFor="url">URL: </label>
            <input type="text" name="url" placeholder="URL" />
          </div>
        )}

        {selectedThematic && <button type="submit">Create</button>}
      </form>
    </div>
  );
}
