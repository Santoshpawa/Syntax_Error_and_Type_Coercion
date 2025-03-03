const checkout={
    items: [],
    total: 0,
    addItem(item){
        if(typeof item.price!= "number")
            console.log("Invalid Price")
        this.items.push(item)
        this.total+=item.price
    },
    getTotal(){
        console.log(this.total)
    }
}

checkout.addItem({ name: "Coffee Maker",price:90})
checkout.addItem({ name: "Shuttle Cock",price:100})
checkout.getTotal();
console.log(checkout.items)
