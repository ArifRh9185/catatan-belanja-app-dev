import Item from "./item"
import './table.css'

export default function Table({items, onClearItem, onToggleCheck, sortOption}){
    let sortedItems = [...items];
    if (sortOption === 'name') {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'checked') {
      sortedItems.sort((a, b) => a.checked - b.checked);
    }


    return (
        <div className="w-[80%] h-[250px] bg-white overflow-scroll">
        <table className="w-full">
            <thead className="bg-slate-800 text-slate-300 font-bold top-0 sticky ">
                <tr className="text-sm border">
                    <td className="w-9">No</    td>
                    <td className="w-9">Kuantitas</td>
                    <td className="min-w-96">Nama Barang</td>
                    <td className="min-w-72">Keterangan</td>
                    <td className="w-9">Ceklist</td>
                </tr>
            </thead>
            <tbody>
            {sortedItems.length === 0 ? (
                    <td className="border-slate-50 h-[200px]" colSpan={5}>Daftar Belanja Masih Kosong</td>
                    ) : (
                        sortedItems.map((item, index) => (
                            <tr key={item.id} className="text-sm h-[20px]" style={item.checked ? {backgroundColor:"#DDDDDD"} : {}}>
                                <td className="h-5">{index + 1}</td>
                                <td >{item.quantity}</td>
                                <td >{item.name}<button onClick={() => onClearItem(item.id)}>⛔</button></td>
                                <td>
                                    <textarea className="w-full border text-slate-200 rounded p-1 bg-green-900 placeholder:text-slate-200 placeholder:italic placeholder:text-center placeholder:pt-2" placeholder="isi keterangan" name="description" id="description"></textarea>
                                </td>
                                <td >
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={() => onToggleCheck(item.id)}
                                    />
                                    
                                    
                                </td>
                            </tr>
                        ))
                    )}
            </tbody>
        </table>
        </div>
    )
}

