class ProductManager {
  constructor(){
    this.products = []
  }
  
  getProducts(){
    return this.products
  }
  
  addProduct({title, desc, price, thumbnail, code, stock}){
    
    // Aqui solo valido por el título o por el código, no hay problema que se repita cualquiera de los otros campos
    const findedProduct = this.products.find((product) => product.title === title || product.code === code)
    
    if(findedProduct){
      console.log(`Error ya existe un producto con ese titulo o código ${title} - ${code} `)
    }else{
      const id = this.products.length + 1
      this.products.push({id,title, desc, price, thumbnail, code, stock})
    }
  }
  
  
  getProductById(id){
    const findedProduct = this.products.find((product) => product.id === id)
    
    if(findedProduct){
      console.log('Producto encontrado \n' + JSON.stringify(findedProduct))
    }else{
      console.log('No se encuentra un producto con ese id')
    }
  }
}

const productManager = new ProductManager()

// --- operaciones -- //

const newProduct1 = {
  title: 'P1',
  desc: 'D1',
  price: 'P1',
  thumbnail: 'T1',
  code : 'C1',
  stock: 'S1'
}

const newProduct2 = {
  title: 'P2',
  desc: 'D2',
  price: 'P2',
  thumbnail: 'T2',
  code : 'C2',
  stock: 'S2'
}

const newProduct3 = {
  title: 'P3',
  desc: 'D3',
  price: 'P3',
  thumbnail: 'T3',
  code : 'C3',
  stock: 'S3'
}

const newProduct4 = {
  title: 'P4',
  desc: 'D4',
  price: 'P4',
  thumbnail: 'T4',
  code : 'C4',
  stock: 'S4'
}
productManager.addProduct(newProduct1)
productManager.addProduct(newProduct2)
productManager.addProduct(newProduct3)
productManager.addProduct(newProduct4)

console.log(productManager.getProductById(1))
