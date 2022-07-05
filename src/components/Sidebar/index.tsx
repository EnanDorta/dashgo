import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine  } from 'react-icons/ri'
import NavLink from "./NavLink";
import NavSection from "./NavSection";

const SideBar = () => {
  return (
   <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <NavSection title="Geral">
              <NavLink icon={RiDashboardLine}>Dasboard</NavLink>
              <NavLink icon={RiContactsLine}>Usuários</NavLink>
          </NavSection>
        </Box>
        <Box>
          <NavSection title="Automação">
              <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
              <NavLink icon={RiGitMergeLine}>Formulários</NavLink>
          </NavSection>
        </Box>
      </Stack>
   </Box>
  )
}

export default SideBar;