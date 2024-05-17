

class html {
    constructor(obj) {
        this.obj = obj;
        this.ast = this.convertToObjectAST();
        this.create();
    }

    convertToObjectAST(obj = this.obj, allowGenTagAndTagInContent = false) {
        if (typeof obj !== 'object') {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(item => this.convertToObjectAST(item));
        }

        const { genTag, tag, content, genTagAttrs, ...rest } = obj;

        if (!allowGenTagAndTagInContent && content && (genTag && tag)) {
            throw Error("Cannot use both 'genTag' or 'tag' in the same object section.");
        }

        if (content) {
            return {
                ...rest,
                genTagAttrs,
                content: this.convertToObjectAST(content, true)
            };
        }

        return {
            ...rest,
            genTagAttrs
        };
    }

    generateContent(contentObj) {
        if (typeof contentObj !== 'object') {
            return contentObj;
        }

        if (Array.isArray(contentObj)) {
            return contentObj.map(item => this.generateContent(item)).join('');
        }

        let content = '';
        if (contentObj.tag) {
            const tagAttrs = this.getAttr(contentObj);
            const tagContent = contentObj.content ? this.generateContent(contentObj.content) : '';
            let genTagAttrs = '';

            if (contentObj.genTagAttrs) {
                genTagAttrs = this.getAttr(contentObj.genTagAttrs);
            }

            const openingTag = contentObj.genTag ? `<${contentObj.genTag} ${genTagAttrs}>` : '';
            const closingTag = contentObj.genTag ? `</${contentObj.genTag}>` : '';
            const contentAttrs = this.getAttr(contentObj.Attrs); // Add this line

            content = `${openingTag}<${contentObj.tag} ${tagAttrs} ${contentAttrs}>${tagContent}</${contentObj.tag}>${closingTag}`;
        } else {
            content = contentObj.content || '';
        }

        return content;
    }

    construct() {
        let element = '';
        const genTag = this.obj.genTag || '';
        const genTagAttrs = this.getAttr(this.obj.genTagAttrs);

        if (genTag) {
            element = `<${genTag} ${genTagAttrs}>${this.generateContent(this.obj.content)}</${genTag}>`;
        } else if (this.obj.tag === 'input') {
            const attrs = this.getAttr();
            element = `<input ${attrs}>`;
        } else if (this.obj.tag === 'textarea') {
            const attrs = this.getAttr();
            element = `<textarea ${attrs}>${this.obj.content}</textarea>`;
        } else if (this.obj.tag) {
            element = `<${this.obj.tag} ${this.getAttr()}>${this.generateContent(this.obj.content)}</${this.obj.tag}>`;
        } else {
            throw new Error('Either "genTag" or "tag" property must be specified.');
        }

        return element;
    }

    constructContent(contentObj) {
        const tagAttrs = this.getAttr(contentObj);
        const contentAttrs = this.getAttr(contentObj.Attrs);
        return `<${contentObj.tag} ${tagAttrs} ${contentAttrs}>${contentObj.content || ''}</${contentObj.tag}>`;
    }



    
    
    getAttr() {
        const attributes = ['class', 'id', 'alt', 'src', 'type', 'name', 'value', 'action', 'onclick', 'onsubmit', 'placeholder'];
        return attributes.map(attr => this.obj[attr] ? `${attr}='${this.obj[attr]}'` : '').join(' ');
    }
    
  
    style() {
        const selector = this.obj.styleTag || `#${this.obj.id}` || `.${this.obj.class}` || this.obj.tag;
        const styling = this.obj.styling ? this.obj.styling : '';
        return `${selector} { ${styling} }`;
    }
    
    script() {
        return 'console.log("Hello, world!");';
    }
  
    create() {
        const contentElement = this.construct();
        const outputCSS = this.style();
        const outputJS = this.script();
        var qliqDiv = document.createElement('div');
        qliqDiv.id = 'qliq-Div';
        qliqDiv.innerHTML =contentElement

        const styleTag = document.createElement('style');
        styleTag.textContent = outputCSS;
    
        const scriptTag = document.createElement('script');
        scriptTag.textContent = outputJS;
    
        // document.body.innerHTML += contentElement;
        document.body.append(qliqDiv, styleTag, scriptTag);
    }
    

    static build(...obj) {
        return obj.map(Objt => new html(Objt));
    }
}
  
  // Usage
//   const paragraph = {
//     genTag: 'section',
//     genTagAttrs: {
//         id: 'general',
//         class:'genClass'
//     },
//     content: [
//         {
//             tag: 'p',
//             Attrs: {
//                 id: 'paragraph',
//                 class:'para-class'
//             },
//             id: 'upperDiv',
//             styleTag: 'p#upperDiv',
//             content: {
//                 tag: 'span',
//                 content: 'Hello'
//             },
//             styling: 'color: blue; text-transform: uppercase;'
//         },
//         {
//             tag: 'p',
//             content: 'This is a paragraph',
//             styling: 'color: red;'
//         },
//         {
//             tag: 'div',
//             content: [
//                 {
//                     tag: 'p',
//                     content: 'Nested paragraph',
//                     styling: 'font-style: italic;'
//                 },
//                 {
//                     tag: 'span',
//                     content: 'Nested span'
//                 }
//             ]
//         }
//       ],
// };
// Usage
const paragraph = {
    genTag: 'section',
    genTagAttrs: {
        id: 'section-id',
        class: 'section-class'
    },
    content: [
        {
            tag: 'p',
            Attrs: { // Use Attrs here
                id: 'para',
                class: 'para-class'
            },
            content: 'This is a paragraph'
        },
        {
            tag: 'input',
            type: 'text',
            placeholder: 'This is a text input',
            Attrs: {
                id: 'input-Id'
            }
        }
    ]
};

const header = { ...paragraph, class: 'yy', genTag: 'header', styleTag:'', content:'This is a header', styling: 'color: blue;' };
const executor = html.build(header, paragraph);