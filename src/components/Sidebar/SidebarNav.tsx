import { Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import NavLink from "./NavLink"
import NavSection from "./NavSection"

const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
    <NavSection title="Geral">
      <NavLink icon={RiDashboardLine}>Dasboard</NavLink>
      <NavLink icon={RiContactsLine}>Usuários</NavLink>
    </NavSection>
    <NavSection title="Automação">
      <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
      <NavLink icon={RiGitMergeLine}>Formulários</NavLink>
    </NavSection>
  </Stack>
  )
}

export default SidebarNav