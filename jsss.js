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
    
        const { genTag, genTagAttrs, tag, content, Attrs, ...rest } = obj;
    
        if (!allowGenTagAndTagInContent && content && (genTag && tag)) {
            throw Error("Cannot use both 'genTag' or 'tag' in the a content.");
        }
    
        if (content) {
            return {
                ...rest,
                tag,
                Attrs,
                content: this.convertToObjectAST(content, true)
            };
        }
    
        return {
            ...rest,
            genTag,
            genTagAttrs,
            Attrs
        };
    }

    generateAttributes(attr) {
        if (!attr) {
            return '';
        }
        return Object.entries(attr).map(([key, value]) => `${key}="${value}"`).join(' ');
    }

    generateContent(cont) {
        if (typeof cont === 'string') {
            return cont;
        }
        else if (Array.isArray(cont)) {
            return cont.map(item => this.generateContent(item)).join('');
        }
        else if (typeof cont === 'object') {
            const attributes = this.generateAttributes(cont.Attrs);
            const innerContent = this.generateContent(cont.content);
            return `<${cont.tag} ${attributes}>${innerContent}</${cont.tag}>`;
        }
        // else {
        //     throw new Error('Invalid content format.');
        // }
    }

    constructSingleTag(tag, attrs) {
        const attributes = this.generateAttributes(attrs);
        return `<${tag} ${attributes}>`;
    }

    construct() {
        if (this.obj.genTag) {
            const genTagAttrs = this.generateAttributes(this.obj.genTagAttrs);
            const content = this.generateContent(this.obj.content);
            return `<${this.obj.genTag} ${genTagAttrs}>${content}</${this.obj.genTag}>`;
        }
        else if (this.obj.tag === 'input') {
            return this.constructSingleTag(this.obj.tag, this.obj.Attrs);
        }
        else if (this.obj.tag === 'textarea') {
            return this.constructSingleTag(this.obj.tag, this.obj.Attrs) + `</${this.obj.tag}>`;
        }
        else if (this.obj.tag) {
            const attributes = this.generateAttributes(this.obj.Attrs);
            const content = this.generateContent(this.obj.content);
            return `<${this.obj.tag} ${attributes}>${content}</${this.obj.tag}>`;
        }
        else {
            throw new Error('Either "genTag" or "tag" property must be specified.');
        }
    }

    style() {
        let selector = '';

        if (this.obj.styleTag) {
            selector = this.obj.styleTag;
        } else if (this.obj.id) {
            selector = `#${this.obj.id}`;
        } else if (this.obj.class) {
            selector = `.${this.obj.class}`;
        } else if (this.obj.genTag) {
            selector = this.obj.genTag;
        } else if (this.obj.tag) {
            selector = this.obj.tag;
        }

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
        const qliqDiv = document.createElement('div');
        qliqDiv.id = 'qliq-Div';
        qliqDiv.innerHTML = contentElement;

        const styleTag = document.createElement('style');
        styleTag.textContent = outputCSS;

        const scriptTag = document.createElement('script');
        scriptTag.textContent = outputJS;

        document.body.append(qliqDiv, styleTag, scriptTag);
    }

    static build(...obj) {
        return obj.map(Objt => new html(Objt));
    }
}

// Usage
const header = {
    genTag: 'form',
    genTagAttrs: {
        onsubmit: 'return validate()',
        action:'http://www.instagram.com',
        class: 'header-class',
        id: 'header-id',
    },
    content: [
        {
            tag: 'h1',
            Attrs: {
                class: 'title-class'
            },
            content: 'Header Title'
        },
        {
            tag: 'p',
            Attrs: {
                class: 'paragraph',
                id:"para"
            },
            content: 'Header Content',
            styling:'color:blue;'
        },
        {
            tag: 'input',
            Attrs: {
                class: 'input',
                type: 'number',
                placeholder: 'search Something...'
            },
            styleTag:'input.input'
        }
    ]
};

const inputElement = {
    genTag: 'input',
    genTagAttrs: {
        type: 'text',
        placeholder: 'Enter your name',
        class: 'input-class',
        id:'inp'
    },
    styleTag:'input#inp',
    styling:'border: 5px solid grey; border-radius: 10px;'
};

const textareaElement = {
    genTag: 'textarea',
    genTagAttrs: {
        rows: '4',
        cols: '50',
        placeholder: 'Enter your message',
        class: 'textarea-class'
    },
    content: 'This is some initial content'
};

const elements = [header, inputElement, textareaElement];
const executor = html.build(...elements);
