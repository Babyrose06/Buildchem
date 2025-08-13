// Icons
import { MdPostAdd } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { PiPackageDuotone } from "react-icons/pi";
import { FaRegUser, FaRegUserCircle } from 'react-icons/fa';

// Build link with optional user ID
const buildHref = (basePath: string, userId?: string | null) =>
  `${basePath}${userId ? `?id=${encodeURIComponent(userId)}` : ""}`;

// Generate full menu regardless of role
const getMenuItems = (userId: string | null = "") => {
  const menu = [];

  // POSTS section
  menu.push({
    title: "Customer Database",
    icon: FaRegUser,
    subItems: [
      {
        title: "Active",
        description: "View all your published and draft data",
        href: buildHref("/Backend/Buildchem/Database/Active", userId),
      },
    ],
  });

   menu.push({
    title: "Activities",
    icon: FaRegUser,
    subItems: [
      {
        title: "Daily Activity",
        description: "View all your published and draft data",
        href: buildHref("/Backend/Buildchem/Activities/DailyActivity", userId),
      },
    ],
  });

  return menu;
};

export default getMenuItems;
