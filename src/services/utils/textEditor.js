function HighLight(inputString){
    inputString = HighlightCSharpCode(inputString);
    inputString = HighlightRubyCode(inputString);
    inputString = HighlightDockerFile(inputString);
    inputString = HighlightDockerCompose(inputString);
    return inputString;
}
function HighlightCSharpCode(inputString) {
    let csharpRegex = /<C#>([\s\S]*?)<\/C#>/g;
    let highlightedCode = inputString.replace(csharpRegex, (match, p1) => {
        let indentedCode = indentCode(p1);
        let highlightedCSharp = indentedCode.replace(/\b(public|class|void|int)\b/g, '<span class="csharp-keyword">$1</span>');
        highlightedCSharp = highlightedCSharp.replace(/\b(\d+)\b/g, '<span class="csharp-number">$1</span>');
        highlightedCSharp = highlightedCSharp.replace(/(\w+)\s*\(\)/g, '<span class="csharp-method-name">$1</span>()');
        highlightedCSharp = highlightedCSharp.replace(/\/\/(.*)/g, '<span class="csharp-comment">//$1</span>');
        highlightedCSharp = highlightedCSharp.replace(/\n/g, '<br>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
               
        return `<div class="csharp-container">${highlightedCSharp}</div>`;
    });
    return highlightedCode;
}
function HighlightRubyCode(inputString) {
    let rubyRegex = /<Ruby>([\s\S]*?)<\/Ruby>/g;
    let highlightedCode = inputString.replace(rubyRegex, (match, p1) => {
        let highlightedRuby = p1;
        highlightedRuby = highlightedRuby.replace(/(\w+)\.new/g, '<span class="ruby-green">$1</span>.new');

        highlightedRuby = highlightedRuby.replace(/(def|class|return|describe)\s+(\w+)/g,  '<span class="ruby-keyword">$1</span> <span class="ruby-method-name">$2</span>');
        highlightedRuby = highlightedRuby.replace(/\if/g, '<span class="ruby-keyword">if</span>');
        highlightedRuby = highlightedRuby.replace(/\unless/g, '<span class="ruby-keyword">unless</span>');
        highlightedRuby = highlightedRuby.replace(/\b(end|do)\b/g, '<span class="ruby-keyword">$1</span>');
        
        highlightedRuby = highlightedRuby.replace(/\b(StandardError|ArgumentError|Float|new|Numeric|Array|Collection|Client)\b/g, '<span class="ruby-argument">$1</span>');
        highlightedRuby = highlightedRuby.replace(/@\w+/g, (match) => {
            return `<span class="ruby-argument">${match}</span>`;
        });
        highlightedRuby = highlightedRuby.replace(/\b(raise|nil|false|true|private|require|require_relative)\b/g, '<span class="ruby-argument-dark">$1</span>');
        
        highlightedRuby = highlightedRuby.replace(/\b(RSpec|Mongo)\b/g, '<span class="ruby-green">$1</span>');
        
        highlightedRuby = highlightedRuby.replace(/#(.*?)(\r\n|\r|\n)/g, '<span class="ruby-comment">#$1</span>$2');

        highlightedRuby = highlightedRuby.replace(/\b(\d+)\b/g, '<span class="ruby-number">$1</span>');

        highlightedRuby = highlightedRuby.replace(/'(.*?)'/g, (match, content) => {
            const contentWithoutSpan = content.replace(/<span\s[^>]*>(.*?)<\/span>/g, '$1');
            return `<span class="ruby-string">'${contentWithoutSpan}'</span>`;
        });

        highlightedRuby = highlightedRuby.replace(/(puts|\bprint\b|\bp\b|\bgets\b|\bputc\b|\bgets\b)/g, '<span class="ruby-method-name">$1</span>');
        
        return `<div class="ruby-container">${highlightedRuby}</div>`;
    });
    
    return highlightedCode;
}
function HighlightDockerFile(inputString) {
    let dockerRegex = /<DockerFile>([\s\S]*?)<\/DockerFile>/g;
    let highlightedCode = inputString.replace(dockerRegex, (match, p1) => {
        let highlighted = p1;
        
        highlighted = highlighted.replace(/"(.*?)"/g, (match, content) => {
            return `<span class="doc-string">"${content}"</span>`;
        });
        
        highlighted = highlighted.replace(/\bruby\b(?!([^<]*>|[^<>]*<\/span>))/g, '<span class="doc-green">ruby</span>');
        highlighted = highlighted.replace(/\b(FROM|WORKDIR|COPY|RUN|EXPOSE|CMD)\b/g, '<span class="doc-keyword">$1</span>');
        highlighted = highlighted.replace(/(\[|\])/g, '<span class="doc-yellow">$1</span>');
        
        return `<div class="doc-container">${highlighted}</div>`;
    });
    return highlightedCode;
}
function HighlightDockerCompose(inputString) {
    let dockerRegex = /<DockerCompose>([\s\S]*?)<\/DockerCompose>/g;
    let highlightedCode = inputString.replace(dockerRegex, (match, p1) => {
        let highlighted = p1;
        let currentIndent = 0;

        highlighted = highlighted.replace(/(:|-)\s*([^,\n]+)/g, (m, p1, p2, offset, str) => {
            let lineStart = str.lastIndexOf('\n', offset) + 1;
            let line = str.slice(lineStart, offset);
            let leadingSpaces = countLeadingSpaces(line);
            if (p2.includes(':')) {
                currentIndent = leadingSpaces + 2;
                let indent = ' '.repeat(currentIndent);
                var parts = p2.split(':');
                if(parts[1].length > 0){
                    let content = '';
                    for(var i = 1; i < parts.length; i++)
                    {
                        if(i > 1)
                            content+= ':';
                        content += parts[i];
                    }
                    return `${p1}\n${indent}${parts[0]}:<span class="doc-comp-string">${content}</span>`;
                }else {
                    return `${p1}\n${indent}${parts[0]}:<span class="doc-comp-string">${parts[1]}</span>`;    
                }
            } else {
                return `${p1} <span class="doc-comp-string">${p2}</span>`;
            }
        });
        return `<div class="doc-comp-container">${highlighted}</div>`;
    });
    return highlightedCode;
}

//privates
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
    return indentedCode;
}
function countLeadingSpaces(str) {
    return str.match(/^\s*/)[0].length;
}
export const TextFunctions = {
    HighLight,
    
    HighlightCSharpCode,
    HighlightRubyCode,
    HighlightDockerFile
}