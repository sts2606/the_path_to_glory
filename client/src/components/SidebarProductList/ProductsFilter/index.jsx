import React, {Component} from 'react';

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PriseSlider from '../RangeSlider/PriceSlider'
import { classes } from "./style";
import {filterGoodsByCategory} from '../../../actions/filterGoodsByCategory'

import {
        getGoodsCategories,
        SHOW_CATEGORU_MENU,
        SHOW_COLOR_MENU,
        WINDOW_DESCTOP,
        SHOW_PRICE_MENU
    } from "../../../actions/getGoodsCategoryAction";




class ProductsFilter extends Component {
    componentDidMount () {
        if (window.location.pathname === "/product-list/mens"){
            return this.props.getGoodsCategories("mens")
        } else if (window.location.pathname === "/product-list/womens") {
            return this.props.getGoodsCategories("womens")
        } else if (window.location.pathname === "/product-list/accessories") {
            return this.props.getGoodsCategories("accessories")
        }
        this.props.getGoodsCategories()
    }
    
    getGoodsCategoryItems = () => {
        let path = null;
        if (window.location.pathname === "/product-list/mens"){
            path = "/product-list/mens";
        } else if (window.location.pathname === "/product-list/womens") {
            path = "/product-list/womens";
        } else if (window.location.pathname === "/product-list/accessories") {
            path = "/product-list/accessories";
        }
        return (
            
            this.props.categoriesList.map((category) => {
                
                return (
                    <li key={category} onClick = {() => this.props.filterGoodsByCategory(category)}><Link className={`${classes.categorySectionlinck} ${classes.sectionItem}`}>{category}</Link></li>
                )
                
            })
        )
    }

    getPath = () => {
        let path = null;
        if (window.location.pathname === "/product-list/mens"){
            path = "/product-list/mens";
        } else if (window.location.pathname === "/product-list/womens") {
            path = "/product-list/womens";
        } else if (window.location.pathname === "/product-list/accessories") {
            path = "/product-list/accessories";
        }
        return path;
    }

    getColorsItems = () => {
        return(
            this.props.colorsList.map((color) => {
                
                return (
                    <li key={color} className={classes.colorItem}><div style={{backgroundColor: `${color}`}} className={classes.colorCircle}></div><Link to={"/"} className={`${classes.sectionItem} ${classes.colorSectionItem}`}>{color}</Link></li>
                )
                
            })
        )
    }

    render() {
        const {
            categorySection,
            sectionTitle,
            categorySectionTitle,
            categorySectionItem,
            categorySectionlinck,
            sectionItem,
            colorSection,
            colorSectionTitle,
            colorSectionItem,
            colorCircle,
            colorItem,
            priceSection,
            priceSectionTitle,
            priceDiapazon,
            categoriesMenu,
            mobileCategoiFilter,
            mobileColor,
        } = classes;


        const categoiesMenu =<div className={categorySection}>
                                <p className={`${categorySectionTitle} ${sectionTitle}`}>{this.props.categoryName}</p>
                                <Link to={`${this.getPath()}`} className={`${categorySectionItem} ${sectionItem}`}>View All</Link>
                                <div>
                                    <p className={mobileCategoiFilter} onClick={()=>this.props.showCategoru()}>Categories</p>
                                    {this.props.showCategoriMenu?<i class="fas fa-angle-up"></i>:<i class="fas fa-angle-down"></i>}
                                </div>
                                {this.props.showCategoriMenu? <ul className={categoriesMenu}>{this.getGoodsCategoryItems()}</ul>:null  }
                            </div> ;

        const colorMenu = <div className={colorSection}>
                <div className = {mobileColor}>
                    <p className={`${sectionTitle} ${colorSectionTitle}`} onClick ={()=>this.props.showColor()}>colors</p>
                    {this.props.showColorMenu?<i class="fas fa-angle-up"></i>:<i class="fas fa-angle-down"></i>}
                </div>
                {this.props.showColorMenu?<ul>{this.getColorsItems()}</ul>:''}
                
            </div>
        

        const priceMenu = <div className={priceSection}>
                            <div className = {mobileColor} >
                                <p className={`${sectionTitle} ${priceSectionTitle}`} onClick={()=>this.props.showPrise()}>price</p>
                                {this.props.showPriceMenu?<i class="fas fa-angle-up"></i>:<i class="fas fa-angle-down"></i>}
                            </div>
                                {this.props.showPriceMenu?<PriseSlider />:''}
                        </div>

        window.addEventListener('resize',()=>{
            if(document.body.clientWidth > 768){
                this.props.showDesctop()
            } 
        })
        return(
                <div>
                {categoiesMenu}
                {colorMenu}
                {priceMenu}
            </div>
        )
    }   
};

const mapStateToProps = state =>{
    return{
        showPriceMenu:state.allCategories.isShowPriceMenu,
        showCategoriMenu:state.allCategories.isShowCategoriMenu,
        showColorMenu:state.allCategories.isShowColorMenu,
        categoriesList: state.allCategories.categoriesList,
        categoryName: state.allCategories.categoryName,
        colorsList: state.allCategories.colorsList
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getGoodsCategories: url => dispatch(getGoodsCategories(url)),
        showCategoru:()=>dispatch({type:SHOW_CATEGORU_MENU}),
        showDesctop:()=>dispatch({type:WINDOW_DESCTOP}),
        showColor:()=>dispatch({type:SHOW_COLOR_MENU}),
        showPrise:()=>dispatch({type:SHOW_PRICE_MENU}),
        filterGoodsByCategory: category => dispatch(filterGoodsByCategory(category))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsFilter);
