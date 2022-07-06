import { createContext ,ReactNode, useContext } from "react";
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'


interface SidebarDrawerContext {
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export const SidebarDrawerProvider = ({ children }: SidebarDrawerContext) => {
  const disclosure = useDisclosure()

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      { children }
    </SidebarDrawerContext.Provider>
  )
} 

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)