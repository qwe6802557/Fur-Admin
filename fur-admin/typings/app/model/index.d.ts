// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAddMessage = require('../../../app/model/add-message');
import ExportCategory = require('../../../app/model/category');
import ExportFriendList = require('../../../app/model/friend-list');
import ExportGoods = require('../../../app/model/goods');
import ExportList = require('../../../app/model/list');
import ExportMessage = require('../../../app/model/message');
import ExportOrders = require('../../../app/model/orders');
import ExportSocketUser = require('../../../app/model/socket-user');
import ExportSpends = require('../../../app/model/spends');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    AddMessage: ReturnType<typeof ExportAddMessage>;
    Category: ReturnType<typeof ExportCategory>;
    FriendList: ReturnType<typeof ExportFriendList>;
    Goods: ReturnType<typeof ExportGoods>;
    List: ReturnType<typeof ExportList>;
    Message: ReturnType<typeof ExportMessage>;
    Orders: ReturnType<typeof ExportOrders>;
    SocketUser: ReturnType<typeof ExportSocketUser>;
    Spends: ReturnType<typeof ExportSpends>;
    User: ReturnType<typeof ExportUser>;
  }
}
