import { useState } from "react";
import Swal from "sweetalert2"


export default function Action({onClearList, onSortChange}){
    const [sortOption, setSortOption] = useState('input')
    const handleSortChange = (event) => {
        const selectedSortOption = event.target.value;
        setSortOption(selectedSortOption);
        onSortChange(selectedSortOption); 
      };

    return (
        <div className="flex justify-center items-center font-semibold flex-col md:flex-row gap-3 text-green-900 mx-5 w-[80%] md:py-5 pt-2 bg-green-700 border-slate-200">
            <select value={sortOption} onChange={handleSortChange} name="sort" id="sort" className="box-border px-2 py-1 rounded-xl text-xs sm:text-sm lg:text-md">
                <option value='input'>Urutkan berdasarkan urutan input</option>
                <option value='name'>Urutkan berdasarkan urutan nama</option>
                <option value="checked">Urutkan berdasarkan ceklist</option>
                <option value="quantity">Urutkan berdasarkan jumlah terkecil</option>
                <option value="quantityDesc">Urutkan berdasarkan jumlah terbesar</option>
                </select>
            <button onClick={onClearList} className="md:border w-full  mx-1 md:w-auto border-slate-300 md:rounded-xl px-3 text-lg bg-green-800 hover:bg-green-900 text-white">❌ Bersihkan daftar ❌</button>
        </div>
    )
}
