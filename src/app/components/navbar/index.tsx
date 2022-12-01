/** Main Navbar Component */
import { NavbarProps } from './types'

export const NAVBAR_TEST_ID = 'MAIN_NAVBAR_ID' // ID to use for testing purposes only

export default function Navbar({ logoUrl, brandName, rightSection }: NavbarProps) {
    return (
        <nav data-testid={NAVBAR_TEST_ID} className={`bg-primary px-2 py-2.5`}>
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="block h-8 w-auto lg:hidden"
                                src={logoUrl}
                                alt={brandName} // This will work on mobile devices
                            />
                            <img
                                className="hidden h-8 w-auto lg:block"
                                src={logoUrl}
                                alt={brandName}
                            />
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {rightSection?.()}
                    </div>
                </div>
            </div>
        </nav>
    )
}
