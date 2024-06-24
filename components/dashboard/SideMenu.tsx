import {
  Box,
  Menu,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { GiLightningTear } from "react-icons/gi";
import {
  MdDashboardCustomize,
  MdEditDocument,
  MdOutlineDocumentScanner,
  MdQuestionMark,
} from "react-icons/md";

const SideMenu = () => {
  return (
    <Box>
      <GiLightningTear />
      <Menu isOpen={true}>
        <MenuList border="none" boxShadow="none">
          <MenuGroup title="Profile">
            <MenuItem icon={<MdDashboardCustomize />}>Dashboard</MenuItem>
            <MenuItem icon={<MdEditDocument />}>Profile </MenuItem>
          </MenuGroup>
          <MenuDivider color="gray" />
          <MenuGroup title="Help">
            <MenuItem icon={<MdOutlineDocumentScanner />}>Docs</MenuItem>
            <MenuItem icon={<MdQuestionMark />}>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};
export default SideMenu;
