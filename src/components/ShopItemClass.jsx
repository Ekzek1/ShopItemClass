import React, { Component } from 'react'

export default class ShopItemClass extends Component {

  constructor(item){
    super(item);

    const {brand, title, description, descriptionFull, price, currency} = item.item;
    this.brand = brand;
    this.title = title;
    this.description = description;
    this.descriptionFull = descriptionFull;
    this.price = price;
    this.currency = currency;


  }

  render() {
    return (
      <div className="main-content">
        <h2>{this.brand}</h2>
        <h1>{this.title}</h1>
        <h3>{this.description}</h3>
        <div className="description">
            {this.descriptionFull}
        </div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{[this.currency, this.price].join(' ')}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  }
}
