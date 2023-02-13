export function makeProc (real: number, max: number): string {
    if (!containsOnlyNumbers(real)) {
      return '{Неизвестно}'
    }
    let countWithRound = Math.round((real/max) * 100) / 100
    return countWithRound + '%'
  }
  
export function makeDayCount (dayOfRegister: string): string {
    return dateDiffInDaysFromString(new Date(), dayOfRegister);
  }
  
  function dateDiffInDays(dateTo: Date, dateFrom: Date): string {
    let difInTime = dateTo.getTime() - dateFrom.getTime()
    let difInDays = difInTime / (1000 * 3600 * 24) 
    return String(Math.round(difInDays))
  }

  function dateDiffInDaysFromString(dateTo: Date, dateFrom: string): string {
    try {
        var dateFromString = dateSpliter(dateFrom)
        let difInTime = dateTo.getTime() - dateFromString.getTime()
        let difInDays = difInTime / (1000 * 3600 * 24) 
        if (isNaN(difInDays)) {
          throw new Error("Неверный формат даты. Необходимо 'DD.MM.YYYY'")
        }
        return String(Math.round(difInDays))
    } catch (e){
        console.log(e)
        return '{Нет данных}'
    }
  }
  
  function dateSpliter(dateInString: string): Date {
      try {
        const res = new Date(dateInString ? dateInString.split('.').reverse().join('-') : '')
        console.log("input date: " + dateInString + " convert: " + res)
        if (!isValidDate(res)) {
          throw new Error("Неверный формат даты. Необходимо 'DD.MM.YYYY'")
        }
        return res
      } catch (e) {
        throw e
      }
  }

  export function isValidDate(d): boolean {
    return d instanceof Date && !isNaN(d);
  }
  

  export function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }