export class StringBuffer {
    text: string = '';

    append(text: any) {
        this.text += text;
    }

    toString() {
        return this.text;
    }
}