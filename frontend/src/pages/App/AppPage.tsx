import ThematicProvider from "@/context/view/ThematicProvider";
import { Layout, SideMenu, MultimediaList, MultimediaView } from "./components";

export default function AppPage () {
  return (
    <ThematicProvider>
      <Layout>
        <SideMenu />
        <MultimediaList />
        <MultimediaView />
      </Layout>
    </ThematicProvider>
  );
}
