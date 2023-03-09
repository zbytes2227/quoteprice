import React, { useState } from "react";
import "../styles.css";
import Itemcheck from "./Itemcheck";
import Plan from "./Plan";
import Totalbill from "./Totalbill";
function Home() {
  const [Pages, setPages] = useState("1");
  const [planName, setPlanName] = useState('BASIC');


  const [BasicItem, setBasicItem] = useState([
    { name: "Image Slider", value: false, price: 300 },
    { name: "Image Gallery", value: false, price: 230 },
    { name: "Contact Form", value: false, price: 250 },
    { name: "Seo Friendly", value: false, price: 800 },
    { name: "Mobile Responsive", value: false, price: 450 },
    { name: "User Registration & Login", value: false, price: 800 },
    { name: "Comment/Review Section", value: false, price: 450 },
    { name: "Installable Web App", value: false, price: 250 },
  ]);

  const [AdminItem, setAdminItem] = useState([
    { name: "Admin dashboard", value: false, price: 1000 },
    { name: "Send SMS", value: false, price: 999 },
    { name: "Send Emails", value: false, price: 899 },
    { name: "Add Updates/Notices to Website", value: false, price: 975 },
    { name: "Payment Gateway", value: false, price: 1200 },
  ]);

  const [includedItems, setincludedItems] = useState("");
  const [showBill, setshowBill] = useState(false);
  const [PageCost, setPageCost] = useState(0);

  const handleBasicItemCheckbox = (index) => {
    const updatedItem = { ...BasicItem[index], value: !BasicItem[index].value };
    const updatedItemList = [...BasicItem];
    updatedItemList.splice(index, 1, updatedItem);
    setBasicItem(updatedItemList);
  };

  const handleAdminItemCheckbox = (index) => {
    const updatedItem = { ...AdminItem[index], value: !AdminItem[index].value };
    const updatedItemList = [...AdminItem];
    updatedItemList.splice(index, 1, updatedItem);
    setAdminItem(updatedItemList);
  };

  const filterItems = () => {
    const filteredAdminItem = AdminItem.filter((item) => item.value === true);
    const filteredBasicItem = BasicItem.filter((item) => item.value === true);
    const includedItems = filteredAdminItem.concat(filteredBasicItem);
    return includedItems;
  };

  const quotePagePrice = () => {
    if (Pages === "1") {
      setPageCost(500);
    } else if (Pages >= 2) {
      setPageCost(500 + Pages * 360);
    }
  };

  const quotePrice = (event) => {
    event.preventDefault();
    quotePagePrice();
    setshowBill(true);
    const filteredItems = filterItems();
    setincludedItems(filteredItems);

    // scroll to the end of the page after 100ms
    setTimeout(() => {
      const totalBillElement = document.getElementById("total-bill");
      const position =
        totalBillElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: position, behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <h2 className="text-center my-3">
              Choose Your Specs & Plan ⚡
            </h2>
            <hr />
          <Plan planName={planName} setPlanName={setPlanName}/>
            <form className="my-5" onSubmit={quotePrice}>
              <div className="bordered-box mt-4">
                <h4 className="box-heading">Basic Features</h4>
                <div className="my-3">
                  <div className="quantity-input">
                    <label htmlFor="quantity-input">Total Pages: </label>
                    <input
                      type="number"
                      id="quantity-input"
                      value={Pages}
                      min="1"
                      max="20"
                      onChange={(e) => setPages(e.target.value)}
                    />
                  </div>

                  {BasicItem.map((item, index) => (
                    <Itemcheck
                      key={index}
                      itemName={item.name}
                      itemValue={item.value}
                      onCheckboxChange={() => handleBasicItemCheckbox(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="bordered-box mt-5 mb-3">
                <h4 className="box-heading">Admin Features</h4>
                <div className="my-3">
                  {AdminItem.map((item, index) => (
                    <Itemcheck
                      key={index}
                      itemName={item.name}
                      itemValue={item.value}
                      onCheckboxChange={() => handleAdminItemCheckbox(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="d-grid gap-2 col-4 mx-auto">
                <button className="btn btn btn-info" type="submit">
                  Generate Bill
                </button>
              </div>
            </form>
            {showBill ? (
              <div id="total-bill">
                <Totalbill
                  includedItems={includedItems}
                  Pages={Pages}
                  PageCost={PageCost} 
                  planName = {planName}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <footer className="py-3 mt-4">
        <p className="text-center text-muted">Made with ❤️ by Zbytes</p>
      </footer>
    </>
  );
}

export default Home;
