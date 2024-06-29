import { useState } from 'react'
import Header from './components/header'
import FilterList from './components/filterlist'
import Table from './components/table'
import Action from './components/action'
import Footer from './components/footer'  
import Swal from 'sweetalert2'
import groceryList from './components/groceryList'
import { useEffect } from 'react'

export default function App() {

  useEffect(() => {
    // Detect if opened from standalone mode (PWA)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      document.documentElement.requestFullscreen();
    }
  }, []);

const [items, setItems] = useState(groceryList)

const [sortOption, setSortOption] = useState('input');

const handleSortChange = (option) => {
  setSortOption(option);
  // Tambahkan logika pengurutan sesuai dengan opsi yang dipilih (contoh sederhana)
  let sortedItems = [...items];
  if (option === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (option === 'checked') {
    sortedItems.sort((a, b) => a.checked - b.checked);
  }else if (option === 'quantity') {
    sortedItems.sort((a, b) => a.quantity - b.quantity);
  }else if (option === 'quantityDesc') {
    sortedItems.sort((a, b) => b.quantity - a.quantity);
  }
  setItems(sortedItems);
};



function handleToggleCheck(id){
  setItems((items) => items.map((item) => item.id === id ? {...item, checked : !item.checked } : item))
}

function handleAddItem(item){
  setItems([...items, item])
}

function handleClearItem(id){
  setItems((items)=> items.filter((item) => item.id !== id))
}

function handleClearList(){
  Swal.fire({
    title: "Hapus semua daftar belanja?",
    text: "Ini akan menghapus semua daftar",
    icon: "warning",
    showCancelButton: true,
    background:'#114232',
    color:'#90D26D',
    confirmButtonColor: "#FFBF00",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, hapus semua",
    cancelButtonText:"tidak jadi"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Terhapus!",
        background:'#114232',
        color:'#90D26D',
        text: "Daftar belanja sudah kosong",
        icon: "success",
        confirmButtonColor:'#FFBF00'
      });
      setItems([])
    }
  });
}


  return (
  <div className='flex flex-col justify-center items-center'>
  <Header/>
  <FilterList onAddItem={handleAddItem} onClearItem={handleClearItem}/>
  <Table items={items} onClearItem={handleClearItem} onToggleCheck={handleToggleCheck} sortOption={sortOption}/>
  <Action onClearList={handleClearList} onSortChange={handleSortChange} />
  <Footer items={items} onToggleCheck={handleToggleCheck} />
  </div>
  )
}

