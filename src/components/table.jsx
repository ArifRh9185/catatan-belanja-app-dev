import Item from "./item"

export default function Table({items, onClearItem, onToggleCheck, sortOption}){
    let sortedItems = [...items];
    if (sortOption === 'name') {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'checked') {
      sortedItems.sort((a, b) => a.checked - b.checked);
    }


    return (
        <>
        <table className="w-[80%] text-2xl h-[240px] flex flex-row overflow-y-scroll justify-center text-center bg-white ">
            <tbody className="w-full flex justify-center">
                <tr className="w-full flex justify-center">
                    <td className="w-full">
                    {sortedItems.length === 0 ? (<p className="flex items-center justify-center h-[200px]">List Belanja Masih Kosong</p>) : (
                        <ul>
                            {sortedItems.map((item)=>(
                                <Item item={item} key={item.id} onClearItem={onClearItem} onToggleCheck={onToggleCheck}/>
                            ))}
                            
                        </ul>)}
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

