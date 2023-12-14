const InventoryListCard=()=>{
    return (
        <>
      <li className="inventoryCard">
        <div className="inventoryCard__container">
          <div className="inventoryCard__left">
            <div className="inventoryCard__left-item">
              <p className="inventoryCard__left-itemTitle">INVENTORY ITEM</p>
              <p className="inventoryCard__left-product">
                <Link className="Link__item" to={`/itemDetails/${id}`}>
                  {itemName}
                  <img
                    className="inventoryCard__left-productimg"
                    src={ChevronRight}
                    alt="drop down icon"
                  />
                </Link>
              </p>
            </div>
            <div className="inventoryCard__left-category">
              <p className="inventoryCard__left-categoryTitle">CATEGORY</p>
              <p className="inventoryCard__left-category">{category}</p>
            </div>
          </div>
          <div className="inventoryCard__right">
            <div className="inventoryCard__right-item">
              <p className="inventoryCard__itemTitle">STATUS</p>
              <p className="inventoryCard__item">{status}</p>
            </div>
            <div className="inventoryCard__left-category">
              <p className="inventoryCard__categoryTitle">QTY</p>
              <p className="inventoryCard__category">{quantity}</p>
            </div>
            <div className="inventoryCard__left-category">
              <p className="inventoryCard__categoryTitle">WAREHOUSE</p>
              <p className="inventoryCard__category">{warehouseName}</p>
            </div>
          </div>
        </div>
        <div className="inventoryCard__icons">
          <img
            className="inventoryCard__left-icon"
            src={DeleteIcon}
            alt="delete icon"
          ></img>
          <Link to="/editItem">
            <img
              className="inventoryCard__left-icon"
              src={EditIcon}
              alt="edit icon"
            ></img>
          </Link>
        </div>
      </li>

      <li className="inventoryCardtableandDesktop__container">
        <div className="inventoryCardtableandDesktop__list">
          <h3 className="inventoryCardtableandDesktop__item">
            <Link className="Link__item" to={`/itemDetails/${id}`}>
              {itemName}
              <img
                className="inventoryCard__left-productimg"
                src={ChevronRight}
                alt="drop down icon"
              ></img>
            </Link>
          </h3>

          <h3 className="inventoryCardtableandDesktop__category">{category}</h3>
          <h3 className="inventoryCardtableandDesktop__status">{status}</h3>
          <h3 className="inventoryCardtableandDesktop__qty">{quantity}</h3>
          <h3 className="inventoryCardtableandDesktop__warehouse">
            {warehouseName}
          </h3>
          <div className="inventoryCardtableandDesktop__icons">
            <img
              className="inventoryCardtableandDesktop__icon"
              onClick={() => {
                handleInventoryModalToggle(id);
                inventoryNameForModal(itemName);
              }}
              src={DeleteIcon}
              alt="delete icon"
            ></img>
            <Link to="/editItem">
              <img
                className="inventoryCardtableandDesktop__icon inventoryCardtableandDesktop__edit"
                src={EditIcon}
                alt="edit icon"
              ></img>
            </Link>
          </div>
        </div>
      </li>
    </>
    )
}

export default InventoryListCard;