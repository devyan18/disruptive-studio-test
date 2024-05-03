import { Layout, SideMenu, MultimediaList, MultimediaView } from "./components";

export default function AppPage () {
  return (
    <Layout>
      <SideMenu />
      <MultimediaList />
      <MultimediaView />
    </Layout>
  );
}
