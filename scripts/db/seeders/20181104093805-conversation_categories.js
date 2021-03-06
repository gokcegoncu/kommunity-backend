import { ConversationCategory as Model } from '../../../src/models/sql';
import bulkPromise from '../utils/bulk-promise';

const items = [
  {
    uuid: '310f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52dc16-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '3346776a-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 01',
    visibility: 'public',
    minRoleRequired: 'guest',
  },
  {
    uuid: '310f97c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52dc16-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '3346776a-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 02',
    visibility: 'private',
    minRoleRequired: 'member',
  },
  {
    uuid: '310f98c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52dc16-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467a44-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 03',
    visibility: 'private',
    minRoleRequired: 'moderator',
  },
  {
    uuid: '310f99c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52dc16-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467a44-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 04',
    visibility: 'secret',
    minRoleRequired: 'admin',
  },
  {
    uuid: '310d93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52debe-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '3346776a-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 05',
    visibility: 'public',
    minRoleRequired: 'guest',
  },
  {
    uuid: '310g93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52debe-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '3346776a-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 06',
    visibility: 'private',
    minRoleRequired: 'member',
  },
  {
    uuid: '310h93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52debe-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467fee-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 07',
    visibility: 'private',
    minRoleRequired: 'moderator',
  },
  {
    uuid: '310l93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52debe-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467fee-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 08',
    visibility: 'secret',
    minRoleRequired: 'admin',
  },
  {
    uuid: '310q93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e274-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '3346776a-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 09',
    visibility: 'public',
    minRoleRequired: 'guest',
  },
  {
    uuid: '312f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e274-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '3346776a-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 10',
    visibility: 'private',
    minRoleRequired: 'member',
  },
  {
    uuid: '311f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e274-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467ba2-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 11',
    visibility: 'private',
    minRoleRequired: 'moderator',
  },
  {
    uuid: '313f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e274-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467ba2-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 12',
    visibility: 'secret',
    minRoleRequired: 'admin',
  },
  {
    uuid: '317f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e3c8-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467ba2-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 13',
    visibility: 'public',
    minRoleRequired: 'guest',
  },
  {
    uuid: '318f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e3c8-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467ba2-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 14',
    visibility: 'private',
    minRoleRequired: 'member',
  },
  {
    uuid: '319f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e3c8-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467ba2-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 15',
    visibility: 'private',
    minRoleRequired: 'moderator',
  },
  {
    uuid: '320f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e3c8-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467ba2-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 16',
    visibility: 'secret',
    minRoleRequired: 'admin',
  },
  {
    uuid: '330f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e508-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467ba2-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 17',
    visibility: 'public',
    minRoleRequired: 'guest',
  },
  {
    uuid: '340f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e508-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467ba2-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 18',
    visibility: 'private',
    minRoleRequired: 'member',
  },
  {
    uuid: '350f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e508-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467ba2-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 19',
    visibility: 'private',
    minRoleRequired: 'moderator',
  },
  {
    uuid: '360f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e508-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467ba2-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 20',
    visibility: 'secret',
    minRoleRequired: 'admin',
  },
  {
    uuid: '370f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e63e-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467fee-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 21',
    visibility: 'public',
    minRoleRequired: 'guest',
  },
  {
    uuid: '380f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e63e-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467fee-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 22',
    visibility: 'private',
    minRoleRequired: 'member',
  },
  {
    uuid: '390f93c8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e63e-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467fee-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 23',
    visibility: 'private',
    minRoleRequired: 'moderator',
  },
  {
    uuid: '310f93u8-d76a-11e8-9f8b-f2801f1b9fd1',
    communityUuid: '6c52e63e-d6a6-11e8-9f8b-f2801f1b9fd1',
    userUuid: '33467fee-d69d-11e8-9f8b-f2801f1b9fd1',
    name: 'Test Category 24',
    visibility: 'secret',
    minRoleRequired: 'admin',
  },
];

module.exports = {
  up: () => bulkPromise(Model, items),
  down: () => {},
};
