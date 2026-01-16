import { useState } from "react";
import GateSection from "./components/GateSection";
import BackgroundMusic from "./components/BackgroundMusic";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import WishWall from "./components/WishWall";
import MysteryBox from "./components/MysteryBox";
import EmotionalNote from "./components/EmotionalNote";
import FinalWish from "./components/FinalWish";
import LittleThings from "./components/LittleThings";
import WishGrid from "./components/WishGrid";
import SpecialCards from "./components/SpecialCards";
import SurpriseModal from "./components/SurpriseModal";

function App() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <GateSection onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <>
      <BackgroundMusic play={unlocked} />
      <Hero />
      <Countdown />
      <WishWall />
      <MysteryBox />
      <EmotionalNote />
      <LittleThings />
      <FinalWish />
      <WishGrid/>
      <SpecialCards/>
      <SurpriseModal/>
  
    </>
  );
}

export default App;
