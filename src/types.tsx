export interface House {
  url: string
  name: string
  region: string
  coatOfArms: string
  words: string
  titles: string[]
  seats: string[]
  currentLord: string
  heir: string
  overlord: string
  founded: string
  founder: string
  diedOut: string
  ancestralWeapons: string[]
  cadetBranches: string[]
  swornMembers: string[]
}

export type HouseSigil = {
  url: string
  position: {
    top: string
    left: string
  }
  image: string
}

export type SigilProps = {
  handleSideContainer: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  houseSigil: HouseSigil
  houseName: string
}

export type SideContainerProps = {
  showContainer: boolean
  showHouse: House | undefined
  handleCloseButton: () => void
}

export type HouseComponentType = {
  houseDetails: House | undefined
}
