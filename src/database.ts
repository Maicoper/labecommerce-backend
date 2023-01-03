import { TUsuario } from "./types"
import { TProduto } from "./types"
import { TCompra } from "./types"

export const usuarios: TUsuario = [
    {
        id: "12000",
        email: "maicon@gmail.com",
        password: "12345"
    }, {
        id: "12001",
        email: "mcn@gmail.com",
        password: "56789"
    }]

export const produtos: TProduto = [
    {
        id: "1500",
        name: "Refrigerante",
        price: 5,
        category: "Bebidas"
    }, {
        id: "1501",
        name: "Biscoito",
        price: 2,
        category: "Alimentos"
    }]

export const compras: TCompra = [
    {
        userId: "12000",
        productId: "1500",
        quantity: 2,
        totalPrice: 10
    }, {
        userId: "12001",
        productId: "1501",
        quantity: 3,
        totalPrice: 6
    }]