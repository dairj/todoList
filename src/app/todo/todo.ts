// 定义todo数组的数据格式，然后在todo.component.ts中引入后，就可以通过new来创建一个类型数组。
export class Todo {
    id: number;
    title: string;
    complete = false;
    isEdit = false;

    constructor(title) {
        this.title = title;
        this.id = (new Date()).getTime(); // 保证id的唯一性

    }
}
