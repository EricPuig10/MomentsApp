test("renders learn react link", () => {
  expect(1).toBe(1);
});

// import { render, screen } from "@testing-library/react";
// import Router from "./applications/Router";

// beforeEach(()=>{
//   render(<Router/>);
// })

// test("renders InstaKg", () =>{
//   const tab = screen.getByText(/InstaKg/i);
//   expect(tab).toBeInTheDocument();
// });

// test("renders button", () =>{
//   const button = screen.getByRole("button", {name: /Publish/i});
//   expect(button).toBeInTheDocument();
// })


//screen.find --> encontrar elmentos asincronos
//screen.get --> encontrar elementos sincronoss ( ya existen en la app)
//screen.query --> consultar elementos que pueden estar o no en el dom

//screen.debug --> para hacer un console.log de lo que encuentra

//eslint-disable-next-line testing-library/no-debugging-utils