"use strict";
class StringBuffer {
    constructor() {
        this.text = '';
    }
    append(text) {
        this.text += text;
    }
    toString() {
        return this.text;
    }
}
exports.StringBuffer = StringBuffer;
//# sourceMappingURL=StringBuffer.js.map