import { NavigationTitle } from "@/components/main/navigation/navigation-title.tsx";
import { NavigationItem } from "@/components/main/navigation/navigation-item.tsx";
import { NavigationItemBtn } from "@/components/main/navigation/navigation-item-btn.tsx";

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-4">
      <NavigationTitle>Seo Buffer</NavigationTitle>
      <ul className="font-plex-mono flex items-center justify-end gap-12 text-base">
        <NavigationItem targetId={"#price"}>Price</NavigationItem>
        <NavigationItem targetId={"#faq"}>F.A.Q</NavigationItem>
        <NavigationItem targetId={"#contact"}>Contact</NavigationItem>
        <NavigationItemBtn to={"/authentication"}>Dashboard</NavigationItemBtn>
      </ul>
    </nav>
  );
};
