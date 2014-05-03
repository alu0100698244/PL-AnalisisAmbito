/* parser generated by jison 0.4.4 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var pl0 = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"PROGRAM":3,"BLOCK":4,"END_SYMBOL":5,"EOF":6,"DEC_CONSTS":7,"DEC_VARS":8,"DEC_PROCS":9,"STATEMENT":10,"DEC_PROC":11,"CONST":12,"DEC_CONST":13,"COMMA_CONST":14,"END_SENTENCE":15,"COMMA":16,"ID_":17,"ASSIGN":18,"NUMBER_":19,"VAR":20,"COMMA_VARS":21,"PROCEDURE":22,"ARGLIST":23,"LEFTPAR":24,"COMMA_ARGLIST":25,"RIGHTPAR":26,"ARGLISTEXP":27,"EXPRESSION":28,"COMMA_ARGLISTEXP":29,"CALL":30,"ARGEXPLIST":31,"BEGIN":32,"STATEMENT_LIST":33,"END":34,"IF":35,"CONDITION":36,"THEN":37,"ELSE":38,"WHILE":39,"DO":40,"ODD":41,"COMPARISON_OP":42,"TERM":43,"ADD":44,"FACTOR":45,"MUL":46,"ID":47,"NUMBER":48,"$accept":0,"$end":1},
terminals_: {2:"error",5:"END_SYMBOL",6:"EOF",12:"CONST",15:"END_SENTENCE",16:"COMMA",18:"ASSIGN",20:"VAR",22:"PROCEDURE",24:"LEFTPAR",26:"RIGHTPAR",30:"CALL",31:"ARGEXPLIST",32:"BEGIN",34:"END",35:"IF",37:"THEN",38:"ELSE",39:"WHILE",40:"DO",41:"ODD",42:"COMPARISON_OP",44:"ADD",46:"MUL",47:"ID",48:"NUMBER"},
productions_: [0,[3,3],[4,4],[4,3],[4,3],[4,2],[9,1],[7,4],[14,3],[14,0],[13,3],[8,4],[21,3],[21,0],[11,6],[11,5],[23,4],[25,3],[25,0],[27,4],[29,3],[29,0],[10,3],[10,3],[10,2],[10,4],[10,8],[10,6],[10,6],[10,0],[33,3],[33,0],[36,2],[36,3],[28,1],[28,3],[43,1],[43,3],[45,1],[45,1],[45,3],[17,1],[19,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
      return $$[$0-2];
    
break;
case 2:
      this.$ = buildBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0]);
    
break;
case 3:
      this.$ = buildBlock(null, $$[$0-2], $$[$0-1], $$[$0]);
    
break;
case 4:
      this.$ = buildBlock($$[$0-2], null, $$[$0-1], $$[$0]);
    
break;
case 5:
      this.$ = buildBlock(null, null, $$[$0-1], $$[$0]);
    
break;
case 6:
      this.$ = [$$[$0]];
      if ($$[$01] && $$[$01].length > 0)
        this.$ = this.$.concat($$[$01]);
    
break;
case 7:
      this.$ = [$$[$0-2]];
      if ($$[$0-1] && $$[$0-1].length > 0)
        this.$ = this.$.concat($$[$0-1]);
    
break;
case 8:
      this.$ = [$$[$0-1]];
      if ($$[$0] && $$[$0].length > 0)
        this.$ = this.$.concat($$[$0]);
    
break;
case 10:
      this.$ = {
        type: 'CONST VAR',
        name: $$[$0-2].value,
        value: $$[$0].value
      };
    
break;
case 11:
      this.$ = [{
        type: 'VAR',
        name: $$[$0-2].value
      }];

      if ($$[$0-1] && $$[$0-1].length > 0)
        this.$ = this.$.concat($$[$0-1]);
    
break;
case 12:
      this.$ = [{
        type: 'VAR',
        name: $$[$0-1].value
      }];

      if ($$[$0] && $$[$0].length > 0)
        this.$ = this.$.concat($$[$0]);
    
break;
case 14:
      this.$ = {
        type: 'PROCEDURE',
        name: $$[$0-4].value,
        args: $$[$0-3],
        block: $$[$0-1]
      };
    
break;
case 15:
      this.$ = {
        type: 'PROCEDURE',
        name: $$[$0-3].value,
        args: null,
        block: $$[$0-1]
      };
    
break;
case 16:
      this.$ = [{
        type: 'ARG',
        content: $$[$0-2].value
      }];

      if ($$[$0-1] && $$[$0-1].length > 0)
        this.$ = this.$.concat($$[$0-1]);
    
break;
case 17:
      this.$ = [{
        type: 'ARG',
        content: $$[$0-1].value
      }];

      if ($$[$0] && $$[$0].length > 0)
        this.$ = this.$.concat($$[$0]);
    
break;
case 19:
      this.$ = [{
        type: 'ARGEXP',
        content: $$[$0-2]
      }];

      if ($$[$0-1] && $$[$0-1].length > 0)
        this.$ = this.$.concat($$[$0-1]);
    
break;
case 20:
      this.$ = [{
        type: 'ARGEXP',
        content: $$[$0-1]
      }];

      if ($$[$0] && $$[$0].length > 0)
        this.$ = this.$.concat($$[$0]);
    
break;
case 22:
			this.$ = {
				type: 'PROC_CALL',
				name: $$[$0-1].value,
				args: $$[$0]
			};
		
break;
case 23:
			this.$ = {
				type: '=',
				left: $$[$0-2],
				rigth: $$[$0]
			};
		
break;
case 24:
			this.$ = {
				type: 'PROC_CALL',
				name: $$[$0].value
			};
		
break;
case 25:
			this.$ = [$$[$0-2]];
			if ($$[$0-1] && $$[$0-1].length > 0)
				this.$ = this.$.concat($$[$0-1]);
		
break;
case 26:
			this.$ = {
				type: 'IFELSE',
				condition: $$[$0-5],
				true_sentence: $$[$0-2],
				false_sentence: $$[$0]
			};
		
break;
case 27:
			this.$ = {
				type: 'IF',
				condition: $$[$0-3],
				true_sentence: $$[$0]
			};
		
break;
case 28:
			this.$ = {
				type: 'WHILE',
				condition: $$[$0-3],
				statement: $$[$0]
			};
		
break;
case 30:
			this.$ = [$$[$0-1]];
			if ($$[$0] && $$[$0].length > 0)
				this.$ = this.$.concat($$[$0]);
		
break;
case 32:
			this.$ = {
				type: 'ODD',
				exp: $$[$0]
			};
		
break;
case 33:
			this.$ = {
				type: $$[$0-1],
				left: $$[$0-2],
				right: $$[$0]
			};
		
break;
case 35:
      this.$ = {
        type: $$[$0-1],
        left: $$[$0-2],
        right: $$[$0]
      };
    
break;
case 37:
      this.$ = {
        type: $$[$0-1],
        left: $$[$0-2],
        right: $$[$0]
      };
    
break;
case 40:
      this.$ = $$[$0-1];
    
break;
case 41:
    this.$ = {
      type: 'ID',
      value: yytext
    };
  
break;
case 42:
    this.$ = {
      type: 'NUMBER',
      value: yytext
    };
  
break;
}
},
table: [{3:1,4:2,7:3,8:4,9:5,11:8,12:[1,6],20:[1,7],22:[1,9]},{1:[3]},{5:[1,10]},{8:11,9:12,11:8,20:[1,7],22:[1,9]},{9:13,11:8,22:[1,9]},{5:[2,29],10:14,15:[2,29],17:16,30:[1,15],32:[1,17],35:[1,18],39:[1,19],47:[1,20]},{13:21,17:22,47:[1,20]},{17:23,47:[1,20]},{5:[2,6],15:[2,6],30:[2,6],32:[2,6],35:[2,6],39:[2,6],47:[2,6]},{17:24,47:[1,20]},{6:[1,25]},{9:26,11:8,22:[1,9]},{5:[2,29],10:27,15:[2,29],17:16,30:[1,15],32:[1,17],35:[1,18],39:[1,19],47:[1,20]},{5:[2,29],10:28,15:[2,29],17:16,30:[1,15],32:[1,17],35:[1,18],39:[1,19],47:[1,20]},{5:[2,5],15:[2,5]},{17:29,47:[1,20]},{18:[1,30]},{10:31,15:[2,29],17:16,30:[1,15],32:[1,17],34:[2,29],35:[1,18],39:[1,19],47:[1,20]},{24:[1,32]},{24:[1,33]},{5:[2,41],15:[2,41],16:[2,41],18:[2,41],24:[2,41],26:[2,41],31:[2,41],34:[2,41],38:[2,41],42:[2,41],44:[2,41],46:[2,41]},{14:34,15:[2,9],16:[1,35]},{18:[1,36]},{15:[2,13],16:[1,38],21:37},{15:[1,40],23:39,24:[1,41]},{1:[2,1]},{5:[2,29],10:42,15:[2,29],17:16,30:[1,15],32:[1,17],35:[1,18],39:[1,19],47:[1,20]},{5:[2,4],15:[2,4]},{5:[2,3],15:[2,3]},{5:[2,24],15:[2,24],31:[1,43],34:[2,24],38:[2,24]},{17:48,19:47,24:[1,49],28:44,43:45,45:46,47:[1,20],48:[1,50]},{15:[1,52],33:51,34:[2,31]},{17:48,19:47,24:[1,49],28:55,36:53,41:[1,54],43:45,45:46,47:[1,20],48:[1,50]},{17:48,19:47,24:[1,49],28:55,36:56,41:[1,54],43:45,45:46,47:[1,20],48:[1,50]},{15:[1,57]},{13:58,17:22,47:[1,20]},{19:59,48:[1,50]},{15:[1,60]},{17:61,47:[1,20]},{15:[1,62]},{4:63,7:3,8:4,9:5,11:8,12:[1,6],20:[1,7],22:[1,9]},{17:64,47:[1,20]},{5:[2,2],15:[2,2]},{5:[2,22],15:[2,22],34:[2,22],38:[2,22]},{5:[2,23],15:[2,23],34:[2,23],38:[2,23]},{5:[2,34],15:[2,34],26:[2,34],34:[2,34],38:[2,34],42:[2,34],44:[1,65]},{5:[2,36],15:[2,36],26:[2,36],34:[2,36],38:[2,36],42:[2,36],44:[2,36],46:[1,66]},{5:[2,38],15:[2,38],26:[2,38],34:[2,38],38:[2,38],42:[2,38],44:[2,38],46:[2,38]},{5:[2,39],15:[2,39],26:[2,39],34:[2,39],38:[2,39],42:[2,39],44:[2,39],46:[2,39]},{17:48,19:47,24:[1,49],28:67,43:45,45:46,47:[1,20],48:[1,50]},{5:[2,42],15:[2,42],16:[2,42],26:[2,42],34:[2,42],38:[2,42],42:[2,42],44:[2,42],46:[2,42]},{34:[1,68]},{10:69,15:[2,29],17:16,30:[1,15],32:[1,17],34:[2,29],35:[1,18],39:[1,19],47:[1,20]},{26:[1,70]},{17:48,19:47,24:[1,49],28:71,43:45,45:46,47:[1,20],48:[1,50]},{42:[1,72]},{26:[1,73]},{20:[2,7],22:[2,7]},{14:74,15:[2,9],16:[1,35]},{15:[2,10],16:[2,10]},{22:[2,11]},{15:[2,13],16:[1,38],21:75},{4:76,7:3,8:4,9:5,11:8,12:[1,6],20:[1,7],22:[1,9]},{15:[1,77]},{16:[1,79],25:78,26:[2,18]},{17:48,19:47,24:[1,49],28:80,43:45,45:46,47:[1,20],48:[1,50]},{17:48,19:47,24:[1,49],43:81,45:46,47:[1,20],48:[1,50]},{26:[1,82]},{5:[2,25],15:[2,25],34:[2,25],38:[2,25]},{15:[1,52],33:83,34:[2,31]},{37:[1,84]},{26:[2,32]},{17:48,19:47,24:[1,49],28:85,43:45,45:46,47:[1,20],48:[1,50]},{40:[1,86]},{15:[2,8]},{15:[2,12]},{15:[1,87]},{5:[2,15],15:[2,15],30:[2,15],32:[2,15],35:[2,15],39:[2,15],47:[2,15]},{26:[1,88]},{17:89,47:[1,20]},{5:[2,35],15:[2,35],26:[2,35],34:[2,35],38:[2,35],42:[2,35]},{5:[2,37],15:[2,37],26:[2,37],34:[2,37],38:[2,37],42:[2,37],44:[2,37]},{5:[2,40],15:[2,40],26:[2,40],34:[2,40],38:[2,40],42:[2,40],44:[2,40],46:[2,40]},{34:[2,30]},{5:[2,29],10:90,15:[2,29],17:16,30:[1,15],32:[1,17],34:[2,29],35:[1,18],38:[2,29],39:[1,19],47:[1,20]},{26:[2,33]},{5:[2,29],10:91,15:[2,29],17:16,30:[1,15],32:[1,17],34:[2,29],35:[1,18],38:[2,29],39:[1,19],47:[1,20]},{5:[2,14],15:[2,14],30:[2,14],32:[2,14],35:[2,14],39:[2,14],47:[2,14]},{15:[2,16]},{16:[1,79],25:92,26:[2,18]},{5:[2,27],15:[2,27],34:[2,27],38:[1,93]},{5:[2,28],15:[2,28],34:[2,28],38:[2,28]},{26:[2,17]},{5:[2,29],10:94,15:[2,29],17:16,30:[1,15],32:[1,17],34:[2,29],35:[1,18],38:[2,29],39:[1,19],47:[1,20]},{5:[2,26],15:[2,26],34:[2,26],38:[2,26]}],
defaultActions: {25:[2,1],60:[2,11],71:[2,32],74:[2,8],75:[2,12],83:[2,30],85:[2,33],88:[2,16],92:[2,17]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


  /*Codigo para el analisis de ambito!!!*/
  
var symbolTables = [{ name: '', father: null, vars: {} }];
var scope = 0; 
var symbolTable = symbolTables[scope];

function getScope() {
  return scope;
}

function getFormerScope() {
   scope--;
   symbolTable = symbolTables[scope];
}

function makeNewScope(id) {
   scope++;
   symbolTable.vars[id].symbolTable = symbolTables[scope] =  { name: id, father: symbolTable, vars: {} };
   symbolTable = symbolTables[scope];
   return symbolTable;
}

function findSymbol(x) {
  var f;
  var s = scope;
  do {
    f = symbolTables[s].vars[x];
    s--;
  } while (s >= 0 && !f);
  s++;
  return [f, s];
}

var myCounter = 0;
function newLabel(x) {
  return String(x)+myCounter++;
}

function functionCall(name, arglist) {
  var info = findSymbol(name);
  var s = info[1];
  info = info[0];

  if (!info || info.type != 'FUNC') {
    throw new Error("Can't call '"+name+"' ");
  }
  else if(arglist.length != info.arity) {
    throw new Error("Can't call '"+name+"' with "+arglist.length+
                    " arguments. Expected "+info.arity+" arguments.");
  }
  
  return arglist.join('')+
         unary("call "+":"+findFuncName(findSymbol(name)[0].symbolTable),"jump");
}

  
  
/*********************************************************
 *********************************************************
 *********************************************************
 */
  
  
function buildBlock(cd, vd, pd, c) {
  return {
    type: 'BLOCK',
    DEC_CONSTS: cd,
    DEC_VARS: vd,
    DEC_PROCS: pd,
    content: c
  };
}


/* Fin de la gramatica */

function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = pl0;
exports.Parser = pl0.Parser;
exports.parse = function () { return pl0.parse.apply(pl0, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}