export interface SearchInputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    leftIcon?: () => JSX.Element
    rightIcon?: () => JSX.Element
}
