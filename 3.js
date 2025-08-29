class Unversitet {
    static departments = []

    constructor(name) {
        this.name = name
    }

    adddepartman(name) {
       
        if (!Unversitet.departments.includes(name)) {
            Unversitet.departments.push(name)
            console.log(`${name} bo'limi qo'shildi`)
        } else {
            console.log("Bunday bo'lim bor, afsuski")
        }
    }

    deletedepartmen(name) {
        let index = Unversitet.departments.indexOf(name)
        if (index !== -1) {
            Unversitet.departments.splice(index, 1)
            console.log(`${name} bo'limi o'chirildi`)
        } else {
            console.log("Bunday bo'lim topilmadi")
        }
    }
}

let uni = new Unversitet("TATU")
uni.adddepartman("Matematika")
uni.adddepartman("Fizika")
console.log(Unversitet.departments)

uni.deletedepartmen("Fizika")
console.log(Unversitet.departments)
uni.deletedepartmen("Biologiya") 
