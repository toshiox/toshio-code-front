function HighlightCSharpCode(inputString) {
    let csharpRegex = /<C#>([\s\S]*?)<\/C#>/g;
    let highlightedCode = inputString.replace(csharpRegex, (match, p1) => {
        let indentedCode = indentCode(p1);
        let highlightedCSharp = indentedCode.replace(/\b(public|class|void|int)\b/g, '<span class="csharp-keyword">$1</span>');
        highlightedCSharp = highlightedCSharp.replace(/\b(\d+)\b/g, '<span class="csharp-number">$1</span>');
        highlightedCSharp = highlightedCSharp.replace(/(\w+)\s*\(\)/g, '<span class="csharp-method-name">$1</span>()');
        highlightedCSharp = highlightedCSharp.replace(/\/\/(.*)/g, '<span class="csharp-comment">//$1</span>');
        highlightedCSharp = highlightedCSharp.replace(/\n/g, '<br>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        highlightedCSharp = highlightedCSharp.replace(/v->(\w+)/g, '<span class="csharp-variable">$1</span>');
               
        return `<div class="csharp-container">${highlightedCSharp}</div>`;
    });
    return highlightedCode;
}

export function HighlightRubyCode(inputString) {
    let rubyRegex = /<Ruby>([\s\S]*?)<\/Ruby>/g;
    let highlightedCode = inputString.replace(rubyRegex, (match, p1) => {
        let highlightedRuby = p1;
        highlightedRuby = highlightedRuby.replace(/=/g, '<span class="ruby-variable">=</span>');
        highlightedRuby = highlightedRuby.replace(/\b(def)\s+(\w+)\b/g, '<span class="ruby-keyword">$1</span> <span class="ruby-method-name">$2</span>');
        highlightedRuby = highlightedRuby.replace(/v->(\w+)/g, '<span class="ruby-variable">$1</span>');
        highlightedRuby = highlightedRuby.replace(/#(.*?)(\r\n|\r|\n)/g, '<span class="ruby-comment">#$1</span>$2');
        highlightedRuby = highlightedRuby.replace(/'([^']*)'/g, '<span class="ruby-string">\'$1\'</span>');
        highlightedRuby = highlightedRuby.replace(/(\bputs\b|\bprint\b|\bp\b|\bgets\b|\bputc\b|\bgets\b)/g, '<span class="ruby-method-name">$1</span>');
        highlightedRuby = highlightedRuby.replace(/\b(end)\b/g, '<span class="ruby-keyword">$1</span>');
        highlightedRuby = highlightedRuby.replace(/\b(\d+)\b/g, '<span class="ruby-number">$1</span>');
        highlightedRuby = highlightedRuby.replace(/\.length/g, '<span class="ruby-variable">.length</span>');

        return `<div class="ruby-container">${highlightedRuby}</div>`;
    });
    return highlightedCode.replace(/{/g, '{').replace(/}/g, '}');
}

function indentCode(code) {
    let indentedCode = '';
    let indentationLevel = 0;
    let lines = code.split('\n');
    for (let line of lines) {
        if (line.includes('{')) {
            indentedCode += '\t'.repeat(indentationLevel) + line.trim() + '\n';
            indentationLevel++;
        } else if (line.includes('}')) {
            indentationLevel--;
            indentedCode += '\t'.repeat(indentationLevel) + line.trim() + '\n';
        } else {
            indentedCode += '\t'.repeat(indentationLevel) + line.trim() + '\n';
        }
    }
    console.log(indentedCode);
    return indentedCode;
}

export const TextFunctions = {
    HighlightCSharpCode,
    HighlightRubyCode
}