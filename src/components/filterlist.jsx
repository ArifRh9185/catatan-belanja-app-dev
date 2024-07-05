import { useState } from "react"

export default function FilterList({ onAddItem}){

    const quantityNum=[...Array(10)].map((_, i) => (
        <option className="bg-slate-800" key={i + 1} value={i +1 }>{i+1}</option>
    ))

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)

    function handleSubmit(e){
        e.preventDefault()
        if(!name) return
        
        const newItem = {
            name, quantity, checked: false, id:Date.now()};
            onAddItem(newItem)
        
        setName('')
        setQuantity(1)
    }

    return (
        <>
        <div className="flex justify-center md:text-xl xl:text-2xl items-center font-semibold text-green-900 text-lg  mx-5 w-[80%] h-10 bg-green-500">
            <h1>Hari ini mau belanja apa?</h1>
        </div>
        <div className="bg-green-500 mx-5 w-[80%]">
            <form className="flex flex-col md:my-2 gap-2 md:flex-row items-center justify-center " onSubmit={handleSubmit}>
            <div className="flex justify-around gap-2">
                <select className="bg-transparent border box-border text-yellow-300 rounded-2xl text-sm md:text-lg sm:px-1  py-0 md:px-2" name="quantity" id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} >
                    {quantityNum}
                </select>   
                <input className="rounded-xl px-2 text-sm md:text-lg box-border bg-transparent border border-slate-300  placeholder:text-yellow-300 focus:text-slate-900 focus:font-semibold"  type="text" value= {name} onChange={(e) => setName(e.target.value)}  placeholder="Nama Barang"/>
            </div>
            <button className="md:border w-full  mx-1 md:w-auto border-slate-300 md:rounded-xl px-3 text-lg bg-green-800 hover:bg-green-900 text-white font-semibold ">Tambah ✅</button>
            </form>
        </div>
        
        </>
        
    )
}










