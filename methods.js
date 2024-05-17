//Class for necessary alerts and pop up
export class Pop {

    constructor(name, age, message) {
        this.name = name;
        this.age = age;
        this.message = message;
    }

    greet() {
        var time = [
            'Good Morning',
            'Good Day',
            'Good Afternoon',
            'Good Night'
        ]
        var tm_rm = Math.round(Math.random() * time.length);

        return `${time[tm_rm]} ${this.name}.`;
    }

    welcome() {
        return `Hello ${this.name}, You're Highly Welcome.`;
    }

    introduce() {
        return `Hi, My name is ${this.name}, I am ${this.age} years old.`;
    }

    popMsg() {
        return this.message;
    }

    ask() {
        return 
    }
    static create(name, age, message) {
        return new Pop(name, age, message);
    }
}


//Class for Text and Formatting
export class Txt{

    constructor(text) {
        this.text = text;
    }
    
    caps() {
        return this.text.style.textTransform = 'uppercase';
    }

    lows() {
       return this.text.style.textTransform = 'lowercase';
    }

    senCaps() {
        var sentences = this.text.split('. ');
        sentences = sentences.map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase());
        return sentences.join('. ');
    }

    txtColor(anyColor) {
        return this.text.style.color = anyColor;
    }

    align(anyAlignment) {
        this.text.style.textAlign = anyAlignment;
    }

    cenAlign() {
        return this.text.style.textAlign = 'center';
    }

    leftAlign() {
        return this.text.style.textAlign = 'left';
    }

    rightAlign() {
        return this.text.style.textAlign = 'right';
    }

    decorate(anyDecoration) {
        return this.text.style.textDecoration = anyDecoration;
    }

    underline() {
        return this.text.style.textDecoration = 'underline';
    }

    dashed() {
        return this.text.style.textDecoration = 'dashed';
    }

    decNone() {
        return this.text.style.textDecoration = 'none';
    }

    txtTransform(anyTransform) {
        return this.text.style.textTransform = anyTransform;
    }

    transNone() {
        return this.text.style.textTransform = 'none';
    }

    txtOverflow(anyOverflow) {
        return this.text.style.textOverflow = anyOverflow;
    }

    wrdBreak(anyValue) {
        return this.text.style.wordBreak = anyValue;
    }

    breakAll() {
        return this.text.style.wordBreak = 'break-all';
    }

    keepAll() {
        return this.text.style.wordBreak = 'keep-all';
    }

    wrdWrap(anyWrap) {
        return this.text.style.wordWrap = anyWrap;
    }

    breakWord() {
        return this.text.style.wordWrap ='break-word';
    }

    lettSpace(anyValue) {
        return this.text.style.letterSpacing = anyValue;
    }

    wrdSpace(anyValue) {
        return this.text.style.wordSpacing = anyValue;
    }


    shadow(allValues) {
        return this.text.style.textShadow = allValues;
    }

    rendering(anyRendering) {
        return this.text.style.textRendering = anyRendering;
    }

    indent(anyIndent) {
        return this.text.style.textIndent = anyIndent;
    }

    size(anySize) {
        return this.text.style.fontSize = anySize;
    }

    weight(anyWeight) {
        return this.text.style.fontWeight = anyWeight;
    }

    bold() {
        return this.text.style.fontWeight = 'bold';
    }

    bolder() {
        return this.text.style.fontWeight = 'bolder';
    }

    lighter() {
        return this.text.style.fontWeight = 'lighter';
    }

    txtStyle(anyStyle) {
        return this.text.style.fontStyle = anyStyle;
    }

    italic() {
        return this.text.style.fontStyle = 'italic';
    }

    oblique() {
        return this.text.style.fontStyle = 'oblique';
    }

    medium() {
        this.text.style.fontSize = 'medium';
    }

    large() {
        return this.text.style.fontSize = 'large';
    }

    larger() {
        return this.text.style.fontSize = 'larger';
    }

    xLarge() {
        return this.text.style.fontSize = 'x-large';
    }
    
    xxLarge() {
        return this.text.style.fontSize = 'xx-large';
    }

    small() {
        return this.text.style.fontSize = 'small';
    }

    smaller() {
        return this.text.style.fontSize = 'smaller';
    }

    xSmall() {
        return this.text.style.fontSize = 'x-small';
    }

    xxSmall() {
        return this.text.style.fontSize = 'xx-small';
    }

    family(anyFamily) {
        return this.text.style.fontFamily = anyFamily;
    }

    font(anyValue) {
        return this.text.style.font = anyValue;
    }

    variant(anyVariant) {
        return this.text.style.fontVariant = anyVariant;
    }
    
    stretch(anyValue) {
        return this.text.style.fontStretch = anyValue;
    }

    kerning(anyValue) {
        return this.text.style.fontKerning = anyValue;
    }

    userSel(anyValue) {
        return this.text.style.userSelect = anyValue;
    }

    selTxt() {
        return this.text.style.userSelect = 'text';
    }

    noSel() {
        return this.text.style.userSelect = 'none';
    }

    //for factory function
    static create(text) {
        return new Txt(text);
    }
    
}


//Class for Coloring    
export class Color {

    constructor(anyElement) {
        this.anyElement = anyElement;
    }

    txtColor(anyColor) {
        return this.anyElement.style.color = anyColor;
    }

    bkgColor(anyColor) {
        return this.anyElement.style.backgroundColor = anyColor;
    }

    bdColor(anyColor) {
        return this.anyElement.style.borderColor = anyColor;
    }

    linGrad(allValues) {
        return this.anyElement.style.backgroundColor = '-linear-gradient(' + allValues + ')';
    } 
    
    radGrad(allValues) {
        return this.anyElement.style.background=`radial-gradient( ${allValues} )`
    }

    static create(anyElement) {
        return new Color(anyElement);
    }
}


//Class for Border
export class Bd{
    constructor(anyElement) {
        this.anyElement = anyElement;
    }

    bd(allValues) {
        return this.anyElement.style.border = allValues;
    }

    bdColor(anyColor) {
        return this.anyElement.style.borderColor = anyColor;
    }

    bdRadius(anyNumber) {
        return this.anyElement.style.borderRadius = anyNumber;
    }

    bdCircle() {
        return this.anyElement.style.borderRadius = '100%';
    }

    bdBlockStart(anyValue) {
        return this.anyElement.style.borderBlockStart = anyValue;
    }

    bdBlockEnd(anyValue) {
        return this.anyElement.style.borderBlockEnd = anyValue;
    }

    bdInlineStart(anyValue) {
        return this.anyElement.style.borderInlineStart = anyValue;
    }

    bdInlineEnd(anyValue) {
        return this.anyElement.style.borderInlineEnd = anyValue;
    }

    bdWidth(anyNumber) {
        return this.anyElement.style.borderWidth = anyNumber;
    }

    bdStyle(anyValue) {
        return this.anyElement.style.borderStyle = anyValue;
    }

    bdTop(anyValue) {
        return this.anyElement.style.borderTop = anyValue;
    }

    bdBottom(anyValue) {
        return this.anyElement.style.borderBottom = anyValue;
    }

    bdLeft(anyValue) {
        return this.anyElement.style.borderLeft = anyValue;
    }

    bdRight(anyValue) {
        return this.anyElement.style.borderRight = anyValue;
    }

    bdCollapse(anyValue) {
        return this.anyElement.style.borderCollapse = anyValue;
    }

    bdBlock(anyValue) {
        return this.anyElement.style.borderBlock = anyValue;
    }

    bdInline(anyValue) {
        return this.anyElement.style.borderInline = anyValue;
    }

    bdShadow(allValues) {
        return this.anyElement.style.boxShadow = allValues;
    }

    bdImage(anyValue) {
        return this.anyElement.style.borderImage = anyValue;
    }

    static create(anyElement) {
        return new Bd(anyElement);
    }
}


//Class for Background
export class Bkg{
    constructor(element) {
        this.element = element;
    }

    bkgColor(anyValue) {
        return this.element.style.backgroundColor = anyValue;
    }

    bkg(anyValue) {
        return this.element.style.background = anyValue;
    }

    bkgImage(anyValue) {
        return this.element.style.backgroundImage = anyValue;
    }

    bkgAttach(anyValue) {
        return this.element.style.backgroundAttachment = anyValue;
    }

    bkgPos(anyValue) {
        return this.element.style.backgroundPosition = anyValue;
    }

    bkgSize(anyValue) {
        return this.element.style.backgroundSize = anyValue;
    }

    bkgRpt(anyValue) {
        return this.element.style.backgroundRepeat = anyValue;
    }

    bkgClip(anyValue) {
        return this.element.style.backgroundClip = anyValue;
    }

    dropFilter(anyValue) {
        return this.element.style.backDropFilter = anyValue;
    }

    linGrad(allValues) {
        return this.element.style.background = `linear-gradient(  ${allValues} )`;
    }
    
    radGrad(allValues) {
        return this.element.style.background=`radial-gradient( ${allValues} )`
    }

    txtColor(anyColor) {
        return this.element.style.color = anyColor;
    }

    width(anyValue) {
        return this.element.style.width = anyValue;
    }

    maxWidth(anyValue) {
        return this.element.style.maxWidth = anyValue;
    }

    minWidth(anyValue) {
        return this.element.style.minWidth = anyValue;
    }

    height(anyValue) {
        return this.element.style.height = anyValue;
    }

    maxHeight(anyValue) {
        return this.element.style.maxHeight = anyValue;
    }

    minHeight(anyValue) {
        return this.element.style.minHeight = anyValue;
    }

    display(anyValue) {
        return this.element.style.display = anyValue;
    }

    bodyGrid() {
        return this.element.style.display = 'grid';
    }

    bodyFlex() {
        return this.element.style.display = 'flex';
    }

    bodyBlock() {
        return this.element.style.display = 'block';
    }

    bodyInline() {
        return this.element.style.display = 'inline';
    }

    inlineFlex() {
        return this.element.style.display = 'inline-flex';
    }

    inlineBlock() {
        return this.element.style.display = 'inline-block';
    }

    bodyContent() {
        return this.element.style.display = 'content';
    }

    inlineTable() {
        return this.element.style.display = 'inline-table';
    }

    padding(anyValue) {
        return this.element.style.padding = anyValue;
    }

    padTop(anyValue) {
        return this.element.style.paddingTop = anyValue;
    }

    padBottom(anyValue) {
        return this.element.style.paddingBottom = anyValue;
    }

    padLeft(anyValue) {
        return this.element.style.paddingLeft = anyValue;
    }

    padRight(anyValue) {
        return this.element.style.paddingRight = anyValue;
    }

    padBlock(anyValue) {
        return this.element.style.paddingBlock = anyValue;
    }

    padInline(anyValue) {
        return this.element.style.paddingInline = anyValue;
    }

    padBlockStart(anyValue) {
        return this.element.style.paddingBlockStart = anyValue;
    }

    padBlockEnd(anyValue) {
        return this.element.style.paddingBlockEnd = anyValue;
    }

    padInlineStart(anyValue) {
        return this.element.style.paddingInlineStart = anyValue;
    }

    padInlineEnd(anyValue) {
        return this.element.style.paddingInlineEnd = anyValue;
    }

    margin(anyValue) {
        return this.element.style.margin = anyValue;
    }

    marginTop(anyValue) {
        return this.element.style.marginTop = anyValue;
    }

    marginBottom(anyValue) {
        return this.element.style.marginBottom = anyValue;
    }

    marginLeft(anyValue) {
        return this.element.style.marginLeft = anyValue;
    }

    marginRight(anyValue) {
        return this.element.style.marginRight = anyValue;
    }

    marginBlock(anyValue) {
        return this.element.style.marginBlock = anyValue;
    }

    marginInline(anyValue) {
        return this.element.style.marginInline = anyValue;
    }

    marginBlockStart(anyValue) {
        return this.element.style.marginBlockStart = anyValue;
    }

    marginBlockEnd(anyValue) {
        return this.element.style.marginBlockEnd = anyValue;
    }

    marginInlineStart(anyValue) {
        return this.element.style.marginInlineStart = anyValue;
    }

    marginInlineEnd(anyValue) {
        return this.element.style.marginInlineEnd = anyValue;
    }

    style(allValues) {
        this.element.style = allValues;
    }

    userSel(anyValue) {
        return this.element.style.userSelect = anyValue;
    }

    selTxt() {
        return this.element.style.userSelect = 'text';
    }

    noSel() {
        return this.element.style.userSelect = 'none';
    }


    static create(element) {
        return new Bkg(element);
    }
}


//Class for Math 
export class Mth{

    constructor(element) {
        this.element = element;
    }

    merge(...anyElement) {
        return this.element.concat(anyElement);
    }

    static sum(...numbers) {
        return numbers.reduce((total, num) => num + total);
    }

    static prod(...numbers) {
        return numbers.reduce((total, num) => num * total);
    }

    static diff(...numbers) {
        return numbers.reduce((total, num) => num - total );
    }

    static solve(...expression) {
        try {
            return expression.reduce((...expression) => eval(expression));
        }
        catch (error) {
            return 'Please this expression is invalid or it\'s mathematical'
        }
    }

    // static create(element) {
    //     return new Mth(element);
    // }

    static create(...element) {
        return element.reduce((element) => new Mth (element));
    }
}


//Class for Manupulating the DOM
export class html{
    constructor(anyElement) {
        this.anyElement = anyElement;
    }

    static getBody() {
        return document.body;
    }

    static getId(anyId) {
        return document.getElementById(anyId);
    }

    static getClass(anyClass) {
        return document.getElementsByClassName(anyClass);
    }

    static getTag(anyTag) {
        return document.getElementsByTagName(anyTag);
    }

    static getName(anyName) {
        return document.getElementsByName(anyName);
    }

    static getSel(anySelection) {
        return document.getSelection(anySelection);
    }

    type(anyValue) {
        return this.anyElement.type = anyValue;
    }

    id(anyValue) {
        return this.anyElement.id = anyValue;
    }
    
    addClass(anyValue) {
        return this.anyElement.classList.add(anyValue);
    }

    remClass(anyValue) {
        return this.anyElement.classList.remove(anyValue);
    }

    repClass(anyValue) {
        return this.anyElement.classList.replace(anyValue);
    }

    contClass(anyValue) {
        return this.anyElement.classList.contain(anyValue);
    }

    build(allValues) {
        return this.anyElement.innerHTML = allValues;
    }

    construct(allValues) {
        return this.anyElement.innerHTML += allValues;
    }

    static create(anyElement) {
        return new html(anyElement);
    }
}