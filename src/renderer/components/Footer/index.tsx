import React, { useContext, useState } from "react"

import StandaloneContext from "../../contexts/Standalone"

import Footer from "./Stateless"

export default function ConnectedFooter() {
  const { connections, selectedConnection, selectConnection } = useContext(StandaloneContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Footer
      connections={connections}
      selectedConnection={selectedConnection}
      onChangeConnection={selectConnection}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  )
}
