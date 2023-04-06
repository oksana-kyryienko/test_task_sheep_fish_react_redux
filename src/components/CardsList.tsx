// import React, { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../hooks/redux";
// import * as productsActions from "../store/reducers/ProductSlice";
// import { products } from "../store/reducers/ProductSlice";
// import CardsItem from "./CardsItem";

// const CardList = () => {
//   const dispatch = useAppDispatch();
//   const allProducts = useAppSelector(products);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchCategory, setSearchCategory] = useState("");
//   const [sortKey, setSortKey] = useState("");
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

//   useEffect(() => {
//     dispatch(productsActions.init());
//   }, [dispatch]);

//   const handleSearch = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     setSearchTerm: React.Dispatch<React.SetStateAction<string>>
//   ) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleTitleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     handleSearch(e, setSearchTerm);
//   };

//   const handleCategorySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     handleSearch(e, setSearchCategory);
//   };

//   const getValueByPath = (obj: any, path: string) => {
//     const parts = path.split(".");
//     let value = obj;
//     for (const part of parts) {
//       value = value[part];
//     }
//     return value;
//   };

//   const compareValues = (a: any, b: any, sortOrder: "asc" | "desc") => {
//     if (typeof a === "string" && typeof b === "string") {
//       const lowerCaseValueA = a.toLowerCase();
//       const lowerCaseValueB = b.toLowerCase();
//       return sortOrder === "asc"
//         ? lowerCaseValueA.localeCompare(lowerCaseValueB)
//         : lowerCaseValueB.localeCompare(lowerCaseValueA);
//     } else {
//       return sortOrder === "asc" ? a - b : b - a;
//     }
//   };

//   const sortedProducts = [...allProducts].sort((a, b) => {
//     const valueA = getValueByPath(a, sortKey) as string | number;
//     const valueB = getValueByPath(b, sortKey) as string | number;
//     return compareValues(valueA, valueB, sortOrder);
//   });

//   const filteredProducts = sortedProducts.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (sortKey) {
//     filteredProducts.sort((a, b) => {
//       const valueA = a[sortKey] as string | number;
//       const valueB = b[sortKey] as string | number;
//       if (typeof valueA === "string" && typeof valueB === "string") {
//         const lowerCaseValueA = valueA.toLowerCase();
//         const lowerCaseValueB = valueB.toLowerCase();
//         return sortOrder === "asc"
//           ? lowerCaseValueA.localeCompare(lowerCaseValueB)
//           : lowerCaseValueB.localeCompare(lowerCaseValueA);
//       } else {
//         return sortOrder === "asc"
//           ? (valueA as number) - (valueB as number)
//           : (valueB as number) - (valueA as number);
//       }
//     });
//   }

//   const handleSort = (key: string) => {
//     if (sortKey === key) {
//       setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
//     } else {
//       setSortKey(key);
//       setSortOrder("asc");
//     }
//   };

//   return (
//     <div className="container">
//       <table className="table">
//         <thead>
//           <tr>
//             <th onClick={() => handleSort("category")}>
//               Category
//               {sortKey === "category" && sortOrder === "asc" && "▲"}
//               {sortKey === "category" && sortOrder === "desc" && "▼"}
//               <input
//                 type="text"
//                 value={searchCategory}
//                 onChange={handleCategorySearch}
//               />
//             </th>
//             <th>Image</th>
//             <th onClick={() => handleSort("title")}>
//               Title
//               {sortKey === "title" && sortOrder === "asc" && "▲"}
//               {sortKey === "title" && sortOrder === "desc" && "▼"}
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleTitleSearch}
//               />
//             </th>
//             <th onClick={() => handleSort("price")}>
//               Price
//               {sortKey === "price" && sortOrder === "asc" && "▲"}
//               {sortKey === "price" && sortOrder === "desc" && "▼"}
//             </th>
//             <th>Details</th>
//             <th onClick={() => handleSort("rating.rate")}>
//               Rate
//               {sortKey === "rating.rate" && sortOrder === "asc" && "▲"}
//               {sortKey === "rating.rate" && sortOrder === "desc" && "▼"}
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map((product) => (
//             <CardsItem key={product.id} item={product} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CardList;
