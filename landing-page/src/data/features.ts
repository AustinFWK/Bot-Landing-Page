import type { SvgIconComponent } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import NotificationsIcon from "@mui/icons-material/Notifications";

export type Feature = {
  title: string;
  description: string;
  icon: SvgIconComponent;
};

export const features: Feature[] = [
  {
    title: "Instant updates",
    description: "Get updates immediately after patch notes are posted",
    icon: ElectricBoltIcon,
  },
  {
    title: "TLDR Summary",
    description: "Quick overview of what's changed",
    icon: PsychologyIcon,
  },
  {
    title: "Agent changes only",
    description: "Focuses only on agent adjustments",
    icon: ThumbUpAltIcon,
  },
  {
    title: "Channel customization",
    description: "You decide where updates go",
    icon: SettingsIcon,
  },
  {
    title: "Clean formatting",
    description: "Easy-to-read discord format",
    icon: CleaningServicesIcon,
  },
  {
    title: "Automatic updates",
    description: "Set it once and forget it",
    icon: NotificationsIcon,
  },
];
