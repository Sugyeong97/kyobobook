import { main_menu_list } from "@/contexts/VariousList";
import WelcomeMarketingItem from "../atom/WelcomeMarketingItem";

export default function WelcomeMarketingGroup() {
  return <WelcomeMarketingItem items={main_menu_list} />;
}
