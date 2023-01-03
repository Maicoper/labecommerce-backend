export type TUsuario = {
    id: string
    email: string
    password: string
}[]

export type TProduto = {
    id: string
    name: string
    price: number
    category: string
}[]

export type TCompra = {
    userId: string
    productId: string
    quantity: number
    totalPrice: number
}[]