SyntaxHighlighter.brushes.Smalltalk = function()
{
var keywords = 'true false nil self super thisContext';

this.regexList = [
{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'comments' }, // comments
{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString, css: 'string' }, // string
{ regex: /\b\d+(\.\d+)?\b/gi, css: 'value' }, // numbers
{ regex: /[$#]\w+/gi, css: 'constants'}, // characters, symbols
{ regex: /:\w+/g, css: 'variable' }, // block paramaters
{ regex: /\w+:/g, css: 'functions'}, // keyword messages
{ regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' } // reserved words
];
};
 
SyntaxHighlighter.brushes.Smalltalk.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Smalltalk.aliases = ['Smalltalk', 'smalltalk', 'st'];