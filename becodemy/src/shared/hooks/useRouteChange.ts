import { useAtom } from "jotai";
import { activeNavItem } from "@/configs/constants";

const useRouteChange = () => {
  const [active, setActive] = useAtom(activeNavItem);
  return { active, setActive };
};

export default useRouteChange;
