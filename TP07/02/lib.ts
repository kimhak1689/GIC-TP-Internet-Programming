class KhmerDateTime {

    second: number;
    date = new Date();

    constructor(date: Date) {
        this.date = date;
    }

    // ===> calculate the date time
    calculateDateTime(): void {
        var second: number;
        second = Date.now() - this.date.getTime();
        second /= 1000;
        this.second = second;
    }

    // ===> get date input
    getDateInput(): string {
        this.calculateDateTime();
        if (this.second < 60) {
            return "មុននេះបន្តិច";
        } else if (this.second < 3600) {
            var minute: number;
            minute = Math.floor(this.second / 60);
            return minute + "នាទីមុន";
        } else if (this.second < 86400) {
            var hour: number;
            hour = Math.floor(this.second / 3600);
            return hour + "ម៉ោងមុន";
        } else if (this.second < 604800) {
            var day: number;
            day = Math.floor(this.second / 86400);
            return day + "ថ្ងៃមុន";
        } else if (this.second < 2419200) {
            var week: number;
            week = Math.floor(this.second / 604800);
            return week + "សប្ដាហ៍មុន";
        } else {
            var month: number;
            month = Math.floor(this.second / 2419200);
            return month + "ខែមុន";
        }
    }
}

export { KhmerDateTime };
