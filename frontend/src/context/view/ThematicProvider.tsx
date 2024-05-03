import { Multimedia } from "@/model/Multimedia";
import { Thematic } from "@/model/Thematic";
import { getMultimediaByThematic } from "@/pages/App/services/multimedia.service";
import { getTokenFromLocalStorage } from "@/utilities/localstorage";
import React, { createContext, useEffect, useContext, useState } from "react";

type context = {
  thematic: null | Thematic,
  multimedia: Multimedia[],
  setThematic: (thematic: Thematic) => void;
}

const ThematicContext = createContext<context>({
  thematic: null,
  multimedia: [],
  setThematic: () => {}
});

type Props = {
  children: React.ReactNode;
}

const ThematicProvider = (props: Props) => {
  const [thematic, setThematic] = useState<Thematic | null>(null);
  const [multimedia, setMultimedia] = useState<Multimedia[]>([]);

  useEffect(() => {
    if (!thematic) {
      return;
    }

    const token = getTokenFromLocalStorage()!;
    getMultimediaByThematic(thematic.id, token)
      .then((response) => {
        setMultimedia(response?.data ?? []);
      });
  }, [thematic]);

  return (
    <ThematicContext.Provider value={{ thematic, setThematic, multimedia }}>
      {props.children}
    </ThematicContext.Provider>
  );
};

export const useThematic = () => useContext(ThematicContext);
export default ThematicProvider;
