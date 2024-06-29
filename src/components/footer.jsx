
export default function Footer({items, onToggleCheck}){
    const totalItem= items.length;
    const checkedItem= items.filter(item => item.checked).length;
    const percentageChecked = (checkedItem / totalItem * 100).toFixed() + '%';
    return (
        <>
        <footer className="stats flex justify-center items-center font-semibold flex-col md:flex-row gap-3 text-green-200 p-4 text-center md:text-lg text-sm mx-5 w-[80%] md:py-5 pt-2 bg-green-800 border-slate-200 rounded-b-3xl">Ada {totalItem} barang di daftar belanjaan, {checkedItem} barang sudah dibeli {(items.length === 0 ? (0 + '%') : (percentageChecked))}</footer>
        </>
    )
}       