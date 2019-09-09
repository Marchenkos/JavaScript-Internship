class Logger {
    constructor() {
        this._level = ['INFO:', 'WARNING:', 'ERROR:'],
        this.date = new Date(),
        this._format = {
            'date' : this.date.toLocaleString(),
            'message' : ''
        },
        this._colorLevel = {
            'INFO' : 'color: #0000FF',
            'WARNING' : 'color: #ffc100',
            'ERROR' : 'color: #ff1a00'
        }
    }

    _addPopety(levelValue) {
        this._format.level = this._level[levelValue];
        let result = Object.keys(this._format).map(key => this._format[key]);
        [result[1], result[2]] = [result[2],result[1]];

        return result;
    }

    _log() {
        if(arguments.length > 1 || Array.isArray(arguments[0])) {
            return true;
        }

        // this._format.message = message;

        return false;
    }

    log() {
        if(arguments.length > 1 || Array.isArray(arguments[0])) {
            this._format.message = '';
            console.log(Object.keys(this._format).map(key => this._format[key]).join(' '));
            console.table(arguments);
        } else {
            this._format.message = arguments[0];
            console.log(Object.keys(this._format).map(key => this._format[key]).join(' '));
        }
    }

    info() {
        if(arguments.length > 1 || Array.isArray(arguments[0])) {
            this._format.message = '';

            let newFormat = this._addPopety(0);
            console.log(`%c ${newFormat.join(' ')}`, this._colorLevel.INFO);
            console.table(arguments);
        } else {
            this._format.message = arguments[0];
            let newFormat = this._addPopety(0);
            console.log(`%c ${newFormat.join(' ')}`, this._colorLevel.INFO);
        }
    }

    error() {
        if(arguments.length > 1 || Array.isArray(arguments[0])) {
            this._format.message = '';

            let newFormat = this._addPopety(2);
            console.log(`%c ${newFormat.join(' ')}`, this._colorLevel.ERROR);
            console.table(arguments);
        } else {
            this._format.message = arguments[0];
            let newFormat = this._addPopety(2);
            console.log(`%c ${newFormat.join(' ')}`, this._colorLevel.ERROR);
        }
    }

    warning() {
        if(arguments.length > 1 || Array.isArray(arguments[0])) {
            this._format.message = '';

            let newFormat = this._addPopety(1);
            console.log(`%c ${newFormat.join(' ')}`, this._colorLevel.WARNING);
            console.table(arguments);
        } else {
            this._format.message = arguments[0];
            let newFormat = this._addPopety(1);
            console.log(`%c ${newFormat.join(' ')}`, this._colorLevel.WARNING);
       }   
    }
}

let me = new Logger();
me.log('my message');
me.log([1, 2, 3], ['dfv', 'dfg']);
me.info('my message');
me.info([1, 2, 3], ['dfv', 'dfg']);
me.error('my message');
me.error([1, 2, 3], ['dfv', 'dfg']);
me.warning([1, 2, 3], ['dfv', 'dfg']);
me.warning('my message');