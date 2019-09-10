class Logger {
    constructor(format = '[date]: [message]') {
      this.format = format;
      this.date = new Date();
    }

    _createVocabulary(message, level, color) {
      let vocabulary = {};
      let listProperty  = this.format.replace(':', '').split(' ');
      listProperty.push('[color]');
      let dateString = this.convertDateToStrring(this.date);
      let listValue = [dateString, level, message, color];

      listProperty.forEach((value, i) => {
        vocabulary[value] = listValue[i];
      });

      return vocabulary;
    }

    _log(message, vocabulary) {
      if(Array.isArray(message) || typeof message === 'object') {
        vocabulary['[message]'] = '';
        this._format(vocabulary);
        console.table(message);
      } else {
        this._format(vocabulary);
      }
    }

    _format(vocabulary) {
      let newFormat = this.format;

      for(let key in vocabulary) {
        newFormat = newFormat.replace(key, vocabulary[key]);
      }

      console.log(`%c ${newFormat}`, vocabulary['[color]']);
    }

    log(message) {
      const color = '';
      const level = '';
      let vocabulary = this._createVocabulary(message, level, color);
      this._log(message, vocabulary);
    }

    info(message) {
      const color = 'color: #0000FF';
      const level = 'INFO';
      let vocabulary = this._createVocabulary(message, level, color);
      this._log(message, vocabulary);
    }

    warning(message) {
      const color = 'color: #ffc100';
      const level = 'WARNING';
      let vocabulary = this._createVocabulary(message, level, color);
      this._log(message, vocabulary);
    }

    error(message) {
      const color = 'color: #ff1a00';
      const level = 'ERROR';
      let vocabulary = this._createVocabulary(message, level, color);
      this._log(message, vocabulary);
    }

    convertDateToStrring(date) {
      return date.toLocaleString();
    }
}
  
let logger = new Logger('[date] [level]: [message]');
logger.log('hello');
logger.info('hello');
logger.warning({'f':'bla', 's':'blabla'});
logger.error('hello');
logger.error({'f':'bla', 's':'blabla'});
