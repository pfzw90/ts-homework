import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    total(): number {
       return (this._items.length) ? this._items.reduce((a,b) => a + b.price, 0) : 0
    }

    totalDiscount(discount:number): number {
        return this.total() * (1 - discount / 100)
    }

    del(item:number) : string {
        const i = this._items.findIndex((elem) => elem['id'] == item);
        if (i<0) throw new Error('Проверьте правильность введенного id');
        this._items.splice(i,1);
        return 'Удалено успешно'
    }
    
 }
