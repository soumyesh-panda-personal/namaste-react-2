const ItemList = ({ items })=> {
    //console.log({items})
    return (
        <div>
            {/*item List*/}
            {items.map((item, index) => (
                <div key={index}>
                    <div className="accordianHead">
                        <span className="font-bold">{item.title} ({item.itemCards.length})</span>
                        <span>{item.itemCards.map((card) => (
                            <div key={card?.card?.info.id}>
                                <div className="text-left text-sm mb-5">
                                    {card?.card?.info?.name} - {(card?.card?.info?.price)/100}
                                </div>
                            </div>
                        ))}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;