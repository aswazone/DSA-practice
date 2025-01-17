class Hashtable {
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key,value){
        const index = this.hash(key);
        console.log(index);
        
        // this.table[index] = value;
        let bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key, value]];
        }else{
            const sameKeyItem = bucket.find(item => item[0]=== key);
            if(sameKeyItem) sameKeyItem[1] = value;
            else bucket.push([key, value])
        }

    }


    get(key){
        const index = this.hash(key);
        // return this.table[index];

        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) return sameKeyItem[1]
            else return undefined;
        }
    }
    remove(key){
        const index = this.hash(key);
        this.table[index] = undefined;
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]) {
                console.log(i,this.table[i]);
            }
        }
    }
}

const table = new Hashtable(5);
table.set("name","aswin")
table.set('age','21');
table.set('ow','sinan')
console.log(table.get('ow'))
table.remove('name')
table.display()
console.log(table)
