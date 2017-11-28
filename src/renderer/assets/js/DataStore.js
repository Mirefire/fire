import Datastore from 'nedb';
import path from 'path';
import { remote } from 'electron'

let userConfig = new Datastore({
  autoload: true,
  filename: path.join(remote.app.getPath('userData'), '/data.db')
});

let history = new Datastore({
  autoload: true,
  filename: path.join(remote.app.getPath('userData'), '/history.db')
});


export default {
  userConfig:userConfig,
  history:history
}