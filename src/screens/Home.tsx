import {MainLayout} from "@/layouts/MainLayout.tsx";
import {MainScreen} from "@/layouts/MainScreen.tsx";
import {InfoCard} from "@/components/cards/InfoCard.tsx";

export const Home = () => {
  return (
    <MainLayout>
      <MainScreen/>
      <InfoCard/>
    </MainLayout>
  );
};
