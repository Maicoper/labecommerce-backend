"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compras = exports.produtos = exports.usuarios = void 0;
exports.usuarios = [
    {
        id: "12000",
        email: "maicon@gmail.com",
        password: "12345"
    }, {
        id: "12001",
        email: "mcn@gmail.com",
        password: "56789"
    }
];
exports.produtos = [
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
    }
];
exports.compras = [
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
    }
];
//# sourceMappingURL=database.js.map