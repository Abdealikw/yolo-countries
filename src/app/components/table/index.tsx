import { ITableProps } from './types'

export default function Table({ data, dataKeys, headings }: ITableProps) {
    return (
        <table className="table-auto text-center border-collapse border border-grey-700">
            <thead className="bg-blue-300">
                <tr>
                    {headings.map(heading => (
                        <th key={heading} className="border border-grey-600 px-5 py-2">
                            {heading}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-blue-200">
                {data.map(row => (
                    <tr key={row[dataKeys[0]]}>
                        {dataKeys.map(dataKey => (
                            <td key={row[dataKey]} className="border border-grey-700 py-2">
                                {row[dataKey]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
