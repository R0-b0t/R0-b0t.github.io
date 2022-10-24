const productos=[
    {
        id:1,
        nombre:'Pizza americana',
        precio:25
    },
    {
        id:2,
        nombre:'Pizza Italiana',
        precio:30
    },
    {
        id:3,
        nombre:'Pizza Epañola',
        precio:40
    }
]

let rpt=1
let carrito=[]

//Funcion para calcular la cantidad total
//let calcularTotal=()=>carrito.reduce((prev, act)=>(prev.precio+act.precio))
function cantidadTotal(){
    let total=0
    let numero=0   
    do{
        total+=carrito[numero]["cantidad"]*carrito[numero]["precio"]
        console.log("prueba")
        numero+=1
    }while(numero<carrito.length)
    return total
}
function agregarProducto(productoId, cantidad){
    let producto =productos.find(product=>product.id==productoId)
    carrito=[
        ...carrito,
        {
            ...producto, 
            cantidad:cantidad
        }
    ]
}
while (rpt==1) {
    let product=prompt('Seleccione el producto: \n 1=p. Americana (S/ 25.00) \n 2=p. Italina (S/ 30.00) \n 3=p. Española (S/ 40.00)')
    let cantidad=prompt('Ingrese la cantidad deseada')

    agregarProducto(product, cantidad)


    
    rpt=prompt('Desea continuar con los pedidos\n 1=Sí\n 2=No')
    if (rpt==2) {
        //cantidadTotal()
        window.alert("El total del pedido es : " + cantidadTotal())
        
    }

}