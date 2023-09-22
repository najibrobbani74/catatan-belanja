export default function Footer({ groceryItems }) {
    if (groceryItems.length == 0) return (<footer className="stats">Daftar belanja masih kosong</footer>)
    const checkedItemsCount = groceryItems.filter((item) => { if (item.checked) return item }).length
    return (
        <footer className="stats">Ada {groceryItems.length} barang di daftar belanjaan, {checkedItemsCount} barang sudah dibeli ({Math.round((checkedItemsCount / groceryItems.length) * 100)}%)</footer>
    )
}