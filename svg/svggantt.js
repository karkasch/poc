// JavaScript source code

class SvgGanttItem {

}

class SvgGantt {

    constructor(data) {
        this.selector = data.selector;
        this.view = data.view || "month";
        this.data = [];

        var d = new Date();
        this.startDate = new Date(d.getFullYear(), d.getMonth() - 3, 1);

        this.adjustViewbox();
        console.log("this", this);

        $(window).resize(() => {
            this.adjustViewbox();
        });
    }

    adjustViewbox() {
        var svg = $(this.selector);
        var parent = 
        $(this.selector).attr("viewbox", `0 0 ${svg.parent().width()} ${svg.parent().height()}`)

    }

    setView(view) {
        this.view = view;
    }

    addItem(data, show) {
        var line = null;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].label == data.label) {
                line = this.data[i];
                break;
            }
        }
        if (line == null) {
            line = { label: data.label, items: [] };
            this.data.push(line);
        }

        line.items.push(data);        
    }

    createItem(data) {
        return {
            x: data.x,
            y: data.y,
            startDate: data.startDate,
            endDate: data.endDate,
            label: data.label
        }
    }

    getX(date) {

    }

    showItem(item) {

    }

    render() {
        $(this.selector).empty();

        var html = "";        
        for (var i = 0; i < this.data.length; i++) {
            var line = this.data[i];
            for (var j = 0; j < line.items.length; j++) {
                var g = line.items[j];
                html += `<svg x="${g.x}" y="${(i * 50)}">
	<rect width="100" height="30"></rect>
    <text x="10" y="20" fill="#ffffff" stroke-width="0.2" font-size="13px">Shop visit</text>
</svg>`;
            }
        }

        $(this.selector).find(".chart-content-svg").html(html);
    }
}



var sgantt = new SvgGantt({ selector: ".chart" });

for (var i = 0; i < 1500; i += 2) {
    sgantt.addItem({ label: "Eng 1", x: i * 55, y: 30 });
} 
for (var i = 0; i < 1500; i += 2) {
    sgantt.addItem({ label: "Eng 2", x: i * 55, y: 30 });
}
for (var i = 0; i < 1500; i += 2) {
    sgantt.addItem({ label: "Eng 3", x: i * 55, y: 30 });
}
for (var i = 0; i < 1500; i += 2) {
    sgantt.addItem({ label: "Eng 4", x: i * 55, y: 30 });
}
for (var i = 0; i < 1500; i += 2) {
    sgantt.addItem({ label: "Eng 5", x: i * 55, y: 30 });
}
for (var i = 0; i < 1500; i += 2) {
    sgantt.addItem({ label: "Eng 6", x: i * 55, y: 30 });
}

sgantt.render();