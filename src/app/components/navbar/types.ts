import { ReactNode } from 'react'

export interface NavbarProps {
    logoUrl: string
    brandName: string
    rightSection?: () => ReactNode
}
