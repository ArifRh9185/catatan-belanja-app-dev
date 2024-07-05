export default function Item({item, onClearItem, onToggleCheck}){

    return (
        <li key={item.id} className="flex gap-3 justify-center border-b">
            <input 
                type="checkbox"
                checked={item.checked}
                onChange={() => onToggleCheck(item.id)}
                />
            <span style={item.checked ? {backgroundColor:"red"} : {}}>{item.quantity} {item.name}</span>
            <button onClick={() => onClearItem(item.id)}>⛔</button>
        </li>
    )
}