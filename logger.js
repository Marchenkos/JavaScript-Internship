class Logger {
    constructor() {
        this._level = ['default', 'INFO:', 'WARNING:', 'ERROR:'],
        this.date = new Date(),
        this._format = {
            'date' : this.date.toLocaleString(),
            'message' : ''
        },
        this._colorLevel = {
            'INFO' : 'color: #0000FF',
            'WARNING' : 'color: #ffc100',
            'ERROR' : 'color: #ff1a00'
        },
        this._isSimpleInformation = function (information, level, color) {
            if(information.length > 1 || Array.isArray(information[0])) {
                this._format.message = '';
    
               if( level != 0) {
                let newFormat = this._addPopety(level);
                console.log(`%c ${newFormat.join(' ')}`, color);
               } else {
                console.log(Object.keys(this._format).map(key => this._format[key]).join(' '));
               }
    
               console.table(information);
    
               return false;
            }
    
            return true;
        },
        this._addPopety = function (levelValue) {
            this._format.level = this._level[levelValue];
            let result = Object.keys(this._format).map(key => this._format[key]);
            [result[1], result[2]] = [result[2],result[1]];

            return result;
        }
    }

    log() {
        if(this._isSimpleInformation(arguments, 0)) {
            this._format.message = arguments[0];
            console.log(Object.keys(this._format).map(key => this._format[key]).join(' '));
        }
    }

    info() {
        if(this._isSimpleInformation(arguments, 1, this._colorLevel.INFO)) {
            this._format.message = arguments[0];
            let newFormat = this._addPopety(1);
            console.log(`%c ${newFormat.join(' ')}`, this._colorLevel.INFO);
        }
    }

    error() {
        if(this._isSimpleInformation(arguments, 2, this._colorLevel.ERROR)) {
            this._format.message = arguments[0];
            let newFormat = this._addPopety(2);
            console.log(`%c ${newFormat.join(' ')}`, this._colorLevel.ERROR);
        }
    }

    warning() {
        if(this._isSimpleInformation(arguments, 3, this._colorLevel.WARNING)) {
            this._format.message = arguments[0];
            let newFormat = this._addPopety(3);
            console.log(`%c ${newFormat.join(' ')}`, this._colorLevel.WARNING);
       }   
    }
}

let execution = new Logger();
execution.log('first_el', 'second_el');
execution.log('simple message');
execution.log([1, 2, 3], ['array', 'array']);
execution.info('my message');
execution.info([1, 2, 3], ['array', 'array']);
execution.error('my message');
execution.error([1, 2, 3], ['array', 'array']);
execution.warning([1, 2], ['array', 'array']);
execution.warning('my message');