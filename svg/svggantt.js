// JavaScript source code

class SvgGanttItem {

}

class SvgGantt {

    constructor(selector) {
        this.selector = selector;
        this.view = "month";
        this.data = [];
    }

    setView(view) {
        this.view = view;
    }

    addItem(data, show) {
        var line = null;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].title == data.title) {
                line = this.data[i];
                break;
            }
        }
        if (line == null)
            line = { title: data.title, items: [] };

        if (show)
            this.showItem();
    }

    createItem(data) {
        return {
            x: 0,
            y: 0,
            from: data.from,
            to: data.to,
            label: data.label
        }
    }

    showItem(item) {

    }
}

var sgantt = new SvgGantt(".chart");

console.log(sgantt.test());