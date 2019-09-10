class Logger {
  constructor(format = '[date]: [message]') {
    this.format = format;
    this.date = new Date();
    this.vocabulary = {};
  }
  _log(message, level, color) {
    if(Array.isArray(message) || typeof message === 'object') {
      this._format('', level, color);
      console.table(message);
    } else {
      this._format(message, level, color);
    }
  }
  _format(message, level, color) {
    let dateString = this.convertDateToStrring(this.date);
    let newFormat = this.format.replace('[date]', dateString).replace('[level]', level).replace('[message]', message);
    console.log(`%c ${newFormat}`, color);
  }
  log(message) {
    const color = '';
    const level = '';
    this.createVocabulary(message, level, color);
    this._log(message, level, color);
  }
  info(message) {
    const color = 'color: #0000FF';
    const level = 'INFO';
    this._log(message, level, color);
  }
  warning(message) {
    const color = 'color: #ffc100';
    const level = 'WARNING';
    this._log(message, level, color);
  }
  error(message) {
    const color = 'color: #ff1a00';
    const level = 'ERROR';
    this._log(message, level, color);
  }
  convertDateToStrring(date) {
    return date.toLocaleString();
  }
  createVocabulary(message, level, color) {
    let listProperty  = this.format.replace(':', '').split(' ');
    let dateString = this.convertDateToStrring(this.date);
    let listValue = [dateString, level, message, color];

    listProperty.forEach((value, i) => {
      this.vocabulary[value] = listValue[i];
    });
  }
}

let logger = new Logger('[date] [level]: [message]');
logger.log('hello');
logger.warning({'f':'sfs', 'sf':'sf'});
logger.error('hello');
