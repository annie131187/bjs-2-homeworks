class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if(!id) { // если id не существует, то выбрасываем ошибку
            throw new Error("Отсутствует идентификатор!");
        }

        if(this.alarmCollection.some(clock => clock.id === id)) { // если такой id уже существует, то выводим ошибку 
            console.error("Такой звонок уже существует");
            return;
        }

        this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        const lengthBeforeRemove = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id); // после фильтрации получим все звонки с id отличающимся от переданного
            return lengthBeforeRemove !== this.alarmCollection.length; // если что-то удалилось, то длины отличаются - возвращает true, если нет - false
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    }

    start() {
        if (this.timerId) { // если будильник уже запущен - timerId уже существует, значит будильник уже работает
            return;
        }

        const checkClock = (clock) => {
            if(this.getCurrentFormattedTime() === clock.time) {
                clock.callback();
            }
        }

        this.timerId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                checkClock(alarm);
            })
        }, 1000); // результат интервала записываем в this.timerId
    }

    stop () {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    printAlarms() {
        this.alarmCollection.forEach(alarm => console.log(`id: ${alarm.id} time: ${alarm.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

const clock = new AlarmClock;
console.log(clock);
console.log(clock.addClock("16:45", () => console.log("Пора вставать!"), 1));
console.log(clock.addClock("16:50", () => console.log("Пора вставать!"), 2));
console.log(clock.addClock("16:55", () => console.log("Пора вставать!"), 3));

