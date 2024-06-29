import Swal from "sweetalert2"

export default function Header(){
    const hTitle = {
        title: 'Catatan BelanjaQ 🧾',
        description:'App catatan belanja browser',
        version: 1.1
    }

    function info(){
        Swal.fire({
          title: hTitle.title,
          customClass: {
            title: 'text-yellow-400 text-md'
        },
          text: hTitle.description,
          html: `${hTitle.description}<br> version: ${hTitle.version}`,
          background:'#114232',
          color:'#90D26D',
          confirmButtonColor: "#FFBF00",
        })
      }
    return (
        <div className="mt-5 flex relative justify-center md:text-3xl xl:text-4xl rounded-t-3xl items-center font-semibold text-yellow-300 text-2xl  mx-5 w-[80%] h-20 bg-green-700 border-b-8 border-slate-200">
            <h1>{hTitle.title}</h1>
            <button onClick={info} className="italic bg-green-900 absolute hover:text-yellow-200 hover:bg-green-950 right-[-10px] top-[-5px] p-1 px-3 rounded-3xl text-sm">i</button>
        </div>
    )
        
    
}