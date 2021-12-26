
// export interface IProductItems {
//     id: number;
//     title: string;
//     qty: string | number;
//     description?: string;
//     image: string;
//     price: number;
//     rating: {
//         rate: number;
//     };
// }

export interface IFetchedData {
    id: number;
    title: string;
    price: number;
    description?: string;
    qty: number
    category: string;
    image: string;
    rating: {
        rate: number
    };
}