import React, { Component, Fragment } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { connect } from 'react-redux';
import { classes } from './style';
import Sizes from './ClothesSizes';
import Colors from './ClothesColors';
import Button from '../Button';
import Header from '../Header';

class DetailPageComponent extends Component {
  handlerComponent = () => {
    return (
      <Fragment>
        <Header />
        <div className={classes.container}>
          <div className={classes.linksNavs}>
            <a href='/product-list'>Back</a>
            <a href='/main'>Next</a>
          </div>
          <li className={classes.liStyle}>
            <div className={classes.imageParams}>
              <img src={this.props.goodsItemDetails.image[0]} alt='dsa' />
              <img src={this.props.goodsItemDetails.image[1]} alt='dsa' />
            </div>

            <div className={classes.containerInfo}>
              <div className={classes.headerInfoText}>
                <h2>{this.props.goodsItemDetails.name}</h2>
                <h2>{this.props.goodsItemDetails.price} $</h2>
              </div>
              <p className={classes.refStyle}>
                REF: {this.props.goodsItemDetails.ref}
              </p>

              <Colors />
              <Sizes />

              <div className={classes.sizeGuide}>
                <a href='/'>Size guide</a>
              </div>

              <div className={classes.description}>
                <h3 className={classes.h3}>Details</h3>
                <p>{this.props.goodsItemDetails.description[0]}</p>
                <p>{this.props.goodsItemDetails.description[1]}</p>
                <p>{this.props.goodsItemDetails.description[2]}</p>
              </div>

              <Button
                to='/'
                btnSettings={classes.btnSettings}
                black
                name='add to bascket'
              />
            </div>
          </li>
        </div>
      </Fragment>
    );
  };
  render() {
    return <div>{this.handlerComponent()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    goodsItemDetails: state.active.some
  };
};

export default connect(mapStateToProps)(DetailPageComponent);
=======
import { connect } from "react-redux";
=======
import { connect } from 'react-redux';
>>>>>>> fa6bd6ea5b036070e468544f875fa889a8957ede
import { classes } from './style';
import Sizes from './ClothesSizes';
import Colors from './ClothesColors';
import Button from '../Button/index';
import Header from '../Header';

class DetailPageComponent extends Component {
  state = {
    id: this.props.goodsItemDetails.id,
    img: [
      this.props.goodsItemDetails.image[0],
      this.props.goodsItemDetails.image[1]
    ],
    description: [
      this.props.goodsItemDetails.description[0],
      this.props.goodsItemDetails.description[1],
      this.props.goodsItemDetails.description[2]
    ],
    category: this.props.goodsItemDetails.category,
    price: this.props.goodsItemDetails.price,
    name: this.props.goodsItemDetails.name,
    ref: this.props.goodsItemDetails.name,
    new: this.props.goodsItemDetails.new
  };

  handlerComponent = () => {
    return (
      <Fragment>
        <Header />
        <div className={classes.container}>
          <div className={classes.linksNavs}>
            <a href='/product-list'>Back</a>
            <a href='/main'>Next</a>
          </div>
          <li className={classes.liStyle}>
            <div className={classes.imageParams}>
              <img src={this.props.goodsItemDetails.image[0]} alt='dsa' />
              <img src={this.props.goodsItemDetails.image[1]} alt='dsa' />
            </div>

            <div className={classes.containerInfo}>
              <div className={classes.headerInfoText}>
                <h2>{this.props.goodsItemDetails.name}</h2>
                <h2>{this.props.goodsItemDetails.price} $</h2>
              </div>
              <p className={classes.refStyle}>
                REF: {this.props.goodsItemDetails.ref}
              </p>

              <Colors />
              <Sizes />

              <div className={classes.sizeGuide}>
                <a href='/'>Size guide</a>
              </div>

              <div className={classes.description}>
                <h3 className={classes.h3}>Details</h3>
                <p>{this.props.goodsItemDetails.description[0]}</p>
                <p>{this.props.goodsItemDetails.description[1]}</p>
                <p>{this.props.goodsItemDetails.description[2]}</p>
              </div>

              <Button
                btnSettings={classes.btnSettings}
                black
                name='add to bascket'
              />
            </div>
          </li>
        </div>
      </Fragment>
    );
  };
  render() {
    return <div>{this.handlerComponent()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    goodsItemDetails: state.active.objectId
  };
};

<<<<<<< HEAD
export default connect(mapStateToProps)(DetailPageComponent)
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
=======
export default connect(mapStateToProps)(DetailPageComponent);
>>>>>>> fa6bd6ea5b036070e468544f875fa889a8957ede
