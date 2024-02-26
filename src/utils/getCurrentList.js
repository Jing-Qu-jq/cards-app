export default (list, activePage, cardsNumber ) => {
    return list.slice((activePage-1) * cardsNumber, activePage * cardsNumber);
};