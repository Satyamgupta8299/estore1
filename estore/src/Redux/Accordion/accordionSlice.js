import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    category: "Men",
    item: ["Coats", "Boots", "Party Wear", "Shirts"]
  },
  {
    category: "Women",
    item: ["Coats", "Boots", "Party Wear", "Shirts"]
  },
  {
    category: "Kids",
    item: ["Coats", "Boots", "Party Wear", "Shirts"]
  }
];
const accordionSlice = createSlice({
  name: "AccordionSlice",
  initialState
});
export default accordionSlice;