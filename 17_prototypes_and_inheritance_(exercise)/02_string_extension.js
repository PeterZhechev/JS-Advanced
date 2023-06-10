(function stringExtension() {

    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return str + this.toString();
        } else {
            return this.toString();
        }
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return this.toString() + str;
        } else {
            return this.toString();
        }
    }

    String.prototype.isEmpty = function () {
        if (this.toString().length === 0) {
            return true;
        } else {
            return false;
        }
    }

    String.prototype.truncate = function (n) {
        if (n < 3) {
            return '.'.repeat(n);
        }

        if (this.toString().length <= n) {
            return this.toString();
        }

        if (this.toString().substring(0, n - 2).lastIndexOf(' ') !== -1) {
            return this.toString().substring(0, this.toString().substring(0, n - 2).lastIndexOf(' ')) + '...';
        } else {
            return this.toString().substring(0, n - 3) + '...';
        }
    }

    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            if (str.lastIndexOf(`{${i}}`) === -1) break;
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    }
})();


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');

