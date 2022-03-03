"use strict";
exports.__esModule = true;
exports.KhmerDateTime = void 0;

var KhmerDateTime = /** @class */ (function () {
    function KhmerDateTime(date) {
        this.date = new Date();
        this.date = date;
    }
    KhmerDateTime.prototype.calculateDateTime = function () {
        var second;
        second = Date.now() - this.date.getTime();
        second /= 1000;
        this.second = second;
    };
    KhmerDateTime.prototype.getDate = function () {
        this.calculateDateTime();
        if (this.second < 60) {
            return "មុននេះបន្តិច";
        }
        else if (this.second < 3600) {
            var minute;
            minute = Math.floor(this.second / 60);
            return minute + "នាទីមុន";
        }
        else if (this.second < 86400) {
            var hour;
            hour = Math.floor(this.second / 3600);
            return hour + "ម៉ោងមុន";
        }
        else if (this.second < 604800) {
            var day;
            day = Math.floor(this.second / 86400);
            return day + "ថ្ងៃមុន";
        }
        else if (this.second < 2419200) {
            var week;
            week = Math.floor(this.second / 604800);
            return week + "សប្ដាហ៍មុន";
        }
        else {
            var month;
            month = Math.floor(this.second / 2419200);
            return month + "ខែមុន";
        }
    };
    return KhmerDateTime;
}());

exports.KhmerDateTime = KhmerDateTime;
