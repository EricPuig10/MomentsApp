// import { fireEvent, render, screen } from '@testing-library/react';
// import { MomentsList } from './MomentsList';

// beforeEach(()=>{
//     render(<MomentsList/>)
// }) 

// test("should get a ubication", async () =>{
//     const inputTitle = screen.getByLabelText(/title/i);
//     const inputImgUrl = screen.getByLabelText(/imgUrl/i);
//     const inputUbication = screen.getByLabelText(/ubication/i);
//     const button = screen.getByRole("button", {name:/Add/i});

//     fireEvent.change(inputTitle, {target:{value:"Day in Oporto"}});
//     fireEvent.change(inputImgUrl, {target:{value:"Img"}});
//     fireEvent.change(inputUbication, {target:{value:"Portugal"}});

//     fireEvent.click(button);

//     const ubication = await screen.findByText(/Portugal/i)
//     expect(ubication).toBeInTheDocument();
// })


//aria-label