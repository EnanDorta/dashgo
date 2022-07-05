import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import { ElementType } from "react"

interface NavLinkProps extends ChakraLinkProps {
  children: string
  icon: ElementType
}

const NavLink = ({ children, icon, ...rest }: NavLinkProps) => {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}

export default NavLink