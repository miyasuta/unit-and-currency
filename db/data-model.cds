namespace my.bookshop;
// using { Currency } from '@sap/cds/common';
using { Currency } from '@sap/cds-common-content';

entity Books {
  key ID : Integer @title: 'ID';
  title  : String @title: 'Title';
  stock  : Integer @title: 'Stock';
  unit: String(3) @title: 'Unit';
  price: Decimal(13,3) @title: 'Price';
  currency: Currency @title: 'Currency';
}