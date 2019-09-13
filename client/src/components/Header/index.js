/* eslint-disable */
<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";
import { classes } from "./style";
import { SHOW_MODAL_WINDOW } from "../../actions/searchActions";
<<<<<<< HEAD
class Header extends Component {
  render() {
    const { searchModal, showSearchModal } = this.props;
=======
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { classes } from './style';
import { SHOW_MODAL_WINDOW } from '../../actions/searchActions';
>>>>>>> fa6bd6ea5b036070e468544f875fa889a8957ede
import {
  SHOW_DROPDOWN_MENU,
  HIDE_DROPDOWN_MENU
} from '../../actions/dropDownMenuAction';
import DropdownHeaderMenu from '../DropdownHeaderMenu';

class Header extends Component {
  render() {
    const {
      searchModal,
      showSearchModal,
      showDropdownMenu,
      activeDropdownMenu,
      hideDropdownMenu
    } = this.props;

>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
    const {
      header,
      navbarMenu,
      navbarMenuItem,
      logoItem,
      headerActions,
      headerActionsItemText,
      headerActionsItemImg,
      search,
      searchInput,
<<<<<<< HEAD
      searchBtn
    } = classes;

    const searchModalItem = showSearchModal ? (
      <div className={search}>
=======
      searchBtn,
      dropdownMenuItem,
      dropdownMenuItemGender
    } = classes;

    const searchModalItem = showSearchModal ? (
<<<<<<< HEAD
      <div className={search}  onMouseLeave={searchModal}>
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
=======
      <div className={search} onMouseLeave={searchModal}>
>>>>>>> fa6bd6ea5b036070e468544f875fa889a8957ede
        <input
          type='text'
          placeholder='Search for item'
          className={searchInput}
        />

        <a href='#' className={searchBtn}>
          Search
        </a>
      </div>
    ) : null;
    const logoLink = window.location.pathname === '/' ? '#' : '/';
    console.log('----', typeof activeDropdownMenu);

    let showDropdownMenuItem = null;

    switch (activeDropdownMenu) {
      case 0: {
        showDropdownMenuItem = (
          <DropdownHeaderMenu
            title={'CATEGORIES'}
            onMouseOver={() => showDropdownMenu(0)}
            onMouseLeave={hideDropdownMenu}>
            <div>
              <a className={dropdownMenuItem} href='#'>
                New arrivals
              </a>
              <a className={dropdownMenuItem} href='#'>
                Shirts
              </a>
              <a className={dropdownMenuItem} href='#'>
                Coats
              </a>
              <a className={dropdownMenuItem} href='#'>
                Jackets
              </a>
              <a className={dropdownMenuItem} href='#'>
                Sweaters
              </a>
            </div>
            <div>
              <a className={dropdownMenuItem} href='#'>
                Polos & Tees
              </a>
              <a className={dropdownMenuItem} href='#'>
                Jeans & Pants
              </a>
              <a className={dropdownMenuItem} href='#'>
                Outerwear
              </a>
            </div>
          </DropdownHeaderMenu>
        );
        break;
      }
      case 1: {
        showDropdownMenuItem = (
          <DropdownHeaderMenu
            title={'CATEGORIES'}
            onMouseOver={() => showDropdownMenu(1)}
            onMouseLeave={hideDropdownMenu}>
            <div>
              <a className={dropdownMenuItem} href='#'>
                New arrivals
              </a>
              <a className={dropdownMenuItem} href='#'>
                Dresses
              </a>
              <a className={dropdownMenuItem} href='#'>
                Knitwear
              </a>
              <a className={dropdownMenuItem} href='#'>
                Coats
              </a>
              <a className={dropdownMenuItem} href='#'>
                Jackets
              </a>
            </div>
            <div>
              <a className={dropdownMenuItem} href='#'>
                Suits & Combined
              </a>
              <a className={dropdownMenuItem} href='#'>
                T-shirts
              </a>
              <a className={dropdownMenuItem} href='#'>
                Jeans
              </a>
              <a className={dropdownMenuItem} href='#'>
                Skirts
              </a>
              <a className={dropdownMenuItem} href='#'>
                Underwear
              </a>
            </div>
          </DropdownHeaderMenu>
        );
        break;
      }
      case 2: {
        showDropdownMenuItem = (
          <DropdownHeaderMenu
            title={'CATEGORIES'}
            onMouseOver={() => showDropdownMenu(2)}
            onMouseLeave={hideDropdownMenu}>
            <div>
              <a
                className={`${dropdownMenuItem} ${dropdownMenuItemGender}`}
                href='#'>
                For Woman
              </a>
              <a className={dropdownMenuItem} href='#'>
                Bags
              </a>
              <a className={dropdownMenuItem} href='#'>
                Waletts
              </a>
              <a className={dropdownMenuItem} href='#'>
                Belts
              </a>
              <a className={dropdownMenuItem} href='#'>
                Scarves & hats
              </a>
              <a className={dropdownMenuItem} href='#'>
                Sunglasses
              </a>
            </div>
            <div>
              <a
                className={`${dropdownMenuItem} ${dropdownMenuItemGender}`}
                href='#'>
                For Man
              </a>
              <a className={dropdownMenuItem} href='#'>
                Bags
              </a>
              <a className={dropdownMenuItem} href='#'>
                Waletts, Card Cases
              </a>
              <a className={dropdownMenuItem} href='#'>
                Belts
              </a>
              <a className={dropdownMenuItem} href='#'>
                Ties & Cummerbunds
              </a>
              <a className={dropdownMenuItem} href='#'>
                Sunglasses
              </a>
            </div>
          </DropdownHeaderMenu>
        );
        break;
      }
      default: {
      }
    }

    return (
      <>
        <header className={header}>
          <nav className={navbarMenu}>
<<<<<<< HEAD
            <a href="#" className={navbarMenuItem}>
              man
            </a>
            <a href="#" className={navbarMenuItem}>
              woman
            </a>
            <a href="#" className={navbarMenuItem}>
              accessory
            </a>
          </nav>
          <div>
            <a href="/" className={logoItem}>
=======
            <a
              href='/product-list/mens'
              className={navbarMenuItem}
              onMouseOver={() => showDropdownMenu(0)}>
              man
            </a>
            <a
              href='/product-list/womens'
              className={navbarMenuItem}
              onMouseOver={() => showDropdownMenu(1)}>
              woman
            </a>
            <a
              href='/product-list/accessories'
              className={navbarMenuItem}
              onMouseOver={() => showDropdownMenu(2)}>
              accessory
            </a>
          </nav>
          <div onMouseOver={hideDropdownMenu}>
            <a href={logoLink} className={logoItem}>
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
              Originalité
            </a>
          </div>
          <div className={headerActions}>
            <NavLink href='#' onClick={searchModal}>
              <i className={`fas fa-search ${headerActionsItemImg}`} />
              <p className={classes.headerActionsItemText}>Search</p>
            </NavLink>
            <NavLink to="/myaccount/main" className={classes.headerActionsItem}>
              <i className={`far fa-user ${headerActionsItemImg}`} />
              <p className={classes.headerActionsItemText}>My account</p>
            </NavLink>
            <a href="#" className={classes.headerActionsItem}>
              <i
                className={`fas fa-shopping-bag ${
                  classes.headerActionsItemImg
                }`}
              />
              <p className={classes.headerActionsItemText}>Shopping Bag</p>
            </a>
          </div>
        </header>
        {searchModalItem}
        {showDropdownMenuItem}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSearchModal: state.search.showSearchModal,
    activeDropdownMenu: state.dropdownMenu.activeDropdownMenuItem,
    dropDownMenuActive: state.dropdownMenu.dropDownMenuActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchModal: () => dispatch({ type: SHOW_MODAL_WINDOW }),
    showDropdownMenu: id => dispatch({ type: SHOW_DROPDOWN_MENU, payload: id }),
    hideDropdownMenu: () => dispatch({ type: HIDE_DROPDOWN_MENU })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
