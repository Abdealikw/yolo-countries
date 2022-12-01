import { SearchInput } from '../../components'
import { SearchIcon, XCircleIcon } from '../../components/icons'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { changeSearchInputValue, selectSearchInputValue } from '../../store/home-page/homePageSlice'

export default function SearchSection() {
    const inputValue = useAppSelector(selectSearchInputValue)
    const dispatch = useAppDispatch()
    const handleRightIconClick = () => dispatch(changeSearchInputValue(''))
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(changeSearchInputValue(e.target.value.toUpperCase()))

    return (
        <div className="md:w-6/12">
            <SearchInput
                label="Search"
                placeholder="Search countries"
                leftIcon={() => <SearchIcon className="w-5 h-5 text-blue-500" />}
                rightIcon={() =>
                    inputValue !== '' ? (
                        <div onClick={handleRightIconClick}>
                            <XCircleIcon className="w-5 h-5 text-blue-500" />
                        </div>
                    ) : (
                        <></>
                    )
                }
                onChange={handleValueChange}
                value={inputValue}
            />
        </div>
    )
}
