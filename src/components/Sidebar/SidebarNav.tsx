import { Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import NavLink from "./NavLink"
import NavSection from "./NavSection"

const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine} href="/dashboard">Dasboard</NavLink>
        <NavLink icon={RiContactsLine} href={"/users"}>Usuários</NavLink>
      </NavSection>
      <NavSection title="Automação">
        <NavLink icon={RiInputMethodLine} href={"/forms"}>Formulários</NavLink>
        <NavLink icon={RiGitMergeLine} href={"/automation"}>Automação</NavLink>
      </NavSection>
  </Stack>
  )
}

export default SidebarNav